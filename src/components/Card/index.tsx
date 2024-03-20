import { CardProps } from "../../models/Card";
import "./index.scss";
import aspas from "../../assets/icons/aspas.png";

const Card = ({ user, text, career }: CardProps) => {
  return (
    <div className="card-generic-container">
      <div className="card-generic">
        <img src={aspas} alt="aspas" />
        <p>{text}</p>
        <h3>{user}</h3>
        <h4>{career}</h4>
      </div>
    </div>
  );
};

export default Card;
