import { useParams, useNavigate } from 'react-router-dom';
import svgPaths from "../../imports/svg-tqfzhj6hik";
import imgContainer from "figma:asset/5c630bc29d41ef8bd3671227fa3f1a7a04e02690.png";
import imgImageWithFallback2 from "figma:asset/9c5982e7573c50fa5da560993a2457e99d4e031b.png";
import imgImageWithFallback3 from "figma:asset/b512b33e58793318e7c126751fd19b9a67e02147.png";
import imgImageWithFallback4 from "figma:asset/2f3c462fba2a830e4742a5fb587958214aeb9204.png";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  capacity: string;
  speed: string;
  voltage: string;
}

const categoryData: Record<string, {
  title: string;
  description: string;
  icon: string;
  products: Product[];
}> = {
  'handling': {
    title: 'معدات المناولة',
    description: 'اعلى جودة ممكنة لمعدات المناولة التي يمكن ان تحتاجها',
    icon: svgPaths.p67fd620,
    products: [
      {
        id: 1,
        name: 'رافعة شوكية كهربائية',
        description: 'قوة هائلة لمواجهة التحديات الخارجية وتشغيل فعال وصديق للبيئة في الداخل، فإن الرافعة الشوكية الهوائية الكهربائية من تويوتا بجهد 48 فولت هي الحل الأمثل.',
        image: imgImageWithFallback2,
        capacity: '1.5-2طن',
        speed: '20 كم\\ساعة',
        voltage: '48 فولت'
      },
      {
        id: 2,
        name: 'رافعة شوكية كهربائية',
        description: 'قوة هائلة لمواجهة التحديات الخارجية وتشغيل فعال وصديق للبيئة في الداخل، فإن الرافعة الشوكية الهوائية الكهربائية من تويوتا بجهد 48 فولت هي الحل الأمثل.',
        image: imgImageWithFallback3,
        capacity: '1.5-2طن',
        speed: '20 كم\\ساعة',
        voltage: '48 فولت'
      },
      {
        id: 3,
        name: 'رافعة شوكية كهربائية',
        description: 'قوة هائلة لمواجهة التحديات الخارجية وتشغيل فعال وصديق للبيئة في الداخل، فإن الرافعة الشوكية الهوائية الكهربائية من تويوتا بجهد 48 فولت هي الحل الأمثل.',
        image: imgImageWithFallback4,
        capacity: '1.5-2طن',
        speed: '20 كم\\ساعة',
        voltage: '48 فولت'
      },
      {
        id: 4,
        name: 'رافعة شوكية كهربائية',
        description: 'قوة هائلة لمواجهة التحديات الخارجية وتشغيل فعال وصديق للبيئة في الداخل، فإن الرافعة الشوكية الهوائية الكهربائية من تويوتا بجهد 48 فولت هي الحل الأمثل.',
        image: imgImageWithFallback3,
        capacity: '1.5-2طن',
        speed: '20 كم\\ساعة',
        voltage: '48 فولت'
      },
      {
        id: 5,
        name: 'رافعة شوكية كهربائية',
        description: 'قوة هائلة لمواجهة التحديات الخارجية وتشغيل فعال وصديق للبيئة في الداخل، فإن الرافعة الشوكية الهوائية الكهربائية من تويوتا بجهد 48 فولت هي الحل الأمثل.',
        image: imgImageWithFallback4,
        capacity: '1.5-2طن',
        speed: '20 كم\\ساعة',
        voltage: '48 فولت'
      },
      {
        id: 6,
        name: 'رافعة شوكية كهربائية',
        description: 'قوة هائلة لمواجهة التحديات الخارجية وتشغيل فعال وصديق للبيئة في الداخل، فإن الرافعة الشوكية الهوائية الكهربائية من تويوتا بجهد 48 فولت هي الحل الأمثل.',
        image: imgImageWithFallback2,
        capacity: '1.5-2طن',
        speed: '20 كم\\ساعة',
        voltage: '48 فولت'
      }
    ]
  },
  'storage': {
    title: 'أنظمة التخزين والرفوف',
    description: 'أفضل حلول التخزين والرفوف للمستودعات والمصانع',
    icon: svgPaths.p3bfee9c0,
    products: []
  },
  'workshop': {
    title: 'معدات الورش والمصانع',
    description: 'أدوات كهربائية ويدوية متطورة لجميع احتياجاتكم',
    icon: svgPaths.p2a12b200,
    products: []
  },
  'spares': {
    title: 'قطع الغيار الأصلية',
    description: 'قطع غيار أصلية مضمونة الجودة',
    icon: svgPaths.p169dda00,
    products: []
  },
  'special': {
    title: 'معدات خاصة',
    description: 'معدات متخصصة للاحتياجات الخاصة',
    icon: svgPaths.pd5bb600,
    products: []
  }
};

