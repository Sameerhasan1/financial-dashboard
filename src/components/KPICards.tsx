'use client';

import { TrendingUp, ChevronDown, FileText } from 'lucide-react';

interface KPICardsProps {
  aum: {
    current: string;
    change: string;
    trend: string;
  };
  sip: {
    current: string;
    change: string;
    trend: string;
  };
}

export default function KPICards({ aum, sip }: KPICardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Current</h3>
          <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-lg transition-colors">
            <FileText className="w-4 h-4" />
            <span>View Report</span>
          </button>
        </div>
        
        <div className="mb-6">
          <div className="text-4xl font-bold text-gray-900 mb-3">
            AUM {aum.current}
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-green-600 font-semibold text-lg">
              {aum.change} {aum.trend}
            </span>
          </div>
        </div>
        
        <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center space-x-2 bg-green-50 px-4 py-3 rounded-lg transition-colors">
          <span>View Trend</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Current</h3>
          <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-lg transition-colors">
            <FileText className="w-4 h-4" />
            <span>View Report</span>
          </button>
        </div>
        
        <div className="mb-6">
          <div className="text-4xl font-bold text-gray-900 mb-3">
            SIP {sip.current}
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-green-600 font-semibold text-lg">
              {sip.change} {sip.trend}
            </span>
          </div>
        </div>
        
        <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center space-x-2 bg-green-50 px-4 py-3 rounded-lg transition-colors">
          <span>View Trend</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
