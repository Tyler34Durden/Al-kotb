import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import svgPaths from "../../imports/svg-6r4kubp1do";
import imgContainer from "figma:asset/c94194fcfa8aab9c92709746c4c51f36af118af5.png";
import imgWhyChoose from "figma:asset/129c758954eacfc216583a48589e9f2bbe3cb934.png";

export function HomePage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { number: '24/7', label: 'دعم فني' },
    { number: '50+', label: 'شريك عالمي' },
    { number: '500+', label: 'مشروع مكتمل' },
    { number: '15+', label: 'سنة من الخبرة' },
  ];

  const services = [
    {
      title: 'الصيانة والدعم',
      description: 'صيانة دورية وطارئة، قطع غيار أصلية، وعقود صيانة شاملة مع فريق فني متخصص',
      color: '#ffc00e',
      iconPaths: [svgPaths.p1a298880, svgPaths.p3573b4c0],
    },
    {
      title: 'أنظمة التخزين',
      description: 'رفوف ثابتة ومتحركة، أنظمة تخزين عالية الكثافة، وحلول مخصصة للمستودعات',
      color: '#13499d',
      iconPaths: [svgPaths.pb3cc680, 'M20 36.6667V20', svgPaths.p1a5a0b80, 'M12.5 7.1167L27.5 15.7'],
    },
    {
      title: 'معدات المناولة',
      description: 'رافعات شوكية، معدات السحب، ونقالات البضائع من أفضل العلامات التجارية العالمية',
      color: '#303030',
      iconPaths: [svgPaths.p35776f00, 'M25 30H15', svgPaths.pec82200, svgPaths.p38dd7b00, svgPaths.p2c190400],
    },
  ];

  const sectors = [
    { name: 'البناء والتشييد', route: '/solutions/construction' },
    { name: 'النفط والغاز', route: '/solutions/oil-gas' },
    { name: 'الشحن واللوجستيات', route: '/solutions/logistics' },
    { name: 'الطيران المدني', route: '/solutions/aviation' },
    { name: 'الخدمات البحرية', route: '/solutions' },
    { name: 'المستودعات', route: '/solutions/retail-warehouse' },
    { name: 'المتاجر الكبرى', route: '/solutions/retail-warehouse' },
    { name: 'المصانع والإنتاج', route: '/solutions/manufacturing' },
  ];

  const features = [
    {
      title: 'جودة معتمدة عالمياً',
      description: 'شهادات ISO 9001:2015 وضمانات شاملة على جميع المنتجات والخدمات',
      iconPaths: [svgPaths.p3eeeaa80, svgPaths.p2f14bd80],
      borderColor: '#303030',
    },
    {
      title: 'فريق خبراء متخصص',
      description: 'مهندسون وفنيون مدربون على أحدث التقنيات والمعايير العالمية',
      iconPaths: [svgPaths.p1d820380, svgPaths.p27451300, svgPaths.p2981fe00, svgPaths.p161d4800],
      borderColor: '#13499d',
    },
    {
      title: 'دعم على مدار الساعة',
      description: 'خدمة عملاء متاحة 24/7 مع استجابة سريعة لحالات الطوارئ',
      iconPaths: [svgPaths.p3f3d8e00],
      borderColor: '#ffc00e',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f6f6]" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#13499d] to-[#0f1629] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src={imgContainer}
            alt=""
            className="absolute w-full h-[338.44%] left-0 top-[-149.62%] max-w-none object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-24 lg:py-28 relative max-w-[1202px]">
          <div className="max-w-4xl mr-0 md:ml-auto text-right">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block bg-[#ffc00e] rounded-md px-5 md:px-6 py-2 md:py-2.5 mb-6 md:mb-8 shadow-lg"
            >
              <p className="text-[#303030] text-base md:text-lg">
                الشركة الرائدة في معدات المناولة
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6">
                حلول متقدمة لمعدات
                <br />
                المناولة والتخزين
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-blue-50 text-lg md:text-2xl leading-relaxed max-w-3xl"
            >
              نوفر أحدث المعدات الصناعية وأنظمة التخزين المتطورة مع خدمات الصيانة والدعم الفني الشامل لجميع القطاعات في ليبيا.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f6f6f6] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-24 max-w-[1202px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-5xl md:text-7xl text-[#303030] mb-3 md:mb-4">
                  {stat.number}
                </p>
                <p className="text-lg md:text-xl text-[#303030]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f6f6f6] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-[1202px]">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <div className="relative inline-block mb-4 md:mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#303030]">
                خدماتنا المتميزة
              </h2>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-24 md:w-32 h-1 bg-[#ffc00e]"></div>
            </div>
            <p className="text-xl md:text-2xl text-[#303030] mt-6">
              نقدم حلولاً شاملة ومتكاملة تلبي احتياجات جميع القطاعات الصناعية والتجارية
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white/80 rounded-xl p-6 md:p-8 shadow-lg border border-[#d6d6d6] hover:shadow-2xl transition-all relative"
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto border-2"
                  style={{ borderColor: service.color, backgroundColor: '#f6f6f6' }}
                >
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    {service.iconPaths.map((path, i) => (
                      <path
                        key={i}
                        d={path}
                        stroke={service.color}
                        strokeWidth="3.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ))}
                  </svg>
                </div>

                <h3 className="text-2xl mb-4 text-center" style={{ color: service.color }}>
                  {service.title}
                </h3>

                <p className="text-lg text-[#303030] text-center mb-6 leading-relaxed min-h-[88px]">
                  {service.description}
                </p>

                <motion.button
                  onClick={() => navigate('/services')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full border-2 rounded-md py-3 transition-all flex items-center justify-center"
                  style={{
                    borderColor: service.color,
                    color: service.color,
                    backgroundColor: 'white',
                  }}
                >
                  <span className="text-lg">تفاصيل أكثر</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="bg-[#f6f6f6] py-12 md:py-15">
        <div className="container mx-auto px-4 md:px-6 lg:px-24 max-w-[1202px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-[#303030] mb-4">
              القطاعات التي نخدمها
            </h2>
            <p className="text-lg md:text-xl text-[#303030]">
              خبرة متخصصة في مختلف المجالات الصناعية والتجارية
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                onClick={() => navigate(sector.route)}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#d6d6d6]"
              >
                <p className="text-base text-[#303030] text-center">
                  {sector.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f6f6f6] py-0 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-24 max-w-[1202px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl order-2 lg:order-1"
            >
              <div className="relative aspect-square">
                <img
                  src={imgWhyChoose}
                  alt="لماذا تختار القطب"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-[rgba(15,22,41,0.2)] rounded-lg"></div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl text-[#303030] mb-8 text-right">
                لماذا تختار القطب؟
              </h2>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-right"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg text-[#303030] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base text-[#303030] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 bg-white"
                      style={{ borderColor: feature.borderColor }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        {feature.iconPaths.map((path, i) => (
                          <path
                            key={i}
                            d={path}
                            stroke={feature.borderColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ))}
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f6f6f6] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-24 max-w-[1202px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[#303030] mb-6">
              هل أنت مستعد للارتقاء بعملك؟
            </h2>
            <p className="text-lg md:text-xl text-[#303030] mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص لاحتياجاتك
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f6f6f6] border-2 border-[#13499d] text-[#13499d] px-8 md:px-12 py-3 md:py-4 rounded-md hover:bg-[#13499d] hover:text-white transition-all inline-flex items-center gap-3 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="text-base md:text-lg">اتصل بنا الآن</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
