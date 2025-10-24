import { CardProps } from "../../models/Card";
import "./index.scss";
// import aspas from "../../assets/icons/aspas.png";

const Card = ({ user, text, career }: CardProps) => {
  return (
    <div className="card">
      <h4 className="card-user">{user}</h4>
      <p className="card-career">{career}</p>
      <p className="card-text">"{text}"</p>
    </div>
  );
};

export default Card;
