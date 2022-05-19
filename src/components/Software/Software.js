import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Link, ListItem } from "../";
import linkStyles from "../Link/Link.css";
import styles from "./Software.css";

const separator = ". ";

const getImageUrl = ({ image }) => require(`../../assets/images/${image}`);

const Software = ({ software, ...props }) => {
  return (
    <ListItem {...props} className={styles.Software}>
      {software.image && (
        <figure className={styles.Cover}>
          <Link
            target="_blank"
            className={linkStyles.ImageLink}
            href={software.url}
          >
            <img
              loading="lazy"
              src={getImageUrl(software)}
              alt={software.name}
            />
          </Link>
        </figure>
      )}
      <div className={styles.Info}>
        {software.url ? (
          <Link target="_blank" href={software.url}>
            {software.name}
          </Link>
        ) : (
          software.name
        )}
        {separator}
        <ListItem.Detail>
          {software.description}{" "}
          {software.githubUrl && (
            <>
              Code at{" "}
              <Link target="_blank" href={software.githubUrl}>
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </Link>
              .
            </>
          )}
        </ListItem.Detail>
      </div>
    </ListItem>
  );
};

export default Software;
