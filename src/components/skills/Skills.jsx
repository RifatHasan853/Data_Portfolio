import AnimateComponent from "../../shared/Animation";
import SectionHeading from "../../shared/SectionHeading";
import SkillsCard from "./components/SkillsCard";
import excel from "../projects/assets/excel.png";
import powerbi from "../projects/assets/powerbi.png";
import sql from "../projects/assets/sql.png";
import python from "../projects/assets/python.png";
import figma from "../projects/assets/pngwing.png"
const skills = [
   {
    image:
      excel,
    name: "Excel",
  },
  {
    image:
      powerbi,
    name: "Power BI",
  },
    {
    image:
      sql,
    name: "SQL",
  },
    {
    image:
      python,
    name: "Python",
  },
    {
    image:
      figma,
    name: "Figma",
  },
   {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740986067/portfolio/rkaqclndmrjaeftdlp5a.svg",
    name: "HTML",
  },
  
  {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740986058/portfolio/hetlmcpjiecfvkcistsd.svg",
    name: "CSS",
  },

  {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930461/portfolio/ruvxlmoqoohotter530t.svg",
    name: "TailWindCSS",
  },
  {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
    name: "JavaScript",
  },
  
  

  {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929822/portfolio/tqefwmnan7wrq1nyzpbg.svg",
    name: "React",
  },
  
  {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/pnr3cycovxym6sx3nmuf.svg",
    name: "NodeJS",
  },

  {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/svtv77hzyg6pyt9agpm9.svg",
    name: "ExpressJS",
  },

  
  {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/i8qmy6ztj7mbhyvb3340.svg",
    name: "MongoDB",
  },
 

  {
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1741010993/portfolio/bi33cqqlgh7v7i6wllis.svg",
    name: "Git",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-20 md:pt-24 lg:pt-32">
      <SectionHeading text={"My Skills"} />

      <div
        className="mx-auto max-w-[90%] md:max-w-6xl flex flex-wrap gap-4 
      items-center justify-center"
      >
        {skills.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
