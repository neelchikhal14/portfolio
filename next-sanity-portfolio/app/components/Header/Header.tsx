import { BiDownload } from "react-icons/bi";
import Link from "next/link";
import MyName from "./MyName";
import React from "react";
import ThreeBarMenu from "./ThreeBarMenu";
import data from "../../data/data.json";

const header = data.header;

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center mt-2  sm:mt-4">
      <MyName />
      <div className="xl:hidden flex items-center">
        <ThreeBarMenu />
      </div>
      <div className="hidden xl:block xl:w-1/2">
        <ul className="flex justify-between">
          {header["menu-items"].map((item, idx) => (
            <li key={idx} className="my-4">
              <Link
                href={item.path}
                className="hover:animate-smoothUnderlineAnimate"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden xl:block">
        <a
          href="./Neel_Chikhal.pdf"
          download="Neel_Chikhal.pdf"
          className="h-10 bg-iconic-green rounded-full w-52 flex items-center justify-center  hover:bg-text-color hover:text-main-background"
          target="_blank"
          rel="noreferrer"
        >
          <BiDownload />
          <button>
            <p className="px-1">{data.header.resume}</p>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
