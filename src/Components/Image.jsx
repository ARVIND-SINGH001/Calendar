import React from 'react'

const Image = () => {

    const [num, setNum] = React.useState(1);
    const [showInfo, setShowInfo] = React.useState(false);

    const info = [
        "This lake is known for its crystal clear alpine water.",
        "The surrounding mountains were formed millions of years ago.",
        "Tourists often visit here for kayaking and hiking.",
        "The forest nearby contains rare pine species.",
        "This region is famous for sunrise photography."
    ];

    return (
        <div
            className="relative bg-cover bg-center h-[35vh] md:h-[50vh] w-[90vw] md:w-[60vw] mx-auto shadow-lg rounded-xl transition-all duration-500"
            style={{ backgroundImage: `url('/p${num}.jpg')` }}
        >

            {/* Info button */}
            <button
                onClick={() => setShowInfo(true)}
                className="absolute top-3 right-3 
                w-8 h-8 rounded-full 
                bg-white/20 backdrop-blur-md 
                border border-white/30
                text-white text-sm font-semibold
                hover:bg-white/30 transition"
            >
                i
            </button>

            {/* Info popup */}
            {showInfo && (

                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl"
                    onClick={() => setShowInfo(false)}
                >

                    <div
                        className="bg-white/90 backdrop-blur p-4 rounded-lg w-[75%] md:w-[40%] shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <h2 className="font-semibold text-gray-800 mb-2">
                            About this place
                        </h2>

                        <p className="text-gray-600 text-sm">
                            {info[num % info.length]}
                        </p>

                        <button
                            className="mt-3 text-xs text-emerald-600 hover:text-emerald-800 transition"
                            onClick={() => setShowInfo(false)}
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

            <h1 className="
                absolute bottom-4 left-6 
                text-white 
                text-5xl md:text-6xl 
                font-bold 
                tracking-wide
                drop-shadow-lg
            ">
                April, 2026
            </h1>

            <button
                className="absolute bottom-4 right-4 
                bg-white/10 backdrop-blur-lg border border-white/20 
                text-white px-4 py-2 
                rounded-xl shadow-xl 
                hover:bg-white/20 transition-all"

                onClick={() => setNum(prev => (prev % 7) + 1)}
            >
                Change
            </button>

        </div>
    )
}

export default Image