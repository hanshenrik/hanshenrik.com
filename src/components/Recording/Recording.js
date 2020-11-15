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
import linkStyles from "../Link/Link.css";

const separator = ". ";

const getMostImportantLink = (recording) => {
  if (recording.youtubeLink) return recording.youtubeLink;
  if (recording.spotifyLink) return recording.spotifyLink;
  if (recording.soundcloudLink) return recording.soundcloudLink;
  if (recording.appleLink) return recording.appleLink;
};

const Recording = ({ recording, ...props }) => {
  return (
    <ListItem {...props}>
      <div className={styles.Recording}>
        <div className={styles.CoverAndLinks}>
          {recording.image && (
            <figure className={styles.Cover}>
              <Link
                target="_blank"
                className={linkStyles.ImageLink}
                href={getMostImportantLink(recording)}
              >
                <img
                  className="rounded"
                  src={recording.image}
                  alt={recording.name}
                  width="200px"
                />
              </Link>
              {recording.imageAttribution && (
                <div className="attribution">
                  Foto: {recording.imageAttribution}
                </div>
              )}
            </figure>
          )}
          <div className={styles.Links}>
            {recording.youtubeLink && (
              <Link target="_blank" href={recording.youtubeLink}>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            )}
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
          </div>
        </div>
        <div>
          {recording.name && (
            <span
              className={`${styles.Name} ${recording.image && styles.MoveLeft}`}
            >
              {recording.name && `${recording.name}${separator}`}
            </span>
          )}
          <span className={styles.Artist}>
            {recording.artist && `${recording.artist}${separator}`}
          </span>
          <ListItem.Detail>{recording.description}</ListItem.Detail>
        </div>
      </div>
    </ListItem>
  );
};

export default Recording;
