import "./index.scss";
import logo from "../../assets/img/logo1.jpeg";
import { items } from "../../helpers/itemsMenu";
const HeaderLarge = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="logo">
            <img className="logo1" src={logo} alt="logo" />
          </div>
          <div className="menu-items">
            {items.map(({ name }, index) => (
              <li key={`items-${index}`}>
                <a href="#">{name}</a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default HeaderLarge;
