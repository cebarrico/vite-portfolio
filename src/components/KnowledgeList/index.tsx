import { kwnoledgeData } from "../../data/knowledgeData";
import { motion } from "framer-motion";

export const KnowledgeList = () => {
  return (
    <>
      {kwnoledgeData.map((item, index) => (
        <li key={index} className="card-flip">
          <motion.div
            initial={{ rotateY: 360, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.1 * index }}
            className="front-li"
          >
            <img src={item.image} alt="" />
            <h2>
              <span>⬡</span> {item.name}
            </h2>
          </motion.div>
          <div className="back-li">
            <a href={item.doc}>{item.description}</a>
          </div>
        </li>
      ))}
    </>
  );
};
