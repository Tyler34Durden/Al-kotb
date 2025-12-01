import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-ymoluq3yjm";
import imgContainer from "figma:asset/c1e9f11e73dae2a6b153e7ba7a315c85b9890293.png";
import imgContactPage from "figma:asset/06e9a539dd2b1d3bc34b5b9085d524b9506b80bd.png";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Send, ExternalLink, MessageSquare } from 'lucide-react';

const serviceTypes = [
  'طلب عرض سعر',
  'استشارة تقنية',
  'زيارة ميدانية',
  'صيانة وإصلاح',
  'قطع الغيار',
  'دعم فني',
  'تدريب الموظفين',
  'أخرى'
];

const companyTypes = [
  'شركة خاصة',
  'مؤسسة حكومية',
  'شركة نفط وغاز',
  'شركة شحن ولوجستيات',
  'شركة بناء وتشييد',
  'مصنع وإنتاج',
  'متجر ومركز تجاري',
  'أخرى'
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyType: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const to = 'Alkotobcompany@gmail.com';
    const subject = encodeURIComponent('نموذج تواصل - موقع الشركة');
    const bodyLines = [
      `الاسم: ${formData.name}`,
      `البريد الإلكتروني: ${formData.email}`,
      `رقم الهاتف: ${formData.phone}`,
      `اسم الشركة: ${formData.company}`,
      `نوع الشركة: ${formData.companyType}`,
      `نوع الخدمة: ${formData.serviceType}`,
      '',
      `تفاصيل الطلب:`,
      `${formData.message}`
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    // Build mailto URL and open user's mail client. The user must click Send in their mail app.
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    // Try to open the user's mail client. This will not send automatically.
    window.location.href = mailto;

    // Reset submitting state quickly since there's no network call.
    setTimeout(() => setIsSubmitting(false), 500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Map: use the full Google Maps embed src provided, and keep the short app link as the external target
  const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.5778781913577!2d13.234484!3d32.697268799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8bf00371207ad%3A0x31903c262f080a29!2z2LTYsdmD2Kkg2KfZhNmC2LfYqA!5e0!3m2!1sen!2sly!4v1764574554876!5m2!1sen!2sly';
  const MAP_SHORT_LINK = 'https://maps.app.goo.gl/VCjLZWDgQA8KjMKy8?g_st=ipc';
  const mapSrc = MAP_EMBED_SRC;
  const mapsLink = MAP_SHORT_LINK;

  // Always render the Google Maps iframe provided by the user.

  return (
    <div className="bg-[#f6f6f6] min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-[200px] md:h-[265px] bg-gradient-to-b from-[#13499d] to-[#0f1629] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={imgContainer} 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="relative container mx-auto px-4 max-w-[1200px] h-full flex flex-col justify-center py-12 md:py-0">
          <motion.h1 
            className="text-white text-3xl md:text-5xl mb-4 md:mb-6 text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            تواصل معنا
          </motion.h1>
          <motion.p 
            className="text-blue-100 text-base md:text-xl text-right max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            نحن هنا لمساعدتك في جميع احتياجاتك من المعدات الصناعية والخدمات التقنية
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-[#f6f6f6] py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0f1629] text-2xl md:text-3xl mb-3 md:mb-4">
              طرق التواصل
            </h2>
            <p className="text-[#4a5565] text-base md:text-xl">
              اختر الطريقة التي تناسبك للتواصل معنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Visit Card */}
            <motion.div 
              className="bg-white rounded-[12px] border border-slate-200 p-4 md:p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p41ed200} stroke="#0F1629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  <path d={svgPaths.p2c5ba380} stroke="#0F1629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                </svg>
              </div>
              <h3 className="text-[#0f1629] text-lg mb-2">الزيارة المباشرة</h3>
              <p className="text-[#4a5565] text-sm mb-6">قم بزيارتنا</p>
              <p className="text-[#0f1629] mb-2">طرابلس قصر بن غشير وادي الربيع</p>
              <p className="text-[#4a5565] text-xs">مكتبنا الرئيسي مفتوح للزوار</p>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div 
              className="bg-white rounded-[12px] border border-slate-200 p-4 md:p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p1e89f780} stroke="#0F1629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                </svg>
              </div>
              <h3 className="text-[#0f1629] text-lg mb-2">واتساب</h3>
              <p className="text-[#4a5565] text-sm mb-4">تواصل فوري</p>
              <p dir="ltr" className="text-[#0f1629] mb-4">+218 91 128 6734</p>
              <p className="text-[#4a5565] text-xs mb-4">متاح 24/7 للاستفسارات العاجلة</p>
              <a
                href="https://wa.me/218911286734"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[&gt;svg]:px-3 bg-[#00a63e] hover:bg-green-700 text-white w-full md:w-auto"
              >
                <MessageSquare className="w-4 h-4 ml-2" />
                فتح واتساب
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              className="bg-white rounded-[12px] border border-slate-200 p-4 md:p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p31cdb480} stroke="#0F1629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  <path d={svgPaths.p3ea83200} stroke="#0F1629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                </svg>
              </div>
              <h3 className="text-[#0f1629] text-lg mb-2">البريد الإلكتروني</h3>
              <p className="text-[#4a5565] text-sm mb-4">راسلنا عبر الإيميل</p>
              <p className="text-[#0f1629] mb-2">
                <a href="mailto:Alkotobcompany@gmail.com" className="text-[#0f1629] underline">Alkotobcompany@gmail.com</a>
              </p>
              <p className="text-[#4a5565] text-xs">نرد على رسائلكم خلال 24 ساعة</p>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              className="bg-white rounded-[12px] border border-slate-200 p-4 md:p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p353d5e80} stroke="#0F1629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                </svg>
              </div>
              <h3 className="text-[#0f1629] text-lg mb-2">الهاتف</h3>
              <p className="text-[#4a5565] text-sm mb-4">اتصل بنا مباشرة</p>
              <p className="text-[#0f1629] mb-1">091-2100995</p>
              <p className="text-[#4a5565] text-sm mb-3">المبيعات</p>
              <p className="text-[#0f1629] mb-1">091-1286734</p>
              <p className="text-[#4a5565] text-sm mb-4">الادارة والعلاقات</p>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Office Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#0f1629] text-2xl md:text-3xl mb-6 md:mb-8 text-right">
                مكتبنا الرئيسي
              </h2>

              <div className="bg-white rounded-[12px] border border-slate-200 p-1 overflow-hidden">
                <div className="relative h-[300px] md:h-[509px] rounded-[8px] overflow-hidden">
                  <iframe
                    title="خريطة الموقع"
                    src={mapSrc}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-[#13499d] hover:bg-blue-800 text-white"
                  >
                    <ExternalLink className="w-4 h-4 ml-2" />
                    فتح في الخريطة
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#303030] text-2xl md:text-3xl mb-4 md:mb-6 text-right">
                أرسل لنا رسالة
              </h2>
              <p className="text-[#303030] mb-6 md:mb-8 text-right">
                املأ النموذج التالي وسيتواصل معك أحد خبرائنا في أقرب وقت
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-[#303030] text-sm mb-1 block text-right">الاسم الكامل *</Label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-white border-[#d6d6d6] text-right"
                      placeholder="اكتب اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-[#303030] text-sm mb-1 block text-right">رقم الهاتف *</Label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-white border-[#d6d6d6] text-right"
                      placeholder="+218 91 234 5678"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label className="text-[#303030] text-sm mb-1 block text-right">البريد الإلكتروني *</Label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white border-[#d6d6d6] text-right"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Company & Company Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-[#303030] text-sm mb-1 block text-right">اسم الشركة</Label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-white border-[#d6d6d6] text-right"
                      placeholder="اسم شركتك"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-[#303030] text-sm mb-1 block text-right">نوع الشركة</Label>
                    <Select value={formData.companyType} onValueChange={(value) => handleInputChange('companyType', value)}>
                      <SelectTrigger className="bg-white border-[#d6d6d6] text-right">
                        <SelectValue placeholder="اختر نوع الشركة" />
                      </SelectTrigger>
                      <SelectContent>
                        {companyTypes.map((type, index) => (
                          <SelectItem key={index} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <Label className="text-[#303030] text-sm mb-1 block text-right">نوع الخدمة المطلوبة *</Label>
                  <Select required value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger className="bg-white border-[#d6d6d6] text-right">
                      <SelectValue placeholder="اختر نوع الخدمة" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service, index) => (
                        <SelectItem key={index} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <Label className="text-[#303030] text-sm mb-1 block text-right">تفاصيل الطلب *</Label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-white border-[#d6d6d6] text-right resize-none"
                    placeholder="اكتب تفاصيل طلبك أو استفسارك..."
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-[#13499d] hover:bg-blue-800 text-white h-10"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 ml-2" />
                  {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
                </Button>

                <p className="text-sm text-[#4a5565] mt-2">
                  إذا لم يفتح تطبيق البريد تلقائياً، يمكنك الضغط على هذا الرابط لإرسال الرسالة يدوياً:&nbsp;
                  <a
                    className="text-[#13499d] underline"
                    href={`mailto:Alkotobcompany@gmail.com?subject=${encodeURIComponent('نموذج تواصل - موقع الشركة')}`}
                  >
                    إرسال عبر البريد
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
