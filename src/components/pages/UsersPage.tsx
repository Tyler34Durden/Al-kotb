import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { Plus, Edit, Trash2, Users, Shield, User } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Permission {
  id: string;
  name: string;
  description: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'manager' | 'employee';
  permissions: string[];
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
}

const availablePermissions: Permission[] = [
  { id: 'view_dashboard', name: 'عرض الرئيسية', description: 'عرض لوحة التحكم الرئيسية' },
  { id: 'manage_orders', name: 'إدارة الطلبات', description: 'عرض وتعديل الطلبات' },
  { id: 'manage_products', name: 'إدارة المنتجات', description: 'إضافة وتعديل وحذف المنتجات' },
  { id: 'manage_categories', name: 'إدارة الفئات', description: 'إضافة وتعديل وحذف الفئات' },
  { id: 'manage_ads', name: 'إدارة الإعلانات', description: 'إدارة الإعلانات والمنتجات المميزة' },
  { id: 'manage_users', name: 'إدارة المستخدمين', description: 'إضافة وتعديل وحذف المستخدمين' },
  { id: 'view_reports', name: 'عرض التقارير', description: 'عرض وتصدير التقارير' },
  { id: 'manage_settings', name: 'إدارة الإعدادات', description: 'تعديل إعدادات النظام' }
];

export function UsersPage() {
  const [users, setUsers] = useState<UserData[]>([
    {
      id: '1',
      name: 'أحمد محمد',
      email: 'ahmed@sweetsFactory.com',
      phone: '0501234567',
      role: 'manager',
      permissions: availablePermissions.map(p => p.id),
      isActive: true,
      createdAt: '2024-01-01',
      lastLogin: '2024-03-15T10:30:00'
    },
    {
      id: '2',
      name: 'فاطمة علي',
      email: 'fatima@sweetsFactory.com',
      phone: '0509876543',
      role: 'employee',
      permissions: ['view_dashboard', 'manage_orders', 'view_reports'],
      isActive: true,
      createdAt: '2024-01-15',
      lastLogin: '2024-03-14T14:20:00'
    },
    {
      id: '3',
      name: 'محمد سالم',
      email: 'mohammed@sweetsFactory.com',
      phone: '0551234567',
      role: 'employee',
      permissions: ['view_dashboard', 'manage_products', 'manage_categories'],
      isActive: false,
      createdAt: '2024-02-01',
      lastLogin: '2024-03-10T09:15:00'
    }
  ]);

  const [editingUser, setEditingUser] = useState<UserData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'employee' as 'manager' | 'employee',
    permissions: [] as string[],
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      // Update existing user
      setUsers(prev => prev.map(user => 
        user.id === editingUser.id 
          ? {
              ...user,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              role: formData.role,
              permissions: formData.role === 'manager' ? availablePermissions.map(p => p.id) : formData.permissions
            }
          : user
      ));
      toast.success('تم تحديث المستخدم بنجاح');
    } else {
      // Add new user
      const newUser: UserData = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        permissions: formData.role === 'manager' ? availablePermissions.map(p => p.id) : formData.permissions,
        isActive: true,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setUsers(prev => [...prev, newUser]);
      toast.success('تم إضافة المستخدم بنجاح');
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'employee',
      permissions: [],
      password: ''
    });
    setEditingUser(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (user: UserData) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      permissions: user.permissions,
      password: ''
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (userId: string) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
    toast.success('تم حذف المستخدم بنجاح');
  };

  const handleAddNew = () => {
    setEditingUser(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'employee',
      permissions: [],
      password: ''
    });
    setIsDialogOpen(true);
  };

  const toggleUserStatus = (userId: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, isActive: !user.isActive }
        : user
    ));
    toast.success('تم تحديث حالة المستخدم');
  };

  const handlePermissionChange = (permissionId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        permissions: [...prev.permissions, permissionId]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        permissions: prev.permissions.filter(id => id !== permissionId)
      }));
    }
  };

  const formatLastLogin = (dateString?: string) => {
    if (!dateString) return 'لم يسجل دخول بعد';
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA') + ' ' + date.toLocaleTimeString('ar-SA', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl text-primary mb-2">إدارة المستخدمين</h2>
          <p className="text-gray-600">إضافة وتعديل مستخدمي النظام وصلاحياتهم</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              إضافة مستخدم جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
            <DialogHeader>
              <DialogTitle>
                {editingUser ? 'تعديل المستخدم' : 'إضافة مستخدم جديد'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input
                    id="name"
                    placeholder="أدخل الاسم الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="text-right"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    placeholder="0501234567"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="user@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="text-right"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">{editingUser ? 'كلمة مرور جديدة (اختياري)' : 'كلمة المرور'}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required={!editingUser}
                    className="text-right"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>نوع المستخدم</Label>
                <Select 
                  value={formData.role} 
                  onValueChange={(value: 'manager' | 'employee') => {
                    setFormData(prev => ({ 
                      ...prev, 
                      role: value,
                      permissions: value === 'manager' ? availablePermissions.map(p => p.id) : []
                    }));
                  }}
                >
                  <SelectTrigger className="text-right">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">موظف</SelectItem>
                    <SelectItem value="manager">مدير</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.role === 'employee' && (
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    الصلاحيات
                  </Label>
                  <div className="border rounded-lg p-4 max-h-48 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-3">
                      {availablePermissions.map((permission) => (
                        <div key={permission.id} className="flex items-start space-x-2 space-x-reverse">
                          <Checkbox
                            id={permission.id}
                            checked={formData.permissions.includes(permission.id)}
                            onCheckedChange={(checked) => 
                              handlePermissionChange(permission.id, checked as boolean)
                            }
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label 
                              htmlFor={permission.id}
                              className="text-sm cursor-pointer"
                            >
                              {permission.name}
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              {permission.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  {editingUser ? 'تحديث' : 'إضافة'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={resetForm}
                  className="flex-1"
                >
                  إلغاء
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            قائمة المستخدمين ({users.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">المستخدم</TableHead>
                  <TableHead className="text-right">النوع</TableHead>
                  <TableHead className="text-right">الصلاحيات</TableHead>
                  <TableHead className="text-right">آخر تسجيل دخول</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="text-right">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                          <p className="text-xs text-gray-500">{user.phone}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant={user.role === 'manager' ? 'default' : 'secondary'}>
                        {user.role === 'manager' ? 'مدير' : 'موظف'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-xs text-gray-500">
                        {user.role === 'manager' 
                          ? 'جميع الصلاحيات'
                          : `${user.permissions.length} من ${availablePermissions.length}`
                        }
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-xs text-gray-500">
                        {formatLastLogin(user.lastLogin)}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleUserStatus(user.id)}
                        className={user.isActive ? 'text-green-600' : 'text-red-600'}
                      >
                        {user.isActive ? 'نشط' : 'معطل'}
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(user)}
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
                                هل أنت متأكد من حذف المستخدم "{user.name}"؟ 
                                هذا الإجراء لا يمكن التراجع عنه.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>إلغاء</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(user.id)}
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