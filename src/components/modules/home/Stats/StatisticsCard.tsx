// components/StatisticCard.js

import { Star, Tag, Clock } from 'lucide-react';

export default function StatisticCard({ icon, color, number, description }) {
  return (
    <div className={`flex items-center p-6 rounded-xl ${color} shadow-lg`}>
      <div className="flex-shrink-0">
        {/* Displaying the respective Lucide React icon */}
        {icon === 'star' && <Star size={24} className="text-yellow-500" />}
        {icon === 'tag' && <Tag size={24} className="text-red-500" />}
        {icon === 'clock' && <Clock size={24} className="text-blue-500" />}
      </div>
      <div className="ml-4">
        <h3 className="text-2xl font-semibold">{number}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
