import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import block from "../assets/block.svg";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import layers from "../assets/layers.svg";
import thunder from "../assets/thunder.svg";
import ContactDiv from "./ContactDiv";
import heroImg from "../assets/hero.jpg";

const HeroSection = () => {
  const [openContactDiv, setOpenContactDiv] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const x = (e.clientX * 100) / window.innerWidth + "%";
    const y = (e.clientY * 100) / window.innerHeight + "%";

    setPosition({ x, y });
  };

  const hideContactDiv = () => {
    setOpenContactDiv(false);
  };

  return (
    <section
      className="hero w-full mdl:h-[85vh] relative min-h-[560px]"
      id="home"
      onMouseMove={handleMouseMove}
    >
      <div className="hidden -z-40 mdl:block">
        <div className="w-28 h-28 absolute left-5">
          <img
            src={circle}
            className="absolute circle z-10 w-12"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
        <div className="w-32 h-40 absolute top-20 right-20">
          <img
            src={cross}
            className="absolute cross w-10 overflow-hidden"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
        <div className="w-24 h-32 absolute bottom-20 left-40">
          <img
            src={thunder}
            className="absolute transition-all duration-150 thunder w-10 overflow-hidden"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
        <div className="w-24 h-32 absolute bottom-24 right-[45%]">
          <img
            src={block}
            className="absolute chain w-10 overflow-hidden"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
        <div className="w-24 h-32 absolute top-24 right-[45%]">
          <img
            src={layers}
            className="absolute layer transition-all duration-75 w-10 overflow-hidden"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
      </div>

      <div className=" w-[92%] xl:w-4/5 max-w-7xl mx-auto container flex flex-col mdl:flex-row items-center h-full mdl:justify-between">
        <div>
          <div
            className="z-20 font-sans w-full mdl:w-fit text-center my-16 mdl:my-0 text-4xl space-y-5
        mdl:text-left animate__animated animate__fadeInLeft"
          >
            <p>Hi there!</p>
            <h1 className="font-Poppins font-semibold text-5xl xl:text-7xl text-white">
              I&apos;m Rifat
            </h1>
            <h2 className="text-white text-3xl xl:text-4xl">
              I am a{" "}
              <TypeAnimation
                sequence={[
                  "Data Analyst",
                  3000,
                  "Business Analyst",
                  3000,
                  "Power BI Developer",
                  3000,
                ]}
                speed={10}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-button"
              />{" "}
              <span className="auto-text text-button"></span>
            </h2>
            <div className="font-Poppins text-2xl">
              <button
                onClick={() => setOpenContactDiv(true)}
                className="hero-button cursor-pointer hover:bg-green-400 hover:-translate-y-2"
              >
                Contact me
              </button>
            </div>
            <div className="space-x-6 ml-8 flex items-center justify-center mdl:justify-start">
              <a
                href="https://www.linkedin.com/in/rifat-hasan-4851a5392"
                target="_blank"
              >
                <div className="hero-icons border-white hover:border-[#0072b1] hover:-translate-y-[6px] hover:bg-[#0072b1]">
                  <FaLinkedinIn size={36} className="" />
                </div>
              </a>

              <a
                href="https://github.com/shihabhq"
                target="_blank"
                className=""
              >
                <div className="hero-icons border-white  hover:border-[#171515] hover:-translate-y-1 hover:bg-[#171515]">
                  <AiFillGithub size={36} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            src={heroImg}
            className="z-40 w-[80%] md:w-[550px] floating-image "
            alt=""
          />
        </div>
      </div>
      {openContactDiv && <ContactDiv hideContactDiv={hideContactDiv} />}
    </section>
  );
};

export default HeroSection;
