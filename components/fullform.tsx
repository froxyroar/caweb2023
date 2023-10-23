"use client";
import React from 'react'

const Fullform = () => {
    setTimeout(() => {
        window.location.href = "/";
    }, 3000) // 3000 milliseconds = 3 seconds
  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-red-100 to-white-300'>
    <p className='underline underline-offset-8 font-forest-road text-[30px] md:text-[50px] lg:text-[85px]' style={{color:"#231f20"}}>
        REGISTRATION ARE CLOSED
    </p>

    </div>
  )
}

export default Fullform