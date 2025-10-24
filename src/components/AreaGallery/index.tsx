import { FaBalanceScale } from "react-icons/fa";
import { CarouselImages } from "./Carousel";
import "./index.scss";
import { TfiGallery } from "react-icons/tfi";

export const AreaGallery = () => {
  return (
    <>
      <h3 className="index-title-about">
        <TfiGallery size={24} style={{ marginRight: "0.5rem" }} />
        Galeria
      </h3>

      <p className="index-subtitle">
        <FaBalanceScale style={{ marginRight: "0.5rem" }} /> Retratos que
        traduzem nossa atuação.
      </p>
      <div className="border-title-about"></div>
      <CarouselImages />
    </>
  );
};
