import React from "react";

const Button = ({name}) => {
    return(
        // <div>
        //     <button className="hover:bg-gray-400  hover:text-black transition duration-150 hover:ease-in px-5 py-2 m-2 bg-black text-white rounded-lg ">{name}</button>
        // </div>
        <div>
        <button class=" hover:bg-black hover:text-white ease-in px-5 py-2 m-2 bg-slate-200 text-black rounded-lg">{name}</button>
    </div>
    );
};

export default Button;