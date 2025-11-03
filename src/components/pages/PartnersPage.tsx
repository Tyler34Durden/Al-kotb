import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Globe,
  Award,
  Users,
  Handshake,
  CheckCircle,
  Star,
  ExternalLink,
  MapPin,
  Calendar,
  Package,
  TrendingUp
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const partners = [
  {
    id: 1,
    name: 'Toyota Material Handling',
    logo: 'https://images.unsplash.com/photo-1611176682835-871a38ddc9d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMGVxdWlwbWVudCUyMHByb2R1Y3QlMjBjYXRhbG9nfGVufDF8fHx8MTc1ODQ4ODg4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    country: 'اليابان',
    since: '2018',
    category: 'الرافعات الشوكية والمعدات اللوجستية',
    color: '#e60012',
    products: [
      'رافعات شوكية كهربائية وديزل',
      'معدات مناولة المواد',
      'أنظمة التشغيل الآلي',
      'حلول اللوجستيات المتكاملة'
    ],
    description: 'الشركة الرائدة عالمياً في صناعة الرافعات الشوكية ومعدات المناولة',
    achievements: [
      'أكثر من 80 عاماً من الخبرة',
      'الرقم 1 عالمياً في الرافعات الشوكية',
      'حضور في أكثر من 190 دولة',
      'تقنيات صديقة للبيئة'
    ]
  },
  {
    id: 2,
    name: 'Jungheinrich',
    logo: 'https://images.unsplash.com/photo-1560596205-8fb48c7ef200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RvcmFnZSUyMHJhY2tzJTIwc2NhZmZvbGRpbmd8ZW58MXx8fHwxNzU4NDg4ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    country: 'ألمانيا',
    since: '2019',
    category: 'أنظمة التخزين والأتمتة',
    color: '#ffcc00',
    products: [
      'أنظمة التخزين الآلية',
      'رفوف التخزين المتقدمة',
      'أنظمة إدارة المستودعات',
      'حلول التخزين الذكية'
    ],
    description: 'رائدة في تقنيات التخزين الآلي وحلول المستودعات الذكية',
    achievements: [
      'أكثر من 70 عاماً في السوق',
      'رائدة في الأتمتة الداخلية',
      'تقنيات توفير الطاقة',
      'حلول مخصصة للعملاء'
    ]
  },
  {
    id: 3,
    name: 'Still GmbH',
    logo: 'https://images.unsplash.com/photo-1565954786194-d22abeaac3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwbWFpbnRlbmFuY2UlMjBzZXJ2aWNlfGVufDF8fHx8MTc1ODQ4ODgzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    country: 'ألمانيا',
    since: '2020',
    category: 'المعدات الصناعية المتخصصة',
    color: '#003d7a',
    products: [
      'معدات المناولة الدقيقة',
      'رافعات الممرات الضيقة',
      'معدات الورش المتخصصة',
      'أنظمة التحكم المتقدمة'
    ],
    description: 'متخصصة في المعدات عالية الدقة والحلول المبتكرة',
    achievements: [
      'تقنيات حاصلة على براءات اختراع',
      'معدات عالية الدقة',
      'كفاءة في استهلاك الطاقة',
      'تصاميم مبتكرة'
    ]
  },
  {
    id: 4,
    name: 'Crown Equipment',
    logo: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBvcGVyYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODQ4ODgzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    country: 'أمريكا',
    since: '2021',
    category: 'معدات المستودعات المتقدمة',
    color: '#f7941d',
    products: [
      'رافعات الطلبيات',
      'معدات التخزين العمودي',
      'أنظمة الطاقة المتقدمة',
      'تقنيات السلامة'
    ],
    description: 'رائدة في معدات المستودعات وتقنيات السلامة المتقدمة',
    achievements: [
      'أكثر من 75 عاماً من الابتكار',
      'معايير سلامة عالمية',
      'تقنيات موفرة للطاقة',
      'خدمة عملاء متميزة'
    ]
  }
];

