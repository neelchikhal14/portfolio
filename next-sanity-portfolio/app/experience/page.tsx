import ExperienceViews from "./components/ExperienceViews";
import React from "react";
import data from "../data/data.json";

const exp = data.experience;
const Experience = () => {
  return (
    <section id="experience-section" className="mt-16 flex flex-col">
      <div>
        <p className="text-2xl sm:text-3xl md:text-4xl">
          <span className="text-iconic-green">{exp["section-title-1"]}</span>
          {exp["section-title-2"]}
        </p>
      </div>
      <div>
        <ExperienceViews />
      </div>
    </section>
  );
};

export default Experience;
