import { CardProps } from "../../models/Card";
import "./index.scss";
import aspas from "../../assets/icons/aspas.png";

// @use '../../styles/variables';
// @use '../../styles/fonts';
// @use "../../styles/mixins";
// @import "../../styles/global";

const Card = ({ user, text, career }: CardProps) => {
  return (
    <div className="card-generic-container">
      <div className="card-generic">
        <img src={aspas} alt="" />
        <p>{text}</p>
        <h3>{user}</h3>
        <h4>{career}</h4>
      </div>
    </div>
  );
};

export default Card;
