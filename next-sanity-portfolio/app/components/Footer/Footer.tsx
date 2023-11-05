import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import NetworkButton from "../NetworkButton/NetworkButton";
import React from "react";
import data from "../../data/data.json";

const network = data.network;
const footer = data.footer;
const Footer = () => {
  return (
    <footer className="h-32 w-full bg-section-background lg:h-32">
      <div className="w-5/6 h-full mx-auto flex flex-col py-5 lg:items-center lg:justify-between">
        <div className="flex justify-around lg:w-6/12">
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
        <div className="flex justify-center pt-10">
          <p className="text-sm sm:text-base">{footer.title}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
