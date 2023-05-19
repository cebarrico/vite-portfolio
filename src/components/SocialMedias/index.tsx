import { SocialMediaContainer } from "./styles";
import { BsInstagram, BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <div className="icons-container">
        <motion.a
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          href="https://github.com/cebarrico"
        >
          <BsGithub className="github" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          href="https://www.linkedin.com/in/celsobarrico/"
        >
          <BsLinkedin className="linkedin" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          href="mailto:cbarrico@gmail.com"
        >
          <SiGmail className="gmail" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://www.instagram.com/ceelbarrico/"
        >
          <BsInstagram className="instagram" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          href="https://wa.me/5516991911714"
        >
          <BsWhatsapp className="whatsapp" />
        </motion.a>
      </div>
    </SocialMediaContainer>
  );
};
