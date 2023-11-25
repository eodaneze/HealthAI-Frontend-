import React from 'react'

const DiagnosisBtn = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
        <button className='bg-[#E8F1FB] border border-blue-700 text-[#0B1A51] px-4 py-2 rounded'>Today</button>
        <button className='text-[#0B1A51] px-4 py-2 rounded dia-btn'>7 Days</button>
        <button className='text-[#0B1A51] px-4 py-2 rounded dia-btn'>30 Days</button>
    </div>
  )
}

export default DiagnosisBtn