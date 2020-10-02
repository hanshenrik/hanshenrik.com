import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { Link, ListItem } from "../";

const separator = ". ";

const Software = ({ software, ...props }) => {
  return (
    <ListItem {...props}>
      {software.url ? (
        <Link target="_blank" href={software.url}>
          <FontAwesomeIcon icon={faLink} />
          {software.name}
        </Link>
      ) : (
        software.name
      )}
      {separator}
      <ListItem.Detail>
        {software.description} Code at{" "}
        {software.githubUrl && (
          <>
            <Link target="_blank" href={software.githubUrl}>
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </Link>
            .
          </>
        )}
      </ListItem.Detail>
    </ListItem>
  );
};

export default Software;
