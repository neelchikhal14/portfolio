"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

import Link from "next/link";
import data from "../../data/data.json";

const header = data.header;

const ThreeBarMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const closeDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      {openDrawer && (
        <div className="bg-section-background w-6/12 h-screen absolute left-0 top-4 z-10 animate-threeBarMenuAnimate">
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
