import { useParams, useNavigate } from 'react-router-dom';
import { useCategory } from '../../hooks/useMedia';
import { strapiImageUrl } from '../../lib/strapi';
import svgPaths from "../../imports/svg-tqfzhj6hik";
import imgContainer from "figma:asset/5c630bc29d41ef8bd3671227fa3f1a7a04e02690.png";

export function ProductCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const { data: cat, isLoading, isError, error } = useCategory(category);

  if (isLoading) return <div className="container mx-auto px-4 py-12">جارٍ تحميل الفئة...</div>;
  if (isError) return <div className="container mx-auto px-4 py-12 text-red-600">تعذر تحميل الفئة: {(error as any)?.message || 'خطأ'}</div>;
  if (!cat) return <div className="container mx-auto px-4 py-12">الفئة غير موجودة</div>;

  const products = Array.isArray(cat.products) ? cat.products : (cat.raw && cat.raw.products ? cat.raw.products : []);

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
                </svg>
                <span className="text-sm">رجوع إلى المنتجات</span>
              </button>
            </div>

            {/* Title Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-end gap-3 mb-4 sm:mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
                  <path d={svgPaths.p34cd3180} stroke="#FFC00E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </svg>
              </div>

              <div className="bg-[#ffc00e] px-3 py-2 rounded-lg">
                <span className="text-[#101828]">{cat.name}</span>
              </div>

              <h1 className="text-3xl sm:text-[40px] md:text-5xl text-white text-right">
                {cat.name}
              </h1>
            </div>

            <p className="text-base md:text-[18px] text-blue-50 text-right">
              {cat.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-8 max-w-[1024px]">
        {/* Filters (kept for layout parity) */}
        <div className="flex flex-wrap items-center justify-end gap-3 mb-8">
          <div className="relative">
            <button className="border border-[#d6d6d6] bg-white rounded px-3 py-2 flex items-center gap-4 min-w-[110px] sm:min-w-[127px]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M6 9L12 15L18 9" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="text-[#303030] text-xs">السعر</span>
            </button>
          </div>

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
          {products.map((product: any) => (
            <div key={product.id} className="bg-white border border-[#d6d6d6] rounded-lg overflow-hidden">
              <div className="relative h-48 sm:h-[192px] overflow-hidden">
                <img src={strapiImageUrl(product.image || (product.attributes && product.attributes.image) || product.url) || undefined} alt={product.title || product.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(15,22,41,0.4)]"></div>

                <div className="absolute top-4 right-4 bg-[#f6f6f6] border border-[#303030] rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p67fd620} stroke="#303030" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              <div className="px-4 py-4 sm:p-6">
                <h3 className="text-[#303030] text-xl mb-1 text-right">{product.title || product.name}</h3>
                <p className="text-[#4a5565] text-sm mb-4 text-right line-clamp-2">{product.description || product.short_description}</p>

                <div className="space-y-2 mb-4">
                  {/* If specifications are present, show a couple of fields */}
                  {product.raw?.specifications && product.raw.specifications.rows && Object.entries(product.raw.specifications.rows).slice(0,3).map(([k,v]: any) => (
                    <div key={k} className="bg-gray-50 rounded-md px-2 py-2 flex items-center justify-between">
                      <div className="bg-slate-50 px-2 py-1 rounded-md">
                        <span className="text-blue-900 text-xs">{v}</span>
                      </div>
                      <span className="text-[#1a1a1a] text-sm">{k}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => navigate(`/products/${category}/${product.id || product.slug}`)}
                  className="w-full bg-[#13499d] hover:bg-blue-800 text-white py-2 rounded-md flex items-center justify-center gap-3 transition-colors"
                >
                  <span className="text-sm">عرض التفاصيل</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
