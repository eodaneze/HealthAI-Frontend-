import React from "react";
import Sidebar from "../components/Sidebar";
import '../App.css';
import { FaCircleArrowUp } from "react-icons/fa6";
import { LuFerrisWheel } from "react-icons/lu";
const ChatScreen = () => {


  return (
    <div className="flex">
       <Sidebar />
        <div className="h-screen flex-1 p-7  bg-white overflow-y-scroll">
         
           <div className="lg:text-center border-b-2 pb-2 sympton">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><i className="fa fa-edit"></i> Sympton Input</button>
           </div>
             <div className="chat-container p-3 mt-8">
                  <div className="chat-area">
                    <div>
                         <p className="text-dark-purple font-semibold text-sm flex res-chat">
                          <span>HealthPoint</span>
                            <span><LuFerrisWheel /></span>
                         </p>
                        <div className="message left mb-4">Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    </div>
                    <div className="response right">Sure, ask away! lorem7</div>
                    <div>
                         <p className="text-dark-purple font-semibold text-sm flex res-chat">
                          <span>HealthPoint</span>
                            <span><LuFerrisWheel /></span>
                         </p>
                        <div className="message left mb-4">Lorem ipsum dolor sit, amet Lorem ipsum dolor sit</div>
                    </div>
                     
                    <div className="response right">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi iure neque hic ab!?</div>
                   
                  </div>
                 
            </div>
            <div className="typeChatbox fixed bottom-0 mb-3">
                  <input type="text" placeholder="Type in your message"/>
                  <p><FaCircleArrowUp size={20}/></p>
            </div>
            
        </div>

     
    </div>
  );
};
export default ChatScreen;