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

const products = [
  {
    id: 'storage',
    title: 'أنظمة التخزين والرفوف',
    description: 'رفوف ثابتة ومتحركة وحلول تخزين عالية الكثافة',
    image: imgImageWithFallback4,
    icon: 'storage'
  },
  {
    id: 'workshop',
    title: 'معدات الورش والمصانع',
    description: 'طاولات عمل، خزائن عدد، وأدوات تنظيم الورش',
    image: imgImageWithFallback3,
    icon: 'workshop'
  },
  {
    id: 'handling',
    title: 'معدات المناولة والرفع',
    description: 'رافعات شوكية، رافعات يدوية، وأدوات الرفع',
    image: imgImageWithFallback2,
    icon: 'handling'
  },
  {
    id: 'safety',
    title: 'معدات السلامة والأمان',
    description: 'حواجز أمان، معدات حماية، وأنظمة سلامة',
    image: imgImageWithFallback5,
    icon: 'safety'
  },
  {
    id: 'logistics',
    title: 'أنظمة اللوجستيات',
    description: 'حلول النقل الداخلي وأنظمة الفرز',
    image: imgImageWithFallback6,
    icon: 'logistics'
  },
  {
    id: 'accessories',
    title: 'الإكسسوارات والقطع',
    description: 'قطع غيار، ملحقات، وأدوات مساعدة',
    image: imgImageWithFallback4,
    icon: 'accessories'
  }
];

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredProducts = products.filter(product =>
    product.title.includes(searchTerm) || product.description.includes(searchTerm)
  );

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
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              className="bg-white rounded-xl overflow-hidden border border-[#d6d6d6] text-right group"
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
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,22,41,0.6)] to-transparent"></div>
                
                {/* Icon Button */}
                <motion.div 
                  className="absolute top-4 right-4 bg-[#f6f6f6] border border-[#303030] rounded-full w-12 h-12 flex items-center justify-center text-[#303030] group-hover:bg-[#13499d] group-hover:border-[#13499d] group-hover:text-white transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    {getIconPath(product.icon)}
                  </svg>
                </motion.div>

                {/* Product Number Badge */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </div>
              
              <div className="p-4 md:p-6">
                <motion.h3 
                  className="text-[#303030] text-lg md:text-xl mb-2 text-right group-hover:text-[#13499d] transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {product.title}
                </motion.h3>
                <motion.p 
                  className="text-[#4a5565] text-sm md:text-base mb-4 text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {product.description}
                </motion.p>
                
                {/* View More Link */}
                <motion.div 
                  className="flex items-center justify-end gap-2 text-[#13499d] group-hover:gap-3 transition-all"
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

        {filteredProducts.length === 0 && (
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
