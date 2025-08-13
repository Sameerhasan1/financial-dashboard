'use client';

import { Download } from 'lucide-react';

interface ClientsSectionProps {
  clients: {
    total: number;
    active: number;
    online: number;
    new: number;
  };
}

export default function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-gray-700">CLIENTS</h3>
        <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-2 bg-red-50 px-4 py-3 rounded-xl transition-colors">
          <Download className="w-4 h-4" />
          <span>Download Report</span>
        </button>
      </div>

      <div className="relative mb-8 flex items-center justify-center">
        <div className="w-36 h-36 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl relative z-10">
          {clients.total}
        </div>
        
        <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-2 -right-2 z-20">
          {clients.active}
        </div>
        
        <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm absolute -bottom-6 -left-6 z-20">
          {clients.online}
        </div>
        
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs absolute -top-8 left-8 z-20">
          {clients.new}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-gray-600 font-medium">Online</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600 font-medium">New</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-red-600 rounded-full"></div>
          <span className="text-sm text-gray-600 font-medium">Active</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
          <span className="text-sm text-gray-600 font-medium">InActive</span>
        </div>
      </div>
    </div>
  );
}
