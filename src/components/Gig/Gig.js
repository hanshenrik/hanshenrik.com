import React from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

import { Link } from "../";

const renderDate = (gig) => {
  if (!gig.toDate) {
    return dayjs(gig.date).format("DD MMM");
  } else {
    return dayjs(gig.date).month() === dayjs(gig.toDate).month()
      ? `${dayjs(gig.date).format("DD")}\u2013${dayjs(gig.toDate).format(
          "DD MMM"
        )}`
      : `${dayjs(gig.date).format("DD MMM")} \u2013 ${dayjs(gig.toDate).format(
          "DD MMM"
        )}`;
  }
};

const Gig = ({ gig }) => {
  return (
    <tr>
      <td style={{ whiteSpace: "nowrap" }}>{renderDate(gig)}</td>
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
        )}
        {gig.city && `, ${gig.city}`}
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
        {dayjs(gig.date) > dayjs() && (
          <>
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
          </>
        )}
      </td>
    </tr>
  );
};

export default Gig;
