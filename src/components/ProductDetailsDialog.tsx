import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Package, Upload, X, Plus, Minus, Eye, EyeOff, Star, Tags } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  type: string;
  images: string[];
  isAvailable: boolean;
  stock: number;
  preparationTime: number;
  ingredients: string[];
  allergens: string[];
  nutritionInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  tags: string[];
  discount?: {
    type: 'percentage' | 'fixed';
    value: number;
    endDate: string;
  };
}

interface ProductDetailsDialogProps {
  product: ProductData | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: ProductData) => void;
  categories: Array<{ id: string; name: string; }>;
  types: Array<{ id: string; name: string; category: string; }>;
}

export function ProductDetailsDialog({
  product,
  isOpen,
  onClose,
  onSave,
  categories,
  types
}: ProductDetailsDialogProps) {
  const [formData, setFormData] = useState<ProductData>({
    id: '',
    name: '',
    description: '',
    price: 0,
    category: '',
    type: '',
    images: [],
    isAvailable: true,
    stock: 0,
    preparationTime: 30,
    ingredients: [],
    allergens: [],
    nutritionInfo: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    },
    tags: [],
    discount: undefined
  });

  const [newIngredient, setNewIngredient] = useState('');
  const [newAllergen, setNewAllergen] = useState('');
  const [newTag, setNewTag] = useState('');
  const [showNutritionInfo, setShowNutritionInfo] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData(product);
      setShowNutritionInfo(!!product.nutritionInfo);
      setShowDiscount(!!product.discount);
    } else {
      setFormData({
        id: '',
        name: '',
        description: '',
        price: 0,
        category: '',
        type: '',
        images: [],
        isAvailable: true,
        stock: 0,
        preparationTime: 30,
        ingredients: [],
        allergens: [],
        nutritionInfo: {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0
        },
        tags: [],
        discount: undefined
      });
      setShowNutritionInfo(false);
      setShowDiscount(false);
    }
  }, [product]);

  const filteredTypes = types.filter(type => type.category === formData.category);

  const handleSave = () => {
    if (!formData.name || !formData.category || !formData.type || formData.price <= 0) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    const productToSave = {
      ...formData,
      id: formData.id || Date.now().toString(),
      nutritionInfo: showNutritionInfo ? formData.nutritionInfo : undefined,
      discount: showDiscount ? formData.discount : undefined
    };

    onSave(productToSave);
    onClose();
    toast.success(product ? 'تم تحديث المنتج بنجاح' : 'تم إضافة المنتج بنجاح');
  };

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setFormData(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, newIngredient.trim()]
      }));
      setNewIngredient('');
    }
  };

  const removeIngredient = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const addAllergen = () => {
    if (newAllergen.trim()) {
      setFormData(prev => ({
        ...prev,
        allergens: [...prev.allergens, newAllergen.trim()]
      }));
      setNewAllergen('');
    }
  };

  const removeAllergen = (index: number) => {
    setFormData(prev => ({
      ...prev,
      allergens: prev.allergens.filter((_, i) => i !== index)
    }));
  };

  const addTag = () => {
    if (newTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const addImage = () => {
    // In a real app, this would open a file picker
    const imageUrl = `https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop`;
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, imageUrl]
    }));
    toast.success('تم إضافة الصورة');
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            {product ? 'تعديل المنتج' : 'إضافة منتج جديد'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">المعلومات الأساسية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">اسم المنتج *</Label>
                  <Input
                    id="name"
                    placeholder="اسم المنتج"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">السعر (ريال) *</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                    className="text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>الفئة الرئيسية *</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value, type: '' }))}
                  >
                    <SelectTrigger className="text-right">
                      <SelectValue placeholder="اختر الفئة" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>النوع *</Label>
                  <Select 
                    value={formData.type} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
                    disabled={!formData.category}
                  >
                    <SelectTrigger className="text-right">
                      <SelectValue placeholder="اختر النوع" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">الوصف</Label>
                <Textarea
                  id="description"
                  placeholder="وصف المنتج..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="text-right"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stock">الكمية المتوفرة</Label>
                  <Input
                    id="stock"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={formData.stock}
                    onChange={(e) => setFormData(prev => ({ ...prev, stock: parseInt(e.target.value) || 0 }))}
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preparationTime">وقت التحضير (دقيقة)</Label>
                  <Input
                    id="preparationTime"
                    type="number"
                    min="1"
                    placeholder="30"
                    value={formData.preparationTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, preparationTime: parseInt(e.target.value) || 30 }))}
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    {formData.isAvailable ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    متاح للطلب
                  </Label>
                  <Switch
                    checked={formData.isAvailable}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isAvailable: checked }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Upload className="h-5 w-5" />
                صور المنتج
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <ImageWithFallback
                      src={image}
                      alt={`صورة المنتج ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="h-24 border-dashed flex items-center justify-center"
                  onClick={addImage}
                >
                  <Plus className="h-6 w-6" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ingredients and Allergens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">المكونات</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="أضف مكون..."
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                    className="text-right"
                  />
                  <Button onClick={addIngredient} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-sm">{ingredient}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeIngredient(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">مسببات الحساسية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="أضف مسبب حساسية..."
                    value={newAllergen}
                    onChange={(e) => setNewAllergen(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addAllergen()}
                    className="text-right"
                  />
                  <Button onClick={addAllergen} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.allergens.map((allergen, index) => (
                    <div key={index} className="flex items-center justify-between bg-red-50 p-2 rounded">
                      <span className="text-sm">{allergen}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAllergen(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Tags className="h-5 w-5" />
                العلامات والكلمات المفتاحية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="أضف علامة..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  className="text-right"
                />
                <Button onClick={addTag} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 hover:bg-transparent"
                      onClick={() => removeTag(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Nutrition Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                <span>المعلومات الغذائية</span>
                <Switch
                  checked={showNutritionInfo}
                  onCheckedChange={setShowNutritionInfo}
                />
              </CardTitle>
            </CardHeader>
            {showNutritionInfo && (
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>السعرات الحرارية</Label>
                    <Input
                      type="number"
                      min="0"
                      value={formData.nutritionInfo?.calories || 0}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        nutritionInfo: {
                          ...prev.nutritionInfo!,
                          calories: parseInt(e.target.value) || 0
                        }
                      }))}
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>البروتين (جم)</Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.1"
                      value={formData.nutritionInfo?.protein || 0}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        nutritionInfo: {
                          ...prev.nutritionInfo!,
                          protein: parseFloat(e.target.value) || 0
                        }
                      }))}
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الكربوهيدرات (جم)</Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.1"
                      value={formData.nutritionInfo?.carbs || 0}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        nutritionInfo: {
                          ...prev.nutritionInfo!,
                          carbs: parseFloat(e.target.value) || 0
                        }
                      }))}
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الدهون (جم)</Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.1"
                      value={formData.nutritionInfo?.fat || 0}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        nutritionInfo: {
                          ...prev.nutritionInfo!,
                          fat: parseFloat(e.target.value) || 0
                        }
                      }))}
                      className="text-right"
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Discount */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  خصم خاص
                </span>
                <Switch
                  checked={showDiscount}
                  onCheckedChange={setShowDiscount}
                />
              </CardTitle>
            </CardHeader>
            {showDiscount && (
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>نوع الخصم</Label>
                    <Select 
                      value={formData.discount?.type || 'percentage'} 
                      onValueChange={(value: 'percentage' | 'fixed') => 
                        setFormData(prev => ({
                          ...prev,
                          discount: {
                            type: value,
                            value: prev.discount?.value || 0,
                            endDate: prev.discount?.endDate || ''
                          }
                        }))
                      }
                    >
                      <SelectTrigger className="text-right">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">نسبة مئوية (%)</SelectItem>
                        <SelectItem value="fixed">مبلغ ثابت (ريال)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>قيمة الخصم</Label>
                    <Input
                      type="number"
                      min="0"
                      max={formData.discount?.type === 'percentage' ? 100 : undefined}
                      step="0.01"
                      value={formData.discount?.value || 0}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        discount: {
                          ...prev.discount!,
                          value: parseFloat(e.target.value) || 0
                        }
                      }))}
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>تاريخ انتهاء الخصم</Label>
                    <Input
                      type="date"
                      value={formData.discount?.endDate || ''}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        discount: {
                          ...prev.discount!,
                          endDate: e.target.value
                        }
                      }))}
                      className="text-right"
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} className="flex-1">
              {product ? 'تحديث المنتج' : 'إضافة المنتج'}
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              إلغاء
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}