"use client";
import React, { useState } from 'react';
import { Search, Bell, Menu, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TopbarProps {
  onMenuToggle?: () => void;
  className?: string;
}

function Topbar({ onMenuToggle, className }: TopbarProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className={`h-14 border-b bg-white px-6 ${className}`} dir="rtl">
      <div className="flex h-full items-center justify-between">
        
        {/* يمين - الملف الشخصي والإشعارات */}
        <div className="flex items-center gap-3">
          {/* قائمة المستخدم */}
          <div className="relative">
            <Button
              variant="ghost"
              className="flex items-center gap-2 px-3"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                <AvatarFallback className="bg-blue-500 text-white text-sm">
                  أح
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium">أحمد محمد</p>
                <p className="text-xs text-gray-500">مدير</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button>
            
            {/* قائمة المستخدم المنسدلة */}
            {userMenuOpen && (
              <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-3 border-b border-gray-100">
                  <p className="font-medium text-right">أحمد محمد</p>
                  <p className="text-sm text-gray-500 text-right">ahmed@example.com</p>
                </div>
                <div className="py-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-right hover:bg-gray-50">
                    <User className="h-4 w-4 text-gray-500" />
                    الملف الشخصي
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-right hover:bg-gray-50">
                    <Settings className="h-4 w-4 text-gray-500" />
                    الإعدادات
                  </button>
                  <hr className="my-1" />
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-right hover:bg-gray-50 text-red-600">
                    <LogOut className="h-4 w-4" />
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* الإشعارات */}
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

            {/* قائمة الإشعارات المنسدلة */}
            {notificationsOpen && (
              <div className="absolute top-full right-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="font-medium text-right">الإشعارات</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="p-3 hover:bg-gray-50 border-b border-gray-50">
                    <p className="text-sm font-medium text-right">مستخدم جديد</p>
                    <p className="text-xs text-gray-500 text-right">انضم محمد علي للمنصة</p>
                    <p className="text-xs text-gray-400 text-right mt-1">منذ دقيقتين</p>
                  </div>
                  <div className="p-3 hover:bg-gray-50 border-b border-gray-50">
                    <p className="text-sm font-medium text-right">تحديث النظام</p>
                    <p className="text-xs text-gray-500 text-right">تحديث جديد متاح</p>
                    <p className="text-xs text-gray-400 text-right mt-1">منذ ساعة</p>
                  </div>
                  <div className="p-3 hover:bg-gray-50">
                    <p className="text-sm font-medium text-right">دفعة جديدة</p>
                    <p className="text-xs text-gray-500 text-right">تم استلام 500 ريال</p>
                    <p className="text-xs text-gray-400 text-right mt-1">منذ 3 ساعات</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* وسط - البحث */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="البحث..."
              className="w-full pr-10 pl-4 h-9 bg-gray-50 border-gray-200 focus:bg-white text-right"
              dir="rtl"
            />
          </div>
        </div>

        {/* يسار - القائمة والعنوان */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-900">لوحة التحكم</h1>
        </div>

      </div>

      {/* إغلاق القوائم عند النقر خارجها */}
      {(userMenuOpen || notificationsOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setUserMenuOpen(false);
            setNotificationsOpen(false);
          }}
        />
      )}
    </header>
  );
}

export default Topbar;