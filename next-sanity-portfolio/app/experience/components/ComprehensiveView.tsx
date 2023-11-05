"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const ComprehensiveView = ({ exp }: { exp: any }) => {
  const [currentExp, setCurrentExp] = useState(0);

  const parentEl = document.querySelector("#comprehensive-exp-container");

  const handleChangeExp = (changeExpType: "previous" | "next") => {
    const totalExp = exp.length;
    if (changeExpType == "previous") {
      if (currentExp === 0) {
        setCurrentExp(totalExp - 1);
      } else {
        setCurrentExp((prev) => prev - 1);
      }
    } else {
      if (currentExp === totalExp - 1) {
        setCurrentExp(0);
      } else {
        setCurrentExp((prev) => prev + 1);
      }
    }

    parentEl?.scrollIntoView();
    console.log("Executed", exp.companyName);
  };

  return (
    <section
      className="bg-section-background p-3 flex flex-col justify-center my-3 px-3"
      id="comprehensive-exp-container"
    >
      <div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold ">
            {exp[currentExp].companyName}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mt-1">
            {exp[currentExp].position}
          </p>
          <p className="text-base sm:text-lg md:text-xl mt-1">
            {exp[currentExp].fromDate} to {exp[currentExp].to}
          </p>
          {exp[currentExp].client !== "N/A" && (
            <p className="text-base sm:text-lg md:text-xl mt-1">
              Client : {exp[currentExp].client}
            </p>
          )}
          <ul className="p-4">
            {exp[currentExp].workDone.map((work: string, idx: number) => (
              <li
                key={idx}
                className="list-disc p-2 text-base sm:text-lg md:text-xl"
              >
                {work}
              </li>
            ))}
          </ul>
        </div>
        <p className="ml-2 mb-2 text-base sm:text-lg md:text-xl">Key Skills:</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {exp[currentExp].keySkills.map((sk: string, idx: number) => (
            <p
              key={idx}
              className="flex items-center justify-center bg-iconic-green rounded-full p-2 text-center mx-2 text-base sm:text-lg md:text-xl sm:w-40 sm:h-10 "
            >
              {sk}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-around mt-8">
        <div className="flex flex-col items-center justify-center w-20 h-10 rounded-full bg-text-color text-black   text-center hover:cursor-pointer  hover:bg-black  hover:text-white text-base sm:text-lg md:text-xl md:w-24">
          <button onClick={() => handleChangeExp("previous")}>Previous</button>
        </div>
        <div className="flex flex-col items-center justify-center w-20 h-10 rounded-full bg-text-color text-black  text-center hover:cursor-pointer hover:bg-black   hover:text-white text-base sm:text-lg md:text-xl md:w-24">
          <button onClick={() => handleChangeExp("next")}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveView;
