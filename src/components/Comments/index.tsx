import "./index.scss";
import Card from "../../components/Card";
import comments from "../../helpers/comments.json";
import { GrArticle } from "react-icons/gr";
import { FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
const Comments = () => {
  return (
    <div className="comments">
      <h3 className="index-title-article">
        <GrArticle size={24} style={{ marginRight: "0.5rem" }} />
        Relatos
      </h3>
      <p className="index-subtitle-article">
        <FaBalanceScale style={{ marginRight: "0.5rem" }} />O que dizem sobre
        nós
      </p>
      <div className="border-title-about"></div>

      <motion.div
        className="container-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {comments.data.map(({ user, text, career }, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card
              key={`card-${index}`}
              user={user}
              text={text}
              career={career}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Comments;
