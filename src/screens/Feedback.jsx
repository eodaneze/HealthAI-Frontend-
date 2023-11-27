import Sidebar from '../components/Sidebar'
import { FaPen } from 'react-icons/fa'

const Feedback = () => {
  return (
    <div className='flex'>
         <Sidebar />
         <div className="h-screen flex-1 p-7  bg-white overflow-y-scroll">
         <div className="lg:text-center pb-2">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 flex gap-5 justify-items-center items-center mx-auto my-1 px-4 rounded">< FaPen size={15}/> Feedback</button>
           </div>
           <p className="update bg-[#F0F1F3] text-[#2B2F38] py-5 px-10 my-3 text-sm rounded-md">
           Thank you very much,this is very helpful and saves me alot of time
           </p>
           
         </div>
         
    </div>
  )
}

export default Feedback