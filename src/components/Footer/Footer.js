import "./Footer.css";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/img/ucharteam-logo.png";
import Instagram from "../../assets/img/instagram.svg";
import Tell from "../../assets/img/phone.svg";
import Telegram from "../../assets/img/telegram.svg";
import Linkedin from "../../assets/img/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link to="/">
          <img className="footer_logo" src={Logo} alt="logo ucharteam" />
        </Link>

        <p>Sayt yoqqan bo'sa aloqadaman 👨‍💻 </p>

        <ul className="footer_card">
          <li className="footer_list">
            <Link
              to="tel:+998997905917"
              className="footer_link"
              target="_blank"
            >
              <img className="footer_img" src={Tell} alt="Tell number" />
              <span>Tell number</span>
            </Link>
          </li>
          <li className="footer_list">
            <Link
              to="https://telegram.me/Kamoliddin_5917"
              target="_blank"
              className="footer_link"
            >
              <img className="footer_img" src={Telegram} alt="Telegram" />
              <span>Telegram</span>
            </Link>
          </li>
          <li className="footer_list">
            <Link
              to="https://www.instagram.com/kamoliddin_5917"
              target="_blank"
              className="footer_link"
            >
              <img className="footer_img" src={Instagram} alt="Instagram" />
              <span>Instagram</span>
            </Link>
          </li>
          <li className="footer_list">
            <Link to="/" className="footer_link" target="_blank">
              <img className="footer_img" src={Linkedin} alt="Linkedin" />
              <span>Linkedin</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
