"use client";

import React, { useEffect, useRef, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ComprehensiveView = ({ exp }: { exp: any }) => {
  const [currentExp, setCurrentExp] = useState(0);
  const timer = useRef<any>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startTimer = (
    timer: React.MutableRefObject<any>,
    currentExp: number,
    setCurrentExp: React.Dispatch<React.SetStateAction<number>>
  ) => {
    timer.current = setTimeout(() => {
      if (currentExp >= 0 && currentExp < exp.length - 1) {
        setCurrentExp(currentExp + 1);
      } else if (currentExp <= 0) {
        setCurrentExp(exp.length - 1);
      } else {
        setCurrentExp(0);
      }
    }, 2000);
  };

  useEffect(() => {
    startTimer(timer, currentExp, setCurrentExp);

    return () => {
      clearTimeout(timer.current);
    };
  }, [currentExp, startTimer]);

  const handlePrev = () => {
    if (timer.current) clearTimeout(timer.current);
    if (currentExp === 0) setCurrentExp(exp.length - 1);
    else setCurrentExp(currentExp - 1);
  };
  const handleNext = () => {
    if (timer.current) clearTimeout(timer.current);
    if (currentExp === exp.length - 1) setCurrentExp(0);
    else setCurrentExp(currentExp + 1);
  };

  // return (
  //   <div className="bg-section-background p-3 flex items-center justify-center mx-3 px-3 ">
  //     <div className="w-[20%]">
  //       <button onClick={handlePrev}>Prev</button>
  //     </div>
  //     <div className="w-[60%]">
  //       <div>
  //         <div className=" flex flex-col justify-center items-center">
  //           <p className="text-6xl font-bold">{exp[currentExp].companyName}</p>
  //           <p className="text-2xl font-bold">{exp[currentExp].position}</p>
  //           {exp[currentExp].client !== "N/A" && (
  //             <p className="text-2xl font-bold">
  //               Client :{exp[currentExp].client}
  //             </p>
  //           )}
  //           <ul>
  //             {exp[currentExp].workDone.map((work: string, idx: number) => (
  //               <li key={idx} className="list-disc py-2">
  //                 {work}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <p className="ml-2">Key Skills:</p>
  //         <div className="flex ">
  //           {exp[currentExp].keySkills.map((sk: string, idx: number) => (
  //             <p
  //               key={idx}
  //               className="bg-iconic-green rounded-full p-2 w-[150px] h-[70px] text-center mx-2"
  //             >
  //               {sk}
  //             </p>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //     <div className="w-[20%]">
  //       <button onClick={handleNext}>Next</button>
  //     </div>
  //   </div>
  // );
  return (
    <Row className="bg-section-background p-3 flex items-center justify-center mx-3 px-3 min-h-[750px]">
      <Col className="w-[20%] flex justify-center cursor-pointer ">
        <button
          onClick={handlePrev}
          className="hover:text-iconic-green hover:underline hover:decoration-iconic-green hover:underline-offset-8"
        >
          Prev
        </button>
      </Col>
      <Col
        className="w-[60%] flex flex-col cursor-pointer"
        onMouseEnter={() => {
          if (timer.current) clearTimeout(timer.current);
        }}
        onMouseLeave={() => {
          startTimer(timer, currentExp, setCurrentExp);
        }}
      >
        <div className=" flex flex-col justify-center items-center">
          <p className="text-6xl font-bold">{exp[currentExp].companyName}</p>
          <p className="text-2xl font-bold">{exp[currentExp].position}</p>
          {exp[currentExp].client !== "N/A" && (
            <p className="text-2xl font-bold">
              Client :{exp[currentExp].client}
            </p>
          )}
          <ul>
            {exp[currentExp].workDone.map((work: string, idx: number) => (
              <li key={idx} className="list-disc py-2">
                {work}
              </li>
            ))}
          </ul>
        </div>
        <p className="ml-2">Key Skills:</p>
        <div className="grid grid-cols-6">
          {exp[currentExp].keySkills.map((sk: string, idx: number) => (
            <p
              key={idx}
              className="bg-iconic-green rounded-full p-2 w-[90px] h-[45px]  m-2 flex items-center justify-center text-xs"
            >
              {sk}
            </p>
          ))}
        </div>
      </Col>
      <Col className="w-[20%] flex justify-center cursor-pointer">
        <button
          onClick={handleNext}
          className="hover:text-iconic-green hover:underline hover:decoration-iconic-green hover:underline-offset-8"
        >
          Next
        </button>
      </Col>
    </Row>
  );
};

export default ComprehensiveView;
