import React from 'react';

const scheduleData = [
  {
    date: 'Day 1 - April 12, 2025',
    events: [
      { time: '08:00 AM', activity: 'Registrations' },
      { time: '09:30 AM', activity: 'Opening Ceremony' },
      { time: '10:30 AM', activity: 'High Tea' },
      { time: '11:00 AM', activity: 'Session 1' },
      { time: '02:00 PM', activity: 'Lunch' },
      { time: '03:00 PM', activity: 'Session 2'}
    ],
  },
  {
    date: 'Day 2 - April 13, 2025',
    events: [
   
      { time: '09:00 AM', activity: 'Session 3' },
      { time: '11:00 AM', activity: 'High Tea' },
      { time: '11:30 AM', activity: 'Session 4' },
      { time: '01:30 PM', activity: 'Lunch' },
      { time: '02:30 PM', activity: 'Session 5'},
      { time: '05:00 PM', activity: 'Closing Ceremony'},
    ],
  },
  
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Conference Schedule</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {scheduleData.map((day) => (
            <div key={day.date} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
              <div className="bg-purple-800 text-white py-3 px-6">
                <h3 className="text-xl font-semibold">{day.date}</h3>
              </div>
              
              <div className="p-6">
                {day.events.map((event) => (
                  <div key={event.time} className="flex py-3 border-b border-gray-700 last:border-0">
                    <div className="w-1/3 font-semibold text-gray-400">{event.time}</div>
                    <div className="w-2/3 text-gray-200">{event.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;