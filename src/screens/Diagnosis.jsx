import React from 'react'
import Sidebar from '../components/Sidebar'
import DiagnosisBtn from '../components/DiagnosisBtn'
const Diagnosis = () => {
  return (
    <div className='flex'>
         <Sidebar />
         <div className="h-screen flex-1 p-7  bg-white overflow-y-scroll">
         
         <div className="lg:text-center border-b-2 pb-2 sympton">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><i className="fa-solid fa-arrows-rotate"></i> Diagnosis History</button>
         </div>
         <div>
            <DiagnosisBtn />
         </div>
          
      </div>
    </div>
  )
}

export default Diagnosis