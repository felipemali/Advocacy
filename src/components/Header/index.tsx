import "./style.scss";
import menuIco from "../../assets/icons/icon-menu.ico";
import arrowIco from "../../assets/icons/icon-arrow.svg";
import logo from "../../assets/img/logo1.jpeg";
import { motion } from "framer-motion";
import useAnimatedText from "../../hooks/useAnimatedText";
import HeaderLarge from "../headerLarge";

const Header = () => {
  const animetedText = useAnimatedText(
    "Conhecimento e experiência que superarão suas expectativas"
  );

  return (
    <header className="header">
      <div className="header-bc">
        <div className="overlay"></div>
        <HeaderLarge />
        <div className="index-header">
          <img className="logo" src={logo} alt="logo" />
          <p className="header-title">Adv.Lopes</p>
          <div className="header-icon-menu">
            <img src={menuIco} alt="menu" />
          </div>
        </div>

        <div className="index-subtitle miraculous-effect">
          <p>Assessoria</p>
          <p>Jurídica</p>
          <p>Especializada</p>

          <span className="subtitle2">{animetedText}</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: "calc(50% - 330px)" }}
        transition={{ duration: 1 }}
        className="card"
      >
        <p className="card-title">Fale com nossa</p>
        <p className="card-title">equipe</p>
        <p className="card-subtitle">Ficaremos felizes em ajudar</p>
        <p className="card-subtitle2">você!!</p>
        <a href="https://api.whatsapp.com/send?phone=556733252215">
          <button className="index-button">
            Entrar em contato
            <img src={arrowIco} alt="seta" />
          </button>
        </a>
      </motion.div>
    </header>
  );
};
export default Header;
