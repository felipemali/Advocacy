import person from "../../assets/img/person.jpeg";
import "./index.scss";
import { motion } from "framer-motion";

const DescriptionPerson = () => {
  return (
    <div className="index-content">
      <div className="index-container-about">
        <div className="index-main-container-img">
          <div className="index-main-gray-bc"></div>
          <div className={"index-main-img"}>
            <motion.img
              className="img-person"
              src={person}
              // initial={{ opacity: 0, y: "30vw" }}
              // animate={{ opacity: 1, y: "calc(50% - 125px)" }}
              // transition={{ duration: 2 }}
            />
          </div>
          <div className="index-main-orange-bc"></div>
        </div>

        <div className="index-about">
          <h3 className="index-title-about">Lopes Advogados</h3>
          <div className="border-title-about"></div>
          <p className="index-text-about">
            O Advogado Reginaldo Lopes, coloca as necessidades e interesses do
            cliente em primeiro lugar. Isso envolve ouvir atentamente as
            preocupações do cliente, fornecer aconselhamento jurídico
            personalizado, trabalhando incansavelmente em parcerias com outros
            Advogados para alcançar os melhores resultados possíveis em cada
            caso!...
          </p>
          <a href="https://api.whatsapp.com/send?phone=556733252215">
            <button className="index-button-about">Saiba mais!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPerson;
