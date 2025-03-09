// components/StepCard.js

import { MessageCircle, Search, Users } from 'lucide-react';

export default function StepCard({ stepNumber, title, description, icon }) {
    return (
        <div className="flex flex-col w-full items-center p-6 rounded-2xl shadow-lg max-w-[420px]">
            <div className={`flex items-center justify-center w-16 h-16 rounded-full ${icon === 'search' ? 'bg-yellow-100' : icon === 'message' ? 'bg-red-100' : 'bg-blue-100'} mb-4`}>
                {/* Displaying the respective Lucide icon */}
                {icon === 'search' && <Search size={24} className="text-yellow-500" />}
                {icon === 'message' && <MessageCircle size={24} className="text-red-500" />}
                {icon === 'users' && <Users size={24} className="text-blue-500" />}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{stepNumber}. {title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}
