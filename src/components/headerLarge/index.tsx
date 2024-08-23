import "./index.scss";
import logo from "../../assets/img/logo1.jpeg";
import { items } from "../../helpers/itemsMenu";
import { Link } from "react-router-dom";
import logo2 from "../../assets/img/logomarca.png";
const HeaderLarge = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />

          <div className="logo">
            <img className="logo1" src={logo} alt="logo" />
          </div>
          <div className="menu-items">
            {items.map(({ name, link }, index) => (
              <li key={`items-${index + 1}`}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </div>
          <div className="hamburger-lines">
            {innerWidth <= 1360 && (
              <>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </>
            )}
            {innerWidth >= 1360 && (
              <img className="logo-screen-large" src={logo2} alt="" />
            )}

            {/* <div className="warning">
              <p>Site em Desenvolvimento!</p>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default HeaderLarge;
