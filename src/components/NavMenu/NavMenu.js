import React from "react";
import { capitalize } from "lodash";

import styles from "./NavMenu.css";

const sections = ["recordings", "gigs", "software"];

const NavMenu = () => (
  <div className={styles.NavMenu}>
    {sections.map((section) => (
      <a
        key={section}
        className={styles.NavMenuItem}
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById(section)
            .scrollIntoView({ behavior: "smooth" });
        }}
        href={`#${section}`}
      >
        {capitalize(section)}.
      </a>
    ))}
  </div>
);

export default NavMenu;
