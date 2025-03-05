// components/SlotPicker.tsx

import React, { useState } from 'react';

interface SlotPickerProps {
    // This prop allows us to handle the selected slot outside of this component
    onSlotSelect?: (slot: string) => void;
}

const SlotPicker: React.FC<SlotPickerProps> = ({ onSlotSelect }) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    // Dummy available slots for different days
    const slotData: Record<string, string[]> = {
        'Mon': ['9:00-11:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
        'Tue': ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'],
        'Wed': ['9:30 AM', '11:30 AM', '1:30 PM', '3:30 PM'],
        'Thu': ['10:30 AM', '12:30 PM', '2:30 PM', '4:30 PM'],
        'Fri': ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
        'Sat': ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'],
        'Sun': ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
    };

    // Handle the date selection
    const handleDateSelect = (day: string) => {
        setSelectedDate(day);
        setAvailableSlots(slotData[day] || []); // Set available slots for the selected date
        setSelectedSlot(null); // Reset selected slot
    };

    // Handle the slot selection
    const handleSlotSelect = (slot: string) => {
        setSelectedSlot(slot);
        if (onSlotSelect) {
            onSlotSelect(slot); // Pass the selected slot back to parent (if provided)
        }
    };

    return (
        <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Booking Calendar</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-center">
                    {/* Dummy Calendar UI (use your existing calendar or this as a placeholder) */}
                    <div className="mt-4 grid grid-cols-7 gap-4 text-center">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                            <button
                                key={index}
                                className={`p-2 rounded-lg ${selectedDate === day ? 'bg-primary text-white' : 'bg-white text-gray-600'
                                    }`}
                                onClick={() => handleDateSelect(day)}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {selectedDate && (
                        <div className="mt-6">
                            <p className="text-gray-600">You selected: {selectedDate}</p>
                            <h4 className="text-lg font-semibold mt-4">Available Slots:</h4>
                            <div className="mt-2">
                                {availableSlots.length > 0 ? (
                                    <div className="grid grid-cols-2 gap-2">
                                        {availableSlots.map((slot, index) => (
                                            <button
                                                key={index}
                                                className={`p-2 rounded-lg ${selectedSlot === slot ? 'bg-primary text-white' : 'bg-white text-gray-600'
                                                    }`}
                                                onClick={() => handleSlotSelect(slot)}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-600">No available slots for this day.</p>
                                )}
                            </div>

                            {selectedSlot && (
                                <p className="mt-4 text-gray-600">You selected: {selectedSlot}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SlotPicker;
