import { kwnoledgeData } from "../../data/knowledgeData";
import { motion } from "framer-motion";

export const KnowledgeList = () => {
  return (
    <>
      {kwnoledgeData.map((item, index) => (
        <div key={index} className="container-card-flip">
          <li className="card-flip">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
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
        </div>
      ))}
    </>
  );
};
