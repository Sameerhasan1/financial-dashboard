'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import KPICards from './KPICards';
import TransactionSummary from './TransactionSummary';
import ClientsSection from './ClientsSection';
import SIPBusinessChart from './SIPBusinessChart';
import MonthlyMISChart from './MonthlyMISChart';

interface DashboardData {
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
  transactions: {
    [key: string]: {
      purchases: { count: number; amount: string };
      redemptions: { count: number; amount: string };
      rejected: { count: number; amount: string };
      sipRejections: { count: number; amount: string };
      newSip: { count: number; amount: string };
    };
  };
  clients: {
    total: number;
    active: number;
    online: number;
    new: number;
  };
  sipBusiness: {
    months: string[];
    bars: number[];
    line1: number[];
    line2: number[];
  };
  monthlyMis: {
    months: string[];
    red: number[];
    green: number[];
    blue: number[];
  };
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('3days');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/dashboard');
      const dashboardData = await response.json();
      setData(dashboardData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl">Failed to load dashboard data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        <KPICards aum={data.aum} sip={data.sip} />
        
        <TransactionSummary 
          data={data.transactions}
          selectedTimeRange={selectedTimeRange}
          onTimeRangeChange={setSelectedTimeRange}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ClientsSection clients={data.clients} />
          <SIPBusinessChart data={data.sipBusiness} />
          <MonthlyMISChart data={data.monthlyMis} />
        </div>
      </div>
    </div>
  );
}
