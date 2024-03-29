import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./commentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () =>{
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

   const dispatch = useDispatch();
   
   useEffect(() => {
    dispatch(closeMenu());
   })
    return(
        <div className="w-full">
        <div className="px-5 flex w-full">
        <div className="">
          <iframe width="950" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
           title="YouTube video player" 
           frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowFullScreen></iframe>
           </div>

        <div className="w-full">
        <LiveChat/>
        </div>
        </div>
        <CommentsContainer/>
        </div>
    );
};

export default WatchPage;