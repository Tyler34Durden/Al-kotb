import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../../imports/svg-k1ugjyhkoh";
import svgPathsModal from "../../imports/svg-i910emt9ax";
import imgContainer from "figma:asset/e4a6a8048d3a77db17873ab45b765804238c62ba.png";
import imgProject1 from "figma:asset/9a70eb07bff334a3fd4969c8f1d08bdaf9fda892.png";
import imgProject2 from "figma:asset/5e1c421384e511c054f3196f27e321d21884d8aa.png";
import imgProject3 from "figma:asset/b4f14083d4aa0b821438776f4c3f538825a6b3d8.png";
import imgProject4 from "figma:asset/cdcc2660f9d251630b7af7975dbc0827648ab169.png";
import imgProject5 from "figma:asset/074577e4a3d9d5c75fab40dc283706d4c09ba3fc.png";
import imgProject6 from "figma:asset/0f95e2d6bd75781ee3d5024f57a9c6d6a017fd35.png";

// Icon Components
function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p1674e600} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M6 14.6667V12H10V14.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M5.33333 4H5.34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.6667 4H10.6733" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M8 4H8.00667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M8 6.66667H8.00667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M8 9.33333H8.00667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.6667 6.66667H10.6733" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.6667 9.33333H10.6733" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M5.33333 6.66667H5.34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M5.33333 9.33333H5.34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function PlaneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p37181900} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function ShipIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d="M8 6.79268V9.33335" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M8 1.33333V3.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p183c7940} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p32b49e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p3f202e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function FactoryIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d="M8 10.6667H8.00667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.6667 10.6667H10.6733" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1aac7e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M5.33333 10.6667H5.34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function UsersIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p32887f80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p3b6ee540} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p188b8380} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p3694d280} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p14548f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p17781bc0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d="M5.33333 1.33333V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.6667 1.33333V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p3ee34580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M2 6.66667H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p26187580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d={svgPathsModal.p33ed6f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M12.5 15H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPathsModal.p2f5b2980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPathsModal.p76e7200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPathsModal.pce04cf0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

// Project Modal Component
interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const solutions = [
    { text: 'معدات مقاومة للانفجار', icon: TruckIcon },
    { text: 'أنظمة أمان متقدمة', icon: TruckIcon },
    { text: 'برنامج تدريب شامل للموظفين', icon: TruckIcon }
  ];

  // Create an array of images for the carousel (using the same image 4 times as placeholder)
  const images = [
    project.image,
    project.image,
    project.image,
    project.image
  ];

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Modal Content */}
      <motion.div
        className="relative bg-white rounded-lg max-w-[490px] w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Image Carousel Section with Close Button */}
        <div className="relative h-64 overflow-hidden rounded-t-lg">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${project.title} - صورة ${currentImageIndex + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            />
          </AnimatePresence>
          
          {/* Previous Button */}
          <motion.button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full size-8 flex items-center justify-center hover:bg-white transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full size-8 flex items-center justify-center hover:bg-white transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
          
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-md size-9 flex items-center justify-center hover:bg-white transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5 text-[#1a1a1a]" />
          </motion.button>

          {/* Image Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-[#FFC00E]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Header with Title and Details */}
          <div className="flex items-start justify-between gap-6 mb-6">
            {/* Client Details */}
            <div className="flex flex-col gap-0.5 text-sm text-[#4a5565] text-right">
              <p>العميل: {project.client}</p>
              <p>المكان: {project.location}</p>
              <p>السنة: {project.year}</p>
            </div>

            {/* Title and Badge */}
            <div className="flex-1 text-right">
              <h2 className="text-2xl text-[#0f1629] mb-3">{project.title}</h2>
              <span className="inline-block bg-blue-100 text-[#0f1629] text-xs px-3 py-1.5 rounded-md">
                {project.sectorName}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-[#4a5565] leading-relaxed text-right">
              {project.description}
            </p>
          </div>

          {/* Solutions Title */}
          <h3 className="text-xl text-[#1a1a1a] mb-4 text-right">الحلول</h3>

          {/* Solutions Grid */}
          <div className="grid grid-cols-2 gap-3">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 justify-end"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-[#4a5565] text-right">{solution.text}</span>
                <div className="w-5 h-5 text-[#0f1629] shrink-0">
                  <solution.icon />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Border */}
        <div className="absolute inset-0 border border-[#d6d6d6] rounded-lg pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

export function ProjectsPage() {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'تطوير مطار طرابلس الدولي',
      sector: 'aviation',
      sectorName: 'الطيران المدني',
      client: 'هيئة الطيران المدني',
      location: 'طرابلس',
      duration: 'المدة: 8 أشهر',
      year: '2023',
      description: 'مشروع شامل لتطوي�� أنظمة مناولة الأمتعة والبضائع في مطار طرابلس الدولي',
      image: imgProject1
    },
    {
      id: 2,
      title: 'مشروع ميناء بنغازي التجاري',
      sector: 'shipping',
      sectorName: 'الشحن واللوجستيات',
      client: 'شركة موانئ ليبيا',
      location: 'بنغازي',
      duration: 'المدة: 6 أشهر',
      year: '2023',
      description: 'تجهيز الميناء بأحدث معدات الرفع والتحميل لزيادة الطاقة الاستيعابية',
      image: imgProject2
    },
    {
      id: 3,
      title: 'مجمع البريقة الصناعي',
      sector: 'oil-gas',
      sectorName: 'النفط والغاز',
      client: 'الشركة الليبية للنفط',
      location: 'البريقة',
      duration: 'المدة: 12 شهر',
      year: '2022',
      description: 'توريد معدا�� متخصصة ومقاومة للانفجار لمجمع البريقة النفطي',
      image: imgProject3
    },
    {
      id: 4,
      title: 'مشروع المدينة الجديدة السكنية',
      sector: 'construction',
      sectorName: 'البناء والتشييد',
      client: 'شركة التطوير العمراني',
      location: 'طرابلس الجديدة',
      duration: 'المدة: 10 أشهر',
      year: '2023',
      description: 'تجهيز موقع البناء بمعدات الرفع والنقل للمشروع السكني الضخم',
      image: imgProject4
    },
    {
      id: 5,
      title: 'مصنع الحديد والصلب مصراتة',
      sector: 'manufacturing',
      sectorName: 'التصنيع والإنتاج',
      client: 'شركة الحديد والصلب',
      location: 'مصراتة',
      duration: 'المدة: 14 شهر',
      year: '2022',
      description: 'تحديث خطوط الإنتاج وأنظمة المناولة في مصنع الحديد والصلب',
      image: imgProject5
    },
    {
      id: 6,
      title: 'سلسلة متاجر الخير الكبرى',
      sector: 'retail',
      sectorName: 'التجارة والمتاجر',
      client: 'مجموعة الخير التجارية',
      location: 'طرابلس، بنغازي، مصراتة',
      duration: 'المدة: 4 أشهر',
      year: '2023',
      description: 'تجهيز المستودعات وأنظمة التخزين لسلسلة متاجر في ثلاث مدن',
      image: imgProject6
    }
  ];

  const sectors = [
    { key: 'all', name: 'جميع القطاعات', icon: BuildingIcon },
    { key: 'aviation', name: 'الطيران المدني', icon: PlaneIcon },
    { key: 'shipping', name: 'الشحن واللوجستيات', icon: ShipIcon },
    { key: 'oil-gas', name: 'النفط والغاز', icon: FactoryIcon },
    { key: 'construction', name: 'البناء والتشييد', icon: BuildingIcon },
    { key: 'manufacturing', name: 'التصنيع والإنتاج', icon: FactoryIcon },
    { key: 'retail', name: 'التجارة والمتاجر', icon: UsersIcon }
  ];

  const filteredProjects = selectedSector === 'all' 
    ? projects 
    : projects.filter(p => p.sector === selectedSector);

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
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              مشاريعنا
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              نفخر بإنجازاتنا في مختلف القطاعات وننظر إلى الأمام لمزيد من النجاحات
            </motion.p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <motion.div 
        className="bg-[#f6f6f6] py-6 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-wrap gap-3 md:gap-6 justify-end">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <motion.button
                  key={sector.key}
                  onClick={() => setSelectedSector(sector.key)}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${
                    selectedSector === sector.key
                      ? 'bg-[#13499d] text-white shadow-lg'
                      : 'bg-white text-[#303030] border border-[#d6d6d6] hover:border-[#13499d]'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm md:text-base">{sector.name}</span>
                  <div className="w-4 h-4">
                    <IconComponent />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-[1200px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedSector}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden border border-[#d6d6d6] cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Year Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-white text-[#303030] px-3 py-1 rounded-md text-xs"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {project.year}
                  </motion.div>
                  
                  {/* Sector Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#ffc00e] px-3 py-1 rounded-md text-xs text-[#303030]">
                    {project.sectorName}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl text-[#303030] mb-3 text-right group-hover:text-[#13499d] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[#7f7f7f] mb-4 text-right line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 justify-end text-sm text-[#7f7f7f]">
                      <span>{project.client}</span>
                      <div className="w-4 h-4">
                        <UsersIcon />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 justify-end text-sm text-[#7f7f7f]">
                      <span>{project.location}</span>
                      <div className="w-4 h-4">
                        <MapPinIcon />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 justify-end text-sm text-[#7f7f7f]">
                      <span>{project.duration}</span>
                      <div className="w-4 h-4">
                        <CalendarIcon />
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button 
                    className="w-full bg-[#13499d] text-white py-2 rounded-md text-sm hover:bg-blue-800 transition-colors text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    التفاصيل الكاملة
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <BuildingIcon />
            </div>
            <h3 className="text-2xl text-gray-600 mb-2">لا توجد مشاريع</h3>
            <p className="text-gray-500">لم يتم العثور على مشاريع في هذا القطاع</p>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <motion.div 
        className="bg-[#f6f6f6] py-12 md:py-16"
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
            <h2 className="text-3xl md:text-4xl text-[#303030] mb-4 md:mb-6">
              لديك مشروع في ذهنك؟
            </h2>
            <p className="text-lg md:text-xl text-[#303030] mb-6 md:mb-8">
              دعنا نساعدك في تحقيق رؤيتك بخؤتنا و معداتنا المتطو��ة
            </p>
            <motion.button 
              onClick={() => navigate('/contact')}
              className="bg-[#f6f6f6] border border-[#13499d] text-[#13499d] hover:bg-[#13499d] hover:text-white transition-colors px-8 py-3 rounded-md inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-4 h-4">
                <PhoneIcon />
              </div>
              <span>اتصل بنا الآن</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
