import * as React from "react";

import "./Table.css";

const Table = ({ children, className, ...props }) => (
  <table className={["Table", className].join(" ")} {...props}>
    {children}
  </table>
);

export default Table;
