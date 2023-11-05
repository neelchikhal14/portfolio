import Image from "next/image";
import Img from "../../../public/1645915328266.jpg";
import React from "react";
import data from "../../data/data.json";

const aboutMe = data["about-me"];
const headline = data["about-me"].headline;
const intro = data["about-me"].introduction;

const AboutMe = () => {
  return (
    <section id="about-me-section" className="flex flex-col mt-8 ">
      <div>
        <p className="text-2xl sm:text-3xl md:max-xl:text-4xl">
          <span className="text-iconic-green">
            {aboutMe["section-title-1"]}
          </span>
          {aboutMe["section-title-2"]}&nbsp;
          <span className="text-iconic-green">
            {aboutMe["section-title-3"]}
          </span>
          {aboutMe["section-title-4"]}
        </p>
      </div>
      <div className="self-center mt-8">
        <div>
          <p className=" text-white font-bold mx-auto text-3xl sm:text-4xl md:max-xl:text-5xl">
            {headline["part-1"]["line-1"]}
          </p>
          <p className=" text-white font-bold mx-auto text-3xl sm:text-4xl md:max-xl:text-5xl">
            {headline["part-1"]["line-2"]}
          </p>
        </div>
        <div className="mt-1 sm:mt-3 md:max-xl:mt-4">
          <p className="text-xl sm:text-2xl md:max-xl:text-3xl">
            {headline["part-2"]}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 md:flex-row">
        <div className=" md:max-xl:w-1/2">
          <div className="w-[305px] h-[305px] rounded-full bg-iconic-green flex items-center justify-center">
            <Image
              alt="profile picture"
              src="/profile.jpg"
              width="300"
              height="300"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="p-2 md:max-xl:w-1/2 md:p-10 xl:p-24">
          <p className="py-2 text-base md:text-xl">{intro[0]}</p>
          <p className="py-2 text-base md:text-xl">{intro[1]}</p>
          <p className="py-2 text-base md:text-xl">{intro[3]}</p>
          <p className="py-2 text-base md:text-xl">{intro[4]}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
