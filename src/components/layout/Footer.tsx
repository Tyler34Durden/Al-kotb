import image_8dd423daeb00aecef50c9197c8039170e2802c86 from 'figma:asset/8dd423daeb00aecef50c9197c8039170e2802c86.png';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import imgFooter from "figma:asset/6a6aac02d7ce97285caf02c874b49e2286ff4655.png";

export function Footer() {
  const services = [
    'التوريد والتركيب',
    'الصيانة والدعم الفني',
    'قطع الغيار الأصلية',
    'الاستشارات التقنية',
    'التدريب المتخصص'
  ];

  const quickLinks = [
    'المنتجات',
    'الحلول',
    'الخدمات',
    'المشاريع',
    // removed 'الشركاء' per request
  ];

  return (
    <footer className="bg-[#0f1629] text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-[1200px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-amber-500 text-xl mb-6">معلومات التواصل</h3>
            
            <div className="space-y-4 flex flex-col items-center md:items-end">
              {/* Address */}
              <div className="flex flex-row-reverse items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-blue-50 text-sm text-center md:text-left">
                  <p>طرابلس قصر بن غشير وادي الربيع</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-row-reverse items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="tel:+218911286734" dir="ltr" className="text-blue-50 hover:text-amber-500 transition-colors text-sm">
                    +218 91 128 6734
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-row-reverse items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:Alkotobcompany@gmail.com" className="text-blue-50 hover:text-amber-500 transition-colors text-sm text-center md:text-left" dir="ltr">
                  Alkotobcompany@gmail.com
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex flex-row-reverse items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-blue-50 text-sm text-center md:text-right">
                  <p>الأحد - الخميس</p>
                  <p>8:00 ص - 5:00 م</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-amber-500 text-xl mb-6">خدماتنا</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-end">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-blue-50 hover:text-amber-500 transition-colors text-sm">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-amber-500 text-xl mb-6">روابط سريعة</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-end">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-blue-50 hover:text-amber-500 transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Info & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 items-center md:items-end"
          >
            {/* Logo */}
            <div className="w-40 h-24 rounded-lg overflow-hidden">
              <img 
                src={image_8dd423daeb00aecef50c9197c8039170e2802c86} 
                alt="شركة القطب" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-blue-50 text-center md:text-right text-sm leading-relaxed">
              شركة متخصصة في معدات المناولة والتخزين والحلول الصناعية المتقدمة لجميع القطاعات.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <motion.a
                href="https://www.facebook.com/share/1FT5TgBRkX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#0f1629] border border-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-amber-500" />
              </motion.a>

              <a href="https://www.tiktok.com/@alkotobcompany?_r=1&_t=ZM-91pWnLhCFvH" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0f1629] border border-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-colors" aria-label="TikTok" tabIndex={0}>
                {/* Replaced TikTok SVG with alternative icon */}
                <svg className="w-5 h-5 text-amber-500" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path xmlns="http://www.w3.org/2000/svg" d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-amber-500 mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-blue-50 text-sm text-center md:text-right">
            © 2024 شركة القطب. جميع الحقوق محفوظة.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <button className="text-blue-50 hover:text-amber-500 transition-colors text-center">
              ISO 9001:2015
            </button>
            <button className="text-blue-50 hover:text-amber-500 transition-colors">
              الشروط والأحكام
            </button>
            <button className="text-blue-50 hover:text-amber-500 transition-colors">
              سياسة الخصوصية
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
