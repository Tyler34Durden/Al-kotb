// Normalize the provided STRAPI URL: remove trailing slash and any trailing `/api`
const _RAW_STRAPI = import.meta.env.VITE_STRAPI_URL || "https://al-kotobco.com/api/";
const STRAPI_URL = String(_RAW_STRAPI).replace(/\/$/, "").replace(/\/api$/i, "");
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN || "";

async function strapiFetch(path: string, opts: RequestInit = {}) {
  const url = `${STRAPI_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
  const headers: Record<string, string> = {
    ...(opts.headers as Record<string, string> || {}),
    "Content-Type": "application/json",
  };
  if (STRAPI_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(url, { ...opts, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi fetch ${res.status} ${res.statusText}: ${text}`);
  }
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) return res.json();
  return res.blob();
}

function strapiImageUrl(media: any) {
  // media may be a string, an object with attributes.url, or have data array
  if (!media) return undefined;
  if (typeof media === "string") {
    // handle absolute (http(s)://), protocol-relative (//host/...), and relative (/uploads/...)
    if (media.startsWith("http")) return media;
    if (media.startsWith("//")) {
      // prefer the protocol from STRAPI_URL, but fall back to current page protocol or https
      let proto = 'https:';
      try {
        proto = new URL(STRAPI_URL).protocol || proto;
      } catch (e) {
        if (typeof window !== 'undefined' && window.location && window.location.protocol) proto = window.location.protocol;
      }
      return `${proto}${media}`;
    }
    return `${STRAPI_URL.replace(/\/$/, "")}${media.startsWith("/") ? media : `/${media}`}`;
  }
  if (media?.data) {
    const first = Array.isArray(media.data) ? media.data[0] : media.data;
    return first?.attributes?.url ? ensureFullUrl(first.attributes.url) : undefined;
  }
  if (media?.attributes?.url) return ensureFullUrl(media.attributes.url);
  if (media?.url) return ensureFullUrl(media.url);
  return undefined;
}

function ensureFullUrl(url: string) {
  if (!url) return undefined;
  // already fully qualified
  if (url.startsWith("http")) return url;
  // protocol-relative (//host/path) — preserve protocol from configured STRAPI_URL
  if (url.startsWith("//")) {
    let proto = 'https:';
    try {
      proto = new URL(STRAPI_URL).protocol || proto;
    } catch (e) {
      if (typeof window !== 'undefined' && window.location && window.location.protocol) proto = window.location.protocol;
    }
    return `${proto}${url}`;
  }
  // relative path: prepend normalized STRAPI_URL
  return `${STRAPI_URL.replace(/\/$/, "")}${url.startsWith("/") ? url : `/${url}`}`;
}

export { STRAPI_URL, STRAPI_TOKEN, strapiFetch, strapiImageUrl };
