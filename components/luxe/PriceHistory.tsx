'use client';

import { useState } from 'react';

const tabs = ['1M', '3M', '6M', '1Y'];

const data: Record<string, { month: string; price: number }[]> = {
  '1M': [{ month: 'Jan', price: 105 }, { month: 'Feb', price: 95 }, { month: 'Mar', price: 88 }, { month: 'Apr', price: 80 }],
  '3M': [{ month: 'Oct', price: 120 }, { month: 'Nov', price: 110 }, { month: 'Dec', price: 105 }, { month: 'Jan', price: 80 }],
  '6M': [{ month: 'Aug', price: 130 }, { month: 'Sep', price: 125 }, { month: 'Oct', price: 120 }, { month: 'Nov', price: 110 }, { month: 'Dec', price: 105 }, { month: 'Jan', price: 80 }],
  '1Y': [{ month: 'Feb', price: 140 }, { month: 'Apr', price: 135 }, { month: 'Jun', price: 128 }, { month: 'Aug', price: 130 }, { month: 'Oct', price: 120 }, { month: 'Dec', price: 105 }, { month: 'Jan', price: 80 }],
};

export default function PriceHistory() {
  const [activeTab, setActiveTab] = useState('3M');
  const points = data[activeTab];
  const maxPrice = Math.max(...points.map((p) => p.price));
  const minPrice = Math.min(...points.map((p) => p.price));
  const range = maxPrice - minPrice || 1;

  const chartWidth = 100;
  const chartHeight = 120;
  const stepX = chartWidth / (points.length - 1);

  const pathD = points
    .map((p, i) => {
      const x = i * stepX;
      const y = chartHeight - ((p.price - minPrice) / range) * (chartHeight - 20) - 10;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  const areaD = `${pathD} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <div className="rounded-2xl border border-[#e7eaf0] p-6">
      <h3 className="font-display text-lg font-bold text-navy">Price History</h3>
      <p className="text-sm text-gray-500 mt-1 mb-5">See how this deal compares to past prices.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 h-9 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === tab
                ? 'bg-violet text-white'
                : 'bg-[#f6f8fb] text-gray-500 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="relative">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5b2df5" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#5b2df5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#priceGrad)" />
          <path d={pathD} fill="none" stroke="#5b2df5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => {
            const x = i * stepX;
            const y = chartHeight - ((p.price - minPrice) / range) * (chartHeight - 20) - 10;
            return <circle key={i} cx={x} cy={y} r="1.5" fill="#5b2df5" />;
          })}
        </svg>
        <div className="flex justify-between mt-2">
          {points.map((p) => (
            <span key={p.month} className="text-[10px] text-gray-400">{p.month}</span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-[#e7eaf0]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div>
            <p className="text-lg font-bold text-navy">${points[Math.max(0, points.length - 2)]?.price ?? 105}</p>
            <p className="text-xs text-gray-500">{points[Math.max(0, points.length - 2)]?.month ?? 'Dec'} 3, 2024</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet" />
          <div>
            <p className="text-lg font-bold text-violet">${points[points.length - 1]?.price}</p>
            <p className="text-xs text-gray-500">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}
