import { BiDownload } from "react-icons/bi";
import Link from "next/link";
import React from "react";
import ThreeBarMenu from "./ThreeBarMenu";
import data from "../../data/data.json";

const name = data.header.name;
const header = data.header;

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center mt-2 sm:mt-4">
      <p className="text-3xl font-bold sm:text-4xl md:max-xl:text-5xl">
        <span className="text-iconic-green">{name.firstCharFN}</span>
        {name.restFN}&nbsp;
        <span className="text-iconic-green">{name.firstCharLN}</span>
        {name.restLN}
      </p>
      <div className="xl:hidden flex items-center">
        <ThreeBarMenu />
      </div>
      <div className="hidden xl:block xl:w-1/2">
        <ul className="flex justify-between">
          {header["menu-items"].map((item, idx) => (
            <li key={idx} className="my-4">
              <Link
                href={item.path}
                className="hover:text-iconic-green hover:underline hover:decoration-iconic-green hover:underline-offset-8"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden xl:block">
        <button className="h-10 bg-iconic-green rounded-full w-52 flex items-center justify-center  hover:bg-text-color hover:text-main-background">
          <BiDownload />
          <a href="./Neel_Chikhal.pdf" download="Neel_Chikhal.pdf">
            <p className="px-1">{data.header.resume}</p>
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
