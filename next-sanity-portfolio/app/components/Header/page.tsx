import { BiDownload } from "react-icons/bi";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center mt-3">
      <p className="text-5xl font-bold">
        <span className="text-iconic-green">N</span>eel{" "}
        <span className="text-iconic-green">C</span>hikhal
      </p>
      <div className="w-1/2">
        <ul className="flex justify-between">
          <li>About Me</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Blog</li>
          <li>Future Learning Goals</li>
        </ul>
      </div>
      <div>
        <button className="h-10 bg-iconic-green rounded-full w-52 flex items-center justify-center">
          <BiDownload />
          <p className="px-1">Resume</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
