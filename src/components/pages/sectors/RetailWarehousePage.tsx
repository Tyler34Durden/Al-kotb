import { motion } from 'motion/react';
import { Store, CheckCircle2, Package, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';
import { useState } from 'react';

interface RetailWarehousePageProps {
  onBack?: () => void;
}

export function RetailWarehousePage({ onBack }: RetailWarehousePageProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const challenges = [
    {
      title: 'كثافة العمليات اليومية',
      description: 'الحاجة لمعدات سريعة للتعامل مع حركة البضائع المكثفة'
    },
    {
      title: 'استغلال المساحات',
      description: 'تحقيق أقصى استفادة من مساحات التخزين المحدودة'
    },
    {
      title: 'سرعة التسليم',
      description: 'تلبية متطلبات السرعة في تحضير وإرسال الطلبات'
    }
  ];

  const solutions = [
    {
      icon: Package,
      title: 'أنظمة رفوف ذكية',
      description: 'حلول تخزين رأسية وأفقية لتحسين استغلال المساحة'
    },
    {
      icon: TrendingUp,
      title: 'رافعات صغيرة فعالة',
      description: 'معدات مناسبة للممرات الضيقة والأماكن المحدودة'
    },
    {
      icon: Clock,
      title: 'معدات شحن سريع',
      description: 'ناقلات وأدوات تسريع عمليات تحضير الطلبات'
    },
    {
      icon: Users,
      title: 'تدريب الموظفين',
      description: 'برامج تدريبية للعاملين على استخدام المعدات بكفاءة'
    }
  ];

  const products = [
    {
      name: 'رافعات كهربائية صغيرة',
      specs: 'مثالية للأسواق، حمولة 1.5-2 طن',
      image: '/placeholder-compact.jpg'
    },
    {
      name: 'رفوف تخزين قابلة للتعديل',
      specs: 'سهلة التركيب، تحمل حتى 300 كجم',
      image: '/placeholder-adjustable.jpg'
    },
    {
      name: 'ناقلات يدوية وكهربائية',
      specs: 'خفيفة وسهلة الاستخدام للعمليات السريعة',
      image: '/placeholder-hand-truck.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-[#13499d] to-[#0f1629] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {onBack && (
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5" />
              <span>العودة إلى الحلول</span>
            </motion.button>
          )}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mr-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Store className="w-12 h-12 text-amber-500" />
              <span className="bg-amber-500 text-gray-900 px-4 py-2 rounded-lg">قطاع التجزئة</span>
            </div>
            <h1 className="mb-6">
              الأسواق والمخازن
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              حلول تخزين ومناولة مصممة خصيصاً للأسواق والمتاجر الكبرى والمخازن، مع التركيز على الكفاءة والمرونة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">التحديات في قطاع التجزئة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتفهم المتطلبات الخاصة للأسواق والمخازن
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-t-4 border-t-amber-500 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-right">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-right">{challenge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">حلولنا المتخصصة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              معدات مصممة لتحسين عمليات التخزين والمناولة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <solution.icon className="w-8 h-8 text-[#13499d]" />
                    </div>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">قصص نجاح عملائنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ساعدنا العديد من الأسواق والمخازن في تحسين عملياتهم
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '40%', label: 'زيادة في الإنتاجية' },
              { stat: '30%', label: 'توفير في المساحة' },
              { stat: '50%', label: 'تحسين سرعة التسليم' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-8 text-center"
              >
                <div className="text-5xl font-['Cairo:Bold'] text-[#13499d] mb-3">{item.stat}</div>
                <p className="text-lg text-gray-700">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">المنتجات الموصى بها</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              معدات عملية ومناسبة لبيئة التجزئة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <Store className="w-20 h-20 text-green-600" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-right">{product.name}</CardTitle>
                    <CardDescription className="text-right">{product.specs}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#13499d] hover:bg-[#0f1629]">
                      طلب عرض سعر
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-l from-[#13499d] to-[#0f1629] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="mb-4 text-white">احصل على عرض خاص لعملك</h2>
              <p className="text-xl text-blue-50">
                نوفر عروضاً خاصة للأسواق والمخازن الكبرى
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">الاسم الكامل</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                          placeholder="أدخل اسمك"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">اسم المتجر/المخزن</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                          placeholder="أدخل اسم المنشأة"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                          placeholder="example@company.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                          placeholder="+218 XX XXX XXXX"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">تفاصيل الاحتياجات</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-[150px]"
                        placeholder="أخبرنا عن حجم منشأتك والمعدات المطلوبة..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900"
                      size="lg"
                    >
                      إرسال الطلب
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">مزايا العمل معنا</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'أسعار تنافسية',
              'خيارات دفع مرنة',
              'ضمان على المعدات',
              'خدمة ما بعد البيع'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span className="text-gray-800">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
