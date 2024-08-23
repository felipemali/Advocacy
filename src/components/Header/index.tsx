import "./style.scss";
import HeaderLarge from "../headerLarge";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="header-bc"> */}
      <div className="overlay"></div>
      <div className="shadow"></div>
      <div className="content">
        <HeaderLarge />
      </div>
    </header>
  );
};
export default Header;
