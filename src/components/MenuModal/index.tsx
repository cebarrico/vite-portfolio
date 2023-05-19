import { MenuModalContainer } from "./styles";
import { BsInstagram, BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { MdContentPasteSearch } from "react-icons/md";
import { motion } from "framer-motion";

export const MenuModal = () => {
  return (
    <MenuModalContainer>
      <div className="icons-container">
        <motion.a
          initial={{ opacity: 0, right: "15px", top: "37px" }}
          whileInView={{ opacity: 1, top: "4px", right: "82px" }}
          transition={{ duration: 0.5 }}
          href="#knowledge"
        >
          <FaUniversity className="mobile-knowledge" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, right: "15px", top: "37px" }}
          animate={{ opacity: 1, right: "75px", top: "90px" }}
          transition={{ duration: 0.5 }}
          href="#projects"
        >
          <MdContentPasteSearch className="mobile-projects" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, right: "15px", top: "37px" }}
          whileInView={{ opacity: 1, top: "112px", right: "-15px" }}
          transition={{ duration: 0.5 }}
          href="#contact"
        >
          <BsWhatsapp className="mobile-contact" />
        </motion.a>
      </div>
    </MenuModalContainer>
  );
};
