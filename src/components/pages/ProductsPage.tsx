import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-n0ansx32n6";
import imgContainer from "figma:asset/907413a460de02996c26312a55140a67f07c969e.png";
import imgImageWithFallback2 from "figma:asset/b512b33e58793318e7c126751fd19b9a67e02147.png";
import imgImageWithFallback3 from "figma:asset/683ca9983ba3a5cdbd47a9dcb59d1fd4c097a730.png";
import imgImageWithFallback4 from "figma:asset/ce09801d9985dc6358d6660a48fed0431ef797ae.png";
import imgImageWithFallback5 from "figma:asset/f162ff9d8816a8f4e900b5d28f4e295b281579c0.png";
import imgImageWithFallback6 from "figma:asset/2ea399eb2d1be016aa27689c3c3c0b35ea088483.png";
import { useProducts } from '../../hooks/useMedia';
import { strapiImageUrl, STRAPI_URL } from '../../lib/strapi';

// Note: static demo `products` removed — use only endpoint results

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Load all products
  const { data: productsData, isLoading: productsLoading, isError: productsError } = useProducts();
  // Only use products returned from the endpoint. If not present, use an empty array.
  const serverProducts = Array.isArray(productsData) ? productsData : [];
  // debug logging removed
  const effectiveProducts = serverProducts.map((p: any) => {
        // normalize main image and gallery
        const resolveSrc = (candidate: any) => {
          if (!candidate) return undefined;
          // if it's already a string (url or path)
          if (typeof candidate === 'string') return strapiImageUrl(candidate) || candidate;
          // prefer explicit url fields when available (these include the hashed filename)
          const nested = candidate.url || candidate.attributes?.url || candidate.data?.attributes?.url || candidate.attributes?.image?.data?.attributes?.url;
          if (nested) return strapiImageUrl(nested) || nested;
          // try strapiImageUrl on the object directly (handles attributes/data shapes)
          const direct = strapiImageUrl(candidate);
          if (direct) return direct;
          // if Strapi returned a `name` (filename), build URL using STRAPI_URL + /uploads/<name>
          if (candidate.name && typeof candidate.name === 'string') return `${STRAPI_URL.replace(/\/$/, '')}/uploads/${candidate.name}`;
          return undefined;
        };

        // primary image: prefer images[0] then image
        let primary: string | undefined = undefined;
        if (p.images && Array.isArray(p.images) && p.images.length) primary = resolveSrc(p.images[0]);
        if (!primary && p.attributes && p.attributes.images && Array.isArray(p.attributes.images) && p.attributes.images.length) primary = resolveSrc(p.attributes.images[0]);
        if (!primary) primary = resolveSrc(p.image) || resolveSrc(p.attributes?.image) || undefined;

        // gallery: collect up to first 8 images normalized
        const gallery: string[] = [];
        const gather = (arr: any) => {
          if (!arr) return;
          if (Array.isArray(arr)) arr.forEach((it: any) => { const s = resolveSrc(it); if (s) gallery.push(s); });
        };
        gather(p.images || p.attributes?.images || p.raw?.images || p.raw?.attributes?.images);

        // attachments (files) normalized
        const attachments = Array.isArray(p.attachments || p.attributes?.attachments || p.raw?.attachments)
          ? (p.attachments || p.attributes?.attachments || p.raw?.attachments).map((a: any) => ({ ...a, url: resolveSrc(a) || a.url }))
          : [];

        return {
          id: p.id,
          title: p.title,
          short_description: p.short_description || p.attributes?.short_description,
          description: p.description,
          price: p.price || p.attributes?.price,
          sku: p.sku || p.attributes?.sku,
          image: primary || imgImageWithFallback4,
          images: gallery,
          attachments,
          icon: 'handling',
          slug: p.slug,
          categorySlug: p.raw?.category?.slug || p.category?.slug || p.attributes?.category?.slug || (p.category && p.category.slug) || undefined,
          raw: p,
        };
      });

  // Robust case-insensitive search across multiple product fields
  const query = (searchTerm || '').trim().toLowerCase();
  const matchesQuery = (p: any) => {
    if (!query) return true; // no filter
    const fields: string[] = [];
    if (p.title) fields.push(String(p.title));
    if (p.description) fields.push(String(p.description));
    if (p.short_description) fields.push(String(p.short_description));
    if (p.slug) fields.push(String(p.slug));
    if (p.categorySlug) fields.push(String(p.categorySlug));
    // look into raw object for fallback fields
    if (p.raw) {
      try {
        const raw = p.raw;
        if (raw.title) fields.push(String(raw.title));
        if (raw.name) fields.push(String(raw.name));
        if (raw.attributes) {
          if (raw.attributes.title) fields.push(String(raw.attributes.title));
          if (raw.attributes.name) fields.push(String(raw.attributes.name));
          if (raw.attributes.description) fields.push(String(raw.attributes.description));
          if (raw.attributes.short_description) fields.push(String(raw.attributes.short_description));
        }
      } catch (e) {
        // silent
      }
    }

    const hay = fields.join(' \n ').toLowerCase();
    return hay.indexOf(query) !== -1;
  };

  const filteredProducts = effectiveProducts.filter((product: any) => matchesQuery(product));

  // Ensure a product image URL is a full URL (prefix Strapi base for relative urls)
  const resolveProductSrc = (product: any, candidate?: any) => {
    const tryCandidates: any[] = [];
    // prefer explicit first image from common Strapi shapes (these often include the hashed filename in `url`)
    if (product) {
      // raw.images (array of objects)
      tryCandidates.push(product.raw?.images?.[0]);
      // raw.images.data[0].attributes
      tryCandidates.push(product.raw?.images?.data?.[0]?.attributes);
      // attributes.images.data[0].attributes
      tryCandidates.push(product.raw?.attributes?.images?.data?.[0]?.attributes);
      // top-level images (array)
      tryCandidates.push(product.images && Array.isArray(product.images) ? product.images[0] : undefined);
      // images.data[0].attributes
      tryCandidates.push(product.images?.data?.[0]?.attributes);
      // fallback: product.image or attributes.image
      tryCandidates.push(product.image);
      tryCandidates.push(product.attributes?.image || product.raw?.attributes?.image);
    }
    if (candidate) tryCandidates.unshift(candidate);
    for (const c of tryCandidates) {
      if (!c) continue;
      // if it's a string, attempt to normalize
      if (typeof c === 'string') {
        const full = strapiImageUrl(c) || (c.startsWith('/') ? `${STRAPI_URL.replace(/\/$/, '')}${c}` : c);
        if (full) return full;
      }
      // if it's an object with url or name
      if (typeof c === 'object') {
        if (c.url) {
          const full = strapiImageUrl(c.url) || (c.url.startsWith('/') ? `${STRAPI_URL.replace(/\/$/, '')}${c.url}` : c.url);
          if (full) return full;
        }
        // some Strapi shapes place url under attributes.url
        if (c.attributes?.url) {
          const full = strapiImageUrl(c.attributes.url) || (c.attributes.url.startsWith('/') ? `${STRAPI_URL.replace(/\/$/, '')}${c.attributes.url}` : c.attributes.url);
          if (full) return full;
        }
        if (c.data?.attributes?.url) {
          const full = strapiImageUrl(c.data.attributes.url) || (c.data.attributes.url.startsWith('/') ? `${STRAPI_URL.replace(/\/$/, '')}${c.data.attributes.url}` : c.data.attributes.url);
          if (full) return full;
        }
        if (c.name) return `${STRAPI_URL.replace(/\/$/, '')}/uploads/${c.name}`;
        const direct = strapiImageUrl(c);
        if (direct) return direct;
      }
    }
    return undefined;
  };

  // Render a visible error box when fetching products fails
  const renderProductsError = () => {
    if (!productsError) return null;
    // productsError may be an Error or unknown shape from react-query
    const msg = productsError?.message || String(productsError);
    return (
      <div className="container mx-auto px-4 py-4 max-w-[1200px]">
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
          <strong className="block mb-1">خطأ عند جلب المنتجات</strong>
          <div className="text-sm">{msg}</div>
          <div className="text-xs mt-2">تأكد من صحة `VITE_STRAPI_TOKEN` أو صلاحيات Public role في Strapi.</div>
        </div>
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getIconPath = (iconType: string) => {
    switch (iconType) {
      case 'storage':
        return (
          <>
            <path d={svgPaths.p3bfee9c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M12 22V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M3.29 7L12 12L20.71 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7.5 4.27L16.5 9.42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </>
        );
      case 'workshop':
        return <path d={svgPaths.p2a12b200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />;
      default:
        return <path d={svgPaths.p3bfee9c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />;
    }
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen" dir="rtl">
      {/* Hero Section with Search */}
      <div className="relative bg-gradient-to-b from-[#13499d] to-[#0f1629] min-h-[250px] md:h-[288px] overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img alt="" className="w-full h-full object-cover" src={imgContainer} />
        </motion.div>
        
        <div className="relative container mx-auto px-4 max-w-[1200px] h-full flex flex-col justify-center items-start py-12 md:py-0">
          <motion.h1 
            className="text-3xl md:text-5xl text-white mb-3 md:mb-4 text-right"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            منتجاتنا
          </motion.h1>
          <motion.p 
            className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 text-right max-w-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            مجموعة شاملة من المعدات الصناعية وأنظمة التخزين من أفضل العلامات التجارية العالمية
          </motion.p>
          
          {/* Search Box */}
          <motion.div 
            className="relative w-full md:w-[448px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md h-10 md:h-[36px] flex items-center px-3">
              <div className="absolute left-3">
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 20 20"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <path d="M17.5 17.5L13.8834 13.8833" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.pcddfd00} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </motion.svg>
              </div>
              <input 
                type="text" 
                placeholder="البحث في المنتجات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-0 outline-none text-white placeholder:text-[#bedbff] text-sm md:text-base w-full pr-2 pl-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-[1200px]">
          {productsLoading ? (
            <div className="text-center py-16">
              <svg className="animate-spin mx-auto text-[#13499d] w-10 h-10" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              <p className="mt-4 text-gray-600">جارٍ تحميل المنتجات...</p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProducts.map((product, index) => (
                <motion.button
                  key={product.id}
                  onClick={() => navigate(`/products/${product.categorySlug || 'all'}/${product.slug || product.id}`)}
                className="bg-white rounded-xl overflow-hidden border border-[#d6d6d6] text-right group block bg-transparent flex flex-col"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative h-48 md:h-[192px] overflow-hidden">
                    <motion.img
                      src={resolveProductSrc(product) || imgImageWithFallback4}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                
                    {/* thumbnails removed per request */}

                    <motion.div 
                      className="absolute bottom-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </div>
                
                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <motion.h3 
                      className="text-[#303030] text-lg md:text-xl mb-2 text-right group-hover:text-[#13499d] transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {product.title}
                    </motion.h3>
                    {product.price !== undefined && (
                      <div className="text-right text-sm font-semibold text-[#13499d] mb-2">{String(product.price)}</div>
                    )}
                    <motion.p 
                      className="text-[#4a5565] text-sm md:text-base mb-4 text-right"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {product.description}
                    </motion.p>
                  
                    <motion.div 
                      className="mt-auto flex items-center justify-end gap-2 text-[#13499d] group-hover:gap-3 transition-all"
                      whileHover={{ x: -5 }}
                    >
                      <span className="text-sm">عرض التفاصيل</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

        {!productsLoading && filteredProducts.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24">
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-2xl text-gray-600 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500">جرب البحث بكلمات مختلفة</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
