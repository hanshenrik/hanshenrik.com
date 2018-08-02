import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Link, ListItem } from "../";

const separator = ". ";

const Software = ({ software, ...props }) => {
  return (
    <ListItem {...props}>
      {software.githubUrl && (
        <Link target="_blank" href={software.githubUrl}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      )}
      {software.url ? (
        <Link target="_blank" href={software.url}>
          {software.name}
        </Link>
      ) : (
        software.name
      )}
      {separator}
      <ListItem.Detail>{software.description}</ListItem.Detail>
    </ListItem>
  );
};

export default Software;
