
import { FaPlus } from 'react-icons/fa6'
import Sidebar from '../components/Sidebar'

const Update = () => {
  return (
    <div className='flex'>
         <Sidebar />
         <div className="h-screen flex-1 p-7  bg-white overflow-y-scroll">
         <div className="lg:text-center pb-2">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 flex gap-3 justify-items-center items-center mx-auto my-1 px-4 rounded">< FaPlus size={18}/> Updates</button>
           </div>
           <p className="update bg-[#E8F1FB] text-[#2B2F38] py-5 px-10 my-3 text-sm rounded-md">
           Following the initial evaluation and diagnosis of consistent headache and backpain, you have been adviced to contact the hospital sooner if experiencing symptoms,significant changes, or intolerable side effects from the prescribed medications. Continued monitoring and modifications of the treatment wil be based on your responnse and  feedback
           </p>
           <p className="update bg-[#E8F1FB] text-[#2B2F38] py-5 px-10 my-3 text-sm rounded-md">
           Following the initial evaluation and diagnosis of consistent headache and backpain, you have been adviced to contact the hospital sooner if experiencing symptoms,significant changes, or intolerable side effects from the prescribed medications. Continued monitoring and modifications of the treatment wil be based on your responnse and  feedback
           </p>
         </div>
         
    </div>
  )
}

export default Update