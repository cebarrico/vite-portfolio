import { createPortal } from "react-dom";
import { BackgroundStyle } from "./style";
import { FaReact, FaPython, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { BsGit, BsGithub, BsLinkedin } from "react-icons/bs";

export const AnimatedBackground = () => {
  const rowQuantity = 27;
  const renderDivs = () => {
    return Array.from({ length: rowQuantity }, (_, index) => (
      <div key={index} className="container">
        <div>
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
        </div>
        <div>
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
        </div>
        <div>
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
          <FaReact />
          <BsLinkedin />
          <IoLogoJavascript />
          <FaPython />
          <SiPostgresql />
          <BsGithub />
          <IoLogoCss3 />
          <SiTypescript />
          <BsGit />
          <FaHtml5 />
        </div>
      </div>
    ));
  };
  return createPortal(
    <BackgroundStyle>{renderDivs()}</BackgroundStyle>,
    document.body
  );
};
