import useAnimatedAppearance from "../../hooks/useAnimatedAppearance";
import { CardService } from "../../models/CardService";
import "./index.scss";
import { useScrollingDown } from "../../hooks/useScrollingDown";

const CardArea = ({ name, img, alt, link }: CardService) => {
  const isScrollingDown = useScrollingDown();

  const { ref, isVisible } = useAnimatedAppearance({ isScrollingDown });

  return (
    <div className={`area ${isVisible ? "visible" : ""}`} ref={ref}>
      <a href={link}>
        <div className="index-occupation-area-icon">
          <img src={img} alt={alt} />
        </div>
        <p>{name}</p>
      </a>
    </div>
  );
};

export default CardArea;
