import ExperienceViews from "./components/ExperienceViews";
import React from "react";

const Experience = () => {
  return (
    <section id="experience-section" className="mt-16 flex flex-col">
      <div>
        <p className="text-4xl">
          <span className="text-iconic-green">E</span>xperience
        </p>
      </div>
      <div>
        <ExperienceViews />
      </div>
    </section>
  );
};

export default Experience;
