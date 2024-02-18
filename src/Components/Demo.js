//************use memo */
// import React from "react";
// import { useRef } from "react";
// import { useState } from "react";

// import React, { useMemo, useState } from "react";
// import { isPrime } from "../utils/helper";
// import {findNthPrime} from "../utils/helper";

// const Demo = () => {

//     const [text, setText] = useState(0);
//     const [isDarkTheme, setIsDarkTheme] = useState(false);
//     console.log("render");

//     // heavy operation
//     const prime = useMemo(() => findNthPrime(text), [text]); // take 1st perameter as a function and 2nd is a dependency


//     return(
//         <div className={"m-4 p-2 w-96 border border-black" + (isDarkTheme && "bg-gray-900")}>
//         <div>
//             <input className="border border-black w-72 px-2" type="number" value={text} onChange={(e) => {
//                 setText(e.target.value);
//             }}></input>
//         </div>

//         <div>
//             <h1 className="mt-4 font-bold text-xl">Nth prime number: {prime}</h1>
//         </div>

//     </div>
//     )
// };

// export default Demo;




//*****************useRef() */

// const Demo = () => {
//     let x = 10;
//     const [y, setY] = useState(0);
//     // console.log("rendering");

//     const ref = useRef(0);

//     return (
//         <div className="m-4 p-2 border border-black w-96 h-96">
//             <div>
//                 <button className="bg-green-100 p-2 m-4" onClick={() => {
//                     x = x + 1;
//                     console.log(x);
//                 }}>Increase x</button>
//                 <span className="font-bold text-xl">let = {x}</span>
//             </div>

//             <div>
//                 <button className="bg-green-100 p-2 m-4" onClick={() => {
//                     setY(y + 1);
//                 }}>Increase y</button>
//                 <span className="font-bold text-xl">state = {y}</span>
//             </div>

//             <div>
//                 <button className="bg-green-100 p-2 m-4" onClick={() => {
//                     ref.current = ref.current + 1;
//                     console.log("ref = " + ref.current);
//                 }}>Increase ref</button>
//                 <span className="font-bold text-xl">Ref = {ref.current}</span>
//             </div>
//         </div>
//     );
// };

// export default Demo;




