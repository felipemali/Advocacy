import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./style.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-main">
        <div className="logo">
          <p>Reginaldo Lopes</p>
        </div>

        <div className="menu-wrapper">
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>

          {/* O Menu Dropdown */}
          <ul className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#relatos" onClick={() => setMenuOpen(false)}>
                Relatos
              </a>
            </li>
            <li>
              <a href="#artigos" onClick={() => setMenuOpen(false)}>
                Artigos
              </a>
            </li>
            <li>
              <a href="#servicos" onClick={() => setMenuOpen(false)}>
                Serviços
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
