import { motion } from 'motion/react';
import { Button } from '../ui/button';
import svgPaths from "../../imports/svg-iesjveorhc";
import imgContainer from "figma:asset/03f677eaac17d26b0938bff53039ae1d04a0d40c.png";
import { Phone, Users } from 'lucide-react';

const services = [
  {
    id: 'delivery',
    title: 'التوريد والتركيب والتشغيل',
    description: 'خدمة شاملة من التوريد حتى التشغيل في جميع أنحاء ليبيا',
    icon: 'delivery',
    features: [
      'توريد من المصانع مباشرة',
      'تركيب بأيدي فنيين مختصين',
      'تدريب الفريق على التشغيل',
      'ضمان شامل لمدة عامين',
      'تغطية جميع المدن الليبية'
    ]
  },
  {
    id: 'maintenance',
    title: 'الصيانة والدعم الفني',
    description: 'صيانة دورية وطارئة مع عقود صيانة مرنة',
    icon: 'maintenance',
    features: [
      'صيانة دورية مجدولة',
      'استجابة سريعة للطوارئ',
      'فريق فني متاح 24/7',
      'تقارير صيانة مفصلة',
      'ضمان على جميع الأعمال'
    ]
  },
  {
    id: 'spares',
    title: 'توريد قطع الغيار الأصلية',
    description: 'مخزون دائم من قطع الغيار الأصلية مع ضمان الجودة',
    icon: 'spares',
    features: [
      'قطع غيار أصلية 100%',
      'مخزون دائم ومتجدد',
      'توصيل سريع لجميع المدن',
      'ضمان شامل على القطع',
      'أسعار تنافسية'
    ]
  },
  {
    id: 'consulting',
    title: 'الاستشارات التقنية والتصميم',
    description: 'تصميم المخازن والورش وتحسين مسارات الحركة وأحمال الرفوف',
    icon: 'consulting',
    features: [
      'تصميم تخطيط المستودعات',
      'تحسين مسارات الحركة',
      'حساب أحمال الرفوف',
      'دراسات الجدوى',
      'تدريب الموظفين'
    ]
  }
];

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
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-[#d6d6d6] p-6 md:p-8"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 justify-end">
                  <div className="text-right">
                    <h3 className="text-[#303030] text-lg md:text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#303030] text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="bg-[#f6f6f6] border border-[#303030] rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {getServiceIcon(service.icon)}
                  </motion.div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-3 text-right"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-[#4a5565] text-sm md:text-base">{feature}</span>
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
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-[#13499d] hover:bg-blue-800 text-white h-10 rounded-md">
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 16 16">
                      <g clipPath="url(#clip0_122_816)">
                        <path d={svgPaths.p26187580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                      <defs>
                        <clipPath id="clip0_122_816">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </svg>
                    طلب الخدمة الآن
                  </Button>
                </motion.div>
              </motion.div>
            ))}
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-[#fb2c36] text-[#fb2c36] hover:bg-[#fb2c36] hover:text-white h-10 px-6"
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
                  اتصل بنا الآن
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
