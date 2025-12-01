import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../../imports/svg-a46gpl0szp";
import imgContainer from "figma:asset/ffcf010da13ea1a2d30c1158884e569beb4faf0b.png";
import imgCard3 from "figma:asset/bf4f9909cdcbe942ee4d4ad3065788e14beddfc4.png";
import imgCard4 from "figma:asset/683ca9983ba3a5cdbd47a9dcb59d1fd4c097a730.png";
import imgCard5 from "figma:asset/b7414cfec8643443c97b44b4c24e28249988dfc0.png";
import imgCard6 from "figma:asset/20336ca1f20d8d809ba7993eee8c5c4d6f67c0d1.png";
import imgCard7 from "figma:asset/be56acffa3debd40fe117477893a83d9681596d2.png";
import imgCard8 from "figma:asset/b5bb34718aba6367ba7ca5a373d6eb5079d51e19.png";
import { useNews, useMediaFiles } from '../../hooks/useMedia';
import { strapiImageUrl } from '../../lib/strapi';

export function MediaPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('catalogues');

  // We'll primarily use media files from `useMediaFiles` and filter them for display.

  const { data: newsData, error: newsError } = useNews();
  // Do not show static/hardcoded news items — rely on Strapi `useNews()` data only.
  const fallbackNews: any[] = [];
  // Deduplicate news items: prefer slug, then documentId, image.documentId, id, then title+date
  const news = Array.isArray(newsData) && newsData.length ? (() => {
    const seen = new Set<string>();
    return newsData.filter((n: any) => {
      const slug = n.slug || n.attributes?.slug || (n.raw && n.raw.slug);
      const documentId = n.documentId || n.attributes?.documentId || (n.raw && n.raw.documentId);
      const imageDocumentId = n.image && (n.image.documentId || n.image.data?.documentId || n.image.attributes?.documentId);
      const id = n.id ?? (n.attributes && n.attributes.id) ?? (n.raw && n.raw.id);
      const key = slug || documentId || imageDocumentId || id || ((n.title || '') + '|' + (n.date || ''));
      const keyStr = String(key);
      if (seen.has(keyStr)) return false;
      seen.add(keyStr);
      return true;
    });
  })() : fallbackNews;

  const tabs = [
    { key: 'catalogues', label: 'الكتالوجات' },
    { key: 'images', label: 'الصور' },
    { key: 'news', label: 'الأخبار' }
  ];

  // Strapi media files (used for both الكتالوجات and الصور tabs)
  const { data: mediaFilesData, isLoading: mediaLoading, isError: mediaError } = useMediaFiles();
  const mediaFiles = Array.isArray(mediaFilesData) ? mediaFilesData : [];

  // PDFs for the Catalogues tab: detect by mime or filename extension
  const pdfFiles = mediaFiles.filter((m: any) => {
    const mime: string = (m.mime || m.mimeType || '').toLowerCase();
    const name: string = (m.name || m.alternativeText || '').toLowerCase();
    const ext: string = (m.ext || '').toLowerCase();
    return mime.includes('pdf') || name.endsWith('.pdf') || ext === '.pdf';
  }).map((m: any) => ({ id: m.id, title: m.name || m.alternativeText || 'كتالوج', url: strapiImageUrl(m), raw: m }));

  // Image files for the Images tab
  const imageFiles = mediaFiles.filter((m: any) => {
    const mime: string = (m.mime || m.mimeType || '').toLowerCase();
    return mime.startsWith('image/');
  }).map((m: any) => ({ id: m.id, url: strapiImageUrl(m), name: m.name || m.alternativeText || '' }));

  // Dedupe images by filename (keep first occurrence). If name is empty, fall back to id.
  const dedupedImageFiles = (() => {
    const seen = new Set<string>();
    const out: any[] = [];
    for (const img of imageFiles) {
      const rawName = (img.name || '').toString();
      const key = rawName.trim().toLowerCase();
      if (key) {
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(img);
      } else {
        // no reliable name, use id to ensure uniqueness
        out.push(img);
      }
    }
    return out;
  })();

  const getImageSrc = (img: any, fallback: any) => {
    if (!img) return fallback;
    if (typeof img === 'string') return img;
    const url = strapiImageUrl(img);
    if (url) return url;
    if (img?.url) return strapiImageUrl(img.url);
    return fallback;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#13499d] to-[#0f1629] min-h-[220px] md:h-[288px]">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img alt="" className="w-full h-full object-cover" src={imgContainer} />
        </motion.div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-[1200px] py-12 md:py-0">
          <motion.h1 
            className="text-3xl md:text-5xl text-white mb-3 md:mb-4 text-right"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            الميديا
          </motion.h1>
          <motion.p 
            className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 text-right"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            مركز شامل للكتالوجات والأدلة والشهادات والأخبار التقنية
          </motion.p>
          
          {/* Search removed from media page per request */}
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-[1200px]">
        {/* Tab List */}
        <motion.div 
          className="bg-white border border-[#d6d6d6] rounded-xl p-1 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-1">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-2 md:py-1.5 rounded-lg text-sm md:text-base transition-all ${
                  activeTab === tab.key
                    ? 'bg-[#13499d] text-white shadow-lg'
                    : 'text-[#303030] hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'catalogues' && (
            <motion.div
              key="catalogues"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {pdfFiles.length === 0 && !mediaLoading && (
                <div className="col-span-full text-center py-12">لا توجد كتالوجات PDF لعرضها حالياً.</div>
              )}

              {pdfFiles.map((file, index) => (
                <motion.div
                  key={file.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden border border-[#d6d6d6] group cursor-pointer"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                >
                  <div className="relative h-48 md:h-56 overflow-hidden flex items-center justify-center bg-gray-50">
                    {/* PDFs may not have a useful image; show a simple PDF badge or a fallback image */}
                    <div className="text-center">
                      <div className="text-sm text-[#13499d] mb-2">PDF</div>
                      <h3 className="text-lg text-[#303030] mb-4 text-right group-hover:text-[#13499d] transition-colors">{file.title}</h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="text-xs text-[#13499d] mb-2">كتالوج</div>
                    <h3 className="text-lg text-[#303030] mb-4 text-right group-hover:text-[#13499d] transition-colors">
                      {file.title}
                    </h3>
                    <motion.button 
                      onClick={() => window.open(file.url, '_blank')}
                      className="w-full bg-[#13499d] text-white py-2 rounded-md text-sm hover:bg-blue-800 transition-colors text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      تحميل PDF
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'news' && (
            <motion.div
              key="news"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden border border-[#d6d6d6] group cursor-pointer"
                  whileHover={{ x: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="relative w-full md:w-64 h-48 md:h-40 overflow-hidden rounded-lg flex-shrink-0">
                      <motion.img
                        src={getImageSrc(item.image, imgContainer)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    
                    <div className="flex-1 text-right">
                      <div className="text-xs text-[#13499d] mb-2">{item.date}</div>
                      <h3 className="text-xl text-[#303030] mb-3 group-hover:text-[#13499d] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#4a5565] mb-4">{item.short_description || item.excerpt}</p>
                      <motion.div 
                        className="text-[#13499d] text-sm flex items-center gap-2 justify-end"
                        whileHover={{ x: -5 }}
                      >
                        <span>اقرأ المزيد</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <path d="M10 4L6 8L10 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* 'manuals' tab removed — content not needed */}

          {activeTab === 'images' && (
            <motion.div
              key="images"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            >
              {mediaLoading && (
                <div className="col-span-full text-center py-12">جارٍ تحميل الصور...</div>
              )}

              {mediaError && (
                <div className="col-span-full text-center py-12 text-red-600">حدث خطأ أثناء جلب الصور.</div>
              )}

              {!mediaLoading && !mediaError && imageFiles.length === 0 && (
                <div className="col-span-full text-center py-12">لا توجد صور لعرضها حالياً.</div>
              )}

              {!mediaLoading && !mediaError && dedupedImageFiles.map((img, idx) => (
                <motion.div key={img.id || idx} variants={itemVariants} className="overflow-hidden rounded-md bg-white border border-[#e6e6e6]">
                  <button onClick={() => window.open(img.url, '_blank')} className="w-full h-full block">
                    <img src={img.url} alt={img.name || `image-${idx}`} className="w-full h-40 object-cover" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
