import image_8dd423daeb00aecef50c9197c8039170e2802c86 from 'figma:asset/8dd423daeb00aecef50c9197c8039170e2802c86.png';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
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
    'الشركاء'
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
                  <p>طرابلس، ليبيا</p>
                  <p>شارع الجمهورية، المكتب الرئيسي</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-row-reverse items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+218211234567" className="text-blue-50 hover:text-amber-500 transition-colors text-sm">
                  +218 21 123 4567
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-row-reverse items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:info@alqotb.ly" className="text-blue-50 hover:text-amber-500 transition-colors text-sm text-center md:text-left">
                  info@alqotb.ly
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
                href="#"
                className="w-12 h-12 bg-[#0f1629] border border-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-amber-500" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-[#0f1629] border border-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-amber-500" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-[#0f1629] border border-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-amber-500" />
              </motion.a>
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
