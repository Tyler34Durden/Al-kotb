import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { strapiFetch, strapiImageUrl } from '../../lib/strapi';

export function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // related news removed; no longer fetching all news here

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        // Fetch single news item by id. Include populate to get image details if available.
        const res = await strapiFetch(`/api/news/${encodeURIComponent(String(id))}?populate=*`);
        // Strapi single response may be { data: { id, attributes: { ... } } }
        const data = res && res.data ? res.data : res;
        let item: any = null;
        if (data) {
          if (data.attributes) {
            item = { id: data.id, ...data.attributes };
          } else {
            item = data;
          }
        }
        if (!item) {
          setNews(null);
        } else {
          // normalize image URL
          const imageUrl = strapiImageUrl(item.image || item.attributes?.image || item.image?.data || item.image?.url || item.image);
          setNews({
            id: item.id,
            title: item.title || item.attributes?.title,
            date: item.date || item.attributes?.date,
            content: item.content || item.description || item.attributes?.content || item.attributes?.description || item.attributes?.excerpt || item.excerpt,
            image: imageUrl,
            slug: item.slug || item.attributes?.slug,
            raw: item,
          });
        }
      } catch (e: any) {
        setError(e?.message || 'Failed to load news');
        setNews(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center" dir="rtl">
        <div className="text-center text-gray-600">جارٍ تحميل الخبر...</div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h2 className="text-2xl text-[#303030] mb-4">الخبر غير موجود</h2>
          <div className="text-sm text-red-600 mb-4">{error}</div>
          <button
            onClick={() => navigate('/media')}
            className="text-[#13499d] hover:underline"
          >
            العودة إلى الميديا
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f6f6] min-h-screen" dir="rtl">
      {/* Hero Section with Back Button */}
      <div className="relative bg-gradient-to-b from-[#13499d] to-[#0f1629] min-h-[180px]">
        <div className="container mx-auto px-4 py-8 max-w-[1200px]">
          <motion.button
            onClick={() => navigate('/media')}
            className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="w-5 h-5" />
            <span>العودة إلى الميديا</span>
          </motion.button>

          <motion.div
            className="text-xs text-blue-200 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {news.date}
          </motion.div>
          
          <motion.h1
            className="text-2xl md:text-4xl text-white text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {news.title}
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-[900px]">
        <motion.div
          className="bg-white rounded-xl overflow-hidden border border-[#d6d6d6] shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Image */}
          {news.image && (
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
              <motion.img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          )}

          {/* Text Content */}
          <div className="p-6 md:p-10">
            <motion.div
              className="text-[#4a5565] leading-relaxed whitespace-pre-line text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {news.content}
            </motion.div>

            
          </div>
        </motion.div>

        {/* Related news removed per request */}
      </div>
    </div>
  );
}
