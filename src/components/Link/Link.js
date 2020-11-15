import React from "react";
import classnames from "classnames";

import styles from "./Link.css";

const Link = ({ children, className, ...props }) => {
  return (
    <a
      className={classnames(styles.Link, className)}
      {...props}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
