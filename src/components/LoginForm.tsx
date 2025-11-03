import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface LoginFormProps {
  onLogin: (role: 'manager' | 'employee') => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'manager' | 'employee'>('employee');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(role);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center pb-8">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🏭</span>
          </div>
          <CardTitle className="text-2xl text-primary">مصنع الحلويات</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            تسجيل الدخول إلى لوحة الإدارة
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني أو رقم الهاتف</Label>
              <Input
                id="email"
                type="text"
                placeholder="أدخل البريد الإلكتروني أو رقم الهاتف"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-right"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-right"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">نوع المستخدم</Label>
              <Select value={role} onValueChange={(value: 'manager' | 'employee') => setRole(value)}>
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر نوع المستخدم" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manager">مدير</SelectItem>
                  <SelectItem value="employee">موظف</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              تسجيل الدخول
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}