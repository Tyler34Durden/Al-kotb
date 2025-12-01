import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Globe,
  Award,
  CheckCircle,
  Star,
  ExternalLink,
  MapPin,
  Calendar,
  Package,
  TrendingUp
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { STRAPI_URL } from '../../lib/strapi';

// We'll fetch partners from Strapi. The API returns objects with `name`, `country`, `since`, `industry` and `description`, plus an `image` object with `url` or `formats`.

export function PartnersPage() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toAbsoluteUrl(path?: string | null) {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${STRAPI_URL.replace(/\/$/, '')}${path}`;
  }

  function parseDescription(desc?: string) {
    if (!desc) return { description: '', products: [], achievements: [] };
    const lines = desc.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const products: string[] = [];
    const achievements: string[] = [];
    let mainDesc = '';
    let section: 'main' | 'products' | 'achievements' = 'main';
    for (const line of lines) {
      const l = line.replace(/：/g, ':');
      if (/^المنتجات/i.test(l)) { section = 'products'; continue; }
      if (/^الإنجازات|^الانجازات/i.test(l)) { section = 'achievements'; continue; }
      if (section === 'main') {
        mainDesc += (mainDesc ? '\n' : '') + l;
      } else if (section === 'products') {
        products.push(...l.split(/[,،]/).map(s => s.trim()).filter(Boolean));
      } else if (section === 'achievements') {
        achievements.push(l);
      }
    }
    return { description: mainDesc, products, achievements };
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${STRAPI_URL.replace(/\/$/, '')}/api/partners?populate=*`)
      .then(res => res.json())
      .then((payload) => {
        const items = (payload?.data || []).map((d: any) => {
          const attrs = d;
          const imgAttr = attrs.image?.formats ? attrs.image : attrs.image || null;
          // Support multiple shapes
          const imgObj = imgAttr?.formats ? imgAttr : (attrs.image?.data?.attributes || attrs.image?.attributes || attrs.image || null);
          const imgUrl = imgObj?.formats?.medium?.url || imgObj?.formats?.small?.url || imgObj?.url || null;
          const parsed = parseDescription(attrs.description);
          return {
            id: d.id ?? attrs.id,
            name: attrs.name,
            country: attrs.country,
            since: attrs.since,
            category: attrs.industry || attrs.category || '',
            color: '#13499d',
            logo: toAbsoluteUrl(imgUrl),
            description: parsed.description || attrs.description || '',
            products: parsed.products.length ? parsed.products : [],
            achievements: parsed.achievements.length ? parsed.achievements : [],
          };
        });

        // Deduplicate partners by normalized name (trim + lowercase), preserving first occurrence
        const seen = new Set<string>();
        const deduped = items.filter(p => {
          const key = (p.name || '').toString().trim().toLowerCase();
          if (!key) return true; // keep entries without a name
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        setPartners(deduped);
      })
      .catch((err) => {
        console.error('Failed to fetch partners', err);
        setError('فشل في جلب بيانات الشركاء');
      })
      .finally(() => setLoading(false));
  }, []);

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
        {/* Hero background image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/image00045.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
          <motion.div 
            className="max-w-4xl text-right"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Handshake icon removed per request */}
            
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
                { icon: Globe, label: 'شريك عالمي', value: '9+' },
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
            animate="visible"
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
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

                    {/* Products (rendered as descriptive sentence rather than list) */}
                    {/* Products removed: rendering uses description elsewhere */}

                    {/* Achievements (always visible) */}
                    {partner.achievements && partner.achievements.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4">
                          <motion.p
                            className="text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            {partner.achievements.join('؛ ')}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}

                    {/* View More button removed per request */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section (WhatsApp) */}
      <motion.section
        className="bg-white py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-[#303030] mb-4 md:mb-6">هل تريد أن تصبح شريكاً؟</h2>
            <p className="text-lg md:text-xl text-[#303030] mb-6 md:mb-8">نرحب بالشراكات الجديدة مع الشركات المتخصصة في المعدات الصناعية</p>

            <a href="https://wa.me/218911286734" target="_blank" rel="noopener noreferrer" aria-label="فتح محادثة واتساب" className="bg-white border border-[#13499d] text-[#13499d] hover:bg-[#13499d] hover:text-white transition-colors px-8 py-3 rounded-md inline-flex items-center gap-2">
              <div className="w-4 h-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.22133 11.0453C9.35902 11.1086 9.51413 11.123 9.66113 11.0863C9.80812 11.0496 9.93822 10.9639 10.03 10.8433L10.2667 10.5333C10.3909 10.3677 10.5519 10.2333 10.737 10.1408C10.9222 10.0482 11.1263 10 11.3333 10H13.3333C13.687 10 14.0261 10.1405 14.2761 10.3905C14.5262 10.6406 14.6667 10.9797 14.6667 11.3333V13.3333C14.6667 13.687 14.5262 14.0261 14.2761 14.2761C14.0261 14.5262 13.687 14.6667 13.3333 14.6667C10.1507 14.6667 7.09849 13.4024 4.84805 11.1519C2.59762 8.90151 1.33333 5.84926 1.33333 2.66667C1.33333 2.31304 1.47381 1.97391 1.72386 1.72386C1.97391 1.47381 2.31304 1.33333 2.66667 1.33333H4.66667C5.02029 1.33333 5.35943 1.47381 5.60948 1.72386C5.85952 1.97391 6 2.31304 6 2.66667V4.66667C6 4.87366 5.95181 5.07781 5.85924 5.26295C5.76667 5.44809 5.63226 5.60914 5.46667 5.73333L5.15467 5.96733C5.03228 6.06078 4.94601 6.19372 4.91053 6.34357C4.87504 6.49341 4.89252 6.65092 4.96 6.78933C5.87112 8.63991 7.36962 10.1365 9.22133 11.0453Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"></path>
                </svg>
              </div>
              <span>اتصل بنا الآن</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
