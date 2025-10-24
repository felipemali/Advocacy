import CardArea from "../CardArea";
import "./index.scss";
import { CardService } from "../../models/CardService";
import { dataServices } from "../../helpers/services";
import { FaInfoCircle } from "react-icons/fa";

const ServiceContent = () => {
  return (
    <div className="index-occupation-area">
      <h3 className="index-occupation-area-title">Área de Atuação</h3>
      <h5 className="index-text-occupation-area">
        Prestamos assessoria de qualidade em vários ramos do direito, veja
      </h5>
      <div className="border-title-about"></div>
      <section className="index-occupation-areas">
        {dataServices.map(({ name, alt, img, id }: CardService) => (
          <CardArea key={`CardArea-${id}`} name={name} img={img} alt={alt} />
        ))}
      </section>
      <div className="index-button-container">
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
      </div>
    </div>
  );
};
export default ServiceContent;
