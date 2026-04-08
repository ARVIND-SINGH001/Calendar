import React, { useState } from 'react'

const Date = ({ value, selectedDate, setSelectedDate, notes, setNotes }) => {

    const [text, setText] = useState(notes[value] || "");

    if (value === null) {
        return <div className="h-12"></div>
    }

    const saveNote = () => {

        if (text.trim() === "") {

            // remove note if empty
            setNotes(prev => {
                const newNotes = { ...prev };
                delete newNotes[value];
                return newNotes;
            });

        } else {

            setNotes(prev => ({
                ...prev,
                [value]: text
            }));

        }

        setSelectedDate(null);

    };

    return (

        <div className="relative h-12 flex items-center justify-center">

            {/* Date */}
            <div
                onClick={() => {
                    setSelectedDate(value);
                    setText(notes[value] || "");
                }}

                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-200 cursor-pointer transition"
            >

                {value}

                {notes[value] && (
                    <span className="absolute top-0 right-1 text-black text-xs">
                        ★
                    </span>
                )}

            </div>

            {/* Note popup */}
            {selectedDate === value && (

                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black/20"
                    onClick={() => setSelectedDate(null)}   // click outside closes
                >

                    <div
                        className="bg-emerald-50 shadow-xl border border-emerald-100 rounded-lg p-3 w-72"
                        onClick={(e) => e.stopPropagation()}   // prevents closing when clicking inside
                    >

                        <textarea

                            value={text}

                            onChange={(e) => setText(e.target.value)}

                            className="w-full border border-emerald-200 rounded-md p-1.5 text-sm outline-none focus:border-emerald-300 bg-white resize-none"

                            rows="4"

                            placeholder="Write a note..."

                        />

                        <button

                            onClick={saveNote}

                            className="mt-2 w-full bg-emerald-100 text-emerald-600 py-1.5 rounded-md 
                hover:bg-emerald-200 hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-150 font-medium"

                        >
                            Save note

                        </button>

                    </div>

                </div>

            )}

        </div>

    )

}

export default Date;