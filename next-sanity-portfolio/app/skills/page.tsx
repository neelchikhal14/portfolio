import React from "react";
import Skill from "./components/Skill";
import data from "../data/data.json";

const skills = data.skills;
const Skills = () => {
  return (
    <section id="about-me-section" className="flex flex-col mt-8 ">
      <div>
        <p className="text-2xl sm:text-3xl md:text-4xl">
          <span className="text-iconic-green">{skills["section-title-1"]}</span>
          {skills["section-title-2"]}&nbsp;
        </p>
      </div>
      <div>
        {skills.skillList.map((sk) => (
          <Skill key={sk.title} title={sk.title} iconProps={sk.data} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
