import React from 'react'
import Sidebar from '../components/Sidebar'
// import DiagnosisBtn from '../components/DiagnosisBtn'
import ThirtyDays from '../components/ThirtyDays';
import SevenDays from '../components/SevenDays';
import Today from '../components/Today';
import DiagnosisBtn from '../components/DiagnosisBtn';

const Diagnosis = () => {
   const[active, setActive] = React.useState('1');
  return (
    <div className='flex'>
         <Sidebar />
         <div className="h-screen flex-1 p-7  bg-white overflow-y-scroll">
         
         <div className="lg:text-center border-b-2 pb-2 sympton">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><i className="fa-solid fa-arrows-rotate"></i> Diagnosis History</button>
         </div>
         <div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
             <button onClick={() => setActive('1')} className=' text-[#0B1A51] px-4 py-2 rounded bg-[#E8F1FB]'>Today</button>
             <button onClick={() => setActive('2')} className=' text-[#0B1A51] px-4 py-2 rounded bg-[#E8F1FB]'>7 Days</button>
             <button onClick={() => setActive('3')} className=' text-[#0B1A51] px-4 py-2 rounded bg-[#E8F1FB]'>30 Days</button>
           </div>
            <div>
              {active === '1' && <Today />}
              {active === '2' && <SevenDays />}
              {active === '3' && <ThirtyDays />}
                
            </div>
           
         </div>
          
      </div>
    </div>
  )
}

export default Diagnosis