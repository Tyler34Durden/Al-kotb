import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Megaphone, Star, TrendingUp, Plus, Edit, Trash2, Eye, EyeOff, Upload, Calendar, Percent, Tag } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Banner {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  order: number;
}

interface FeaturedProduct {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  isActive: boolean;
  order: number;
  addedDate: string;
}

interface Offer {
  id: string;
  title: string;
  description: string;
  type: 'percentage' | 'fixed' | 'buy_x_get_y';
  value: number;
  minOrderAmount?: number;
  applicableProducts: string[];
  startDate: string;
  endDate: string;
  isActive: boolean;
  usageLimit?: number;
  usedCount: number;
  code?: string;
}

export function AdsPage() {
  const [banners, setBanners] = useState<Banner[]>([
    {
      id: '1',
      title: 'خصم 20% على جميع الحلويات الشرقية',
      description: 'استمتع بألذ الحلويات الشرقية بخصم يصل إلى 20%',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=400&fit=crop',
      link: '/categories/eastern',
      isActive: true,
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      order: 1
    },
    {
      id: '2',
      title: 'كنافة طازجة يومياً',
      description: 'كنافة بالجبن والقشطة محضرة طازجة كل يوم',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=400&fit=crop',
      isActive: true,
      startDate: '2024-03-01',
      endDate: '2024-12-31',
      order: 2
    }
  ]);

  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([
    {
      id: '1',
      productId: 'p1',
      productName: 'كنافة بالجبن',
      productImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop',
      productPrice: 45,
      isActive: true,
      order: 1,
      addedDate: '2024-03-01'
    },
    {
      id: '2',
      productId: 'p2',
      productName: 'بقلاوة بالفستق',
      productImage: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop',
      productPrice: 35,
      isActive: true,
      order: 2,
      addedDate: '2024-03-02'
    }
  ]);

  const [offers, setOffers] = useState<Offer[]>([
    {
      id: '1',
      title: 'خصم الجمعة البيضاء',
      description: 'خصم 25% على جميع المنتجات',
      type: 'percentage',
      value: 25,
      minOrderAmount: 100,
      applicableProducts: [],
      startDate: '2024-03-15',
      endDate: '2024-03-22',
      isActive: true,
      usageLimit: 100,
      usedCount: 23,
      code: 'FRIDAY25'
    },
    {
      id: '2',
      title: 'اشتري 2 واحصل على 1 مجاناً',
      description: 'عرض خاص على الحلويات الغربية',
      type: 'buy_x_get_y',
      value: 2,
      applicableProducts: ['western'],
      startDate: '2024-03-10',
      endDate: '2024-03-25',
      isActive: true,
      usedCount: 15
    }
  ]);

  const [activeTab, setActiveTab] = useState('banners');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const handleDeleteBanner = (id: string) => {
    setBanners(prev => prev.filter(banner => banner.id !== id));
    toast.success('تم حذف البانر بنجاح');
  };

  const handleToggleBanner = (id: string) => {
    setBanners(prev => prev.map(banner => 
      banner.id === id ? { ...banner, isActive: !banner.isActive } : banner
    ));
    toast.success('تم تحديث حالة البانر');
  };

  const handleDeleteFeaturedProduct = (id: string) => {
    setFeaturedProducts(prev => prev.filter(product => product.id !== id));
    toast.success('تم إزالة المنتج من المميزة');
  };

  const handleToggleFeaturedProduct = (id: string) => {
    setFeaturedProducts(prev => prev.map(product => 
      product.id === id ? { ...product, isActive: !product.isActive } : product
    ));
    toast.success('تم تحديث حالة المنتج المميز');
  };

  const handleDeleteOffer = (id: string) => {
    setOffers(prev => prev.filter(offer => offer.id !== id));
    toast.success('تم حذف العرض بنجاح');
  };

  const handleToggleOffer = (id: string) => {
    setOffers(prev => prev.map(offer => 
      offer.id === id ? { ...offer, isActive: !offer.isActive } : offer
    ));
    toast.success('تم تحديث حالة العرض');
  };

  const getOfferTypeText = (type: string) => {
    switch (type) {
      case 'percentage': return 'نسبة مئوية';
      case 'fixed': return 'مبلغ ثابت';
      case 'buy_x_get_y': return 'اشتري X احصل على Y';
      default: return type;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-primary mb-2">الإعلانات والمنتجات المميزة</h2>
        <p className="text-gray-600">إدارة الإعلانات والمنتجات المميزة والعروض الخاصة</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="banners" className="flex items-center gap-2">
            <Megaphone className="h-4 w-4" />
            البانرات الإعلانية
          </TabsTrigger>
          <TabsTrigger value="featured" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            المنتجات المميزة
          </TabsTrigger>
          <TabsTrigger value="offers" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            العروض الخاصة
          </TabsTrigger>
        </TabsList>

        {/* Banners Tab */}
        <TabsContent value="banners" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg">البانرات الإعلانية</h3>
              <p className="text-sm text-gray-600">إدارة البانرات المعروضة في الصفحة الرئيسية</p>
            </div>
            <Button onClick={() => setIsDialogOpen(true)} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              إضافة بانر جديد
            </Button>
          </div>

          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الصورة</TableHead>
                    <TableHead className="text-right">العنوان</TableHead>
                    <TableHead className="text-right">فترة العرض</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الترتيب</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {banners.map((banner) => (
                    <TableRow key={banner.id}>
                      <TableCell>
                        <ImageWithFallback
                          src={banner.image}
                          alt={banner.title}
                          className="w-16 h-10 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <div>
                          <p className="text-sm">{banner.title}</p>
                          <p className="text-xs text-gray-500">{banner.description}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="text-xs">
                          <p>من: {banner.startDate}</p>
                          <p>إلى: {banner.endDate}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant={banner.isActive ? 'default' : 'secondary'}>
                          {banner.isActive ? 'نشط' : 'معطل'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{banner.order}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleBanner(banner.id)}
                          >
                            {banner.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent dir="rtl">
                              <AlertDialogHeader>
                                <AlertDialogTitle>تأكيد الحذف</AlertDialogTitle>
                                <AlertDialogDescription>
                                  هل أنت متأكد م�� حذف هذا البانر؟ هذا الإجراء لا يمكن التراجع عنه.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeleteBanner(banner.id)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  حذف
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Featured Products Tab */}
        <TabsContent value="featured" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg">المنتجات المميزة</h3>
              <p className="text-sm text-gray-600">المنتجات المعروضة ��ي قسم المنتجات المميزة</p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              إضافة منتج مميز
            </Button>
          </div>

          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">المنتج</TableHead>
                    <TableHead className="text-right">السعر</TableHead>
                    <TableHead className="text-right">تاريخ الإضافة</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الترتيب</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {featuredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="text-right">
                        <div className="flex items-center gap-3">
                          <ImageWithFallback
                            src={product.productImage}
                            alt={product.productName}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <span className="text-sm">{product.productName}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{product.productPrice} ريال</TableCell>
                      <TableCell className="text-right">{product.addedDate}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={product.isActive ? 'default' : 'secondary'}>
                          {product.isActive ? 'نشط' : 'معطل'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{product.order}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleFeaturedProduct(product.id)}
                          >
                            {product.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent dir="rtl">
                              <AlertDialogHeader>
                                <AlertDialogTitle>إزالة من المميزة</AlertDialogTitle>
                                <AlertDialogDescription>
                                  هل أنت متأكد من إزالة هذا المنتج من قائمة المنتجات المميزة؟
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeleteFeaturedProduct(product.id)}
                                >
                                  إزالة
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Offers Tab */}
        <TabsContent value="offers" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg">العروض الخاصة</h3>
              <p className="text-sm text-gray-600">إدارة العروض والخصومات المتاحة</p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              إضافة عرض جديد
            </Button>
          </div>

          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">العرض</TableHead>
                    <TableHead className="text-right">النوع</TableHead>
                    <TableHead className="text-right">القيمة</TableHead>
                    <TableHead className="text-right">فترة العرض</TableHead>
                    <TableHead className="text-right">الاستخدام</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {offers.map((offer) => (
                    <TableRow key={offer.id}>
                      <TableCell className="text-right">
                        <div>
                          <p className="text-sm">{offer.title}</p>
                          <p className="text-xs text-gray-500">{offer.description}</p>
                          {offer.code && (
                            <Badge variant="outline" className="mt-1 text-xs">
                              <Tag className="h-3 w-3 ml-1" />
                              {offer.code}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">
                          {getOfferTypeText(offer.type)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {offer.type === 'percentage' ? `${offer.value}%` : 
                         offer.type === 'fixed' ? `${offer.value} ريال` :
                         `${offer.value} منتج`}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="text-xs">
                          <p>من: {offer.startDate}</p>
                          <p>إلى: {offer.endDate}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="text-xs">
                          <p>{offer.usedCount} مستخدم</p>
                          {offer.usageLimit && (
                            <p className="text-gray-500">الحد الأقصى: {offer.usageLimit}</p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant={offer.isActive ? 'default' : 'secondary'}>
                          {offer.isActive ? 'نشط' : 'معطل'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleOffer(offer.id)}
                          >
                            {offer.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent dir="rtl">
                              <AlertDialogHeader>
                                <AlertDialogTitle>تأكيد الحذف</AlertDialogTitle>
                                <AlertDialogDescription>
                                  هل أنت متأكد من حذف هذا العرض؟ هذا الإجراء لا يمكن التراجع عنه.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeleteOffer(offer.id)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  حذف
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}