import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import svgPaths from "../../imports/svg-tqfzhj6hik";
import imgContainer from "figma:asset/5c630bc29d41ef8bd3671227fa3f1a7a04e02690.png";
import imgImageWithFallback2 from "figma:asset/9c5982e7573c50fa5da560993a2457e99d4e031b.png";
import imgImageWithFallback3 from "figma:asset/b512b33e58793318e7c126751fd19b9a67e02147.png";
import imgImageWithFallback4 from "figma:asset/2f3c462fba2a830e4742a5fb587958214aeb9204.png";

export function ProductDetailPage() {
  const { category, productId } = useParams<{ category: string; productId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - في التطبيق الحقيقي، سيتم جلب هذا من قاعدة البيانات
  const product = {
    id: productId,
    name: 'رافعة شوكية كهربائية',
    model: 'EFG 320 Pro',
    category: 'معدات المناولة',
    description: 'قوة هائلة لمواجهة التحديات الخارجية وتشغيل فعال وصديق للبيئة في الداخل، فإن الرافعة الشوكية الهوائية الكهربائية من تويوتا بجهد 48 فولت هي الحل الأمثل لعملك.',
    fullDescription: 'تجمع رافعتنا الشوكية الكهربائية بين القوة والكفاءة والموثوقية. مصممة خصيصًا للعمل في البيئات الداخلية والخارجية، توفر هذه الرافعة أداءً استثنائيًا مع تقليل التكاليف التشغيلية. مزودة بأحدث تقنيات السلامة وأنظمة التحكم الذكية، مما يجعلها الخيار الأمثل للمستودعات والمصانع.',
    images: [imgImageWithFallback2, imgImageWithFallback3, imgImageWithFallback4, imgImageWithFallback2],
    specifications: {
      'سعة التحميل': '1.5-2 طن',
      'سرعة السفر بحمولة كاملة': '20 كم/ساعة',
      'الفولتية': '48 فولت',
      'ارتفاع الرفع': '4.5 متر',
      'نصف قطر الدوران': '2.1 متر',
      'نوع البطارية': 'ليثيوم أيون',
      'وزن المعدة': '2800 كجم',
      'عرض الممر': '3.5 متر'
    },
    features: [
      'نظام أمان متطور مع مستشعرات ذكية',
      'بطارية ليثيوم أيون طويلة العمر',
      'شاشة رقمية لعرض جميع المعلومات',
      'مقعد مريح مع تعديل متعدد',
      'نظام تعليق هيدروليكي متقدم',
      'إضاءة LED عالية الكفاءة',
      'نظام فرامل إلكتروني',
      'حماية من الحمل الزائد'
    ],
    warranty: '3 سنوات أو 6000 ساعة تشغيل',
    price: 'السعر عند الطلب',
    inStock: true
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'رافعة شوكية ديزل',
      model: 'DFG 425',
      image: imgImageWithFallback3,
      capacity: '2.5 طن'
    },
    {
      id: '3',
      name: 'رافعة شوكية غاز',
      model: 'GFG 25',
      image: imgImageWithFallback4,
      capacity: '2.5 طن'
    },
    {
      id: '4',
      name: 'معدات السحب الكهربائية',
      model: 'CBE 2.0',
      image: imgImageWithFallback2,
      capacity: '2 طن'
    }
  ];

  return (
    <div className="bg-[#f6f6f6] min-h-screen" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#d6d6d6]">
        <div className="container mx-auto px-4 py-4 max-w-[1200px]">
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#6a7282]">
            <button onClick={() => navigate('/')} className="hover:text-[#13499d]">الرئيسية</button>
            <span>/</span>
            <button onClick={() => navigate('/products')} className="hover:text-[#13499d]">المنتجات</button>
            <span>/</span>
            <button onClick={() => navigate(`/products/${category}`)} className="hover:text-[#13499d]">{product.category}</button>
            <span>/</span>
            <span className="text-[#303030]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Left Side - Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-lg p-4 mb-4 border border-[#d6d6d6]">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    غير متوفر
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg p-1 md:p-2 border-2 transition-all ${
                    selectedImage === index ? 'border-[#13499d]' : 'border-[#d6d6d6] hover:border-[#6a7282]'
                  }`}
                >
                  <div className="h-16 md:h-20 overflow-hidden rounded">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Details */}
          <div>
            <div className="bg-[#ffc00e] inline-block px-3 py-1 rounded-md mb-3">
              <span className="text-[#101828] text-xs md:text-sm">{product.category}</span>
            </div>
            
            <h1 className="text-[#303030] text-2xl md:text-4xl mb-2 text-right">{product.name}</h1>
            <p className="text-[#6a7282] text-base md:text-lg mb-6 text-right">موديل: {product.model}</p>

            <div className="bg-white rounded-lg p-6 mb-6 border border-[#d6d6d6]">
              <p className="text-[#4a5565] text-right leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-[#4a5565] text-right leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Price and Actions */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-[#d6d6d6]">
              <div className="flex items-center justify-between mb-6">
                <div className="text-right">
                  <p className="text-[#6a7282] text-sm mb-1">السعر</p>
                  <p className="text-[#13499d] text-3xl">{product.price}</p>
                </div>
                {product.inStock && (
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-md">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 20 20">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="text-green-600 text-sm">متوفر</span>
                  </div>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-[#303030] mb-2 text-right">الكمية</label>
                <div className="flex items-center gap-3 justify-end">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-[#d6d6d6] rounded-md hover:bg-gray-50 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      <path d="M3.33337 8H12.6667" stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-10 border border-[#d6d6d6] rounded-md text-center"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-[#d6d6d6] rounded-md hover:bg-gray-50 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      <path d="M8 3.33333V12.6667" stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M3.33337 8H12.6667" stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button className="bg-[#13499d] hover:bg-blue-800 text-white py-2 md:py-3 rounded-md transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 20 20">
                    <path d="M6.66667 1.66667V4.16667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M13.3333 1.66667V4.16667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M2.5 7.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M17.5 7.08333V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08333C2.5 4.58333 3.75 2.91667 6.66667 2.91667H13.3333C16.25 2.91667 17.5 4.58333 17.5 7.08333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <span>طلب عرض سعر</span>
                </button>
                <button className="bg-white border border-[#13499d] text-[#13499d] hover:bg-blue-50 py-2 md:py-3 rounded-md transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 20 20">
                    <path d="M6.66667 10H13.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M10 13.3333V6.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M7.5 18.3333H12.5C16.6667 18.3333 18.3333 16.6667 18.3333 12.5V7.5C18.3333 3.33333 16.6667 1.66667 12.5 1.66667H7.5C3.33333 1.66667 1.66667 3.33333 1.66667 7.5V12.5C1.66667 16.6667 3.33333 18.3333 7.5 18.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <span>استفسار</span>
                </button>
              </div>
            </div>

            {/* Warranty Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3" dir="rtl">
              <svg className="w-6 h-6 text-[#13499d] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p169dda00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p3cccb600} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <div className="text-right">
                <p className="text-[#13499d] mb-1">ضمان شامل</p>
                <p className="text-[#4a5565] text-sm">{product.warranty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-[#303030] text-2xl md:text-3xl mb-4 md:mb-6 text-right">المواصفات الفنية</h2>
          <div className="bg-white rounded-lg border border-[#d6d6d6] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d6d6d6]">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="bg-white">
                  <div className="p-4 flex items-center justify-between">
                    <div className="bg-slate-50 px-3 py-1.5 rounded-md">
                      <span className="text-blue-900 text-sm">{value}</span>
                    </div>
                    <span className="text-[#303030]">{key}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-[#303030] text-2xl md:text-3xl mb-4 md:mb-6 text-right">المميزات</h2>
          <div className="bg-white rounded-lg border border-[#d6d6d6] p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3" dir="rtl">
                  <div className="w-6 h-6 bg-[#13499d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 16">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="text-[#4a5565] text-right">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-[#303030] text-2xl md:text-3xl mb-4 md:mb-6 text-right">منتجات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <button
                key={relatedProduct.id}
                onClick={() => navigate(`/products/${category}/${relatedProduct.id}`)}
                className="bg-white border border-[#d6d6d6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow text-right"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[rgba(15,22,41,0.4)]"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-[#303030] text-lg mb-1 text-right">{relatedProduct.name}</h3>
                  <p className="text-[#6a7282] text-sm mb-2 text-right">{relatedProduct.model}</p>
                  <div className="bg-slate-50 px-3 py-1.5 rounded-md inline-block">
                    <span className="text-blue-900 text-xs">{relatedProduct.capacity}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
