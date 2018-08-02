import React from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./Gig.css";
import { Link } from "../";

const Gig = ({ gig }) => {
  return (
    <tr className={`${dayjs(gig.date) > dayjs() ? styles.Gig__upcoming : ""}`}>
      <td style={{ whiteSpace: "nowrap" }}>
        {dayjs(gig.date).format("MMMM D")}
      </td>
      <td>
        {gig.artistUrl ? (
          <Link target="_blank" href={gig.artistUrl}>
            {gig.artist}
          </Link>
        ) : (
          gig.artist
        )}
      </td>
      <td>
        {gig.venueUrl ? (
          <Link target="_blank" href={gig.venueUrl}>
            {gig.venue}
          </Link>
        ) : (
          gig.venue
        )}, {gig.city}
      </td>
      <td>
        {gig.eventUrl ? (
          <Link target="_blank" href={gig.eventUrl}>
            {gig.eventDescription}
          </Link>
        ) : (
          gig.eventDescription
        )}
      </td>
      <td>
        {gig.facebookUrl && (
          <Link target="_blank" href={gig.facebookUrl}>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </Link>
        )}
        {gig.ticketsUrl && (
          <Link target="_blank" href={gig.ticketsUrl}>
            <FontAwesomeIcon icon={faTicketAlt} />
          </Link>
        )}
      </td>
    </tr>
  );
};

export default Gig;
