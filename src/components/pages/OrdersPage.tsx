import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Download, Clock, Filter, Search, Calendar, Eye, Edit } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { OrderDetailsDialog } from '../OrderDetailsDialog';

export function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('today');
  const [orderStopTime, setOrderStopTime] = useState('22:00');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);

  const [orders, setOrders] = useState([
    {
      id: '#1247',
      customer: 'أحمد محمد',
      phone: '0501234567',
      items: [
        { name: 'كنافة بالجبن', quantity: 2, price: 45 },
        { name: 'بقلاوة بالفستق', quantity: 1, price: 35 }
      ],
      total: 125,
      status: 'قيد التحضير',
      orderTime: '10:30 ص',
      deliveryTime: '12:00 م',
      address: 'حي النخيل، شارع الملك فهد',
      notes: 'يرجى التأكد من عدم وضع السكر الزائد',
      paymentMethod: 'كاش عند التوصيل'
    },
    {
      id: '#1248',
      customer: 'فاطمة علي',
      phone: '0509876543',
      items: [
        { name: 'معمول بالتمر', quantity: 3, price: 25 },
        { name: 'قطايف بالقشطة', quantity: 2, price: 30 }
      ],
      total: 135,
      status: 'مكتمل',
      orderTime: '10:15 ص',
      deliveryTime: '11:45 ص',
      address: 'حي الروضة، شارع العليا',
      paymentMethod: 'بطاقة ائتمان'
    },
    {
      id: '#1249',
      customer: 'محمد سالم',
      phone: '0551234567',
      items: [
        { name: 'كنافة نابلسية', quantity: 1, price: 55 },
        { name: 'حلاوة الجبن', quantity: 2, price: 40 }
      ],
      total: 135,
      status: 'جديد',
      orderTime: '10:00 ص',
      deliveryTime: '12:30 م',
      address: 'حي الملك فيصل، شارع التحلية',
      notes: 'طلب مستعجل - مناسبة خاصة',
      paymentMethod: 'تحويل بنكي'
    },
    {
      id: '#1250',
      customer: 'سارة أحمد',
      phone: '0561234567',
      items: [
        { name: 'بسبوسة بالقشطة', quantity: 4, price: 20 }
      ],
      total: 80,
      status: 'قيد التوصيل',
      orderTime: '09:45 ص',
      deliveryTime: '11:15 ص',
      address: 'حي السليمانية، شارع الأمير محمد',
      paymentMethod: 'كاش عند التوصيل'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'جديد': return 'bg-blue-100 text-blue-800';
      case 'قيد التحضير': return 'bg-yellow-100 text-yellow-800';
      case 'مكتمل': return 'bg-green-100 text-green-800';
      case 'قيد التوصيل': return 'bg-purple-100 text-purple-800';
      case 'ملغي': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleExportPDF = () => {
    toast.success('تم تصدير التقرير بنج��ح');
  };

  const handleUpdateOrderStopTime = () => {
    toast.success(`تم تحديث وقت إيقاف الطلبات إلى ${orderStopTime}`);
  };

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order);
    setIsDetailsDialogOpen(true);
  };

  const handleStatusUpdate = (orderId: string, newStatus: string, notes?: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus, statusNotes: notes }
        : order
    ));
    setIsDetailsDialogOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={handleExportPDF} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير تقرير PDF
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                تعديل وقت إيقاف الطلبات
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md" dir="rtl">
              <DialogHeader>
                <DialogTitle>تعديل وقت إيقاف الطلبات</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="stopTime">وقت الإيقاف</Label>
                  <Input
                    id="stopTime"
                    type="time"
                    value={orderStopTime}
                    onChange={(e) => setOrderStopTime(e.target.value)}
                    className="text-right"
                  />
                </div>
                <Button onClick={handleUpdateOrderStopTime} className="w-full">
                  حفظ التغييرات
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            فلترة الطلبات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">البحث</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="search"
                  placeholder="البحث بالاسم أو رقم الطلب"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-right"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>حالة الطلب</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="text-right">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="جديد">جديد</SelectItem>
                  <SelectItem value="قيد التحضير">قيد التحضير</SelectItem>
                  <SelectItem value="قيد التوصيل">قيد التوصيل</SelectItem>
                  <SelectItem value="مكتمل">مكتمل</SelectItem>
                  <SelectItem value="ملغي">ملغي</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>التاريخ</Label>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="text-right">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">اليوم</SelectItem>
                  <SelectItem value="yesterday">أمس</SelectItem>
                  <SelectItem value="week">هذا الأسبوع</SelectItem>
                  <SelectItem value="month">هذا الشهر</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customDate">تاريخ محدد</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="customDate"
                  type="date"
                  className="pl-10 text-right"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة الطلبات ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">رقم الطلب</TableHead>
                  <TableHead className="text-right">العميل</TableHead>
                  <TableHead className="text-right">المنتجات</TableHead>
                  <TableHead className="text-right">المبلغ الإجمالي</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">وقت الطلب</TableHead>
                  <TableHead className="text-right">وقت التوصيل</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="text-right">{order.id}</TableCell>
                    <TableCell className="text-right">
                      <div>
                        <div>{order.customer}</div>
                        <div className="text-sm text-gray-500">{order.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="space-y-1">
                        {order.items.map((item, index) => (
                          <div key={index} className="text-sm">
                            {item.name} × {item.quantity}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-primary">{order.total} ريال</TableCell>
                    <TableCell className="text-right">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{order.orderTime}</TableCell>
                    <TableCell className="text-right">{order.deliveryTime}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewOrder(order)}
                          className="flex items-center gap-1"
                        >
                          <Eye className="h-3 w-3" />
                          عرض
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewOrder(order)}
                          className="flex items-center gap-1"
                        >
                          <Edit className="h-3 w-3" />
                          تحديث
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Order Details Dialog */}
      <OrderDetailsDialog
        order={selectedOrder}
        isOpen={isDetailsDialogOpen}
        onClose={() => {
          setIsDetailsDialogOpen(false);
          setSelectedOrder(null);
        }}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  );
}