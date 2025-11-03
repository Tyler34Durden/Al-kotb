import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Phone, Clock, Package, CreditCard, User, Edit3 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderData {
  id: string;
  customer: string;
  phone: string;
  items: OrderItem[];
  total: number;
  status: string;
  orderTime: string;
  deliveryTime: string;
  address: string;
  notes?: string;
  paymentMethod?: string;
}

interface OrderDetailsDialogProps {
  order: OrderData | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusUpdate: (orderId: string, newStatus: string, notes?: string) => void;
}

export function OrderDetailsDialog({ order, isOpen, onClose, onStatusUpdate }: OrderDetailsDialogProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [statusNotes, setStatusNotes] = useState('');

  if (!order) return null;

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

  const handleStatusUpdate = () => {
    if (!newStatus) {
      toast.error('يرجى اختيار الحالة الجديدة');
      return;
    }
    
    onStatusUpdate(order.id, newStatus, statusNotes);
    setIsEditing(false);
    setNewStatus('');
    setStatusNotes('');
    toast.success('تم تحديث حالة الطلب بنجاح');
  };

  const startEditing = () => {
    setIsEditing(true);
    setNewStatus(order.status);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>تفاصيل الطلب {order.id}</span>
            <Badge className={getStatusColor(order.status)}>
              {order.status}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="h-5 w-5" />
                معلومات العميل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-base">{order.customer}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-base" dir="ltr">{order.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                <span className="text-base">{order.address}</span>
              </div>
            </CardContent>
          </Card>

          {/* Order Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5" />
                معلومات الطلب
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">وقت الطلب</p>
                    <p className="text-base">{order.orderTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">وقت التوصيل المتوقع</p>
                    <p className="text-base">{order.deliveryTime}</p>
                  </div>
                </div>
              </div>
              {order.paymentMethod && (
                <div className="flex items-center gap-3">
                  <CreditCard className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">طريقة الدفع</p>
                    <p className="text-base">{order.paymentMethod}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Package className="h-5 w-5" />
                المنتجات المطلوبة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-base">{item.name}</p>
                      <p className="text-sm text-gray-500">الكمية: {item.quantity}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-base text-primary">{item.price * item.quantity} ريال</p>
                      <p className="text-sm text-gray-500">{item.price} ريال للقطعة</p>
                    </div>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between items-center text-lg">
                  <span>المبلغ الإجمالي:</span>
                  <span className="text-primary text-xl">{order.total} ريال</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          {order.notes && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ملاحظات الطلب</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-700">{order.notes}</p>
              </CardContent>
            </Card>
          )}

          {/* Status Update Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Edit3 className="h-5 w-5" />
                تحديث حالة الطلب
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isEditing ? (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base">الحالة الحالية: 
                      <Badge className={`${getStatusColor(order.status)} mr-2`}>
                        {order.status}
                      </Badge>
                    </p>
                  </div>
                  <Button onClick={startEditing} variant="outline" className="flex items-center gap-2">
                    <Edit3 className="h-4 w-4" />
                    تعديل الحالة
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>الحالة الجديدة</Label>
                    <Select value={newStatus} onValueChange={setNewStatus}>
                      <SelectTrigger className="text-right">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="جديد">جديد</SelectItem>
                        <SelectItem value="قيد التحضير">قيد التحضير</SelectItem>
                        <SelectItem value="قيد التوصيل">قيد التوصيل</SelectItem>
                        <SelectItem value="مكتمل">مكتمل</SelectItem>
                        <SelectItem value="ملغي">ملغي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="statusNotes">ملاحظات التحديث (اختياري)</Label>
                    <Textarea
                      id="statusNotes"
                      placeholder="أضف ملاحظات حول تحديث الحالة..."
                      value={statusNotes}
                      onChange={(e) => setStatusNotes(e.target.value)}
                      className="text-right"
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleStatusUpdate} className="flex-1">
                      تحديث الحالة
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsEditing(false);
                        setNewStatus('');
                        setStatusNotes('');
                      }}
                      className="flex-1"
                    >
                      إلغاء
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}