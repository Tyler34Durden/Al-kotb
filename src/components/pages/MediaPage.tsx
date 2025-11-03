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
import imgNewsImage1 from "figma:asset/fe961dfa1eae5391f7dc8957c77aee6811709f2e.png";
import imgNewsImage2 from "figma:asset/a16eb36c62541600ea9a6df9875cf4d8f39b3358.png";
import imgNewsImage3 from "figma:asset/d1b85c5576554625982a48b25a3caf306992dca1.png";

export function MediaPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('catalogues');
  const [searchTerm, setSearchTerm] = useState('');

  const catalogues = [
    { id: 1, title: 'كتالوج الرافعات الشوكية 2024', category: 'معدات المناولة', image: imgCard3, pages: 48 },
    { id: 2, title: 'دليل أنظمة التخزين', category: 'التخزين', image: imgCard4, pages: 32 },
    { id: 3, title: 'معدات الورش الصناعية', category: 'الورش', image: imgCard5, pages: 24 },
    { id: 4, title: 'حلول اللوجستيات', category: 'اللوجستيات', image: imgCard6, pages: 36 },
    { id: 5, title: 'معدات السلامة', category: 'السلامة', image: imgCard7, pages: 20 },
    { id: 6, title: 'قطع الغيار الأصلية', category: 'قطع الغيار', image: imgCard8, pages: 56 }
  ];

  const news = [
    { id: 1, title: 'إطلاق خط إنتاج جديد من الرافعات الكهربائية', date: '15 أكتوبر 2024', image: imgNewsImage1, excerpt: 'نعلن عن إطلاق سلسلة جديدة من الرافعات الشوكية الكهربائية الصديقة للبيئة' },
    { id: 2, title: 'توقيع شراكة استراتيجية مع Toyota', date: '8 سبتمبر 2024', image: imgNewsImage2, excerpt: 'شراكة جديدة لتوفير أحدث التقنيات في معدات المناولة' },
    { id: 3, title: 'افتتاح مركز خدمة جديد في بنغازي', date: '22 أغسطس 2024', image: imgNewsImage3, excerpt: 'توسيع نطاق خدماتنا لتغطية أفضل في شرق ليبيا' }
  ];

  const tabs = [
    { key: 'catalogues', label: 'الكتالوجات' },
    { key: 'manuals', label: 'الأدلة' },
    { key: 'images', label: 'الصور' },
    { key: 'news', label: 'الأخبار' }
  ];

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
                  <path d="M17.5 17.5L13.8834 13.8834" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.pcddfd00} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </motion.svg>
              </div>
              <input 
                type="text" 
                placeholder="البحث في الموارد..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-0 outline-none text-white placeholder:text-[#bedbff] text-sm md:text-base w-full pr-2 pl-10"
              />
            </div>
          </motion.div>
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
              {catalogues.map((catalogue, index) => (
                <motion.div
                  key={catalogue.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden border border-[#d6d6d6] group cursor-pointer"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                >
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <motion.img
                      src={catalogue.image}
                      alt={catalogue.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <motion.div 
                      className="absolute bottom-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      {catalogue.pages} صفحة
                    </motion.div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <div className="text-xs text-[#13499d] mb-2">{catalogue.category}</div>
                    <h3 className="text-lg text-[#303030] mb-4 text-right group-hover:text-[#13499d] transition-colors">
                      {catalogue.title}
                    </h3>
                    <motion.button 
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
                        src={item.image}
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
                      <p className="text-[#4a5565] mb-4">{item.excerpt}</p>
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

          {(activeTab === 'manuals' || activeTab === 'images') && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <motion.div 
                className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-12 h-12 border-4 border-[#13499d] border-t-transparent rounded-full" />
              </motion.div>
              <h3 className="text-2xl text-gray-600 mb-2">قريباً</h3>
              <p className="text-gray-500">محتوى {tabs.find(t => t.key === activeTab)?.label} قيد ا��إعداد</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
