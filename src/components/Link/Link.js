import React from "react";

import styles from "./Link.css";

const Link = ({ children, ...props }) => {
  return (
    <a className={styles.Link} {...props} rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
