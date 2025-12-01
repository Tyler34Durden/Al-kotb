import { useQuery } from '@tanstack/react-query';
import { strapiFetch, strapiImageUrl, STRAPI_URL } from '../lib/strapi';

// Generic helpers to parse Strapi list responses
function mapCollectionItems(res: any) {
  if (!res) return [];
  // If API returned a raw array
  if (Array.isArray(res)) return res;

  // If API returned { data: [...] }
  if (res.data && Array.isArray(res.data)) {
    return res.data.map((d: any) => {
      // d may contain an `attributes` object (typical Strapi shape)
      // or may already contain the fields directly (some exports or plugins)
      const fields = d.attributes && Object.keys(d.attributes).length ? d.attributes : (() => {
        // If the item already has fields on first level (e.g., title, slug), use them
        const copy: any = { ...d };
        // remove internal keys we don't want duplicated
        delete copy.attributes;
        delete copy.id;
        return copy;
      })();
      return { id: d.id, ...fields };
    });
  }

  // If API returned a single object with value array (some plugins return { value: [...] })
  if (res.value && Array.isArray(res.value)) return res.value;

  // Otherwise, return an empty list
  return [];
}

export function useMediaFiles() {
  return useQuery({
    queryKey: ['mediaFiles'],
    queryFn: async () => {
      const res = await strapiFetch('/api/upload/files');
      return Array.isArray(res) ? res : res;
    },
    staleTime: 1000 * 60 * 2,
  });
}

export function useCatalogues() {
  return useQuery({
    queryKey: ['catalogues'],
    queryFn: async () => {
      const candidates = ['/api/catalogues', '/api/catalogues?populate=*'];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          return items.map((it: any) => ({
            id: it.id,
            title: it.title || it.name || it.attributes?.title,
            category: it.category || it.attributes?.category || (it.categories && it.categories[0]?.name),
            pages: it.pages || it.attributes?.pages || undefined,
            image: strapiImageUrl(it.pdf || it.image || it.attributes?.image || it.attributes?.thumbnail)
          }));
        } catch (err: any) {
          lastErr = err;
        }
      }
      throw new Error(lastErr?.message || 'Failed to fetch catalogues');
    },
    staleTime: 1000 * 60 * 2,
  });
}

