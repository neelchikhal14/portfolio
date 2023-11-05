"use client";

import React, { useState } from "react";

import ComprehensiveView from "./ComprehensiveView";
import TimelineView from "./TimelineView";
import data from "../../data/data.json";

const exp = data.experience.exp;

const expWithOnlyJobs = data.experience.exp.filter((ex) => ex.type === "job");

const ExperienceViews = () => {
  const [selectedView, setSelectedView] = useState<
    "timeline" | "comprehensive"
  >("timeline");

  const handleSelectedView = () => {
    setSelectedView((currentView) => {
      if (currentView === "timeline") return "comprehensive";
      else return "timeline";
    });
  };

  return (
    <div className="mb-5">
      <div className="flex flex-row ">
        <p className="pt-5 text-lg sm:text-xl md:text-2xl">Views:</p>
        <div className="px-5 pt-5">
          <button
            className={`${
              selectedView === "timeline"
                ? "hover:underline text-iconic-green hover:cursor-pointer hover:underline-offset-4"
                : ""
            } + text-lg sm:text-xl md:text-2xl`}
            onClick={handleSelectedView}
          >
            Timeline
          </button>
        </div>
        <div className="px-5 pt-5">
          <button
            className={`${
              selectedView === "comprehensive"
                ? "hover:underline text-iconic-green hover:cursor-pointer hover:underline-offset-4"
                : ""
            } + text-lg sm:text-xl md:text-2xl`}
            onClick={handleSelectedView}
          >
            Comprehensive
          </button>
        </div>
      </div>
      {selectedView === "timeline" ? null : ( // <TimelineView exp={exp} />
        <ComprehensiveView exp={expWithOnlyJobs} />
      )}
    </div>
  );
};

export default ExperienceViews;
