import person from "../../assets/img/img5.jpeg";
import "./index.scss";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaHandshake,
  FaFileAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

const DescriptionPerson = () => {
  return (
    <section className="index-content">
      <div className="index-container-about">
        <motion.div
          className="index-main-container-img"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="index-main-gray-bc"></div>
          <div className="index-main-img">
            <img
              className="img-person"
              src={person}
              alt="Advogado Reginaldo Lopes"
            />
          </div>
          <div className="index-main-orange-bc"></div>
        </motion.div>

        <motion.div
          className="index-about"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="index-subtitle">Excelência e Dedicação</p>
          <h3 className="index-title-about">Reginaldo Lopes</h3>
          <div className="border-title-about"></div>

          <p className="index-text-about">
            O Advogado <strong>Reginaldo Lopes</strong> coloca as necessidades e
            interesses do cliente em primeiro lugar. Isso envolve ouvir
            atentamente as preocupações do cliente, fornecer{" "}
            <span>aconselhamento jurídico personalizado</span> e trabalhar
            incansavelmente em parceria com outros profissionais do Direito para
            alcançar os <span>melhores resultados possíveis</span>.
          </p>

          <div className="index-icons-about">
            <div>
              <FaBalanceScale /> <span>Atendimento Personalizado</span>
            </div>
            <div>
              <FaFileAlt /> <span>Consultoria Jurídica Completa</span>
            </div>
            <div>
              <FaHandshake /> <span>Comprometimento com o Cliente</span>
            </div>
          </div>

          <div className="index-buttons">
            <a
              href="https://api.whatsapp.com/send?phone=556733252215"
              target="_blank"
              rel="noreferrer"
            >
              <button className="index-button-about primary">
                <FaInfoCircle />
                <span> Saiba mais</span>
              </button>
            </a>
            <a href="#areas-atuacao">
              <button className="index-button-about secondary">
                <MdWork />
                <span>Áreas de Atuação</span>
              </button>
            </a>
          </div>

          <p className="index-signature">— Dr. Reginaldo Lopes</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DescriptionPerson;
