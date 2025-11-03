import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Plus, Edit, Trash2, Package } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Type {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  categoryName: string;
  unit: string;
  productsCount: number;
  createdAt: string;
}

export function TypesPage() {
  const [types, setTypes] = useState<Type[]>([
    {
      id: '1',
      name: 'كنافة',
      description: 'أنواع الكنافة المختلفة',
      categoryId: '1',
      categoryName: 'شرقي',
      unit: 'قطعة',
      productsCount: 8,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'بقلاوة',
      description: 'أصناف البقلاوة المتنوعة',
      categoryId: '1',
      categoryName: 'شرقي',
      unit: 'قطعة',
      productsCount: 12,
      createdAt: '2024-01-20'
    },
    {
      id: '3',
      name: 'بسبوسة',
      description: 'أنواع البسبوسة والنمورة',
      categoryId: '1',
      categoryName: 'شرقي',
      unit: 'قطعة',
      productsCount: 6,
      createdAt: '2024-02-01'
    },
    {
      id: '4',
      name: 'معمول',
      description: 'معمول بالتمر والفستق واللوز',
      categoryId: '1',
      categoryName: 'شرقي',
      unit: 'قطعة',
      productsCount: 10,
      createdAt: '2024-02-10'
    },
    {
      id: '5',
      name: 'كيك',
      description: 'أنواع الكيك والتورتات',
      categoryId: '2',
      categoryName: 'غربي',
      unit: 'شريحة',
      productsCount: 15,
      createdAt: '2024-02-15'
    },
    {
      id: '6',
      name: 'تشيز كيك',
      description: 'أصناف التشيز كيك المختلفة',
      categoryId: '2',
      categoryName: 'غربي',
      unit: 'شريحة',
      productsCount: 8,
      createdAt: '2024-02-20'
    }
  ]);

  const [editingType, setEditingType] = useState<Type | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    categoryId: '',
    unit: ''
  });

  const categories = [
    { id: '1', name: 'شرقي' },
    { id: '2', name: 'غربي' },
    { id: '3', name: 'مشروبات' },
    { id: '4', name: 'مقبلات' }
  ];

  const units = ['قطعة', 'شريحة', 'كوب', 'علبة', 'كيلو'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingType) {
      setTypes(prev => prev.map(type => 
        type.id === editingType.id 
          ? { 
              ...type, 
              name: formData.name, 
              description: formData.description, 
              categoryId: formData.categoryId,
              categoryName: categories.find(c => c.id === formData.categoryId)?.name || '',
              unit: formData.unit 
            }
          : type
      ));
      toast.success('تم تحديث النوع بنجاح');
    } else {
      const newType: Type = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        categoryId: formData.categoryId,
        categoryName: categories.find(c => c.id === formData.categoryId)?.name || '',
        unit: formData.unit,
        productsCount: 0,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setTypes(prev => [...prev, newType]);
      toast.success('تم إضافة النوع بنجاح');
    }

    setFormData({ name: '', description: '', categoryId: '', unit: '' });
    setEditingType(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (type: Type) => {
    setEditingType(type);
    setFormData({
      name: type.name,
      description: type.description,
      categoryId: type.categoryId,
      unit: type.unit
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (typeId: string) => {
    setTypes(prev => prev.filter(type => type.id !== typeId));
    toast.success('تم حذف النوع بنجاح');
  };

  const handleAddNew = () => {
    setEditingType(null);
    setFormData({ name: '', description: '', categoryId: '', unit: '' });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl text-primary mb-2">إدارة الأنواع</h2>
          <p className="text-gray-600">إضافة وتعديل أنواع ووحدات المنتجات</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              إضافة نوع جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md" dir="rtl">
            <DialogHeader>
              <DialogTitle>
                {editingType ? 'تعديل النوع' : 'إضافة نوع جديد'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">اسم النوع</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسم النوع (مثل: كنافة، بقلاوة)"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label>الفئة الرئيسية</Label>
                <Select 
                  value={formData.categoryId} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, categoryId: value }))}
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
                <Label>وحدة القياس</Label>
                <Select 
                  value={formData.unit} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, unit: value }))}
                >
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر وحدة القياس" />
                  </SelectTrigger>
                  <SelectContent>
                    {units.map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {unit}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">الوصف</Label>
                <Input
                  id="description"
                  placeholder="أدخل وصف النوع"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="text-right"
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  {editingType ? 'تحديث' : 'إضافة'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1"
                >
                  إلغاء
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            قائمة الأنواع ({types.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">اسم النوع</TableHead>
                  <TableHead className="text-right">الفئة</TableHead>
                  <TableHead className="text-right">وحدة القياس</TableHead>
                  <TableHead className="text-right">الوصف</TableHead>
                  <TableHead className="text-right">عدد المنتجات</TableHead>
                  <TableHead className="text-right">تاريخ الإضافة</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {types.map((type) => (
                  <TableRow key={type.id}>
                    <TableCell className="text-right">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-primary" />
                        {type.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                        {type.categoryName}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {type.unit}
                      </span>
                    </TableCell>
                    <TableCell className="text-right max-w-xs">
                      <p className="text-sm text-gray-600 truncate">
                        {type.description}
                      </p>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        {type.productsCount}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Date(type.createdAt).toLocaleDateString('ar-SA')}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(type)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent dir="rtl">
                            <AlertDialogHeader>
                              <AlertDialogTitle>تأكيد الحذف</AlertDialogTitle>
                              <AlertDialogDescription>
                                هل أنت م��أكد من حذف نوع "{type.name}"؟ 
                                سيؤثر هذا على {type.productsCount} منتج.
                                هذا الإجراء لا يمكن التراجع عنه.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>إلغاء</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(type.id)}
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}