import React, { useState } from 'react'
import Date from "./Date"

const Dates = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const [notes, setNotes] = useState({});
    const days = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];

    const dates = [
        null, null, null, 1, 2, 3, 4,
        5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30
    ];

    return (
        

        <div>
             {/* Days */}
            <div className="grid grid-cols-7 mb-2">

                {days.map((day, index) => (
                    <div
                        key={index}
                        className="text-center text-gray-700 font-semibold text-lg"
                    >
                        {day}
                    </div>
                ))}

            </div>

           {/* Dates */}
            <div className="grid grid-cols-7 gap-y-1">

                {dates.map((date, index) => (

                    <Date
                        key={index}
                        value={date}

                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}

                        notes={notes}
                        setNotes={setNotes}

                    />

                ))}

            </div>

        </div>
        
    )

}

export default Dates;