'use client';

export default function Navigation() {
  const menuItems = [
    'HOME',
    'CRM',
    'UTILITIES',
    'INSURANCE',
    'ASSETS',
    'MUTUAL',
    'RESEARCH',
    'TRANSACT ONLINE',
    'GOAL GPS',
    'FINANCIAL PLANNING',
    'WEALTH REPORT',
    'OTHER'
  ];

  return (
    <nav className="bg-red-600 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-10 overflow-x-auto py-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="text-white font-semibold text-sm hover:bg-red-700 transition-colors whitespace-nowrap px-3 py-2 rounded-lg"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
