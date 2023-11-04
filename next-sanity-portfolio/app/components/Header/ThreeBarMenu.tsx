"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import NetworkButton from "../NetworkButton/NetworkButton";
import data from "../../data/data.json";

const header = data.header;
const network = data.network;

const ThreeBarMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const closeDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      {openDrawer && (
        <div className="bg-section-background w-6/12 h-screen absolute left-0 top-3 z-10 animate-threeBarMenuAnimate">
          <div className="mt-2 flex flex-col justify-start pr-4">
            <div className="flex justify-end ">
              <button onClick={closeDrawer}>
                <AiOutlineClose
                  color="rgb(30 215 96 / var(--tw-text-opacity))"
                  size={32}
                />
              </button>
            </div>
            <div>
              <ul className="flex flex-col pl-4 mt-10">
                {header["menu-items"].map((item, idx) => (
                  <li key={idx} className="my-4">
                    <Link
                      href={item.path}
                      className="active:text-iconic-green active:underline active:decoration-iconic-green active:underline-offset-8"
                      onClick={closeDrawer}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 pl-4">
              <button className="h-10 bg-iconic-green rounded-full w-32 flex items-center justify-center  hover:bg-text-color hover:text-main-background md:w-52">
                <BiDownload />
                <a href="./Neel_Chikhal.pdf" download="Neel_Chikhal.pdf">
                  <p className="px-1">{data.header.resume}</p>
                </a>
              </button>
            </div>
            <div className="flex justify-start pl-5 mt-5">
              <NetworkButton
                href={"mailto:" + network.email}
                icon={<AiOutlineMail size={32} />}
              />
              <NetworkButton
                href={network.github}
                icon={<BsGithub size={32} />}
                className="pl-4"
              />
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setOpenDrawer((prevState) => !prevState)}>
        <AiOutlineMenu
          color="rgb(30 215 96 / var(--tw-text-opacity))"
          size={32}
        />
      </button>
    </>
  );
};

export default ThreeBarMenu;
