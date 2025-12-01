import { motion } from 'motion/react';
import { Button } from '../ui/button';
import svgPaths from "../../imports/svg-iesjveorhc";
import imgContainer from "figma:asset/03f677eaac17d26b0938bff53039ae1d04a0d40c.png";
import { Phone, Users } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

const STRAPI_BASE = 'http://102.213.183.190:1337';

// Resolve icon url from multiple possible Strapi shapes
function resolveIconUrl(service: any) {
  // shape 1: service.icon.url
  if (service?.icon?.url) return service.icon.url.startsWith('http') ? service.icon.url : `${STRAPI_BASE}${service.icon.url}`;
  // shape 2: service.attributes.icon.data.attributes.url
  const nested = service?.attributes?.icon?.data?.attributes?.url || service?.attributes?.icon?.attributes?.url;
  if (nested) return nested.startsWith('http') ? nested : `${STRAPI_BASE}${nested}`;
  // shape 3: service.icon.data?.attributes?.url
  const nested2 = service?.icon?.data?.attributes?.url;
  if (nested2) return nested2.startsWith('http') ? nested2 : `${STRAPI_BASE}${nested2}`;
  return null;
}

const getServiceIcon = (iconType: string) => {
  switch (iconType) {
    case 'delivery':
      return (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p12cc5000} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M17.5 21H10.5" stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3a5ba480} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pa689e00} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p26ea4300} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      );
    case 'maintenance':
      return (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p10452500} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p25c6f00} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      );
    case 'spares':
      return (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.pe386d00} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      );
    case 'consulting':
      return (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p184ba090} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pcd80870} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p36197298} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      );
    default:
      return null;
  }
};

