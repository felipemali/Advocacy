import useAnimatedAppearance from "../../hooks/useAnimatedAppearance";
import { CardService } from "../../models/CardService";
import "./index.scss";
import { useScrollingDown } from "../../hooks/useScrollingDown";

const CardArea = ({ name, img, alt }: CardService) => {
  const isScrollingDown = useScrollingDown();

  const { ref, isVisible } = useAnimatedAppearance({ isScrollingDown });

  return (
    <div className={`area ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className="index-occupation-area-icon">
        <img src={img} alt={alt} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default CardArea;
