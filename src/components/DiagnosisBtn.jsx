
import {useLocation } from 'react-router-dom'
const DiagnosisBtn = () => {
   
    const btns = [
        {to: '/diagnosis', title: 'Today'},
        {to: '/seven', title: '7 Days'},
        {to: '/thirty', title: '30 Days'},
    ]
 const location = useLocation();
 const currentPath = location.pathname;

 
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
        {
            btns.map((btn, index) => (
                   <button  key={index} className={`${btn.to == currentPath ? 'bg-[#E8F1FB]' : 'dia-btn'}  text-[#0B1A51] px-4 py-2 rounded`}>
                    {btn.title}
                    </button>
                
            ))
        }
        
    </div>
  )
}

export default DiagnosisBtn