export function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const [svcList, setSvcList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`${STRAPI_BASE}/api/services?populate=*`)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then((json) => {
        // handle both shapes: { data: [...] } or direct array
        const items = json?.data || json;
        if (!cancelled) setSvcList(Array.isArray(items) ? items : []);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'خطأ في تحميل الخدمات');
      })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, []);

  // derive a stable, deduplicated list for rendering
  const displayItems = useMemo(() => {
    const mapped = svcList.map((svc: any) => svc?.attributes ? { id: svc.id, ...svc.attributes } : svc || {});
    const seenNames = new Set<string>();
    const seenIds = new Set<any>();
    const out: any[] = [];

    for (const it of mapped) {
      const id = it?.id ?? it?.attributes?.id;
      const rawName = (it?.name || it?.title || it?.label || '') || '';
      const name = String(rawName).trim();
      const normalized = name ? name.toLowerCase() : '';

      // If we have a normalized name, prefer deduping by name regardless of id
      if (normalized) {
        if (seenNames.has(normalized)) continue;
        seenNames.add(normalized);
        out.push(it);
        continue;
      }

      // Fallback for nameless items: dedupe by id if available
      if (id != null) {
        if (seenIds.has(id)) continue;
        seenIds.add(id);
        out.push(it);
        continue;
      }

      // Last resort: push the item (no id and no name)
      out.push(it);
    }

    return out;
  }, [svcList]);

  return (
    <div className="bg-[#f6f6f6] min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#13499d] to-[#0f1629] min-h-[220px] md:h-[252px] overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img alt="" className="w-full h-full object-cover" src={imgContainer} />
        </motion.div>
        
        <div className="relative container mx-auto px-4 max-w-[1200px] h-full flex flex-col justify-center py-12 md:py-16">
          <motion.h1 
            className="text-white text-3xl md:text-5xl mb-3 md:mb-4 text-right"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            خدماتنا المتميزة
          </motion.h1>
          <motion.p 
            className="text-blue-100 text-base md:text-xl text-right max-w-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            خدمات شاملة ومتكاملة تغطي جميع احتياجاتك من التوريد والتركيب إلى الصيانة والدعم الفني
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          {/* Diagnostics: show fetch status and sample when nothing renders */}
          {!loading && !error && svcList.length === 0 && (
            <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-[#334155]">
              <div className="font-medium mb-1">ملاحظة تشخيصية: لم تُرجع الخدمات أي عناصر</div>
              <div>حالة التحميل: {String(loading)}</div>
              <div>عدد العناصر المستلمة: {svcList?.length ?? 0}</div>
              <details className="mt-2 text-xs text-[#475569]">
                <summary>عرض عينة JSON (إن وُجدت)</summary>
                <pre className="whitespace-pre-wrap break-words mt-2">{JSON.stringify(svcList?.[0] || {}, null, 2)}</pre>
              </details>
            </div>
          )}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {loading ? (
              <div className="col-span-1 md:col-span-2 flex justify-center py-12">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border-4 border-gray-200 border-t-[#13499d] rounded-full animate-spin" />
                  <span className="text-[#4a5565]">جاري تحميل الخدمات...</span>
                </div>
              </div>
            ) : error ? (
              <div className="col-span-1 md:col-span-2 text-center text-red-500 py-12">{error}</div>
            ) : svcList.length === 0 ? (
              <div className="col-span-1 md:col-span-2 text-center py-12">
                <h3 className="text-[#303030] text-lg mb-2">لا توجد خدمات حالياً</h3>
                <p className="text-[#6b7280]">نأسف، لا توجد خدمات للعرض الآن. الرجاء المحاولة لاحقاً.</p>
              </div>
            ) : (
              displayItems.map((svc: any, index: number) => {
                // svc may be either the direct item shape or { id, attributes }
                const item = svc?.attributes ? { id: svc.id, ...svc.attributes } : svc || {};
                const name = item?.name || item?.title || item?.label || '';
                const desc = item?.short_description || item?.description || '';
                // Collect explicit point_1..point_5 fields from Strapi response, then fall back to features/bullets arrays
                const pts: string[] = [];
                for (let i = 1; i <= 5; i++) {
                  const v = item?.[`point_${i}`];
                  if (v) pts.push(v);
                }
                const fallbackFeatures = Array.isArray(item?.features) ? item.features : (Array.isArray(item?.bullets) ? item.bullets : []);
                const features = pts.concat(fallbackFeatures);
                const iconUrl = resolveIconUrl(svc) || resolveIconUrl(item);

                return (
                  <motion.div 
                    key={svc.id ?? index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl border border-[#d6d6d6] p-6 md:p-8"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6 justify-end">
                      <div className="text-right">
                        <h3 className="text-[#303030] text-lg md:text-xl mb-2">{name}</h3>
                        <p className="text-[#303030] text-sm md:text-base">{desc}</p>
                      </div>
                      
                      <motion.div 
                        className="bg-[#f6f6f6] border border-[#303030] rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 overflow-hidden"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {iconUrl ? (
                          <img src={iconUrl} alt={name} className="w-10 h-10 object-contain" />
                        ) : (
                          getServiceIcon('delivery')
                        )}
                      </motion.div>
                    </div>

                    {/* Features List (if provided by API) */}
                    {Array.isArray(features) && features.length > 0 ? (
                      <ul className="space-y-3 mb-6 flex flex-col items-end">
                        {features.map((feature: string, idx: number) => (
                          <li key={idx} className="text-right w-full">
                            <motion.div
                              className="flex items-start gap-3 justify-end w-full"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.4 }}
                              >
                                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                                  <g clipPath="url(#clip0_122_835)">
                                    <path d={svgPaths.p35700380} stroke="#00C950" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                    <path d={svgPaths.p3fe63d80} stroke="#00C950" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_122_835">
                                      <rect fill="white" height="20" width="20" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </motion.div>
                              <span className="text-[#4a5565] text-sm md:text-base">{feature}</span>
                            </motion.div>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {/* action button intentionally removed */}
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 justify-end mb-6">
              <h2 className="text-[#0f1629] text-2xl md:text-3xl">
                خدمة الطوارئ
              </h2>
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p1dee4500} stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d="M16 10.6667V16" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d="M16 21.3333H16.0133" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </svg>
              </motion.div>
            </div>

            <p className="text-[#4a5565] text-lg md:text-xl text-right mb-8">
              خدمة طوارئ على مدار الساعة للحالات الحرجة والتوقفات غير المخططة
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              {/* Hotline Card */}
              <motion.div 
                className="bg-white rounded-lg border-t-[3px] border-[#fb2c36] p-6 flex items-center gap-3 justify-end"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-right">
                  <h3 className="text-[#303030] text-base mb-1">خط ساخن</h3>
                  <p className="text-[#7f7f7f] text-sm">متاح 24/7 طوال أيام الأسبوع</p>
                </div>
                <Phone className="w-6 h-6 text-[#303030]" />
              </motion.div>

              {/* Expert Team Card */}
              <motion.div 
                className="bg-white rounded-lg border-t-[3px] border-[#fb2c36] p-6 flex items-center gap-3 justify-end"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-right">
                  <h3 className="text-[#303030] text-base mb-1">فريق خبراء</h3>
                  <p className="text-[#7f7f7f] text-sm">مهندسون وفنيون معتمدون</p>
                </div>
                <Users className="w-6 h-6 text-[#303030]" />
              </motion.div>
            </div>

            {/* Call Button */}
            <div className="flex justify-center">
              <motion.a
                href="https://wa.me/218911286734"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="فتح محادثة واتساب"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-[#fb2c36] text-[#fb2c36] hover:bg-[#fb2c36] hover:text-white h-10 px-6 bg-transparent rounded-md"
              >
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 16 16">
                  <g clipPath="url(#clip0_122_803)">
                    <path d={svgPaths.p26187580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                  <defs>
                    <clipPath id="clip0_122_803">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </svg>
                <span>اتصل بنا الآن</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
