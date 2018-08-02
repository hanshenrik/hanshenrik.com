import React from "react";

import styles from "./ListItem.css";

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

export default ListItem;
