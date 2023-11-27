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
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "New Chat", src: "Chart_fill", icon: <FaEdit  size={15}/>, to:'/chat' },
    { title: "Diagnosis History", src: "Chat", icon: <FaHistory  size={15}/>, to:'/diagnosis'},
    { title: "Update", src: "User", icon: <FaPlus size={15}/>, to:'/update'},
    { title: "Give Feedback ", src: "Calendar" , icon: <FaPen size={15}/>, to:'/feedback'},
    { title: "Setting", src: "Setting", gap: true, icon: <FaCog size={15}/>},
    { title: "Help Center", src: "Setting", icon: <FaHeadset size={15}/>},
  ];
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div>
         <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#E8F1FB] h-screen p-5 z-10 pt-8 relative top-0 duration-300`}
     
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
            className={`text-[#0B1A51] origin-left font-medium text-xl duration-200 ${
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
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-[#0B1A51] text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-[6rem]" : "mt-2"} ${
                Menu.to == currentPath ? "bg-[#B7D3F3]" : ""
              } `}
            >
               {/* index === 0 && "bg-light-white" */}
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              <span>{Menu.icon}</span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                 <Link to={Menu.to}>{Menu.title}</Link>
              </span>
              
             
            </li>
          ))}
        <div className="user-img mt-6">
             <div>
                <img className='w-[2rem] h-[2rem] rounded-full' src={UserImg} alt="" />
                <p  className={`${!open && "hidden"} origin-left duration-200 username text-[#0B1A51] text-sm font-semibold`}>
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