import "./index.scss";
import { motion } from "framer-motion";

const ContentTopHome = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="overlay" />

      <motion.div className="hero-content">
        <motion.h1 variants={item}>Defesa jurídica estratégica</motion.h1>

        <motion.p variants={item} className="subtitle">
          Atendimento próximo, atuação precisa e foco em resultado.
        </motion.p>

        <motion.div variants={item} className="actions">
          <a
            href="https://api.whatsapp.com/send?phone=556733252215"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Falar com especialista
            </motion.button>
          </a>
          <a href="#servicos">
            <button className="btn-secondary">Ver serviços</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContentTopHome;
