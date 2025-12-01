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
  if (typeof media === "string") return media.startsWith("http") ? media : `${STRAPI_URL}${media}`;
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
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL.replace(/\/$/, "")}${url.startsWith("/") ? url : `/${url}`}`;
}

export { STRAPI_URL, STRAPI_TOKEN, strapiFetch, strapiImageUrl };
