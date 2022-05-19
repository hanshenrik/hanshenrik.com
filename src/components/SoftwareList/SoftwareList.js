import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import softwares from "../../data/softwares.json";

import { Link, List, Software } from "../";

const SoftwareList = () => (
  <>
    <List>
      {softwares.map((software, index) => (
        <Software software={software} key={index} />
      ))}
    </List>
    <p>
      More code at{" "}
      <Link target="_blank" href="https://github.com/hanshenrik">
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </Link>
      . I currently work at{" "}
      <Link target="_blank" href="https://folq.no">
        Folq
      </Link>
      .
    </p>
  </>
);

export default SoftwareList;
