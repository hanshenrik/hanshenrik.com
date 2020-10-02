import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Link, ListItem } from "../";
import styles from "./Recording.css";

const separator = ". ";

const Recording = ({ recording, ...props }) => {
  return (
    <ListItem {...props}>
      <div className={styles.Recording}>
        <div>
          {recording.image && (
            <img src={recording.image} alt={recording.name} width="200px" />
          )}
        </div>
        <div>
          {recording.spotifyLink && (
            <Link target="_blank" href={recording.spotifyLink}>
              <FontAwesomeIcon icon={faSpotify} />
            </Link>
          )}
          {recording.appleLink && (
            <Link target="_blank" href={recording.appleLink}>
              <FontAwesomeIcon icon={faApple} />
            </Link>
          )}
          {recording.soundcloudLink && (
            <Link target="_blank" href={recording.soundcloudLink}>
              <FontAwesomeIcon icon={faSoundcloud} />
            </Link>
          )}
          {recording.youtubeLink && (
            <Link target="_blank" href={recording.youtubeLink}>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          )}
          {recording.artist && `${recording.artist}${separator}`}
          {recording.name && `${recording.name}${separator}`}
          <ListItem.Detail>{recording.description}</ListItem.Detail>
        </div>
      </div>
    </ListItem>
  );
};

export default Recording;