export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const candidates = ['/api/news', '/api/news?populate=*&pagination[pageSize]=20'];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          return items.map((it: any) => ({
            id: it.id,
            title: it.title || it.attributes?.title,
            slug: it.slug || it.attributes?.slug || undefined,
            date: it.date || it.attributes?.date,
            short_description: it.short_description || it.attributes?.short_description || it.excerpt || it.attributes?.excerpt || it.attributes?.summary,
            excerpt: it.excerpt || it.attributes?.excerpt || it.attributes?.summary || it.short_description || it.attributes?.short_description,
            image: strapiImageUrl(it.image || it.attributes?.image || it.attributes?.thumbnail)
          }));
        } catch (err: any) {
          lastErr = err;
        }
      }
      throw new Error(lastErr?.message || 'Failed to fetch news');
    },
    staleTime: 1000 * 60 * 2,
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // Try the exact endpoint you provided first, then fall back to common variants
      const candidates = [
        '/api/products?populate=*',
        '/api/products?populate=*&pagination[pageSize]=50',
        '/api/products',
        '/api/product?populate=*&pagination[pageSize]=50',
        '/api/items?populate=*&pagination[pageSize]=50'
      ];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          return items.map((it: any) => {
            // helper: try multiple shapes to find a usable image
            const resolveImage = (item: any) => {
              const candidates: any[] = [];
              if (item.images && Array.isArray(item.images) && item.images.length) candidates.push(item.images[0]);
              if (item.attributes && item.attributes.images && Array.isArray(item.attributes.images) && item.attributes.images.length) candidates.push(item.attributes.images[0]);
              if (item.image) candidates.push(item.image);
              if (item.attributes && item.attributes.image) candidates.push(item.attributes.image);
              if (item.raw && item.raw.images && Array.isArray(item.raw.images) && item.raw.images.length) candidates.push(item.raw.images[0]);
              if (item.raw && item.raw.attributes && item.raw.attributes.images && Array.isArray(item.raw.attributes.images) && item.raw.attributes.images.length) candidates.push(item.raw.attributes.images[0]);
              if (item.raw && item.raw.image) candidates.push(item.raw.image);

              for (const c of candidates) {
                if (!c) continue;
                // if candidate has a `name` field (filename), build a full uploads URL
                if (typeof c === 'object' && c.name) {
                  try {
                    return `${STRAPI_URL.replace(/\/$/, '')}/uploads/${c.name}`;
                  } catch (e) {
                    // fallthrough
                  }
                }

                // try strapiImageUrl on the candidate directly
                const direct = strapiImageUrl(c);
                if (direct) return direct;

                // candidate might be an object with url or attributes
                if (typeof c === 'object') {
                  const url = c.url || c.attributes?.url || c.data?.attributes?.url || (c.attributes && c.attributes.data && c.attributes.data.url) || c.name;
                  if (url) return strapiImageUrl(url) || (typeof url === 'string' ? url : undefined);
                }

                // if it's a string URL
                if (typeof c === 'string') return strapiImageUrl(c) || c;
              }
              return undefined;
            };

            const primaryImage = resolveImage(it) || undefined;

            return {
              id: it.id,
              title: it.title || it.attributes?.title || it.attributes?.name,
              description: it.description || it.attributes?.description || it.attributes?.summary,
              image: primaryImage,
              slug: it.slug || it.attributes?.slug || undefined,
              raw: it,
            };
          });
        } catch (err: any) {
          lastErr = err;
          // try next candidate
        }
      }
      // If we reach here, all attempts failed — rethrow with guidance
      const message = lastErr?.message || 'Failed to fetch products from Strapi';
      throw new Error(message + '. Tried common endpoints: ' + candidates.join(', '));
    },
    staleTime: 1000 * 60 * 2,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const candidates = [
        '/api/categories?populate[products][populate]=*&pagination[pageSize]=50',
        '/api/categories?populate=*&pagination[pageSize]=50',
        '/api/categories',
      ];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          return items.map((it: any) => ({
            id: it.id,
            name: it.name || it.title || it.attributes?.name,
            slug: it.slug || it.attributes?.slug || undefined,
            description: it.description || it.attributes?.description,
            image: strapiImageUrl(it.image || it.attributes?.image || it.attributes?.thumbnail),
            // if the category includes a populated products array, normalize it
            products: (it.products && Array.isArray(it.products)) ? it.products.map((p: any) => ({
              id: p.id,
              title: p.title || p.name || p.attributes?.title,
              description: p.short_description || p.description || p.attributes?.short_description || p.attributes?.description,
              image: strapiImageUrl(p.image || p.attributes?.image || (p.attributes && p.attributes.image && p.attributes.image.data && p.attributes.image.data.attributes?.url)),
              slug: p.slug || p.attributes?.slug,
              raw: p,
            })) : undefined,
            raw: it,
          }));
        } catch (err: any) {
          lastErr = err;
        }
      }
      throw new Error(lastErr?.message || 'Failed to fetch categories');
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useProductsByCategory(categorySlug?: string) {
  return useQuery({
    queryKey: ['products', 'byCategory', categorySlug],
    enabled: Boolean(categorySlug),
    queryFn: async () => {
      if (!categorySlug) return [];
      // Strapi filter by related category slug or id depending on the value
      const isNumericId = /^\d+$/.test(String(categorySlug));
      const candidates = isNumericId
        ? [`/api/products?filters[categories][id][$eq]=${encodeURIComponent(categorySlug)}&populate=*&pagination[pageSize]=50`, `/api/products?filters[categories][slug][$eq]=${encodeURIComponent(categorySlug)}&populate=*&pagination[pageSize]=50`]
        : [`/api/products?filters[categories][slug][$eq]=${encodeURIComponent(categorySlug)}&populate=*&pagination[pageSize]=50`, `/api/products?filters[categories][id][$eq]=${encodeURIComponent(categorySlug)}&populate=*&pagination[pageSize]=50`];
      let lastErr: any = null;
      let res: any = null;
      for (const path of candidates) {
        try {
          res = await strapiFetch(path);
          break;
        } catch (err: any) {
          lastErr = err;
        }
      }
      if (!res) throw new Error(lastErr?.message || 'Failed to fetch products by category');
      const items = mapCollectionItems(res);
      return items.map((it: any) => ({
        id: it.id,
        title: it.title || it.attributes?.title || it.attributes?.name,
        description: it.description || it.attributes?.description || it.attributes?.summary,
        image: strapiImageUrl(it.image || it.attributes?.image || it.attributes?.thumbnail || it.attributes?.cover),
        slug: it.slug || it.attributes?.slug || undefined,
        raw: it,
      }));
    },
    staleTime: 1000 * 60 * 2,
  });
}

