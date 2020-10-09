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
        <div className={styles.CoverAndLinks}>
          {recording.image && (
            <img
              className={`rounded ${styles.Cover}`}
              src={recording.image}
              alt={recording.name}
              width="200px"
            />
          )}
          <div className={styles.Links}>
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
          </div>
        </div>
        <div>
          {recording.name && <span className={`${styles.Name} ${recording.image && styles.MoveLeft}`}>{recording.name && `${recording.name}${separator}`}</span>}
          <span className={styles.Artist}>{recording.artist && `${recording.artist}${separator}`}</span>
          <ListItem.Detail>{recording.description}</ListItem.Detail>
        </div>
      </div>
    </ListItem>
  );
};

export default Recording;
