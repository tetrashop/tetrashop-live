import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Tetrashop</span>
            </div>
          </div>

          {/* منوی وسط */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="nav-link bg-primary-50 text-primary-600">خانه</a>
              <a href="/products" className="nav-link">محصولات</a>
              <a href="#" className="nav-link">دسته‌بندی‌ها</a>
              <a href="#" className="nav-link">تخفیف‌ها</a>
              <a href="#" className="nav-link">تماس با ما</a>
            </div>
          </div>

          {/* منوی سمت چپ */}
          <div className="flex items-center space-x-3">
            {/* جستجو */}
            <div className="hidden sm:block relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="input-field pl-10 pr-4 py-2 w-64"
                placeholder="جستجوی محصولات..."
              />
            </div>

            {/* سبد خرید */}
            <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* پروفایل کاربر */}
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>

            {/* منوی موبایل */}
            <button className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