export function useCategory(slug?: string | undefined) {
  return useQuery({
    queryKey: ['category', slug],
    enabled: Boolean(slug),
    queryFn: async () => {
      if (!slug) return null;
      // Try fetching category by slug and populate its products
      const candidates = [
        // populate the products relation and the product images
        `/api/categories?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=products.image&pagination[pageSize]=1`,
        // fallback: populate products only
        `/api/categories?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=products&pagination[pageSize]=1`,
        // last resort: populate everything
        `/api/categories?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&pagination[pageSize]=1`,
      ];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          if (!items || items.length === 0) continue;
          const it = items[0];
          // try to extract products from attributes or relations
          const products = (it.products && Array.isArray(it.products)) ? it.products : (it.product && Array.isArray(it.product) ? it.product : []);
          return {
            id: it.id,
            name: it.name || it.title || it.title || it.attributes?.name || it.attributes?.title,
            slug: it.slug || it.attributes?.slug || undefined,
            description: it.description || it.attributes?.description || it.attributes?.short_description || undefined,
            image: strapiImageUrl(it.image || it.attributes?.image || it.attributes?.thumbnail),
            products: products.map((p: any) => ({
              id: p.id,
              title: p.title || p.name || p.attributes?.title || p.attributes?.name,
              description: p.description || p.attributes?.description || p.attributes?.short_description,
              image: strapiImageUrl(p.image || p.attributes?.image || p.attributes?.thumbnail),
              raw: p,
            })),
            raw: it,
          };
        } catch (err: any) {
          lastErr = err;
        }
      }
      throw new Error(lastErr?.message || 'Category not found');
    },
    staleTime: 1000 * 60 * 2,
  });
}

