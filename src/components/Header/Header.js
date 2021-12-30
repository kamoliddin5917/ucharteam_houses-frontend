import "./Header.css";
import { Link, NavLink } from "react-router-dom";

// images
import Logo from "../../assets/img/ucharteam-logo5.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo_link">
          <img className="logo_img" src={Logo} alt="logo ucharteam" />
        </Link>

        <h2>Uchar Team</h2>

        <nav className="navbar">
          <ul className="navbar_card">
            <li className="navbar_list">
              <NavLink
                to="/"
                className="navbar_link"
                activeClassName="navbar_link__active"
                exact
              >
                Company
              </NavLink>
            </li>
            <li className="navbar_list">
              <NavLink
                to="/complex"
                className="navbar_link"
                activeClassName="navbar_link__active"
              >
                Complex
              </NavLink>
            </li>
            <li className="navbar_list">
              <NavLink
                to="/house"
                className="navbar_link"
                activeClassName="navbar_link__active"
              >
                House
              </NavLink>
            </li>
            <li className="navbar_list">
              <NavLink
                to="/bank"
                className="navbar_link"
                activeClassName="navbar_link__active"
              >
                Bank
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
