import CardArea from "../CardArea";
import "./index.scss";
import dataServices from "../../helpers/services.json";
import { CardService } from "../../models/CardService";
import gear from "../../assets/icons/icon-gear.ico";
import business from "../../assets/icons/icon-business.ico";
import pension from "../../assets/icons/icon-pension.png";
import publics from "../../assets/icons/icon-public.ico";
import arrow from "../../assets/icons/icon-arrow.svg";
import electoral from "../../assets/icons/electoral.jpg";
import administrative from "../../assets/icons/administrative.jpg";
import criminal from "../../assets/icons/criminal.jpg";
import realEstate from "../../assets/icons/real-estate.jpg";

const ServiceContent = () => {
  console.log(dataServices.data);

  return (
    <div className="index-occupation-area">
      <h3 className="index-occupation-area-title">Área de Atuação</h3>
      <h5 className="index-text-occupation-area">
        Prestamos assessoria de qualidade em vários ramos do direito, veja
      </h5>
      <div className="border-title-about"></div>
      <section className="index-occupation-areas">
        {dataServices.data.map(({ name, alt, id }: CardService) => (
          <CardArea
            key={id}
            name={name}
            img={
              id === 0
                ? gear
                : id === 1
                ? business
                : id === 2
                ? publics
                : id === 3
                ? pension
                : id === 4
                ? electoral
                : id === 5
                ? administrative
                : id === 6
                ? criminal
                : id === 7
                ? realEstate
                : ""
            }
            alt={alt}
          />
        ))}
        <div className="index-button-container">
          <a href="https://api.whatsapp.com/send?phone=556733252215">
            <button className="index-button-areas">
              Saiba mais
              <img src={arrow} alt="icon arrow" />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};
export default ServiceContent;
