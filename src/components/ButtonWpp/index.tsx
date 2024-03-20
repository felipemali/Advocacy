import iconWpp from "../../assets/icons/icon-wpp.svg";
import "./index.scss";

const ButtonWpp = () => {
  return (
    <div className="wpp-floating">
      <h5>Entre em contato</h5>
      <a
        className="link-floating"
        href="https://api.whatsapp.com/send?phone=556733252215"
      >
        <img src={iconWpp} alt="icon whatsapp" />
      </a>
    </div>
  );
};
export default ButtonWpp;
