import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSolutions } from '../../hooks/useMedia';
import svgPaths from "../../imports/svg-gxhmc93rq1";
import imgContainer from "figma:asset/ce09801d9985dc6358d6660a48fed0431ef797ae.png";
import { AviationPage } from './sectors/AviationPage';
import { LogisticsPage } from './sectors/LogisticsPage';
import { OilGasPage } from './sectors/OilGasPage';
import { ConstructionPage } from './sectors/ConstructionPage';
import { ManufacturingPage } from './sectors/ManufacturingPage';
import { RetailWarehousePage } from './sectors/RetailWarehousePage';

// Helper components for reusable SVG icons
function PlaneIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPaths.p3d8d8b00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ShipIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d="M12 10.189V14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 2V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.pab9f900} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p1d5b8d00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p36c40b00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d="M3 22H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M4 9H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p32de3500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.pe729480} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function HardHatIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPaths.p123c17c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p160f0100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p1ab515c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p1edb4e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d="M12 16H12.01" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 16H16.01" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2ae49b00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 16H8.01" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ShoppingCartIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPaths.p33c1b680} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.pd438b00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2fb16300} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g clipPath="url(#clip0_118_588)">
        <path d={svgPaths.p3eaa2980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p1f2c5400} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
      <defs>
        <clipPath id="clip0_118_588">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p203476e0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M12.6667 8H3.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p26187580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

