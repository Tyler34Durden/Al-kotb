import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign, Package, Users, ShoppingCart, FileText, Eye } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface SalesData {
  date: string;
  sales: number;
  orders: number;
  customers: number;
}

interface ProductSalesData {
  name: string;
  sales: number;
  quantity: number;
  revenue: number;
}

interface CustomerData {
  id: string;
  name: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  status: 'active' | 'inactive';
}

export function ReportsPage() {
  const [dateRange, setDateRange] = useState('today');
  const [reportType, setReportType] = useState('sales');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Sample data
  const salesData: SalesData[] = [
    { date: '2024-03-01', sales: 1250, orders: 12, customers: 8 },
    { date: '2024-03-02', sales: 1850, orders: 18, customers: 15 },
    { date: '2024-03-03', sales: 2100, orders: 22, customers: 18 },
    { date: '2024-03-04', sales: 1680, orders: 16, customers: 12 },
    { date: '2024-03-05', sales: 2350, orders: 25, customers: 20 },
    { date: '2024-03-06', sales: 2890, orders: 28, customers: 22 },
    { date: '2024-03-07', sales: 3200, orders: 32, customers: 25 }
  ];

  const productSalesData: ProductSalesData[] = [
    { name: 'كنافة بالجبن', sales: 45, quantity: 28, revenue: 1260 },
    { name: 'بقلاوة بالفستق', sales: 35, quantity: 22, revenue: 770 },
    { name: 'معمول بالتمر', sales: 25, quantity: 18, revenue: 450 },
    { name: 'قطايف بالقشطة', sales: 30, quantity: 15, revenue: 450 },
    { name: 'بسبوسة بالقشطة', sales: 20, quantity: 12, revenue: 240 },
    { name: 'حلاوة الجبن', sales: 40, quantity: 10, revenue: 400 },
    { name: 'مهلبية', sales: 15, quantity: 8, revenue: 120 }
  ];

  const customerData: CustomerData[] = [
    {
      id: '1',
      name: 'أحمد محمد',
      phone: '0501234567',
      totalOrders: 12,
      totalSpent: 1580,
      lastOrderDate: '2024-03-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'فاطمة علي',
      phone: '0509876543',
      totalOrders: 8,
      totalSpent: 950,
      lastOrderDate: '2024-03-14',
      status: 'active'
    },
    {
      id: '3',
      name: 'محمد سالم',
      phone: '0551234567',
      totalOrders: 6,
      totalSpent: 720,
      lastOrderDate: '2024-03-10',
      status: 'inactive'
    },
    {
      id: '4',
      name: 'سارة أحمد',
      phone: '0561234567',
      totalOrders: 15,
      totalSpent: 2100,
      lastOrderDate: '2024-03-16',
      status: 'active'
    }
  ];

  const categoryData = [
    { name: 'حلويات شرقية', value: 65, color: '#1e3a8a' },
    { name: 'حلويات غربية', value: 25, color: '#3b82f6' },
    { name: 'مشروبات', value: 10, color: '#93c5fd' }
  ];

  const totalSales = salesData.reduce((sum, day) => sum + day.sales, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const totalCustomers = salesData.reduce((sum, day) => sum + day.customers, 0);
  const avgOrderValue = totalSales / totalOrders;

  const handleExportReport = (type: string) => {
    toast.success(`تم تصدير تقرير ${type} بنجاح`);
  };

  const getDateRangeText = () => {
    switch (dateRange) {
      case 'today': return 'اليوم';
      case 'yesterday': return 'أمس';
      case 'week': return 'هذا الأسبوع';
      case 'month': return 'هذا الشهر';
      case 'custom': return 'فترة مخصصة';
      default: return dateRange;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-primary mb-2">التقارير والإحصائيات</h2>
        <p className="text-gray-600">تقارير مفصلة عن المبيعات والعملاء والمنتجات</p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            فلترة التقارير
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>الفترة الزمنية</Label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="text-right">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">اليوم</SelectItem>
                  <SelectItem value="yesterday">أمس</SelectItem>
                  <SelectItem value="week">هذا الأسبوع</SelectItem>
                  <SelectItem value="month">هذا الشهر</SelectItem>
                  <SelectItem value="custom">فترة مخصصة</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {dateRange === 'custom' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="startDate">تاريخ البداية</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">تاريخ النهاية</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="text-right"
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label>نوع التقرير</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="text-right">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">تقرير المبيعات</SelectItem>
                  <SelectItem value="products">تقرير المنتجات</SelectItem>
                  <SelectItem value="customers">تقرير العملاء</SelectItem>
                  <SelectItem value="financial">التقرير المالي</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button onClick={() => handleExportReport('PDF')} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              تصدير PDF
            </Button>
            <Button variant="outline" onClick={() => handleExportReport('Excel')} className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              تصدير Excel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">إجمالي المبيعات</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-primary">{totalSales.toLocaleString()} ريال</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +15.2%
              </span>
              مقارنة بالفترة السابقة
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">عدد الطلبات</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-primary">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8.5%
              </span>
              مقارنة بالفترة السابقة
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">عدد العملاء</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-primary">{totalCustomers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center gap-1">
                <TrendingDown className="h-3 w-3" />
                -2.1%
              </span>
              مقارنة بالفترة السابقة
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">متوسط قيمة الطلب</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-primary">{Math.round(avgOrderValue)} ريال</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +6.2%
              </span>
              مقارنة بالفترة السابقة
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Tables */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="sales">المبيعات</TabsTrigger>
          <TabsTrigger value="products">المنتجات</TabsTrigger>
          <TabsTrigger value="customers">العملاء</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Chart */}
            <Card>
              <CardHeader>
                <CardTitle>مبيعات الأسبوع الماضي</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#1e3a8a" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>توزيع المبيعات حسب الفئة</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>تطور المبيعات اليومية</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#1e3a8a" strokeWidth={2} />
                  <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>أفضل المنتجات مبيعاً</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">اسم المنتج</TableHead>
                    <TableHead className="text-right">الكمية المباعة</TableHead>
                    <TableHead className="text-right">الإيرادات</TableHead>
                    <TableHead className="text-right">متوسط السعر</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productSalesData.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-right">{product.name}</TableCell>
                      <TableCell className="text-right">{product.quantity}</TableCell>
                      <TableCell className="text-right">{product.revenue} ريال</TableCell>
                      <TableCell className="text-right">{product.sales} ريال</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>تقرير العملاء</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">العميل</TableHead>
                    <TableHead className="text-right">عدد الطلبات</TableHead>
                    <TableHead className="text-right">إجمالي المبلغ</TableHead>
                    <TableHead className="text-right">آخر طلب</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customerData.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="text-right">
                        <div>
                          <p className="text-sm">{customer.name}</p>
                          <p className="text-xs text-gray-500">{customer.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{customer.totalOrders}</TableCell>
                      <TableCell className="text-right">{customer.totalSpent} ريال</TableCell>
                      <TableCell className="text-right">{customer.lastOrderDate}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={customer.status === 'active' ? 'default' : 'secondary'}>
                          {customer.status === 'active' ? 'نشط' : 'غير نشط'}
                        </Badge>
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