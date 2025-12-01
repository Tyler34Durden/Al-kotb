import { motion } from 'motion/react';
import { Plane, Truck, Fuel, HardHat, Factory, Store, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export function SectorsPage() {
  const sectors = [
    {
      id: 'aviation',
      title: 'المناولة الأرضية للطيران',
      description: 'حلول متكاملة لعمليات المناولة الأرضية في المطارات مع معدات تلبي أعلى معايير السلامة',
      icon: Plane,
      color: 'from-blue-500 to-cyan-500',
      features: ['معدات مناولة أمتعة', 'جرارات قطر', 'خدمات أرضية', 'صيانة متخصصة']
    },
    {
      id: 'logistics',
      title: 'الشحن واللوجستيات',
      description: 'معدات وحلول لتحسين عمليات الشحن والتخزين واللوجستيات بكفاءة عالية',
      icon: Truck,
      color: 'from-green-500 to-emerald-500',
      features: ['رافعات شوكية', 'أنظمة تخزين', 'ناقلات بضائع', 'حلول لوجستية']
    },
    {
      id: 'oil-gas',
      title: 'النفط والغاز',
      description: 'معدات متخصصة ومعتمدة لقطاع النفط والغاز مع التزام كامل بمعايير السلامة العالمية',
      icon: Fuel,
      color: 'from-orange-500 to-red-500',
      features: ['معدات مقاومة للانفجار', 'معتمدة ATEX', 'صيانة وقائية', 'حلول آمنة']
    },
    {
      id: 'construction',
      title: 'المقاولات والبناء',
      description: 'معدات قوية لمشاريع البناء والتشييد مع التركيز على الكفاءة والسلامة',
      icon: HardHat,
      color: 'from-amber-500 to-yellow-500',
      features: ['رافعات تيليسكوبية', 'معدات طرق وعرة', 'منصات جوية', 'حلول تأجير']
    },
    {
      id: 'manufacturing',
      title: 'المصانع والإنتاج',
      description: 'حلول متكاملة لتحسين كفاءة الإنتاج والمناولة في المصانع الصناعية',
      icon: Factory,
      color: 'from-indigo-500 to-purple-500',
      features: ['رافعات كهربائية', 'أنظمة رفوف', 'ناقلات مواد', 'تحسين العمليات']
    },
    {
      id: 'retail',
      title: 'الأسواق والمخازن',
      description: 'حلول تخزين ومناولة مصممة خصيصاً للأسواق والمتاجر الكبرى والمخازن',
      icon: Store,
      color: 'from-pink-500 to-rose-500',
      features: ['رافعات صغيرة', 'رفوف قابلة للتعديل', 'ناقلات سريعة', 'حلول مرنة']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-[#13499d] to-[#0f1629] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-amber-500 text-gray-900 px-6 py-3 rounded-lg mb-6">
              القطاعات التي نخدمها
            </div>
            <h1 className="mb-6">
              حلول متخصصة لكل قطاع
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto">
              نقدم معدات وحلول مصممة خصيصاً لتلبية احتياجات كل قطاع، مع فريق خبراء متخصص وخدمات دعم شاملة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    {/* Gradient Header */}
                    <div className={`h-32 bg-gradient-to-br ${sector.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <IconComponent className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-right mb-2">{sector.title}</CardTitle>
                      <CardDescription className="text-right text-base leading-relaxed">
                        {sector.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Features List */}
                      <div className="space-y-2">
                        {sector.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-[#13499d] hover:bg-[#0f1629] group/btn"
                        onClick={() => {
                          // In a real app, this would navigate to the sector page
                          // debug log removed
                        }}
                      >
                        <span>اعرف المزيد</span>
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-l from-[#13499d] to-[#0f1629] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">أرقامنا تتحدث</h2>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              خبرة واسعة في خدمة مختلف القطاعات
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'مشروع ناجح' },
              { number: '6', label: 'قطاعات متخصصة' },
              { number: '12+', label: 'سنة خبرة' },
              { number: '98%', label: 'رضا العملاء' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-['Cairo:Bold'] text-amber-500 mb-3">
                  {stat.number}
                </div>
                <p className="text-lg text-blue-50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">لماذا تختار شركة القطب؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن شريكك الموثوق في جميع القطاعات
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'خبرة متخصصة',
                description: 'فريق من الخبراء المتخصصين في كل قطاع'
              },
              {
                title: 'معدات عالمية',
                description: 'شراكات مع أفضل الشركات المصنعة'
              },
              {
                title: 'دعم شامل',
                description: 'خدمات دعم فني وصيانة على مدار الساعة'
              },
              {
                title: 'حلول مخصصة',
                description: 'نصمم الحلول وفقاً لاحتياجاتك الخاصة'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-l from-[#13499d] to-[#0f1629] rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="mb-4 text-white">هل أنت مستعد للبدء؟</h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص لقطاعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-gray-900"
              >
                تواصل معنا الآن
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#13499d]"
              >
                طلب عرض سعر
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
