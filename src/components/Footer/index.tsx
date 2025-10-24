import { iconsMedia } from "../../helpers/iconsMedia";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="social">
          {iconsMedia.map(({ icon, link }, index) => (
            <a
              href={link}
              key={`icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icon} alt={`social-icon-${index}`} />
            </a>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
export default Footer;
