import { companyFooter } from "../../helpers/companyFooter";
import { helpFooter } from "../../helpers/helpFooter";
import { iconsMedia } from "../../helpers/iconsMedia";
import { resourceFooter } from "../../helpers/resourceFooter";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>empresa</h4>
            <ul>
              {companyFooter.map(({ name }, index) => (
                <li key={`company-${index}`}>
                  <a href="#">{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>obter ajuda</h4>
            <ul>
              {helpFooter.map(({ name }, index) => (
                <li key={`help-${index}`}>
                  <a href="#">{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Recursos Úteis</h4>
            <ul>
              {resourceFooter.map(({ name }, index) => (
                <li key={`resource-${index}`}>
                  <a href="#">{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Me siga nas redes</h4>
            <div className="social-links">
              {iconsMedia.map(({ icon, link }, index) => (
                <a href={link} key={`icon-${index}`}>
                  <img height="40px" src={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
