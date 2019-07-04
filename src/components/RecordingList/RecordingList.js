import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";

import recordings from "../../data/recordings.json";

import { Link, List, Recording } from "../";

const RecordingList = () => (
  <React.Fragment>
    <List>
      {recordings.map((recording, index) => (
        <Recording recording={recording} key={index} />
      ))}
    </List>
    <p>
      More sound at{" "}
      <Link target="_blank" href="https://soundcloud.com/hanshenrik">
        <FontAwesomeIcon icon={faSoundcloud} />
        Soundcloud
      </Link>
      .
    </p>
  </React.Fragment>
);

export default RecordingList;
