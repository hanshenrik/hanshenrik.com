import * as React from "react";
import { orderBy, groupBy } from "lodash";
import dayjs from "dayjs";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

import gigs from "../../data/gigs.json";
import { Gig, Table } from "../";
import styles from "./GigList.css";

class GigList extends React.Component {
  constructor() {
    super();
    const sortedGigs = orderBy(gigs, ["date", "artist"], ["desc", "asc"]);
    const groupedGigs = groupBy(sortedGigs, gig =>
      dayjs(gig.date).format("YYYY")
    );
    this.state = {
      gigsByYear: groupedGigs
    };
  }

  render() {
    const { gigsByYear } = this.state;
    return (
      <Accordion accordion={false}>
        {Object.entries(gigsByYear)
          .reverse()
          .map(([year, gigsInYear]) => (
            <AccordionItem key={year} expanded={year >= dayjs().format("YYYY")}>
              <AccordionItemTitle>
                <h2>
                  <div className="accordion__arrow" />
                  {year}
                </h2>
              </AccordionItemTitle>
              <AccordionItemBody>
                <Table className={styles.GigList}>
                  <tbody>
                    {gigsInYear.map((gig, index) => (
                      <Gig gig={gig} key={index} />
                    ))}
                  </tbody>
                </Table>
              </AccordionItemBody>
            </AccordionItem>
          ))}
      </Accordion>
    );
  }
}

export default GigList;
