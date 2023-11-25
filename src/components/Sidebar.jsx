import React, {useState} from 'react';
import '../App.css'
import { 
    FaEdit, 
    FaHistory,
    FaPlus,
    FaPen,
    FaCog,
    FaHeadset     
} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import UserImg from '../assets/avatar3.jpg'

const Sidebar = () => {
    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "New Chat", src: "Chart_fill", icon: <FaEdit  size={15}/> },
    { title: "Diagnosis History", src: "Chat", icon: <FaHistory  size={15}/>},
    { title: "Update", src: "User", icon: <FaPlus size={15}/>},
    { title: "Give Feedback ", src: "Calendar" , icon: <FaPen size={15}/>},
    { title: "Setting", src: "Setting", gap: true, icon: <FaCog size={15}/>},
    { title: "Help Center", src: "Setting", icon: <FaHeadset size={15}/>},
  ];
  return (
    <div>
         <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5 z-10 pt-8 relative top-0 duration-300`}
     
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            HealthPoint
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-[6rem]" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              <span>{Menu.icon}</span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              
             
            </li>
          ))}
        <div className="user-img mt-6">
             <div>
                <img className='w-[2rem] h-[2rem] rounded-full' src={UserImg} alt="" />
                <p  className={`${!open && "hidden"} origin-left duration-200 username text-gray-300 text-sm font-semibold`}>
                    <span>John Deo</span>
                    <span>john@gmail.com</span>
                </p>
             </div>
             <p className={`${!open && "hidden"} logout shadow-md`}><IoIosLogOut/></p>
        </div>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar