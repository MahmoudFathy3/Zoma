import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wapper">
          <div className="footer-left">
            <h3>Gaming Shop</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ut numquam itaque officia repudiandae. Vel minima,
              rerum quasi eos culpa laborum facilis, eius eum corporis libero
              sit dolor quaerat cum.
            </p>
            <FontAwesomeIcon
              icon={faFacebook}
              color="darkblue"
              className="footer-icon"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              color="red"
              className="footer-icon"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="#0a77eb"
              className="footer-icon"
            />
          </div>
          <div className="footer-right">
            <ul>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                {" "}
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <p style={{ textAlign: "center", padding: "20px", color: "white" }}>
          &copy; 2022 Gaming Shop
        </p>
      </div>
    </footer>
  );
};

export default Footer;
