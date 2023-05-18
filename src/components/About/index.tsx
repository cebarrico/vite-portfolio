import profile from "../../images/profileimg.png";
import { SectionStyle } from "./style";
// import { IconsBg } from "../IconsBg";
import { motion } from "framer-motion";
export const AboutSection = () => {
  return (
    <SectionStyle id="about">
      {/* <IconsBg /> */}
      <div className="about-text">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
          className="bracket"
        >
          &#123;
        </motion.span>
        <motion.span
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
          className="about-span"
        >
          “sobre”:
        </motion.span>
        <motion.p
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
        >
          “Olá, meu nome é...
        </motion.p>
        <h1>CELSO BARRICO</h1>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
        >
          Sou um desenvolverdor Full-Stack 😎 Sempre fui apaixonado pela área da
          tecnologia, e em junho de 2022 decidi começar minha carreira como
          desenvolvedor,abaixo segue um pouco dos meus conhecimentos e
          projetos.”
        </motion.p>
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0, rotateX: -360, rotateY: 360 }}
        whileInView={{ x: 0, opacity: [0, 0, 0, 1], rotateX: 0, rotateY: 0 }}
        transition={{ duration: 2 }}
        className="card"
      >
        <div className="circle"></div>
        <div className="circle"></div>
        <img src={profile} alt="" className="card-inner" />
      </motion.div>
    </SectionStyle>
  );
};
