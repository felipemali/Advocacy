import "./index.scss";
import useAnimatedText from "../../hooks/useAnimatedText";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const ContentTopHome = () => {
  const animetedText = useAnimatedText(
    "Conhecimento e experiência que superarão suas expectativas"
  );
  return (
    <div className="content-top-home">
      <div className="content-bc">
        <div className="overlay"></div>
        <div className="shadow"></div>
        <div className="index-subtitle-top miraculous-effect">
          <p>Soluções</p>
          <p>Jurídicas </p>
          <p>Sob Medida</p>

          <span className="subtitle2">{animetedText}</span>
        </div>{" "}
      </div>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: "calc(50% - 330px)" }}
        transition={{ duration: 1 }}
        className="card"
      >
        <p className="card-title">
          <FaPhoneVolume size={24} style={{ marginRight: "0.5rem" }} />
          Fale com nossa
        </p>
        <p className="card-title">equipe</p>
        <p className="card-subtitle">Ficaremos felizes em ajudar</p>
        <p className="card-subtitle2">você!!</p>
        <a
          href="https://api.whatsapp.com/send?phone=556733252215"
          target="_blank"
          rel="noreferrer"
        >
          <button className="index-button-about primary">
            <FaInfoCircle />
            <span>Entrar em contato</span>
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default ContentTopHome;
