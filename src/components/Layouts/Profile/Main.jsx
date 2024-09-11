import React from "react";

const Main = () => {
  return (
    <div className="w-full flex flex-col gap-[32px]">
      <div className="w-full p-[24px] shadow-md flex flex-col gap-[20px] rounded-xl">
        <h2 className="font-bold text-[20px] rounded-[12px]">About</h2>
        <span className="text-justify flex flex-col gap-4">
          <p>
            I am a dedicated Front-End Web Developer and UI/UX Designer with a
            passion for creating intuitive and visually appealing user
            experiences on web applications. With a background in both front-end
            development and UX design, I excel at bridging the gap between
            technical functionality and engaging design.{" "}
          </p>
          <p>
            I have hands-on experience using modern web technologies such as
            HTML, CSS, JavaScript, along with frameworks like React and Vue.js
            to build responsive and interactive web applications. In UI/UX
            design, I focus on user-centered design, prioritizing user needs,
            utilizing tools like Figma, Adobe XD, and Sketch. I believe that
            great design not only looks appealing but also delivers a seamless
            and enjoyable user experience.Additionally, I am constantly staying
            up-to-date with the latest industry trends and technologies to
            ensure my skills remain sharp and relevant.
          </p>
          I am passionate about continuous learning and growth, which drives me
          to explore emerging tools and methodologies, such as responsive design
          principles, accessibility standards, and agile workflows.
        </span>
      </div>
      <div className="w-full p-[24px] shadow-md flex flex-col gap-[20px] rounded-xl">
        <h2 className="font-bold text-[20px] rounded-[12px]">Experience</h2>
        <div className="flex flex-col gap-[8px]">
          <h5 className="font-semibold">UI/UX Designer Intern</h5>
          <h6 className="text-[14px] text-gray-400">Startup XYZ</h6>
          <h5 className=" text-[14px] font-medium">(May 2020 - August 2020)</h5>
        </div>
        <ul className="list-disc pl-[1.25rem] text-[14px] text-justify ">
          <li>
            Collaborated with the product team to design wireframes and
            high-fidelity prototypes for mobile and web applications.
          </li>
          <li>
            Conducted user research and usability testing to understand user
            needs and pain points.
          </li>
          <li>
            Worked closely with developers to ensure design implementation was
            consistent with prototypes.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
