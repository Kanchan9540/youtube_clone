import React from "react";
import ButtonList from "./Components/ButtonList";
import VideoContainer from "./Components/VideoContainer";

const MainContainer = () => {
    return(
        <div className="col-span-11">
          <ButtonList/>
          <VideoContainer/>
        </div>
    );
};

export default MainContainer;