export function useSolutions() {
  return useQuery({
    queryKey: ['solutions'],
    queryFn: async () => {
      const candidates = [
        '/api/solutions?populate=*',
        '/api/solutions?populate=*&pagination[pageSize]=50',
        '/api/solutions'
      ];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          return items.map((it: any) => ({
            id: it.id,
            title: it.title || it.name || it.attributes?.title || it.attributes?.name,
            slug: it.slug || it.attributes?.slug || undefined,
            excerpt: it.excerpt || it.attributes?.excerpt || undefined,
            description: it.description || it.attributes?.description || it.attributes?.content || undefined,
            image: strapiImageUrl(it.image || it.attributes?.image || it.attributes?.thumbnail || it.attributes?.cover),
            // Normalize hero object to always expose title/eyebrow/subtitle when present
            hero: (() => {
              const rawHero = it.hero || it.attributes?.hero;
              if (!rawHero) return undefined;
              const getAttr = (obj: any, key: string) => {
                if (!obj) return undefined;
                if (typeof obj === 'string') return obj;
                return obj[key] ?? obj?.data?.attributes?.[key] ?? obj?.attributes?.[key];
              };
              return {
                title: getAttr(rawHero, 'title') || getAttr(rawHero, 'name') || undefined,
                eyebrow: getAttr(rawHero, 'eyebrow') || getAttr(rawHero, 'eyebrowText') || undefined,
                subtitle: getAttr(rawHero, 'subtitle') || getAttr(rawHero, 'description') || getAttr(rawHero, 'subtitleText') || undefined,
              };
            })(),
            heroImage: (() => {
              // try several common shapes for hero image
              const rawHero = it.hero || it.attributes?.hero;
              const candidates = [] as any[];
              if (rawHero) {
                // possible shapes: { url }, { image: { data: { attributes: { url }}}}, { data: { attributes: { image: { url }}}}
                candidates.push(rawHero.url || rawHero.image || rawHero.data?.attributes?.url || rawHero.attributes?.image || rawHero.attributes?.image?.data?.attributes?.url);
              }
              candidates.push(it.image || it.attributes?.image || it.attributes?.thumbnail || it.attributes?.cover);
              for (const c of candidates) {
                const u = strapiImageUrl(c);
                if (u) return u;
                if (typeof c === 'string') return c;
                if (c && c.name) return `${STRAPI_URL.replace(/\/$/, '')}/uploads/${c.name}`;
              }
              return undefined;
            })(),
            images: (it.images || it.attributes?.images) ? (it.images || it.attributes?.images) : undefined,
            challenges: (it.challenges || it.attributes?.challenges || []).map((c: any) => {
              if (!c) return '';
              if (typeof c === 'string') return c;
              return c.text ?? c.title ?? c.name ?? (c.data?.attributes?.text) ?? '';
            }),
            specializedSolutions: (it.specialized_solutions || it.attributes?.specialized_solutions || it.attributes?.specializedSolutions || []).map((s: any) => {
              if (!s) return '';
              if (typeof s === 'string') return s;
              return s.text ?? s.title ?? s.name ?? (s.data?.attributes?.text) ?? '';
            }),
            relatedProducts: (it.related_products || it.attributes?.related_products || it.attributes?.relatedProducts || []).map((p: any) => ({
              id: p.id,
              title: p.title || p.attributes?.title || p.name,
              slug: p.slug || p.attributes?.slug,
              short_description: p.short_description || p.attributes?.short_description || p.attributes?.excerpt,
              description: p.description || p.attributes?.description || undefined,
              price: p.price || p.attributes?.price,
              image: strapiImageUrl(p.image || p.attributes?.image || p.attributes?.thumbnail || (p.attributes && p.attributes.image && p.attributes.image.data && p.attributes.image.data.attributes?.url)),
              sku: p.sku || p.attributes?.sku,
              isFeatured: p.isFeatured || p.attributes?.isFeatured || p.attributes?.is_featured,
              raw: p,
            })),
            raw: it,
          }));
        } catch (err: any) {
          lastErr = err;
        }
      }
      throw new Error(lastErr?.message || 'Failed to fetch solutions');
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const candidates = [
        '/api/projects?populate=*&pagination[pageSize]=50',
        '/api/projects'
      ];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          return items.map((it: any) => ({
            id: it.id,
            title: it.title || it.attributes?.title || it.attributes?.name,
            client: it.client || it.attributes?.client || it.attributes?.client_name,
            date: it.date || it.attributes?.date || it.attributes?.publishedAt,
            location: it.location || it.attributes?.location,
            excerpt: it.excerpt || it.attributes?.excerpt || it.attributes?.short_description,
            description: it.content || it.description || it.attributes?.excerpt || it.attributes?.description,
            content: it.content || it.attributes?.content || it.attributes?.description || undefined,
            publishedAt: it.publishedAt || it.attributes?.publishedAt || it.attributes?.date,
            slug: it.slug || it.attributes?.slug || undefined,
            image: strapiImageUrl(it.image || it.attributes?.image || it.attributes?.thumbnail || it.attributes?.cover),
            gallery: (it.gallery || it.attributes?.gallery || []).map((g: any) => (
              // normalize each gallery entry to a full URL when possible
              strapiImageUrl(g) || (typeof g === 'string' ? g : undefined)
            )).filter(Boolean),
            relatedProducts: (it.related_products || it.attributes?.related_products || it.attributes?.relatedProducts || []).map((p: any) => ({
              id: p.id,
              title: p.title || p.attributes?.title || p.name,
              slug: p.slug || p.attributes?.slug,
              short_description: p.short_description || p.attributes?.short_description || p.attributes?.excerpt,
              description: p.description || p.attributes?.description || undefined,
              price: p.price || p.attributes?.price,
              image: strapiImageUrl(p.image || p.attributes?.image || (p.attributes && p.attributes.image && p.attributes.image.data && p.attributes.image.data.attributes?.url)) || undefined,
              raw: p,
            })),
            raw: it,
          }));
        } catch (err: any) {
          lastErr = err;
        }
      }
      throw new Error(lastErr?.message || 'Failed to fetch projects');
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useSolution(slug?: string | undefined) {
  return useQuery({
    queryKey: ['solution', slug],
    enabled: Boolean(slug),
    queryFn: async () => {
      if (!slug) return null;
      const candidates = [
        `/api/solutions?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&pagination[pageSize]=1`,
        `/api/solutions?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=hero,images,related_products&pagination[pageSize]=1`,
      ];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          if (!items || items.length === 0) continue;
          const it = items[0];
          return {
            id: it.id,
            title: it.title || it.attributes?.title || it.name,
            slug: it.slug || it.attributes?.slug,
            excerpt: it.excerpt || it.attributes?.excerpt,
            description: it.description || it.attributes?.description || it.attributes?.content,
            content: it.content || it.attributes?.content || it.attributes?.description,
            // normalize hero to always provide title/eyebrow/subtitle when possible
            hero: (() => {
              const rawHero = it.hero || it.attributes?.hero;
              if (!rawHero) return undefined;
              const getAttr = (obj: any, key: string) => {
                if (!obj) return undefined;
                if (typeof obj === 'string') return obj;
                return obj[key] ?? obj?.data?.attributes?.[key] ?? obj?.attributes?.[key];
              };
              return {
                title: getAttr(rawHero, 'title') || getAttr(rawHero, 'name') || undefined,
                eyebrow: getAttr(rawHero, 'eyebrow') || getAttr(rawHero, 'eyebrowText') || undefined,
                subtitle: getAttr(rawHero, 'subtitle') || getAttr(rawHero, 'description') || getAttr(rawHero, 'subtitleText') || undefined,
              };
            })(),
            heroImage: (() => {
              const rawHero = it.hero || it.attributes?.hero;
              const candidates: any[] = [];
              if (rawHero) {
                candidates.push(rawHero.url || rawHero.image || rawHero.data?.attributes?.url || rawHero.attributes?.image || rawHero.attributes?.image?.data?.attributes?.url);
              }
              candidates.push(it.image || it.attributes?.image || it.attributes?.thumbnail || it.attributes?.cover);
              for (const c of candidates) {
                const u = strapiImageUrl(c);
                if (u) return u;
                if (typeof c === 'string') return c;
                if (c && c.name) return `${STRAPI_URL.replace(/\/$/, '')}/uploads/${c.name}`;
              }
              return undefined;
            })(),
            images: (it.images || it.attributes?.images || []).map((img: any) => strapiImageUrl(img || img?.url || img?.attributes?.url || img?.data?.attributes?.url)),
            challenges: (it.challenges || it.attributes?.challenges || []).map((c: any) => {
              if (!c) return '';
              if (typeof c === 'string') return c;
              return c.text ?? c.title ?? c.name ?? (c.data?.attributes?.text) ?? '';
            }),
            specializedSolutions: (it.specialized_solutions || it.attributes?.specialized_solutions || it.attributes?.specializedSolutions || []).map((s: any) => {
              if (!s) return '';
              if (typeof s === 'string') return s;
              return s.text ?? s.title ?? s.name ?? (s.data?.attributes?.text) ?? '';
            }),
            relatedProducts: (it.related_products || it.attributes?.related_products || []).map((p: any) => ({
              id: p.id,
              title: p.title || p.attributes?.title || p.name,
              slug: p.slug || p.attributes?.slug,
              short_description: p.short_description || p.attributes?.short_description,
              raw: p,
            })),
            raw: it,
          };
        } catch (err: any) {
          lastErr = err;
        }
      }
      throw new Error(lastErr?.message || 'Solution not found');
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useProduct(identifier?: string | number) {
  return useQuery({
    queryKey: ['product', identifier],
    enabled: Boolean(identifier),
    queryFn: async () => {
      if (!identifier) return null;
      const idOrSlug = String(identifier);
      const candidates = [
        // prefer the list endpoint (populated) so we can find by slug reliably
        `/api/products?populate=*`,
        // also try filtering by slug or id on the products collection
        `/api/products?filters[slug][$eq]=${encodeURIComponent(idOrSlug)}&populate=*`,
        `/api/products?filters[id][$eq]=${encodeURIComponent(idOrSlug)}&populate=*`,
        // last resort: direct single-item route (may not be available on this Strapi setup)
        `/api/products/${encodeURIComponent(idOrSlug)}?populate=*`,
      ];
      let lastErr: any = null;
      for (const path of candidates) {
        try {
          const res = await strapiFetch(path);
          const items = mapCollectionItems(res);
          let it: any = null;
          if (Array.isArray(items)) {
            // try to find matching by id, slug or documentId
            it = items.find((x: any) => String(x.id) === idOrSlug || x.slug === idOrSlug || x.documentId === idOrSlug) || items[0] || null;
          } else {
            it = items;
          }
          if (!it) continue;
          return {
            id: it.id,
            title: it.title || it.attributes?.title || it.name,
            slug: it.slug || it.attributes?.slug,
            short_description: it.short_description || it.attributes?.short_description || it.attributes?.excerpt,
            description: it.description || it.attributes?.description || it.attributes?.content,
            price: it.price || it.attributes?.price,
            sku: it.sku || it.attributes?.sku,
            isFeatured: it.isFeatured || it.attributes?.isFeatured || it.attributes?.is_featured,
            specifications: it.specifications || it.attributes?.specifications || undefined,
            images: (it.images || it.attributes?.images || []).map((img: any) => strapiImageUrl(img)),
            attachments: (it.attachments || it.attributes?.attachments || []).map((a: any) => ({ ...a, url: (a && (a.url || a.attributes?.url)) ? strapiImageUrl(a) : undefined })),
            category: (it.category && (it.category.name || it.category.slug)) ? it.category : (it.attributes?.category ? it.attributes.category : undefined),
            solutions: (it.solutions || it.attributes?.solutions || []).map((s: any) => ({ id: s.id, title: s.title || s.attributes?.title, slug: s.slug || s.attributes?.slug })),
            projects: (it.projects || it.attributes?.projects || []).map((p: any) => ({ id: p.id, title: p.title || p.attributes?.title, slug: p.slug || p.attributes?.slug })),
            benefits: it.benefits || it.attributes?.benefits || undefined,
            raw: it,
          };
        } catch (err: any) {
          lastErr = err;
        }
      }
      throw new Error(lastErr?.message || 'Product not found');
    },
    staleTime: 1000 * 60 * 5,
  });
}
