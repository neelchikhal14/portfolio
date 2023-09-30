import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me-section" className="mt-16 flex flex-col">
      <div>
        <p className="text-4xl">
          <span className="text-iconic-green">A</span>bout &nbsp;
          <span className="text-iconic-green">M</span>e
        </p>
      </div>
      <div className="self-center mt-8">
        <div>
          <p className="text-5xl text-white font-bold mx-auto">
            Navigating Possibilities,
          </p>
          <p className="text-5xl text-white font-bold mx-auto">
            One Line of Code at a time.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-3xl">I craft delighful frontend experiences.</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#1ED760"
              d="M32.1,-58.1C38.7,-51.8,39.1,-37.3,40.7,-26.2C42.4,-15.2,45.3,-7.6,52.8,4.3C60.2,16.2,72.2,32.4,71,44.2C69.8,56.1,55.4,63.5,41.3,67.8C27.3,72.2,13.6,73.4,2.6,69C-8.5,64.5,-17,54.3,-27.4,47.9C-37.9,41.5,-50.3,38.9,-59.6,31.5C-68.8,24.2,-74.8,12.1,-78.6,-2.2C-82.5,-16.5,-84.2,-33.1,-78.6,-46.7C-73,-60.4,-60.2,-71.2,-45.9,-73C-31.6,-74.8,-15.8,-67.6,-1.5,-64.9C12.8,-62.3,25.5,-64.3,32.1,-58.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="w-1/2 p-4">
          <p className="py-2 text-xl">
            Hello there! I&apos;m an engineer living in London.
          </p>
          <p className="py-2 text-xl">
            Proficient in JavaScript and TypeScript, I&apos;ve built a robust
            skill-set in web development to create seamless user experiences.
          </p>
          <p className="py-2 text-xl">
            My engineering journey has been uniquely enriched by my
            Master&apos;s degree in computer science, alongside my experiences
            in both the banking and telecom domains, providing me with a
            distinctive perspective on real-world challenges.
          </p>
          <p className="py-2 text-xl">
            I relish the opportunity to dive into uncharted territories, always
            seeking to broaden my knowledge and expand my horizons.
          </p>
          <p className="py-2 text-xl">
            Beyond my love for technology, you&apos;ll often find me lost in the
            pages of a good book. I&apos;m also an avid traveler, and a football
            enthusiast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
