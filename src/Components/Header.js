import React, { useEffect, useState } from "react"; 
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { youtube_search_api } from "../utils/constant";
import store from "../utils/store";
import { cachesResults } from "../utils/searchSlice";

const Head = () =>{

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    /**
     * searchCache = {
     * 'iphone' : ["iphone 11", "iphone 14"]
     * }
     * 
     * searchQuery = iphone
     */
    

    useEffect(() => {
        //APIcall
       // console.log(searchQuery);

        // make an API call after every key pressed
        // but if the difference b|w 2 API call is <200ms
        // Decline the API call
        const timer = setTimeout(() => {

        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        }
        else{
            getSearchSuggestions();
        }
        }, 200);  // do the api call after 200 ms
        
        // this will run after destroying component
        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);

    /*
     *key - i
     * render the component
     * useEffect() call
     * start timer => make an api call after 200 ms
     * 
     * key - ip
     * destroy the component (call useEffect return method)
     * re-render the component
     * useEffect() call 
     * start timer => make an api call after 200 ms
     */

    const getSearchSuggestions = async () => {
        console.log("API CALL - "+searchQuery);
        const data = await fetch(youtube_search_api + searchQuery);
        const json = await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);

        // update cache
        dispatch(cachesResults({
            [searchQuery] : json[1],
        }));
    };

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
        <div className="flex items-center">
            <input className=" px-5 w-1/2 rounded-l-full border border-black cursor-text p-2"
             type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
             />
            <button className="border-2 border-black rounded-r-full bg-black text-white p-2">Search</button>
            <img class="p-2 hover:bg-gray-200 ml-4  h-10 w-10 border-2 rounded-full" src="https://cdn1.iconfinder.com/data/icons/material-audio-video/21/mic-512.png" alt="Microphone icon"/>

            </div>
            {showSuggestions && 
            (<div className="fixed bg-white  py-2 px-2 w-[28rem] shadow-2xl rounded-xl border border-gray-100">
             <ul>
             {suggestions.map(s => 
             <li key={s} className="py-2 shadow-sm flex hover:bg-gray-100"><img className="w-4 h-4 m-2" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" alt="Search Icon"/>{s}</li>
             )}
            </ul>
            </div>
            )}
        </div>
        <div className="col-span-1 flex items-center">
            <img className="h-8" alt="user" src="https://imechinstitute.com/wp-content/uploads/2022/06/vector.jpeg"/>
            <button className="bg-black text-white ml-2 rounded-full p-1 m-1 text-md">Sign In</button>
           
           
        </div>

        </div>
    );
};

export default Head;