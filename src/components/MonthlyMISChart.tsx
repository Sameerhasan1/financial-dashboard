'use client';

import { FileText } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface MonthlyMISChartProps {
  data: {
    months: string[];
    red: number[];
    green: number[];
    blue: number[];
  };
}

export default function MonthlyMISChart({ data }: MonthlyMISChartProps) {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Red Area',
        data: data.red,
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Green Area',
        data: data.green,
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Blue Area',
        data: data.blue,
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderWidth: 3,
        fill: true,
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
        display: true,
        title: {
          display: false,
        },
        min: -0.20,
        max: 0.60,
        ticks: {
          stepSize: 0.20,
          font: {
            size: 11,
            weight: '600',
          },
          callback: function(value: number) {
            return value.toFixed(2) + ' Cr';
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-gray-700">MONTHLY MIS</h3>
        <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-2 bg-red-50 px-4 py-3 rounded-xl transition-colors">
          <FileText className="w-4 h-4" />
          <span>View Report</span>
        </button>
      </div>
      
      <div className="h-72">
        <Chart type="line" data={chartData} options={options}/>
      </div>
    </div>
  );
}
