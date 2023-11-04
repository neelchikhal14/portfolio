import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import NetworkButton from "../NetworkButton/NetworkButton";
import React from "react";
import data from "../../data/data.json";

const network = data.network;
const footer = data.footer;
const Footer = () => {
  return (
    <footer className="h-28 w-full bg-section-background ">
      <div className="w-5/6 mx-auto flex flex-col mt-5">
        <div className="flex justify-around">
          <NetworkButton
            href={"mailto:" + network.email}
            icon={
              <AiOutlineMail
                size={32}
                color="rgb(30 215 96 / var(--tw-text-opacity))"
              />
            }
          />
          <NetworkButton
            href={network.github}
            icon={
              <BsGithub
                size={32}
                color="rgb(30 215 96 / var(--tw-text-opacity))"
              />
            }
          />
        </div>
        <div className="mt-5 flex justify-center ">
          <p className="text-sm sm:text-base">{footer.title}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
