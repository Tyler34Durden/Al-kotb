import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Bell, User, LogOut, Home, ShoppingCart, FolderOpen, Package, Megaphone, Users, Settings, Menu, X, BarChart3 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
  userRole: 'manager' | 'employee';
}

export function DashboardLayout({ children, currentPage, onPageChange, onLogout, userRole }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'الرئيسية', available: true },
    { id: 'orders', icon: ShoppingCart, label: 'الطلبات', available: true },
    { id: 'categories', icon: FolderOpen, label: 'الفئات', available: userRole === 'manager' },
    { id: 'types', icon: Package, label: 'الأنواع', available: userRole === 'manager' },
    { id: 'products', icon: Package, label: 'المنتجات', available: true },
    { id: 'ads', icon: Megaphone, label: 'الإعلانات والمنتجات المميزة', available: userRole === 'manager' },
    { id: 'reports', icon: BarChart3, label: 'التقارير', available: userRole === 'manager' },
    { id: 'users', icon: Users, label: 'المستخدمين', available: userRole === 'manager' },
    { id: 'settings', icon: Settings, label: 'الإعدادات', available: userRole === 'manager' },
  ];

  const availableMenuItems = menuItems.filter(item => item.available);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Logo area */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white">🏭</span>
                </div>
                <div>
                  <h2 className="text-primary">مصنع الحلويات</h2>
                  <p className="text-sm text-gray-600">لوحة الإدارة</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {availableMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <Button
                      variant={currentPage === item.id ? "default" : "ghost"}
                      className={`w-full justify-start text-right ${
                        currentPage === item.id
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        onPageChange(item.id);
                        setSidebarOpen(false);
                      }}
                    >
                      <Icon className="ml-3 h-4 w-4" />
                      {item.label}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User role badge */}
          <div className="p-4 border-t">
            <Badge variant="secondary" className="w-full justify-center">
              {userRole === 'manager' ? 'مدير' : 'موظف'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:mr-64">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>
              <h1 className="text-xl text-primary">
                {availableMenuItems.find(item => item.id === currentPage)?.label || 'الرئيسية'}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>

              <Separator orientation="vertical" className="h-6" />

              {/* User menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">المستخدم</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="ml-2 h-4 w-4" />
                    <span>الملف الشخصي</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="ml-2 h-4 w-4" />
                    <span>الإعدادات</span>
                  </DropdownMenuItem>
                  <Separator />
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">
                    <LogOut className="ml-2 h-4 w-4" />
                    <span>تسجي�� الخروج</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}