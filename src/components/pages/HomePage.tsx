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
    { number: '9+', label: 'شريك عالمي' },
    { number: '210+', label: 'مشروع مكتمل' },
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
      description: 'رفوف بحمولة خفيفة، متوسطة، وعالية لتلبية مختلف احتياجات الأوزان، مع حلول تخزين مناسبة للمخازن، المحلات التجارية، وحتى المصانع.',
      color: '#13499d',
      // user's SVG (converted to use currentColor so it can be colored via wrapper)
      iconSvg: (
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <g>
            <path d="M4.625 4.566 L 1.563 7.629 1.563 199.920 L 1.563 392.210 4.236 395.129 L 6.910 398.047 33.374 398.271 L 59.839 398.496 62.525 396.685 C 66.901 393.737,67.163 392.568,67.176 375.977 L 67.188 360.938 200.000 360.938 L 332.813 360.938 332.813 376.574 L 332.813 392.210 335.486 395.129 L 338.160 398.047 364.624 398.271 L 391.089 398.496 393.775 396.685 C 395.253 395.690,396.902 394.007,397.441 392.945 C 398.219 391.412,398.381 351.625,398.233 199.038 L 398.047 7.061 395.494 4.507 L 392.941 1.953 365.939 1.728 L 338.937 1.504 335.875 4.566 L 332.813 7.629 332.813 101.471 L 332.813 195.313 321.895 195.313 L 310.978 195.312 310.762 154.311 L 310.547 113.310 307.994 110.757 L 305.441 108.203 283.209 107.974 L 260.978 107.744 260.762 66.777 L 260.547 25.810 257.993 23.257 L 255.439 20.703 200.299 20.492 L 145.160 20.282 142.111 23.330 L 139.063 26.379 139.063 67.096 L 139.063 107.813 117.096 107.813 L 95.129 107.813 92.096 110.846 L 89.062 113.879 89.063 154.596 L 89.063 195.313 78.134 195.313 L 67.206 195.312 67.001 101.187 L 66.797 7.061 64.244 4.507 L 61.691 1.953 34.689 1.728 L 7.687 1.504 4.625 4.566 M45.313 200.000 L 45.313 376.563 34.375 376.563 L 23.438 376.563 23.438 200.000 L 23.438 23.438 34.375 23.438 L 45.313 23.438 45.313 200.000 M376.563 200.000 L 376.563 376.563 365.625 376.563 L 354.688 376.563 354.688 200.000 L 354.688 23.438 365.625 23.438 L 376.563 23.438 376.563 200.000 M189.063 51.574 L 189.063 60.960 191.684 63.821 C 196.582 69.165,206.758 67.981,209.938 61.695 C 210.544 60.497,210.919 56.435,210.926 50.977 L 210.938 42.188 225.000 42.188 L 239.063 42.188 239.063 75.000 L 239.063 107.813 200.000 107.813 L 160.938 107.813 160.938 75.000 L 160.938 42.188 175.000 42.188 L 189.063 42.188 189.063 51.574 M139.063 139.074 L 139.063 148.460 141.684 151.321 C 146.582 156.665,156.758 155.481,159.938 149.195 C 160.544 147.997,160.919 143.935,160.926 138.477 L 160.938 129.688 175.000 129.688 L 189.063 129.688 189.063 162.500 L 189.063 195.313 150.000 195.313 L 110.938 195.313 110.938 162.500 L 110.938 129.688 125.000 129.688 L 139.063 129.688 139.063 139.074 M239.063 139.074 L 239.063 148.460 241.684 151.321 C 246.582 156.665,256.758 155.481,259.938 149.195 C 260.544 147.997,260.919 143.935,260.926 138.477 L 260.938 129.688 275.000 129.688 L 289.063 129.688 289.063 162.500 L 289.063 195.313 250.000 195.313 L 210.938 195.313 210.938 162.500 L 210.938 129.688 225.000 129.688 L 239.063 129.688 239.063 139.074 M332.813 278.125 L 332.813 339.063 321.895 339.063 L 310.978 339.063 310.762 298.061 L 310.547 257.060 307.993 254.507 L 305.439 251.953 200.292 251.749 L 95.145 251.546 92.104 254.587 L 89.063 257.629 89.063 298.346 L 89.063 339.063 78.125 339.063 L 67.188 339.063 67.188 278.125 L 67.188 217.188 200.000 217.188 L 332.813 217.188 332.813 278.125 M139.063 282.824 L 139.063 292.210 141.684 295.071 C 146.582 300.415,156.758 299.231,159.938 292.945 C 160.544 291.747,160.919 287.685,160.926 282.227 L 160.938 273.438 175.000 273.438 L 189.063 273.438 189.063 306.250 L 189.063 339.063 150.000 339.063 L 110.938 339.063 110.938 306.250 L 110.938 273.438 125.000 273.438 L 139.063 273.438 139.063 282.824 M239.063 282.824 L 239.063 292.210 241.684 295.071 C 246.582 300.415,256.758 299.231,259.938 292.945 C 260.544 291.747,260.919 287.685,260.926 282.227 L 260.938 273.438 275.000 273.438 L 289.063 273.438 289.063 306.250 L 289.063 339.063 250.000 339.063 L 210.938 339.063 210.938 306.250 L 210.938 273.438 225.000 273.438 L 239.063 273.438 239.063 282.824" stroke="none" fill="currentColor" fillRule="evenodd"/>
          </g>
        </svg>
      ),
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
                الشركة الاولى في مجال المناولة في ليبيا
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6">
                حلول متقدمة للمناولة و التخزين و معدات الورش
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-blue-50 text-lg md:text-2xl leading-relaxed max-w-3xl"
            >
              نوفر أحدث معدات المناولة والأنظمة المتقدمة للتخزين، إضافة إلى مجموعة شاملة من معدات الورش وخدمات الصيانة والدعم الفني. نخدم مختلف القطاعات في ليبيا، بما في ذلك المخازن، المحال التجارية، وورش العمل.
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
              نقدم حلولاً شاملة ومتكاملة تلبي احتياجات جميع القطاعات الصناعية والتجارية والخدمية
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
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto border-2 bg-[#f6f6f6]"
                  style={{ borderColor: service.color }}
                >
                  {service.iconSvg ? (
                    <div className="w-10 h-10 text-[#13499d]">{service.iconSvg}</div>
                  ) : service.iconImage ? (
                    <img src={service.iconImage} alt={`${service.title} icon`} className="w-10 h-10 object-contain" />
                  ) : (
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
                  )}
                </div>

                <h3 className="text-2xl mb-4 text-center" style={{ color: service.color }}>
                  {service.title}
                </h3>

                <p className="text-lg text-[#303030] text-center mb-6 leading-relaxed min-h-[88px]">
                  {service.description}
                </p>

                {/* Button removed per request */}
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
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-[#d6d6d6]"
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
            <motion.a
              href="https://wa.me/218911286734"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فتح محادثة واتساب"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f6f6f6] border-2 border-[#13499d] text-[#13499d] px-8 md:px-12 py-3 md:py-4 rounded-md hover:bg-[#13499d] hover:text-white transition-all inline-flex items-center gap-3 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="text-base md:text-lg">اتصل بنا الآن</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