export function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#13499d] via-[#0f1629] to-[#13499d] text-white py-16 md:py-20 overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'linear-gradient(60deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
            backgroundSize: '200% 200%'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
          <motion.div 
            className="max-w-4xl text-right"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Handshake className="w-16 h-16 text-amber-400" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl mb-4">شركاؤنا العالميون</h1>
            <p className="text-xl text-blue-100 mb-8">
              نفخر بشراكاتنا مع كبرى الشركات العالمية في مجال المعدات الصناعية
            </p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: Globe, label: 'شريك عالمي', value: '15+' },
                { icon: Award, label: 'علامة تجارية', value: '25+' },
                { icon: Package, label: 'منتج', value: '500+' },
                { icon: TrendingUp, label: 'سنة خبرة', value: '12+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                  <motion.p 
                    className="text-2xl mb-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-blue-200">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#0f1629] mb-4">شركاؤنا المعتمدون</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              نعمل مع أفضل الشركات العالمية لتوفير أجود المعدات والخدمات
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPartner(selectedPartner === partner.id ? null : partner.id)}
              >
                <Card className="h-full overflow-hidden border-2 hover:border-[#13499d] transition-all duration-300 cursor-pointer group">
                  <CardHeader className="relative">
                    {/* Background Pattern */}
                    <motion.div 
                      className="absolute inset-0 opacity-5"
                      style={{ backgroundColor: partner.color }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div 
                        className="w-20 h-20 bg-white border-2 rounded-lg overflow-hidden flex-shrink-0 shadow-lg"
                        style={{ borderColor: partner.color }}
                        variants={logoVariants}
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ImageWithFallback 
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <div className="flex-1 text-right">
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CardTitle className="text-xl text-[#0f1629] mb-2 group-hover:text-[#13499d] transition-colors">
                            {partner.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 justify-end mb-2">
                            <span className="text-sm text-gray-600">{partner.country}</span>
                            <MapPin className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            <span className="text-sm text-gray-600">شريك منذ {partner.since}</span>
                            <Calendar className="w-4 h-4 text-gray-400" />
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Badge 
                        className="text-xs"
                        style={{ backgroundColor: `${partner.color}20`, color: partner.color }}
                      >
                        {partner.category}
                      </Badge>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="text-right">
                    <motion.p 
                      className="text-gray-700 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {partner.description}
                    </motion.p>

                    {/* Products */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#0f1629] mb-3 flex items-center gap-2 justify-end">
                        <span>المنتجات</span>
                        <Package className="w-4 h-4" style={{ color: partner.color }} />
                      </h4>
                      <ul className="space-y-2">
                        {partner.products.map((product, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 justify-end"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <span>{product}</span>
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: partner.color }} />
                            </motion.div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <AnimatePresence>
                      {selectedPartner === partner.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t mt-4">
                            <h4 className="font-semibold text-[#0f1629] mb-3 flex items-center gap-2 justify-end">
                              <span>الإنجازات</span>
                              <Award className="w-4 h-4" style={{ color: partner.color }} />
                            </h4>
                            <ul className="space-y-2">
                              {partner.achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-gray-600 justify-end"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <span>{achievement}</span>
                                  <Star className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500 fill-amber-500" />
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* View More Button */}
                    <motion.div 
                      className="mt-4 pt-4 border-t"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full group/btn"
                        style={{ borderColor: partner.color, color: partner.color }}
                      >
                        <motion.span
                          animate={{ x: [0, -5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          {selectedPartner === partner.id ? 'إخفاء التفاصيل' : 'عرض المزيد'}
                        </motion.span>
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-[#13499d] to-[#0f1629] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center max-w-[1200px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Users className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl mb-4">هل تريد أن تصبح شريكاً؟</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              نرحب بالشراكات الجديدة مع الشركات المتخصصة في المعدات الصناعية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#0f1629]">
                  تواصل معنا للشراكة
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#13499d]">
                  تحميل معلومات الشراكة
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
