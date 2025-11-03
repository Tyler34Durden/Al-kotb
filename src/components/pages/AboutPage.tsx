import image_5064a525645497a8351b352c2f1dddfcb17222d0 from 'figma:asset/5064a525645497a8351b352c2f1dddfcb17222d0.png';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-lvpjn535zg";
import svgPathsCert from "../../imports/svg-ug1bpwsdnm";
import imgContainer from "figma:asset/b9bb298ad1634940e24fe8e9328f50ccbf668aaf.png";
import imgImageWithFallback2 from "figma:asset/6a6aac02d7ce97285caf02c874b49e2286ff4655.png";
import imgAboutPage from "figma:asset/62f71e141b64a649d8efc406dab0c567365a0873.png";
import imgAboutPage1 from "figma:asset/637ac302ddbde63be29b1f874bf5f3b43992e213.png";
import imgContainer1 from "figma:asset/03f24e940b4e36dac18009c27d93007422853ff2.png";
import { Award, Users, Clock, TrendingUp, Target, Eye, Heart, Lightbulb } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { value: '12+', label: 'سنة خبرة', icon: Award },
    { value: '500+', label: 'مشروع ناجح', icon: TrendingUp },
    { value: '24/7', label: 'دعم فني', icon: Clock },
    { value: '50+', label: 'عميل راضي', icon: Users }
  ];

  const values = [
    { icon: Heart, title: 'الجودة', description: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا' },
    { icon: Target, title: 'الموثوقية', description: 'نبني علاقات طويلة الأمد مع عملائنا مبنية على الثقة' },
    { icon: Lightbulb, title: 'الابتكار', description: 'نواكب أحدث التقنيات والحلول في مجال المعدات الصناعية' },
    { icon: Users, title: 'خدمة العملاء', description: 'نضع احتياجات عملائنا في صدارة أولوياتنا' }
  ];

  return (
    <div className="bg-[#f6f6f6] min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-[450px] md:h-[588px] bg-gradient-to-b from-[#13499d] to-[#0f1629] overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={imgContainer} 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        <div className="relative container mx-auto px-4 max-w-[1200px] h-full flex items-center py-12 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* Right Side - Content */}
            <motion.div 
              className="text-right order-2 lg:order-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-white text-3xl md:text-5xl mb-4 md:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                من نحن
              </motion.h1>
              <motion.p 
                className="text-[#f6f6f6] text-base md:text-xl leading-relaxed mb-4 md:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                شركة القطب للمعدات الصناعية - رائدون في توفير حلول المعدات الصناعية المتقدمة في ليبيا
              </motion.p>
              <motion.p 
                className="text-[#f6f6f6] text-sm md:text-lg leading-relaxed mb-6 md:mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                منذ تأسيسها عام 2012، تسعى شركة القطب إلى تقديم أفضل المعدات الصناعية والخدمات المتميزة لعملائها في جميع أنحاء ليبيا.
              </motion.p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-[rgba(255,255,255,0.2)] backdrop-blur-sm rounded-[8px] p-3 md:p-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.3)'
                    }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                    </motion.div>
                    <p className="text-white text-xl md:text-2xl mb-1">{stat.value}</p>
                    <p className="text-[#f6f6f6] text-xs md:text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Left Side - Image */}
            <motion.div 
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={imgImageWithFallback2} 
                  alt="شركة القطب" 
                  className="w-full h-full object-contain object-center"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div 
              className="text-right w-full md:max-w-[440px] order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3 justify-end mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-[#0f1629] text-2xl md:text-3xl">
                  رسالتنا
                </h2>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Target className="w-8 h-8 text-[#13499d]" />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-[#7f7f7f] text-base md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                نسعى إلى تزويد عملائنا بأفضل المعدات الصناعية والحلول المبتكرة التي تلبي احتياجاتهم وتساهم في نجاح أعمالهم. نلتزم بتقديم خدمات متميزة تتميز بالجودة والموثوقية والكفاءة العالية.
              </motion.p>
            </motion.div>
            <motion.div 
              className="w-full md:w-[346px] h-64 md:h-[296px] rounded-lg overflow-hidden shadow-lg order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <img 
                src={imgAboutPage} 
                alt="رسالتنا" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-12 md:py-16 border-t border-[#d6d6d6]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-[346px] h-64 md:h-[296px] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img 
                src={imgAboutPage1} 
                alt="رؤيتنا" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="text-right w-full md:max-w-[440px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3 justify-end mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-[#0f1629] text-2xl md:text-3xl">
                  رؤيتنا
                </h2>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Eye className="w-8 h-8 text-[#13499d]" />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-[#7f7f7f] text-base md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                أن نكون الشريك الأول والأكثر موثوقية في مجال المعدات الصناعية في ليبيا، ونساهم في تطوير القطاع الصناعي من خلال توفير حلول مبتكرة وخدمات متميزة تلبي أعلى المعايير العالمية.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f6f6f6] py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0f1629] text-3xl md:text-4xl mb-4">قيمنا الأساسية</h2>
            <p className="text-[#7f7f7f] text-lg md:text-xl max-w-3xl mx-auto">
              المبادئ التي نعتمد عليها في تقديم خدماتنا المتميزة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#13499d]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-[#13499d]" />
                </motion.div>
                <h3 className="text-[#0f1629] text-xl mb-3">{value.title}</h3>
                <p className="text-[#7f7f7f] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure Section */}
      <section className="bg-[#f6f6f6] py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0f1629] text-3xl md:text-4xl">الهيكل الإداري</h2>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-6 md:p-12 shadow-lg max-w-[900px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Union President */}
            <motion.div
              className="relative flex flex-col items-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="bg-[#003366] text-white rounded-xl px-8 py-4 text-center min-w-[280px] md:min-w-[384px]"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,51,102,0.3)" }}
              >
                <p className="text-lg md:text-xl">رئيس الشركة</p>
              </motion.div>
              <div className="w-[4px] h-8 bg-[#d1d5dc] mt-4" />
            </motion.div>

            {/* Board of Directors */}
            <motion.div
              className="relative flex flex-col items-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="bg-[seagreen] text-white rounded-xl px-8 py-4 text-center min-w-[280px] md:min-w-[384px]"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(46,125,50,0.3)" }}
              >
                <p className="text-lg md:text-xl">مجلس الإدارة</p>
              </motion.div>
              <div className="w-[4px] h-8 bg-[#d1d5dc] mt-4" />
            </motion.div>

            {/* Departments */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {['القسم المالي', 'القسم الفني', 'قسم العضوية'].map((dept, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-[#d6d6d6] rounded-xl px-4 py-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    borderColor: '#13499d',
                    boxShadow: "0 4px 12px rgba(19,73,157,0.2)"
                  }}
                >
                  <p className="text-neutral-950">{dept}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0f1629] text-3xl md:text-4xl mb-4">الشهادات والضمانات</h2>
            <p className="text-[#4a5565] text-lg md:text-xl">التزامنا بأعلى معايير الجودة والأمان</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {[
              { title: 'ISO 9001:2015', subtitle: 'نظم إدارة الجودة' },
              { title: 'ISO 14001:2015', subtitle: 'نظم الإدارة البيئية' },
              { title: 'OHSAS 18001', subtitle: 'السلامة والصحة المهنية' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-[rgba(15,22,41,0.2)] rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ 
                  y: -10,
                  borderColor: '#13499d',
                  boxShadow: "0 12px 24px rgba(19,73,157,0.2)"
                }}
              >
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 mx-auto mb-6 bg-[#f6f6f6] rounded-full flex items-center justify-center border border-[#303030]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <path 
                      d={svgPathsCert.p8f03b40} 
                      stroke="#303030" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2.66667" 
                    />
                    <path 
                      d={svgPathsCert.p3fb33600} 
                      stroke="#303030" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2.66667" 
                    />
                  </svg>
                </motion.div>

                {/* Title */}
                <h3 className="text-[#0f1629] text-xl mb-2">{cert.title}</h3>
                <p className="text-[#4a5565] text-sm mb-4">{cert.subtitle}</p>

                {/* Badge */}
                <motion.div 
                  className="inline-block bg-[#13499d] text-[#f6f6f6] px-4 py-1.5 rounded-md text-xs"
                  whileHover={{ scale: 1.05 }}
                >
                  صالح حتى 2025
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
