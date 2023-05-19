import { motion } from "framer-motion";
import NavStyle from "./style";
import logo from "../../images/logoceelz.png";
import { MenuBtm } from "../MenuBtm";

export const Header = () => {
  return (
    <NavStyle>
      <motion.nav
        initial={{ opacity: 0, y: "-50%" }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <img src={logo} alt="" />
        <MenuBtm />
        <div className="desktop-menu">
          <a className="link-desktop" href="#about">
            <span>⬡</span> sobre
          </a>
          <a className="link-desktop" href="#knowledge">
            <span>⬡</span> conhecimento
          </a>
          <a className="link-desktop" href="#projects">
            <span>⬡</span> projetos
          </a>
          <a className="link-desktop" href="#contact">
            <span>⬡</span> contato
          </a>
        </div>
      </motion.nav>
    </NavStyle>
  );
};
