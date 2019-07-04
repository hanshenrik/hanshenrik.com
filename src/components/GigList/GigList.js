import * as React from "react";
import { orderBy, groupBy } from "lodash";
import dayjs from "dayjs";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";

import gigs from "../../data/gigs.json";
import { Gig, Table } from "../";
import styles from "./GigList.css";

const sortedGigs = orderBy(gigs, ["date", "artist"], ["desc", "asc"]);
const gigsByYear = groupBy(sortedGigs, gig => dayjs(gig.date).format("YYYY"));
const preExpandedYears = Object.keys(gigsByYear).filter(
  year => year >= dayjs().format("YYYY")
);

const GigList = () => (
  <Accordion
    allowMultipleExpanded
    allowZeroExpanded
    preExpanded={preExpandedYears}
    id="gigs"
  >
    {Object.entries(gigsByYear)
      .reverse()
      .map(([year, gigsInYear]) => (
        <AccordionItem key={year} uuid={year}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2>
                <div className="accordion__arrow" />
                {year}
              </h2>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Table className={styles.GigList}>
              <tbody>
                {gigsInYear.map((gig, index) => (
                  <Gig gig={gig} key={index} />
                ))}
              </tbody>
            </Table>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
  </Accordion>
);

export default GigList;
