import React, { useState } from "react";
import "boxicons";
import social from "../links/Social";
import linksMenu from "../links/linksMenu";
import { Index } from "./sidebar/Index";
const Header = () => {

  return (
    <header className=" px-2 lg:px-10 h-14 pt-2 fixed z-10 w-full top-0  items-end">
      <div className="h-full justify-between w-full hidden lg:flex  ">
        <div className=" backdrop-blur-sm bg-black/30 shadow shadow-slate-500 rounded-md p-2 border-slate-200 flex items-center">
          <ul className="flex flex-row space-x-3 w-60 justify-center">
            {social.map((item, i) => (
              <li key={i}>
                <a
                  href={item.path}
                  className="border border-slate-700 flex justify-center items-center p-2 rounded-full cursor-pointer  hover:bg-red-500 transition-all ease-in-out delay-100"
                >
                  <box-icon
                    name={item.name}
                    type="logo"
                    color="white"
                  ></box-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md h-full backdrop-blur-sm  px-12">
          <ul className="flex items-center h-full justify-between gap-10 ">
            {linksMenu.map((item, i) => (
              <li>
                <a
                  href={item.path}
                  className="text-white  cursor-pointer hover:text-red-400 transition-all ease-in-out delay-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <button className=" text-white h-full backdrop-blur-sm bg-black/30 shadow shadow-slate-500 rounded-md p-2 border-slate-200 items-center w-56  justify-center hover:bg-red-500 transition-all ease-in-out delay-100 text-sm flex ">
            Download CV
          </button>
        </div>
      </div>

      {/* <div className="w-full justify-end flex lg:hidden">
        <div
          className="cursor-pointer backdrop-blur-sm bg-black/30 hover:bg-white/20 flex rounded-full p-2 text-white "
          onClick={openMenu}
        >
          <box-icon name="menu" size="lg" color="#938d8d"></box-icon>
        
        </div>

     
          <div className={`absolute ${open ? 'top-0 h-screen' : '-top-96 h-full' } transition-all duration-1000 ease-in-out  left-0 bg-black/40  w-full   `}>
            <div className=" bg-white/80 p-6 rounded-b-3xl">

         
          <div
          className="cursor-pointer hover:bg-white/70 flex rounded-full p-1 absolute right-2 top-2  "
          onClick={openMenu}
        >
          <box-icon name="x" size="lg" color="#000000"></box-icon>
        </div>
          <ul className="ml-10 flex flex-col gap-10">
          {linksMenu.map((item, i) => (
              <li key={i}
              onClick={openMenu}>
                <a
                  href={item.path}
                  className="text-black font-bold text-2xl  cursor-pointer hover:text-red-400 transition-all ease-in-out delay-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div> */}
     <Index/> 
    </header>
  );
};

export default Header;
