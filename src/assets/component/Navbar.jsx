// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

// import "./Navbar.css";

function Navbar() {
  return (
    <>
        <div >
           <div className="bg-gray-200 shadow-lg rounded-2xl mb-4" >
            <div className="flex justify-between mr-3 p-2">
                <div className="flex gap-3  ">
                    <img src="/image/download.jpg" alt="logo" className="w-10 rounded-lg " />
                    <p className="text-amber-900 font-langar text-30 "> Qene Tibeb</p>
                </div>
                <div className=" flex justify-between gap-7 font-langar text-amber-950 m-2">
                    <Link to ="/"> Home</Link>
                    <Link to ="/about"> About </Link>
                    <Link to ="/contact"> contact</Link>
                    {/* <Link to ="/cart"> cart</Link> */}
                  
                   
                </div>
            </div>
        </div>
            </div>
            
            </>
  );
}

export default Navbar;
