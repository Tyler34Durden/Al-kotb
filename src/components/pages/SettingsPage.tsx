import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Settings, Clock, Bell, Store, Shield } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function SettingsPage() {
  const [orderStopTime, setOrderStopTime] = useState('22:00');
  const [deliveryFee, setDeliveryFee] = useState('15');
  const [minOrderAmount, setMinOrderAmount] = useState('50');
  const [storeName, setStoreName] = useState('مصنع الحلويات');
  const [storePhone, setStorePhone] = useState('0501234567');
  const [storeAddress, setStoreAddress] = useState('الرياض، حي النخيل، شارع الملك فهد');
  const [notifications, setNotifications] = useState({
    newOrders: true,
    lowStock: true,
    dailyReports: false
  });

  const handleSaveSettings = () => {
    toast.success('تم حفظ الإعدادات بنجاح');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-primary mb-2">إعدادات النظام</h2>
        <p className="text-gray-600">إدارة إعدادات المتجر والنظام العامة</p>
      </div>

      {/* Store Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            إعدادات المتجر
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="storeName">اسم المتجر</Label>
              <Input
                id="storeName"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="text-right"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="storePhone">رقم هاتف المتجر</Label>
              <Input
                id="storePhone"
                value={storePhone}
                onChange={(e) => setStorePhone(e.target.value)}
                className="text-right"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="storeAddress">عنوان المتجر</Label>
            <Input
              id="storeAddress"
              value={storeAddress}
              onChange={(e) => setStoreAddress(e.target.value)}
              className="text-right"
            />
          </div>
        </CardContent>
      </Card>

      {/* Order Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            إعدادات الطلبات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="orderStopTime">وقت إيقاف الطلبات</Label>
              <Input
                id="orderStopTime"
                type="time"
                value={orderStopTime}
                onChange={(e) => setOrderStopTime(e.target.value)}
                className="text-right"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deliveryFee">رسوم التوصيل (ريال)</Label>
              <Input
                id="deliveryFee"
                type="number"
                value={deliveryFee}
                onChange={(e) => setDeliveryFee(e.target.value)}
                className="text-right"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="minOrderAmount">الحد الأدنى للطلب (ريال)</Label>
              <Input
                id="minOrderAmount"
                type="number"
                value={minOrderAmount}
                onChange={(e) => setMinOrderAmount(e.target.value)}
                className="text-right"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            إعدادات التنبيهات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="newOrders">تنبيهات الطلبات الجديدة</Label>
              <p className="text-sm text-gray-500">استقبال تنبيه عند وصول طلب جديد</p>
            </div>
            <Switch
              id="newOrders"
              checked={notifications.newOrders}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, newOrders: checked }))
              }
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="lowStock">تنبيهات المخزون المنخفض</Label>
              <p className="text-sm text-gray-500">تنبيه عندما ينخفض مخزون المنتجات</p>
            </div>
            <Switch
              id="lowStock"
              checked={notifications.lowStock}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, lowStock: checked }))
              }
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="dailyReports">التقارير اليومية</Label>
              <p className="text-sm text-gray-500">استقبال تقرير يومي بالمبيعات</p>
            </div>
            <Switch
              id="dailyReports"
              checked={notifications.dailyReports}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, dailyReports: checked }))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            إعدادات الأمان
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline">
              تغيير كلمة المرور
            </Button>
            <Button variant="outline">
              تسجيل الخروج من جميع الأجهزة
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveSettings} className="px-8">
          حفظ جميع الإعدادات
        </Button>
      </div>
    </div>
  );
}