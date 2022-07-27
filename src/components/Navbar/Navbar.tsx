import "./index.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />
      <ul className="navbar__links">
        <li className="navbar__link">Features</li>
        <li className="navbar__link">Partners</li>
        <li className="navbar__link">Stories</li>
      </ul>
      <a className="navbar__button" href="#">
        Download for free
      </a>
    </header>
  );
};

export { Navbar };