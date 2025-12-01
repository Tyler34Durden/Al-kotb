import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSolution } from '../../hooks/useMedia';

// Small icon used in the solution cards
function WrenchIcon() {
  return (
    <svg className="block size-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 6L22 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 16L12 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 26C9.33333 24 11 22 13 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: solution, isLoading, isError } = useSolution(slug);
  // Form state for mailto (hooks must be at top-level to preserve order)
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [detailsText, setDetailsText] = useState('');

  if (isLoading) return <div className="container mx-auto px-4 py-12">جارٍ تحميل الحل...</div>;
  if (isError || !solution) return <div className="container mx-auto px-4 py-12 text-red-600">تعذر تحميل الحل. الرجاء المحاولة لاحقاً.</div>;

  const challenges = (solution as any).challenges || [];
  const specialized = (solution as any).specializedSolutions || [];
  const products = (solution as any).relatedProducts || [];
  const hero = solution.hero || (solution as any).hero || undefined;
  const heroImage = (solution as any).heroImage || (solution as any).image || undefined;

  return (
    <div className="min-h-screen bg-[#f6f6f6]" dir="rtl">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#13499d] to-[#0f1629] relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4 justify-end">
              {hero && hero.eyebrow && (
                <div className="bg-[#ffc00e] px-6 py-2 rounded-lg">
                  <span className="text-[#101828]">{hero.eyebrow}</span>
                </div>
              )}
            </div>

            <h1 className="text-5xl text-white mb-6 text-right">{(hero && hero.title) ? hero.title : solution.title}</h1>

            {heroImage && (
              <div className="w-full h-64 overflow-hidden rounded-md mb-6">
                <img src={heroImage} alt={solution.title} className="w-full h-full object-cover" />
              </div>
            )}

            {hero && hero.subtitle && <p className="text-blue-50 text-lg text-right">{hero.subtitle}</p>}
            {!hero && solution.excerpt && <p className="text-blue-100 mt-3">{solution.excerpt}</p>}
          </div>
        </div>
      </div>

      {/* Challenges Section (3-card responsive grid) */}
      {challenges.length > 0 && (
        <div className="bg-[#f6f6f6] py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-[30px] text-[#1a1a1a] mb-4">التحديات التي نواجهها</h2>
              <p className="text-xl text-[#4a5565]">نفهم التحديات الفريدة لهذا المجال ونقدم حلولاً مصممة خصيصاً</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((c: string, i: number) => (
                <div key={i} className="bg-white rounded-xl p-6 border-t-4 border-[#ffc00e]">
                  <h3 className="text-xl text-[#1a1a1a] mb-4 text-right">{c}</h3>
                  <p className="text-[#4a5565] text-right">&nbsp;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Solutions Section (same 3-card responsive grid styling) */}
      {specialized.length > 0 && (
        <div className="bg-[#f6f6f6] py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-[30px] text-[#1a1a1a] mb-4">حلولنا المتكاملة</h2>
              <p className="text-xl text-[#4a5565]">نقدم باقة شاملة من الحلول لتحسين العمليات</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {(() => {
                const seen = new Set<string>();
                const unique: string[] = [];
                for (const item of specialized) {
                  const key = (String(item || '')).trim().toLowerCase();
                  if (!seen.has(key)) {
                    seen.add(key);
                    unique.push(item);
                  }
                }

                return unique.map((s: string, i: number) => (
                  <div key={i} className="bg-white rounded-xl p-6 border-t-4 border-[#ffc00e] hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                    <h3 className="text-lg text-[#1a1a1a] mb-3">{s}</h3>
                    <p className="text-sm text-[#4a5565]">&nbsp;</p>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Products Section */}
      {products.length > 0 && (
        <div className="bg-[#f6f6f6] py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-[30px] text-[#1a1a1a] mb-4">المنتجات الموصى بها</h2>
              <p className="text-xl text-[#4a5565]">معدات متخصصة من أفضل الشركات المصنعة العالمية</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((rp: any, i: number) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    {rp.image ? (
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-100" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-[#303030] mb-2 text-right">{rp.title}</h3>
                    <p className="text-[#303030] mb-6 text-right">{rp.short_description || rp.description || ''}</p>
                    <button className="bg-[#13499d] hover:bg-blue-800 text-white w-full py-2 rounded-md transition-colors text-center" onClick={() => navigate(`/products/${rp.slug || rp.id}`)}>
                      عرض المنتج
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Section (simple) */}
      <div className="bg-gradient-to-b from-[#13499d] to-[#0f1629] relative py-24">
        <div className="container mx-auto px-4 relative max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-6">هل أنت مستعد للبدء؟</h2>
            <p className="text-xl text-blue-50">املأ النموذج وسيتواصل معك فريقنا المتخصص في أقرب وقت</p>
          </div>

          <div className="bg-[#f6f6f6] rounded-xl p-6 border border-white/20">
            {/* Controlled form that opens a mailto to Alkotobcompany@gmail.com */}
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const subject = `طلب خدمة - ${(hero && hero.title) ? hero.title : solution.title}`;
                const bodyLines = [
                  `الاسم: ${fullName}`,
                  `الشركة: ${companyName}`,
                  `البريد: ${contactEmail}`,
                  `الهاتف: ${phone}`,
                  `تفاصيل المشروع: ${detailsText}`,
                ];

                const mailto = `mailto:Alkotobcompany@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\r\n'))}`;

                // Try to open user's mail client
                try {
                  window.location.href = mailto;
                } catch (err) {
                  // fallback: open in new tab
                  window.open(mailto, '_blank');
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#303030] text-sm text-right">الاسم الكامل</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-[rgba(246,246,246,0.2)] border rounded-md px-3 py-2 text-[#303030]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#303030] text-sm text-right">اسم الشركة</label>
                  <input
                    type="text"
                    placeholder="أدخل اسم الشركة"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="bg-[rgba(246,246,246,0.2)] border rounded-md px-3 py-2 text-[#303030]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#303030] text-sm text-right">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="example@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="bg-[rgba(246,246,246,0.2)] border rounded-md px-3 py-2 text-[#303030]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#303030] text-sm text-right">رقم الهاتف</label>
                  <input
                    type="tel"
                    placeholder="+218 XX XXX XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[rgba(246,246,246,0.2)] border rounded-md px-3 py-2 text-[#303030]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#303030] text-sm text-right">تفاصيل المشروع</label>
                <textarea
                  rows={5}
                  placeholder="أخبرنا المزيد عن احتياجاتك..."
                  value={detailsText}
                  onChange={(e) => setDetailsText(e.target.value)}
                  className="bg-[rgba(246,246,246,0.2)] border rounded-md px-3 py-2 text-[#303030] resize-none"
                />
              </div>

              <button type="submit" className="bg-[#13499d] hover:bg-blue-800 text-[#f6f6f6] w-full py-3 rounded-md transition-colors text-center">إرسال الطلب</button>

              <p className="text-sm text-right text-[#4a5565] mt-2">إذا لم يفتح تطبيق البريد تلقائياً، يمكنك الضغط على الرابط التالي لفتح عميل البريد يدوياً:</p>
              <p className="text-right mt-2">
                <a
                  href={`mailto:Alkotobcompany@gmail.com?subject=${encodeURIComponent('طلب خدمة')}`}
                  className="text-[#13499d] underline"
                >فتح البريد: Alkotobcompany@gmail.com</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
