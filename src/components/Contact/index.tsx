import { SectionStyle } from "./style";
import { motion } from "framer-motion";
import { FormComponent } from "./ContactForm";
import { SocialMedia } from "../SocialMedias";
import pets from "../../images/vspets.gif";

export const Contact = () => {
  return (
    <SectionStyle>
      <div className="code-pets">
        <h2>
          Desenvolvedor <span className="fail-light">Full</span> Stack
        </h2>

        <img src={pets} alt="" />
      </div>
      <div className="project-text">
        <motion.span
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
          className="project-span"
          id="contact"
        >
          # cbarrico@gmail.com
        </motion.span>
        <FormComponent />
        <SocialMedia />
      </div>
    </SectionStyle>
  );
};
