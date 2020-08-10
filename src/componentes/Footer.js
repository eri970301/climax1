import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-blue-900 pt-3">
        <div className="justify-between">
            <div className="mb-5 py-3 text-center">
              <a href="https://www.facebook.com/fckHxC" target="_blank">
                <FontAwesomeIcon
                  className="icon_footer"
                  icon={faFacebookF}
                ></FontAwesomeIcon>
              </a>
              <a href="https://www.linkedin.com/in/erika-otalvaro-zuleta-a96365139/" target="_blank">
                <FontAwesomeIcon
                  className="icon_footer"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
              </a>
              <a href="https://github.com/eri970301" target="_blank">
                <FontAwesomeIcon
                  className="icon_footer"
                  icon={faGithubAlt}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
      <div className="text-center text-white mt-0 py-3">
        © 2020 Copyright:
        <a href="https://www.linkedin.com/in/erika-otalvaro-zuleta-a96365139/"> Erika Otalvaro Z.</a>
      </div>
    </footer>
  );
}

export default Footer;