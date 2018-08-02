import * as React from "react";

import styles from "./List.css";

const List = ({ children }) => <ul className={styles.List}>{children}</ul>;

export default List;
