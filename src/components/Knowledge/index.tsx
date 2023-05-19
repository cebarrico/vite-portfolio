import { SectionStyle } from "./style";
import { UlKnowledge } from "./KnowledgeUl";
import { motion } from "framer-motion";

export const KnowledgeSection = () => {
  return (
    <SectionStyle>
      <div className="knowledge-text">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
          id="knowledge"
          className="bracket"
        >
          &#123;
        </motion.span>
        <motion.span
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.81 }}
          className="knowledge-span"
        >
          “Conhecimentos”:
        </motion.span>
        <UlKnowledge />
      </div>
    </SectionStyle>
  );
};
