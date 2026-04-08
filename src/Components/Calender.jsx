import React from 'react'
import Image from './Image'
import Dates from './Dates'
import Note from './Note'

const Calender = () => {
    return (

        <div className='m-5 outline outline-2 outline-gray-400 w-fit mx-auto p-3 rounded bg-emerald-50 flex flex-col items-center'>

            <Image />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pt-6 pb-10 w-full">

                {/* Notes */}
                <div className="order-2 md:order-1 w-[90%] md:flex-1 max-w-2xl">
                    <Note />
                </div>

                {/* Dates */}
                <div className="order-1 md:order-2 w-[90%] md:flex-1 max-w-2xl">
                    <Dates />
                </div>

            </div>

        </div>

    )
}

export default Calender