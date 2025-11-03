import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import svgPaths from "../../../imports/svg-auqhn9k4bf";
import imgContainer from "figma:asset/b7414cfec8643443c97b44b4c24e28249988dfc0.png";
import imgAviationPage from "figma:asset/3969ce9828a2c14e2510c45a7709b3459e5140e8.png";
import imgAviationPage1 from "figma:asset/20336ca1f20d8d809ba7993eee8c5c4d6f67c0d1.png";
import imgAviationPage2 from "figma:asset/4d009b8637289ab0900e1a52f73ab49433d8ad43.png";
import imgContainer1 from "figma:asset/907413a460de02996c26312a55140a67f07c969e.png";

interface AviationPageProps {
  onBack?: () => void;
}

// Icon Components
function PlaneIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
      <path d={svgPaths.pb722e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d="M16 8V16L21.3333 18.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p1dee4500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d={svgPaths.p1589980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d={svgPaths.p1a4fb200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d={svgPaths.p1d93d8f0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M16 29.3333V16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p32d27c00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M10 5.69336L22 12.56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d="M3.33333 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1d405500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

export function AviationPage({ onBack }: AviationPageProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen w-full" dir="rtl">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#13499d] to-[#0f1629] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img alt="" className="w-full h-full object-cover" src={imgContainer} />
        </div>
        
        <div className="container mx-auto px-4 py-12 relative max-w-7xl">
          {onBack && (
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5" />
              <span>العودة إلى الحلول</span>
            </motion.button>
          )}

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8 justify-end">
              <div className="bg-[#ffc00e] px-6 py-2 rounded-lg">
                <span className="text-[#101828]">قطاع الطيران</span>
              </div>
              <div className="w-12 h-12 text-[#FFC00E]">
                <PlaneIcon />
              </div>
            </div>
            
            <h1 className="text-5xl text-white mb-6 text-right">
              المناولة الأرضية للطيران
            </h1>
            
            <p className="text-blue-50 text-lg text-right">
              حلول متكاملة لعمليات المناولة الأرضية في المطارات، مع معدات حديثة تلبي أعلى معايير السلامة والكفاءة العالمية.
            </p>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-[#f6f6f6] py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-[30px] text-[#1a1a1a] mb-4">
              التحديات التي نواجهها
            </h2>
            <p className="text-xl text-[#4a5565]">
              نفهم التحديات الفريدة لقطاع الطيران ونقدم حلولاً مصممة خصيصاً
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'معايير السلامة العالية',
                description: 'متطلبات صارمة للسلامة والجودة في عمليات المناولة الأرضية'
              },
              {
                title: 'الكفاءة التشغيلية',
                description: 'الحاجة لمعدات سريعة وموثوقة لتقليل وقت الدوران'
              },
              {
                title: 'الصيانة المستمرة',
                description: 'ضرورة الحفاظ على المعدات بحالة ممتازة لضمان عدم التوقف'
              }
            ].map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-t-4 border-[#ffc00e]"
              >
                <h3 className="text-xl text-[#1a1a1a] mb-4 text-right">
                  {challenge.title}
                </h3>
                <p className="text-[#4a5565] text-right">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-[#f6f6f6] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-[30px] text-[#1a1a1a] mb-4">
              حلولنا المتكاملة
            </h2>
            <p className="text-xl text-[#4a5565]">
              نقدم باقة شاملة من الحلول لتحسين عمليات المناولة الأرضية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ClockIcon,
                title: 'دعم فني 24/7',
                description: 'فريق متخصص متاح على مدار الساعة لل��وارئ'
              },
              {
                icon: ShieldIcon,
                title: 'برامج صيانة وقائية',
                description: 'عقود صيانة شاملة تضمن الجاهزية الكاملة للمعدات'
              },
              {
                icon: WrenchIcon,
                title: 'معدات الخدمات الأرضية',
                description: 'جرارات ا��قطر ومعدات دعم الطائرات المتطورة'
              },
              {
                icon: PackageIcon,
                title: 'معدات مناولة الأمتعة',
                description: 'أنظمة نقل ومعالجة الأمتعة عالية السرعة والدقة'
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#f6f6f6] border border-[#303030] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 text-[#303030]">
                    <solution.icon />
                  </div>
                </div>
                <h3 className="text-lg text-[#1a1a1a] mb-3">
                  {solution.title}
                </h3>
                <p className="text-sm text-[#4a5565]">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-[#f6f6f6] py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-[30px] text-[#1a1a1a] mb-4">
              المنتجات الموصى بها
            </h2>
            <p className="text-xl text-[#4a5565]">
              معدات متخصصة من أفضل الشركات المصنعة العالمية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: imgAviationPage2,
                title: 'معدات التحميل',
                description: 'مناسبة لجميع أنواع الطائرات، تحكم دقيق'
              },
              {
                image: imgAviationPage1,
                title: 'ناقلات الأمتعة',
                description: 'سعة حمولة 5 أطنان، مزودة بنظام رفع هيدروليكي'
              },
              {
                image: imgAviationPage,
                title: 'جرارات القطر الكهربائية',
                description: 'قوة سحب حتى 50 طن، صديقة للبيئة'
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-[#303030] mb-2 text-right">
                    {product.title}
                  </h3>
                  <p className="text-[#303030] mb-6 text-right">
                    {product.description}
                  </p>
                  <button className="bg-[#13499d] hover:bg-blue-800 text-white w-full py-2 rounded-md transition-colors text-center">
                    طلب عرض سعر
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-b from-[#13499d] to-[#0f1629] relative py-24">
        <div className="absolute inset-0 opacity-20">
          <img alt="" className="w-full h-full object-cover" src={imgContainer1} />
        </div>

        <div className="container mx-auto px-4 relative max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-6">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-xl text-blue-50">
              املأ النموذج وسيتواصل معك فريقنا المتخصص في أقرب وقت
            </p>
          </div>

          <div className="bg-[#f6f6f6] rounded-xl p-6 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#303030] text-sm text-right">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل اسمك"
                    className="bg-[rgba(246,246,246,0.2)] border border-[rgba(48,48,48,0.3)] rounded-md px-3 py-2 text-[#303030] placeholder:text-[rgba(48,48,48,0.6)]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#303030] text-sm text-right">
                    اسم الشركة
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="أدخل اسم الشركة"
                    className="bg-[rgba(246,246,246,0.2)] border border-[rgba(48,48,48,0.3)] rounded-md px-3 py-2 text-[#303030] placeholder:text-[rgba(48,48,48,0.6)]"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#303030] text-sm text-right">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@company.com"
                    className="bg-[rgba(246,246,246,0.2)] border border-[rgba(48,48,48,0.3)] rounded-md px-3 py-2 text-[#303030] placeholder:text-[rgba(48,48,48,0.6)]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#303030] text-sm text-right">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+218 XX XXX XXXX"
                    className="bg-[rgba(246,246,246,0.2)] border border-[rgba(48,48,48,0.3)] rounded-md px-3 py-2 text-[#303030] placeholder:text-[rgba(48,48,48,0.6)]"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#303030] text-sm text-right">
                  تفاصيل المشروع
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="أخبرنا المزيد عن احتياجاتك..."
                  rows={5}
                  className="bg-[rgba(246,246,246,0.2)] border border-[rgba(48,48,48,0.3)] rounded-md px-3 py-2 text-[#303030] placeholder:text-[rgba(48,48,48,0.6)] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#13499d] hover:bg-blue-800 text-[#f6f6f6] w-full py-3 rounded-md transition-colors text-center"
              >
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
