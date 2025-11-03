import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { Plus, Edit, Trash2, FolderOpen } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Category {
  id: string;
  name: string;
  description: string;
  productsCount: number;
  createdAt: string;
}

export function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'شرقي',
      description: 'الحلويات الشرقية التقليدية والتراثية',
      productsCount: 45,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'غربي',
      description: 'الحلويات الغربية والعصرية',
      productsCount: 28,
      createdAt: '2024-01-20'
    },
    {
      id: '3',
      name: 'مشروبات',
      description: 'المشروبات الساخنة والباردة والعصائر',
      productsCount: 12,
      createdAt: '2024-02-01'
    },
    {
      id: '4',
      name: 'مقبلات',
      description: 'المقبلات والمملحات والوجبات الخفيفة',
      productsCount: 8,
      createdAt: '2024-02-10'
    }
  ]);

  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCategory) {
      // Update existing category
      setCategories(prev => prev.map(cat => 
        cat.id === editingCategory.id 
          ? { ...cat, name: formData.name, description: formData.description }
          : cat
      ));
      toast.success('تم تحديث الفئة بنجاح');
    } else {
      // Add new category
      const newCategory: Category = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        productsCount: 0,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setCategories(prev => [...prev, newCategory]);
      toast.success('تم إضافة الفئة بنجاح');
    }

    setFormData({ name: '', description: '' });
    setEditingCategory(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (categoryId: string) => {
    setCategories(prev => prev.filter(cat => cat.id !== categoryId));
    toast.success('تم حذف الفئة بنجاح');
  };

  const handleAddNew = () => {
    setEditingCategory(null);
    setFormData({ name: '', description: '' });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl text-primary mb-2">إدارة الفئات</h2>
          <p className="text-gray-600">إضافة وتعديل فئات المنتجات</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              إضافة فئة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md" dir="rtl">
            <DialogHeader>
              <DialogTitle>
                {editingCategory ? 'تعديل الفئة' : 'إضافة فئة جديدة'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">اسم الفئة</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسم الفئة"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">الوصف</Label>
                <Input
                  id="description"
                  placeholder="أدخل وصف الفئة"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="text-right"
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  {editingCategory ? 'تحديث' : 'إضافة'}
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

      {/* Categories Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            قائمة الفئات ({categories.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">اسم الفئة</TableHead>
                  <TableHead className="text-right">الوصف</TableHead>
                  <TableHead className="text-right">عدد المنتجات</TableHead>
                  <TableHead className="text-right">تاريخ الإضافة</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="text-right">
                      <div className="flex items-center gap-2">
                        <FolderOpen className="h-4 w-4 text-primary" />
                        {category.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-right max-w-xs">
                      <p className="text-sm text-gray-600 truncate">
                        {category.description}
                      </p>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {category.productsCount}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Date(category.createdAt).toLocaleDateString('ar-SA')}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(category)}
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
                                هل أنت متأكد من حذف فئة "{category.name}"؟ 
                                سيؤثر هذا على {category.productsCount} منتج.
                                هذا الإجراء لا يمكن التراجع عنه.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>إلغاء</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(category.id)}
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