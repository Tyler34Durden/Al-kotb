import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import svgPaths from "../../imports/svg-tqfzhj6hik";
import imgContainer from "figma:asset/5c630bc29d41ef8bd3671227fa3f1a7a04e02690.png";
import imgImageWithFallback2 from "figma:asset/9c5982e7573c50fa5da560993a2457e99d4e031b.png";
import imgImageWithFallback3 from "figma:asset/b512b33e58793318e7c126751fd19b9a67e02147.png";
import imgImageWithFallback4 from "figma:asset/2f3c462fba2a830e4742a5fb587958214aeb9204.png";
import { useProduct } from '../../hooks/useMedia';
import { strapiImageUrl } from '../../lib/strapi';

export function ProductDetailPage() {
  const { category, productId } = useParams<{ category: string; productId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Determine identifier param (support /products/:id and /products/:category/:productId)
  const formatSize = (size: any) => {
    if (!size && size !== 0) return '';
    const n = typeof size === 'string' ? parseFloat(size) : Number(size);
    if (Number.isNaN(n)) return String(size);
    if (n >= 1024) {
      const kb = n / 1024;
      if (kb >= 1024) return `${(kb / 1024).toFixed(1)} MB`;
      return `${kb.toFixed(1)} KB`;
    }
    return `${n}${String(size).includes('.') ? '' : ' KB'}`;
  };
  const params = useParams<Record<string, string | undefined>>();
  const rawId = params.productId || params.id || params.product || params['*'] || productId || params.slug;
  const identifier = rawId || productId || params.category || undefined;

  const { data: product, isLoading: productLoading, isError: productError } = useProduct(identifier);

  if (productLoading) return <div className="container mx-auto px-4 py-12">جارٍ تحميل المنتج...</div>;
  if (productError) return <div className="container mx-auto px-4 py-12 text-red-600">تعذر تحميل المنتج. الرجاء المحاولة لاحقاً.</div>;
  if (!product) return <div className="container mx-auto px-4 py-12">المنتج غير موجودة</div>;

  // local state fallbacks
  const images = (product && Array.isArray(product.images) && product.images.length) ? product.images : [imgImageWithFallback2, imgImageWithFallback3, imgImageWithFallback4];
  const specifications = product?.specifications?.rows || product?.specifications || {};
  const features = product?.benefits ? (product.benefits.map((b: any) => `${b.label}: ${b.value}`)) : [];
  const inStock = product ? true : true;

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
      

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Left Side - Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-lg p-4 mb-4 border border-[#d6d6d6]">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img 
                  src={images[selectedImage]}
                  alt={product?.title || product?.name || ''}
                  className="w-full h-full object-cover"
                />
                {product?.inStock === false && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    غير متوفر
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {images.map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`عرض الصورة ${index + 1}`}
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
              <span className="text-[#101828] text-xs md:text-sm">{product?.category?.name || product?.category?.slug || ''}</span>
            </div>

            <h1 className="text-[#303030] text-2xl md:text-4xl mb-2 text-right">{product?.title || product?.name || ''}</h1>

            <div className="bg-white rounded-lg p-6 mb-6 border border-[#d6d6d6]">
              <p className="text-[#4a5565] text-right leading-relaxed mb-4">
                {product?.short_description || product?.description}
              </p>
              <p className="text-[#4a5565] text-right leading-relaxed">
                {product?.description}
              </p>
            </div>

            {/* Price and Actions */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-[#d6d6d6]">
              <div className="flex items-center justify-between mb-6">
                <div className="text-right">
                  <p className="text-[#6a7282] text-sm mb-1">السعر</p>
                  <p className="text-[#13499d] text-3xl">{product?.price ?? 'السعر عند الطلب'}</p>
                </div>
                {inStock && (
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-md">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 20 20">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="text-green-600 text-sm">متوفر</span>
                  </div>
                )}
              </div>

              {/* Quantity removed per user request */}

              {/* action buttons removed per request */}
            </div>

            {/* Sales contact with call button */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-[#d6d6d6]">
              <div className="flex items-center justify-between gap-4">
                <div className="text-right">
                  <p className="text-[#6a7282] text-sm mb-1">المبيعات</p>
                  <div dir="ltr" className="text-[#0f1629] text-lg font-semibold">091-2100995</div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="tel:+218912100995"
                    className="inline-flex items-center gap-2 bg-[#13499d] hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors text-sm"
                    aria-label="Call sales"
                  >
                    اتصل بنا
                  </a>
                </div>
              </div>
            </div>

            {/* Warranty card removed per request */}

            {/* Attachments Row (separate full-width section) */}
            {((product.attachments && product.attachments.length) || (product.raw && product.raw.attachments && product.raw.attachments.length)) && (
              <div className="mt-8">
                <h3 className="text-[#303030] text-2xl mb-4 text-right">المرفقات</h3>
                <div className="max-w-[1200px] mx-auto">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {(product.attachments && product.attachments.length ? product.attachments : product.raw.attachments || []).map((att: any, i: number) => {
                    const rawUrl = att.url || att.attributes?.url || att.data?.attributes?.url || att.url || (typeof att === 'string' ? att : undefined);
                    const url = rawUrl || '';
                    const filename = att.name || att.title || (url ? url.split('/').pop() : `attachment-${i}`);
                    const isPdf = typeof url === 'string' && url.toLowerCase().endsWith('.pdf');
                    return (
                      <div
                        key={i}
                        tabIndex={isPdf ? 0 : undefined}
                        onKeyDown={(e: any) => { if (isPdf && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setPreviewUrl(url); } }}
                        onClick={() => { if (isPdf) setPreviewUrl(url); }}
                        aria-label={isPdf ? `افتح ${filename} للمعاينة` : `فتح ${filename}`}
                        className={`border rounded-lg bg-white p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow min-h-[120px] ${isPdf ? 'cursor-pointer' : ''}`}
                      >
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 flex items-center justify-center bg-[#f3f4f6] rounded flex-shrink-0">
                              {isPdf ? (
                                <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none"><path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              ) : (
                                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none"><path d="M6 2h12v20H6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              )}
                            </div>
                            <div className="text-right flex-1 min-w-0 pr-4 md:pr-6">
                              <div className="text-[#303030] font-medium truncate">{filename}</div>
                              {att.size && <div className="text-sm text-[#6a7282]">{formatSize(att.size)}</div>}
                            </div>
                          </div>
                        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                          <div className="flex gap-2 w-full sm:w-auto">
                            <a href={url} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-md text-sm w-full text-center sm:w-auto">تحميل</a>
                          </div>
                          <div className="text-sm text-[#6a7282] mt-2 sm:mt-0">{att.type || (isPdf ? 'PDF' : '')}</div>
                        </div>
                      </div>
                    );
                  })}
                      </div>
                    </div>

                    
                  </div>
                </div>

                {/* Centered modal preview */}
                {previewUrl && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                    <div className="bg-white w-full max-w-5xl h-[86vh] rounded-md overflow-hidden relative">
                      <div className="flex items-center justify-between p-3 border-b">
                        <div className="text-right text-sm text-[#303030]">معاينة المرفق</div>
                        <div className="flex items-center gap-2">
                          <a href={previewUrl} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded-md text-sm">فتح في علامة جديدة</a>
                          <button aria-label="إغلاق المعاينة" onClick={() => setPreviewUrl(null)} className="px-3 py-1 bg-white border rounded-md">إغلاق</button>
                        </div>
                      </div>
                      <iframe src={previewUrl} className="w-full h-[calc(100%-48px)]" title="attachment-fullscreen"></iframe>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Specifications Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-[#303030] text-2xl md:text-3xl mb-4 md:mb-6 text-right">المواصفات الفنية</h2>
          <div className="bg-white rounded-lg border border-[#d6d6d6] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d6d6d6]">
              {Object.entries(specifications).map(([key, value], index) => (
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
              {features.length && features.map((feature: any, index: number) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {(product && Array.isArray(product.raw?.related_products) ? product.raw.related_products : product?.raw?.relatedProducts || []).map((rp: any, i: number) => (
                <button
                  key={rp.id || i}
                  onClick={() => navigate(`/products/${product?.category?.slug || product?.category?.id || ''}/${rp.id || rp.slug || ''}`)}
                  className="bg-white border border-[#d6d6d6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow text-right"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={strapiImageUrl(rp.image || rp.attributes?.image || rp.url || rp.attributes?.url) || imgImageWithFallback3} alt={rp.title || rp.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[rgba(15,22,41,0.4)]"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#303030] text-lg mb-1 text-right">{rp.title || rp.name}</h3>
                    <p className="text-[#6a7282] text-sm mb-2 text-right">{rp.model || rp.short_description || ''}</p>
                    <div className="bg-slate-50 px-3 py-1.5 rounded-md inline-block">
                      <span className="text-blue-900 text-xs">{rp.capacity || rp.category || ''}</span>
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
