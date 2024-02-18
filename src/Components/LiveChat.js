import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { useSearchParams } from "react-router-dom";


const LiveChat = () => {

const [liveMessage, setLiveMessage] = useState("");  

const dispatch = useDispatch();
const chatMessages  = useSelector((store) => store.chat.messages);

    useEffect(() => {
       const i = setInterval(() => {
          // API call
          console.log("API Polling");

          // dispatch the action
          dispatch(addMessage({
            name: generateRandomName(),
            messages: makeRandomMessage(20),
          }));

       }, 1500);

       return () => clearInterval(i);
    }, []);

    return(
      <>
        <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>{chatMessages.map((c,i) => (<ChatMessages key={i} name={c.name} messages={c.messages}/>))}</div>
        </div>

         <form className="w-full p-2 ml-2 border border-black rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            // console.log("on form submit", liveMessage);
            dispatch(addMessage({
              name: 'Kanchan',
              messages: liveMessage,
            }));
            
            setLiveMessage("");
          }}>
          <input className="w-72 px-2 cursor-text" type="text" value={liveMessage} onChange={(e) => {
            setLiveMessage(e.target.value);
          }}></input>
          <button className="px-2 mx-2 bg-slate-400 rounded-lg">Send</button>
        </form>
        </>
    );
};

export default LiveChat;