import React from "react";

const ChatMessages = ({name, messages}) => {
    return(
    <div className="flex items-center shadow-sm p-2">
         <img className="h-8" alt="user"
          src="https://imechinstitute.com/wp-content/uploads/2022/06/vector.jpeg"/>

        <span className="font-bold px-2">{name}</span>
        <span>{messages}</span>
    </div>
    );
};

export default ChatMessages;