// Sector card component
function SectorCard({ 
  icon: Icon, 
  title, 
  description, 
  challenges, 
  solutions,
  onViewDetails,
  index,
  eyebrow,
  heroImage,
  topBorderColor,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  onViewDetails: () => void;
  index: number;
  eyebrow?: string;
  heroImage?: string;
  topBorderColor?: string;
}) {
  const baseClasses = "bg-white rounded-xl border border-slate-200 p-6 flex flex-col gap-6 h-full cursor-pointer";
  const extraClasses = topBorderColor ? " border-t-4" : "";
  const style: React.CSSProperties = topBorderColor ? { borderTopColor: topBorderColor } : {};

  return (
    <motion.div 
      className={baseClasses + extraClasses}
      style={style}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
      onClick={() => onViewDetails()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onViewDetails();
        }
      }}
    >
      
      {/* Card Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 justify-end">
          {heroImage ? (
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#303030]">
              <img src={heroImage} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-12 h-12 flex-shrink-0" />
          )}

          <div className="flex-1 text-right">
            <h3 className="text-xl text-[#303030]" dir="auto">{title}</h3>
            {eyebrow && <div className="text-sm text-[#13499d] mt-1">{eyebrow}</div>}
          </div>
        </div>
        <p className="text-[#4a5565] text-right mt-2" dir="auto">
          {description}
        </p>
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-6 flex-1">
        
        {/* Challenges */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#303030] text-right" dir="auto">
            التحديات الرئيسية:
          </h4>
          <ul className="flex flex-col gap-2">
            {challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#4a5565] text-right" dir="auto">
                <span className="bg-[#fb2c36] rounded-full w-1.5 h-1.5 mt-2 flex-shrink-0 inline-block" />
                <span className="flex-1">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#303030] text-right" dir="auto">
            حلولنا المتخصصة:
          </h4>
          <ul className="flex flex-col gap-2">
            {solutions.map((solution, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#4a5565] text-right" dir="auto">
                <span className="w-4 h-4 text-[#00C950] flex-shrink-0 mt-0.5 inline-block">
                  <CheckIcon />
                </span>
                <span className="flex-1">{solution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <motion.button 
          onClick={onViewDetails}
          className="bg-[#13499d] h-9 rounded-md w-full hover:bg-blue-800 transition-colors cursor-pointer flex items-center justify-center gap-2 text-white mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="w-4 h-4"
            animate={{ x: [-2, 0, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowLeftIcon />
          </motion.div>
          <span dir="auto">عرض التفاصيل الكاملة</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export function SolutionsPage() {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const { data: solutionsData, isLoading: solutionsLoading, isError: solutionsError } = useSolutions();
  const solutions = Array.isArray(solutionsData) ? solutionsData : [];

  const sectors = [
    {
      id: 'aviation',
      icon: PlaneIcon,
      title: 'خدمات الطيران الأرضية',
      description: 'حلول متكاملة لمعدات المطارات وخدمات الطيران المدني',
      challenges: [
        'معدات مناولة الأمتعة والبضائع',
        'مركبات خدمة الطائرات',
        'أنظمة التحميل والتفريغ السريع'
      ],
      solutions: [
        'رافعات شوكية مخصصة للمطارات',
        'ناقلات الحقائب الآلية',
        'مركبات خدمة الطائرات'
      ]
    },
    {
      id: 'logistics',
      icon: ShipIcon,
      title: 'الشحن واللوجستيات',
      description: 'أنظمة متطورة لإدارة الموانئ والمستودعات اللوجستية',
      challenges: [
        'سرعة المناولة في الموانئ',
        'تحسين مساحات التخزين',
        'تتبع الشحنات والمخزون'
      ],
      solutions: [
        'رافعات الحاويات الثقيلة',
        'أنظمة النقل الآلية',
        'رفوف التخزين عالية الكثافة'
      ]
    },
    {
      id: 'oil-gas',
      icon: FuelIcon,
      title: 'النفط والغاز',
      description: 'معدات متخصصة للصناعات البترولية والكيماوية',
      challenges: [
        'مناولة المواد الخطرة',
        'العمل في بيئات صعبة',
        'معايير السلامة الصارمة'
      ],
      solutions: [
        'معدات مقاومة للانفجار',
        'أنظمة أمان متقدمة',
        'معدات مناولة المواد الكيماوية'
      ]
    },
    {
      id: 'construction',
      icon: HardHatIcon,
      title: 'البناء والتشييد',
      description: 'معدات البناء والرفع لمشاريع الإنشاءات',
      challenges: [
        'رفع المواد لارتفاعات عالية',
        'العمل في مواقع ضيقة',
        'سلامة العمال'
      ],
      solutions: [
        'رافعات البناء المتنقلة',
        'منصات العمل المرتفعة',
        'معدات نقل المواد'
      ]
    },
    {
      id: 'manufacturing',
      icon: FactoryIcon,
      title: 'المصانع والإنتاج',
      description: 'حلول أتمتة خطوط الإنتاج والتصنيع',
      challenges: [
        'تحسين كفاءة الإنتاج',
        'تقليل الهدر والتكاليف',
        'ضمان الجودة'
      ],
      solutions: [
        'خطوط إنتاج آلية',
        'أنظمة النقل الداخلي',
        'معدات فحص الجودة'
      ]
    },
    {
      id: 'retail',
      icon: ShoppingCartIcon,
      title: 'المتاجر الكبرى',
      description: 'أنظمة إدارة المخازن والعرض للقطاع التجاري',
      challenges: [
        'إدارة المخزون الكبير',
        'سرعة تجديد البضائع',
        'تحسين تجربة العملاء'
      ],
      solutions: [
        'أنظمة التخزين الذكية',
        'معدات تجديد الرفوف',
        'أنظمة إدارة المخزون'
      ]
    }
  ];

  const sectorPages: { [key: string]: React.ReactNode } = {
    'aviation': <AviationPage onBack={() => setSelectedSector(null)} />,
    'logistics': <LogisticsPage onBack={() => setSelectedSector(null)} />,
    'oil-gas': <OilGasPage onBack={() => setSelectedSector(null)} />,
    'construction': <ConstructionPage onBack={() => setSelectedSector(null)} />,
    'manufacturing': <ManufacturingPage onBack={() => setSelectedSector(null)} />,
    'retail': <RetailWarehousePage onBack={() => setSelectedSector(null)} />
  };

  if (selectedSector && sectorPages[selectedSector]) {
    return <>{sectorPages[selectedSector]}</>;
  }

  return (
    <div className="bg-[#f6f6f6] min-h-screen w-full" dir="rtl">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#13499d] to-[#0f1629] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img alt="" className="w-full h-full object-cover" src={imgContainer} />
        </motion.div>
        <div className="container mx-auto px-4 py-12 md:py-16 relative max-w-[1200px]">
          <div className="max-w-4xl text-right">
            <motion.h1 
              className="text-3xl md:text-5xl text-white mb-4 md:mb-6" 
              dir="auto"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              حلولنا المتخصصة
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100" 
              dir="auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              نقدم حلولاً مخصصة لكل قطاع تتناسب مع التحديات الفريدة واحتياجات العمل المحددة
            </motion.p>
          </div>
        </div>
      </div>

      {/* Sectors Grid */}
      {/* Live Solutions from Strapi */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-[1200px]">
        <h2 className="text-2xl mb-6 text-right">حلولنا</h2>
        {solutionsLoading && <div className="text-right">جارٍ تحميل الحلول...</div>}
        {solutionsError && <div className="text-red-600 text-right">خطأ عند جلب الحلول</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!solutionsLoading && solutions.map((s: any, idx: number) => {
            // choose an icon based on slug/title keywords
            const slug = (s.slug || '').toLowerCase();
            const rawTitle = (s.title || (s.hero && s.hero.title) || s.slug || 'حل');
            const title = String(rawTitle).toLowerCase();
            const getIcon = () => {
              if (slug.includes('air') || slug.includes('aviat') || title.includes('طيران') || title.includes('مطار')) return PlaneIcon;
              if (slug.includes('log') || title.includes('لوج') || title.includes('شحن')) return ShipIcon;
              if (slug.includes('oil') || title.includes('نفط') || title.includes('gas')) return FuelIcon;
              if (slug.includes('construct') || title.includes('بناء') || title.includes('تشييد')) return HardHatIcon;
              if (slug.includes('manufact') || title.includes('مصنع') || title.includes('تصنيع')) return FactoryIcon;
              if (slug.includes('retail') || title.includes('متاجر') || title.includes('تجاري')) return ShoppingCartIcon;
              return PlaneIcon;
            };

            const IconComponent = getIcon();

            const displayTitle = s.title || (s.hero && s.hero.title) || s.slug || 'حل';
            const isAviation = IconComponent === PlaneIcon || title.includes('طيران') || title.includes('مطار') || slug.includes('air') || slug.includes('aviat');

            return (
              <SectorCard
                key={s.id || idx}
                icon={IconComponent}
                title={displayTitle}
                eyebrow={(s.hero && s.hero.eyebrow) ? s.hero.eyebrow : undefined}
                heroImage={s.heroImage || s.image || undefined}
                description={(s.hero && s.hero.subtitle) ? s.hero.subtitle : (s.excerpt || '')}
                challenges={Array.isArray(s.challenges) ? s.challenges : []}
                solutions={Array.isArray(s.specializedSolutions) ? s.specializedSolutions : []}
                index={idx}
                onViewDetails={() => navigate(`/solutions/${s.slug || s.id}`)}
                topBorderColor={isAviation ? '#ffc00e' : undefined}
              />
            );
          })}
        </div>
      </div>
      {/* Static sectors grid removed — use dynamic `solutions` from the API above or sector pages */}

      {/* How We Work Section */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-[1200px]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl text-[#0f1629] mb-4" dir="auto">
              كيف نعمل معك
            </h2>
            <p className="text-lg md:text-xl text-[#4a5565]" dir="auto">
              منهجية عمل مدروسة تضمن تحقيق أفضل النتائج
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'تحليل الاحتياجات', description: 'دراسة متطلباتك ومعرفة التحديات الحالية' },
              { step: '2', title: 'تصميم الحلول', description: 'وضع خطة مخصصة تناسب احتياجاتك تماماً' },
              { step: '3', title: 'التنفيذ', description: 'تطبيق الحلول بأعلى معايير الجودة والدقة' },
              { step: '4', title: 'المتابعة', description: 'دعم مستمر وصيانة دورية لضمان الأداء الأمثل' }
            ].map((process, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-white border border-[#303030] rounded-full w-16 h-16 flex items-center justify-center mb-4"
                  whileHover={{ 
                    rotate: 360,
                    borderColor: '#13499d',
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.span 
                    className="text-xl text-[#303030]"
                    whileHover={{ scale: 1.2 }}
                  >
                    {process.step}
                  </motion.span>
                </motion.div>
                <h3 className="text-[#0f1629] mb-2" dir="auto">
                  {process.title}
                </h3>
                <p className="text-sm text-[#4a5565]" dir="auto">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div 
        className="bg-white py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#303030] mb-4 md:mb-6" dir="auto">
              هل أنت مستعد للارتقاء بعملك؟
            </h2>
            <p className="text-lg md:text-xl text-[#303030] mb-6 md:mb-8" dir="auto">
              تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص لاحتياجاتك
            </p>
            <motion.a
              href="https://wa.me/218911286734"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فتح محادثة واتساب"
              className="bg-white border border-[#13499d] text-[#13499d] hover:bg-[#13499d] hover:text-white transition-colors px-8 py-3 rounded-md inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-4 h-4">
                <PhoneIcon />
              </div>
              <span dir="auto">اتصل بنا الآن</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
