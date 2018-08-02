import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.css";
import { Link } from "../";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Link href="mailto:hello@hanshenrik.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />hello@hanshenrik.com
      </Link>.
    </div>
  );
};

export default Footer;
