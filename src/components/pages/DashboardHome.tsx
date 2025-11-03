import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { ShoppingCart, Package, Users, TrendingUp, Clock, AlertCircle } from 'lucide-react';

export function DashboardHome() {
  const stats = [
    {
      title: 'إجمالي الطلبات اليوم',
      value: '47',
      change: '+12%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-blue-600'
    },
    {
      title: 'المنتجات المتوفرة',
      value: '234',
      change: '-5',
      trend: 'down',
      icon: Package,
      color: 'text-green-600'
    },
    {
      title: 'العملاء النشطين',
      value: '89',
      change: '+8%',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'المبيعات الشهرية',
      value: '125,430 ريال',
      change: '+23%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const recentOrders = [
    { id: '#1247', customer: 'أحمد محمد', items: 5, total: '245 ريال', status: 'قيد التحضير', time: '10:30 ص' },
    { id: '#1248', customer: 'فاطمة علي', items: 3, total: '180 ريال', status: 'مكتمل', time: '10:15 ص' },
    { id: '#1249', customer: 'محمد سالم', items: 8, total: '420 ريال', status: 'جديد', time: '10:00 ص' },
    { id: '#1250', customer: 'سارة أحمد', items: 2, total: '95 ريال', status: 'قيد التوصيل', time: '09:45 ص' },
  ];

  const lowStockProducts = [
    { name: 'كنافة بالجبن', current: 5, minimum: 20, percentage: 25 },
    { name: 'بقلاوة بالفستق', current: 12, minimum: 30, percentage: 40 },
    { name: 'معمول بالتمر', current: 8, minimum: 25, percentage: 32 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'جديد': return 'bg-blue-100 text-blue-800';
      case 'قيد التحضير': return 'bg-yellow-100 text-yellow-800';
      case 'مكتمل': return 'bg-green-100 text-green-800';
      case 'قيد التوصيل': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-primary mb-1">{stat.value}</div>
                <p className={`text-xs ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} من الأمس
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              الطلبات الأخيرة
            </CardTitle>
            <CardDescription>آخر الطلبات المستلمة اليوم</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-gray-500">{order.id}</span>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.items} منتجات • {order.time}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-primary">{order.total}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              تنبيه: مخزون منخفض
            </CardTitle>
            <CardDescription>المنتجات التي تحتاج إعادة تموين</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.map((product, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{product.name}</span>
                    <span className="text-xs text-gray-500">
                      {product.current} من {product.minimum}
                    </span>
                  </div>
                  <Progress value={product.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            إجراءات سريعة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <h4 className="text-sm mb-2">إيقاف استقبال الطلبات</h4>
              <p className="text-xs text-gray-600">إيقاف مؤقت لاستقبال طلبات جديدة</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <h4 className="text-sm mb-2">تقرير المبيعات اليومية</h4>
              <p className="text-xs text-gray-600">تصدير تقرير مبيعات اليوم</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <h4 className="text-sm mb-2">إضافة منتج جديد</h4>
              <p className="text-xs text-gray-600">إضافة منتج جديد إلى المتجر</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}