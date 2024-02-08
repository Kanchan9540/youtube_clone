import React from "react"; 
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () =>{

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return(
        <div className="grid grid-flow-col p-5 m-1 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={ () => toggleMenuHandler()} className="h-8 cursor-pointer" alt="menu" src="https://cdn.iconscout.com/icon/free/png-512/free-menu-1768000-1502336.png?f=webp&w=256"/>
                <a href="/">
                <img className="h-8 mx-2" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"/>
                </a>
        </div>
        <div className="col-span-10 px-10">
            <input className="w-1/2 rounded-l-full border border-black cursor-text p-2" type="text"/>
            <button className="border-2 border-black rounded-r-full bg-black text-white p-2">Search</button>
        </div>
        <div className="col-span-1">
            <img className="h-8" alt="user" src="https://imechinstitute.com/wp-content/uploads/2022/06/vector.jpeg"/>
        </div>
        </div>
    );
};

export default Head;