export function ProductCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  const categoryInfo = category ? categoryData[category] : categoryData['handling'];
  
  if (!categoryInfo) {
    return <div>فئة غير موجودة</div>;
  }

  return (
    <div className="bg-[#f6f6f6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#13499d] to-[#0f1629] h-[283px]">
        <div className="absolute inset-0 opacity-20">
          <img alt="" className="w-full h-full object-cover" src={imgContainer} />
        </div>
        
        <div className="relative container mx-auto px-4 h-full">
          <div className="w-full max-w-[1024px] mx-auto mt-0 px-4">
            {/* Back Button */}
            <div className="mb-4 sm:mb-12">
              <button
                onClick={() => navigate('/products')}
                className="bg-transparent border border-white hover:bg-white/10 text-white px-4 py-2 rounded-md flex items-center gap-3 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M3.33333 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p1d405500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <span className="text-sm">رجوع إلى المنتجات</span>
              </button>
            </div>

            {/* Title Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-end gap-3 mb-4 sm:mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
                  <path d={categoryInfo.icon} stroke="#FFC00E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  <path d="M30 36H18" stroke="#FFC00E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  <path d={svgPaths.p34cd3180} stroke="#FFC00E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  <path d={svgPaths.p24c8c580} stroke="#FFC00E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  <path d={svgPaths.pd661e00} stroke="#FFC00E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </svg>
              </div>

              <div className="bg-[#ffc00e] px-3 py-2 rounded-lg">
                <span className="text-[#101828]">{categoryInfo.title}</span>
              </div>

              <h1 className="text-3xl sm:text-[40px] md:text-5xl text-white text-right">
                {categoryInfo.title}
              </h1>
            </div>

            <p className="text-base md:text-[18px] text-blue-50 text-right">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-8 max-w-[1024px]">
        {/* Filters */}
  <div className="flex flex-wrap items-center justify-end gap-3 mb-8">
          {/* Price Filter */}
          <div className="relative">
            <button className="border border-[#d6d6d6] bg-white rounded px-3 py-2 flex items-center gap-4 min-w-[110px] sm:min-w-[127px]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M6 9L12 15L18 9" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="text-[#303030] text-xs">السعر</span>
            </button>
          </div>

          {/* Rating Filter */}
          <div className="relative">
            <button className="border border-[#d6d6d6] bg-white rounded px-3 py-2 flex items-center gap-4 min-w-[110px] sm:min-w-[127px]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M6 9L12 15L18 9" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="text-[#303030] text-xs">التقييمات</span>
            </button>
          </div>
        </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categoryInfo.products.map((product) => (
            <div key={product.id} className="bg-white border border-[#d6d6d6] rounded-lg overflow-hidden">
              {/* Product Image */}
              <div className="relative h-48 sm:h-[192px] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(15,22,41,0.4)]"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 bg-[#f6f6f6] border border-[#303030] rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p67fd620} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M15 18H9" stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p2beec100} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p13934880} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p1ff3c700} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Product Info */}
              <div className="px-4 py-4 sm:p-6">
                <h3 className="text-[#303030] text-xl mb-1 text-right">{product.name}</h3>
                <p className="text-[#4a5565] text-sm mb-4 text-right line-clamp-2">{product.description}</p>

                {/* Specifications */}
                <div className="space-y-2 mb-4">
                  <div className="bg-gray-50 rounded-md px-2 py-2 flex items-center justify-between">
                    <div className="bg-slate-50 px-2 py-1 rounded-md">
                      <span className="text-blue-900 text-xs">{product.capacity}</span>
                    </div>
                    <span className="text-[#1a1a1a] text-sm">سعة التحميل</span>
                  </div>

                  <div className="bg-gray-50 rounded-md px-2 py-2 flex items-center justify-between">
                    <div className="bg-slate-50 px-2 py-1 rounded-md">
                      <span className="text-blue-900 text-xs">{product.speed}</span>
                    </div>
                    <span className="text-[#1a1a1a] text-sm">سرعة السفر بحمولة كاملة</span>
                  </div>

                  <div className="bg-gray-50 rounded-md px-2 py-2 flex items-center justify-between">
                    <div className="bg-slate-50 px-2 py-1 rounded-md">
                      <span className="text-blue-900 text-xs">{product.voltage}</span>
                    </div>
                    <span className="text-[#1a1a1a] text-sm">الفولتية</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button 
                  onClick={() => navigate(`/products/${category}/${product.id}`)}
                  className="w-full bg-[#13499d] hover:bg-blue-800 text-white py-2 rounded-md flex items-center justify-center gap-3 transition-colors"
                >
                  <span className="text-sm">عرض التفاصيل</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p19416e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p3e059a80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M6.66667 6H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M10.6667 8.66667H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M10.6667 11.3333H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
