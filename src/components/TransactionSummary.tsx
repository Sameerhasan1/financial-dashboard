'use client';

import { FileText, Hand, Package, MoreHorizontal, DollarSign, TrendingUp } from 'lucide-react';

interface TransactionSummaryProps {
  data: {
    [key: string]: {
      purchases: { count: number; amount: string };
      redemptions: { count: number; amount: string };
      rejected: { count: number; amount: string };
      sipRejections: { count: number; amount: string };
      newSip: { count: number; amount: string };
    };
  };
  selectedTimeRange: string;
  onTimeRangeChange: (range: string) => void;
}

export default function TransactionSummary({ data, selectedTimeRange, onTimeRangeChange }: TransactionSummaryProps) {
  const timeRanges = [
    { key: '3days', label: '3 Days' },
    { key: '7days', label: '7 Days' },
    { key: '10days', label: '10 Days' },
    { key: '30days', label: '30 Days' }
  ];

  const currentData = data[selectedTimeRange];

  const transactionTypes = [
    {
      key: 'purchases',
      label: 'Purchases',
      icon: Hand,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      key: 'redemptions',
      label: 'Redemptions',
      icon: Package,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      key: 'rejected',
      label: 'Rej. Transactions',
      icon: MoreHorizontal,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      key: 'sipRejections',
      label: 'SIP Rejections',
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      key: 'newSip',
      label: 'New SIP',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex space-x-3">
        {timeRanges.map((range) => (
          <button
            key={range.key}
            onClick={() => onTimeRangeChange(range.key)}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              selectedTimeRange === range.key
                ? 'bg-red-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {transactionTypes.map((type) => {
          const Icon = type.icon;
          const transactionData = currentData[type.key as keyof typeof currentData];
          
          return (
            <div key={type.key} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${type.bgColor}`}>
                  <Icon className={`w-6 h-6 ${type.color}`} />
                </div>
                <button className="text-red-600 hover:text-red-700 text-xs font-medium flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-lg transition-colors">
                  <FileText className="w-3 h-3" />
                  <span>View Report</span>
                </button>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {transactionData.count} {type.label}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {transactionData.amount}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
