import { motion } from "framer-motion";

import { SectionStyle } from "./style";

import { UlProject } from "./ProjectUl";

export const ProjectSection = () => {
  return (
    <SectionStyle>
      <div className="project-text">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
          id="projects"
          className="bracket"
        >
          &#123;
        </motion.span>
        <motion.span
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
          className="project-span"
        >
          “Projetos”:
        </motion.span>
      </div>
      <UlProject />
    </SectionStyle>
  );
};
