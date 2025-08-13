'use client';

import { Search, Filter, MapPin, Bell, Star, User, Lock, Settings, LogOut } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-2xl">W</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Wealth Elite</h1>
              <p className="text-sm text-gray-500">Investment Made Easier</p>
            </div>
          </div>

          <div className="flex-1 max-w-lg mx-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ex Live portfolio"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
              <MapPin className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
              <Star className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
              <Lock className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium">
              <LogOut className="w-4 h-4" />
              <span>LOGOUT</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
