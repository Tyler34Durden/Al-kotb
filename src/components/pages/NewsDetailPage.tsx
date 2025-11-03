import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import imgNewsImage1 from "figma:asset/fe961dfa1eae5391f7dc8957c77aee6811709f2e.png";
import imgNewsImage2 from "figma:asset/a16eb36c62541600ea9a6df9875cf4d8f39b3358.png";
import imgNewsImage3 from "figma:asset/d1b85c5576554625982a48b25a3caf306992dca1.png";

const newsData = [
  { 
    id: '1', 
    title: 'إطلاق خط إنتاج جديد من الرافعات الكهربائية', 
    date: '15 أكتوبر 2024', 
    image: imgNewsImage1, 
    excerpt: 'نعلن عن إطلاق سلسلة جديدة من الرافعات الشوكية الكهربائية الصديقة للبيئة',
    content: `تفخر شركة القطب بالإعلان عن إطلاق سلسلة جديدة من الرافعات الشوكية الكهربائية التي تمثل قفزة نوعية في مجال معدات المناولة الصناعية. هذه السلسلة الجديدة تجمع بين الأداء العالي والكفاءة في استهلاك الطاقة مع الحفاظ على البيئة.

تتميز الرافعات الجديدة بتقنية البطاريات الليثيوم أيون المتطورة التي توفر أوقات تشغيل أطول وأوقات شحن أقصر مقارنة بالبطاريات التقليدية. كما تم تزويدها بأنظمة ذكية للتحكم في الطاقة تضمن الاستخدام الأمثل للطاقة المتاحة.

من أبرز المواصفات الفنية:
• قدرة رفع تتراوح من 1.5 إلى 5 طن
• ارتفاع رفع يصل إلى 6 أمتار
• نظام توجيه كهربائي متطور
• شاشة رقمية لعرض حالة المعدة
• نظام أمان متعدد المستويات

هذا الإطلاق يأتي ضمن استراتيجية القطب للتحول نحو الحلول الخضراء والمستدامة، ويعكس التزامنا بتوفير أحدث التقنيات لعملائنا في السوق الليبي.

نحن نؤمن بأن مستقبل الصناعة يكمن في الحلول النظيفة والفعالة، وهذه الرافعات الجديدة تمثل خطوة مهمة في هذا الاتجاه.`
  },
  { 
    id: '2', 
    title: 'توقيع شراكة استراتيجية مع Toyota', 
    date: '8 سبتمبر 2024', 
    image: imgNewsImage2, 
    excerpt: 'شراكة جديدة لتوفير أحدث التقنيات في معدات المناولة',
    content: `في خطوة استراتيجية تعزز من مكانة شركة القطب في السوق الليبي، تم توقيع اتفاقية شراكة رسمية مع شركة Toyota Material Handling، الرائدة عالمياً في مجال معدات المناولة الصناعية.

تهدف هذه الشراكة إلى توفير أحدث المعدات والتقنيات لعملائنا، بالإضافة إلى نقل الخبرات والمعرفة التقنية المتقدمة. ستتيح لنا هذه الشراكة الوصول إلى أحدث منتجات Toyota وتوفير قطع الغيار الأصلية بشكل أسرع وأكثر كفاءة.

تشمل الاتفاقية:
• حقوق التوزيع الحصرية لمنتجات Toyota في ليبيا
• برامج تدريب متخصصة للفنيين والمهندسين
• دعم فني مباشر من مهندسي Toyota
• ضمان توفر قطع الغيار الأصلية
• نقل التكنولوجيا وأفضل الممارسات العالمية

صرح المدير التنفيذي للقطب: "هذه الشراكة تمثل نقلة نوعية لشركتنا وستمكننا من تقديم خدمات ومنتجات بمستوى عالمي لعملائنا. نحن فخورون بأن نكون الشريك المعتمد لعلامة تجارية عالمية بحجم Toyota في السوق الليبي."

نتطلع إلى أن تسهم هذه الشراكة في رفع مستوى الخدمات اللوجستية والصناعية في ليبيا.`
  },
  { 
    id: '3', 
    title: 'افتتاح مركز خدمة جديد في بنغازي', 
    date: '22 أغسطس 2024', 
    image: imgNewsImage3, 
    excerpt: 'توسيع نطاق خدماتنا لتغطية أفضل في شرق ليبيا',
    content: `في إطار خطة التوسع الاستراتيجية لشركة القطب، تم افتتاح مركز خدمة متطور جديد في مدينة بنغازي، ليكون أحدث إضافة إلى شبكة مراكز الخدمة المنتشرة في ليبيا.

يأتي هذا المركز الجديد تلبية للطلب المتزايد على خدماتنا في المنطقة الشرقية، ويعكس التزامنا بتقديم خدمات ما بعد البيع على أعلى مستوى من الجودة والكفاءة لجميع عملائنا.

المركز الجديد يقدم:
• خدمات الصيانة الدورية والطارئة
• قطع غيار أصلية متوفرة بشكل دائم
• فريق من الفنيين المعتمدين والمدربين
• خدمة عملاء متميزة
• ورشة مجهزة بأحدث المعدات والأدوات

يمتد المركز على مساحة 2000 متر مربع ويضم ورشة عمل حديثة مجهزة بأحدث المعدات، بالإضافة إلى مستودع كبير لقطع الغيار يضمن توفر جميع القطع اللازمة.

تم تدريب الفريق الفني في المركز على أعلى المستويات، حيث تلقوا تدريباً متخصصاً على أحدث تقنيات الصيانة والإصلاح لجميع أنواع معدات المناولة.

نحن ملتزمون بتوفير أفضل الخدمات لعملائنا في جميع أنحاء ليبيا، وهذا المركز الجديد هو دليل على هذا الالتزام.`
  }
];

export function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsData.find(n => n.id === id);

  if (!news) {
    return (
      <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h2 className="text-2xl text-[#303030] mb-4">الخبر غير موجود</h2>
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

            {/* Share Section */}
            <motion.div
              className="mt-10 pt-6 border-t border-[#d6d6d6]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="text-sm text-[#303030]">
                  شارك هذا الخبر
                </div>
                <div className="flex gap-3">
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#13499d] text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#13499d] text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#13499d] text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Related News Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-2xl text-[#303030] mb-6 text-right">أخبار ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData
              .filter(n => n.id !== news.id)
              .slice(0, 2)
              .map((relatedNews, index) => (
                <motion.div
                  key={relatedNews.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#d6d6d6] cursor-pointer group"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                  onClick={() => navigate(`/news/${relatedNews.id}`)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedNews.image}
                      alt={relatedNews.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-[#13499d] mb-2">{relatedNews.date}</div>
                    <h3 className="text-[#303030] group-hover:text-[#13499d] transition-colors text-right">
                      {relatedNews.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
