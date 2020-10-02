import React from "react";

import styles from "./ListItem.css";

const Lead = ({ children }) => (
  <span className={styles.ListItem__lead}>{children}</span>
);
const Detail = ({ children }) => (
  <span className={styles.ListItem__detail}>{children}</span>
);

const ListItem = ({ children, detail, ...props }) => {
  return (
    <li className={styles.ListItem} {...props}>
      {children}
    </li>
  );
};

ListItem.Detail = Detail;
ListItem.Lead = Lead;

export default ListItem;
