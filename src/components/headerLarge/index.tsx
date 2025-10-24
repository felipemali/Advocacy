import { useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/img/logo1.jpeg";
import { items } from "../../helpers/itemsMenu";
import { Link } from "react-router-dom";

const HeaderLarge = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container nav-container">
        {/* <input className="checkbox" type="checkbox" id="menu-toggle" /> */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className={`menu-items ${scrolled ? "scrolled" : ""}`}>
          {items.map(({ name, link }, index) => (
            <li key={index}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>

        <label
          htmlFor="menu-toggle"
          className={`hamburger-lines ${scrolled ? "scrolled" : ""}`}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>
      </div>
    </nav>
  );
};

export default HeaderLarge;
