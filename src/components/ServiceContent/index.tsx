import CardArea from "../CardArea";
import "./index.scss";
import { CardService } from "../../models/CardService";
import arrow from "../../assets/icons/icon-arrow.svg";
import { dataServices } from "../../helpers/services";

const ServiceContent = () => {
  return (
    <div className="index-occupation-area">
      <h3 className="index-occupation-area-title">Área de Atuação</h3>
      <h5 className="index-text-occupation-area">
        Prestamos assessoria de qualidade em vários ramos do direito, veja
      </h5>
      <div className="border-title-about"></div>
      <section className="index-occupation-areas">
        {dataServices.map(({ name, alt, img, id, link }: CardService) => (
          <CardArea
            key={`CardArea-${id}`}
            name={name}
            img={img}
            alt={alt}
            link={link}
          />
        ))}
        <div className="index-button-container">
          <a href="https://api.whatsapp.com/send?phone=556733252215">
            <button className="index-button-areas">
              Saiba mais
              <img src={arrow} alt="seta" />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};
export default ServiceContent;
