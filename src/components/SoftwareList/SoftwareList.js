import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import softwares from "../../data/softwares.json";

import { Link, List, Software } from "../";

const SoftwareList = () => (
  <React.Fragment>
    <List>
      {softwares.map((software, index) => (
        <Software software={software} key={index} />
      ))}
    </List>
    <p>
      More code at{" "}
      <Link target="_blank" href="https://github.com/hanshenrik">
        <FontAwesomeIcon icon={faGithub} />GitHub
      </Link>.
    </p>
  </React.Fragment>
);

export default SoftwareList;
