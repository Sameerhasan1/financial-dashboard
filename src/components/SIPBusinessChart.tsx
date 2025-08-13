'use client';

import { FileText } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface SIPBusinessChartProps {
  data: {
    months: string[];
    bars: number[];
    line1: number[];
    line2: number[];
  };
}

export default function SIPBusinessChart({ data }: SIPBusinessChartProps) {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        type: 'bar' as const,
        label: 'SIP Business',
        data: data.bars,
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        yAxisID: 'y',
        borderRadius: 4,
      },
      {
        type: 'line' as const,
        label: 'Line 1',
        data: data.line1,
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        fill: false,
        yAxisID: 'y1',
        tension: 0.4,
      },
      {
        type: 'line' as const,
        label: 'Line 2',
        data: data.line2,
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderWidth: 2,
        fill: false,
        yAxisID: 'y1',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: '600',
          },
        },
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: false,
        },
        min: 0,
        max: 2.4,
        ticks: {
          stepSize: 0.8,
          font: {
            size: 11,
            weight: '600',
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: false,
        },
        min: 90,
        max: 120,
        ticks: {
          stepSize: 10,
          font: {
            size: 11,
            weight: '600',
          },
        },
        grid: {
          drawOnChartArea: false,
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-gray-700">SIP BUSINESS CHART</h3>
        <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-2 bg-red-50 px-4 py-3 rounded-xl transition-colors">
          <FileText className="w-4 h-4" />
          <span>View Report</span>
        </button>
      </div>
      
      <div className="h-72">
        <Chart type="bar" data={chartData}/>
      </div>
    </div>
  );
}
