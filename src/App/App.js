import React from "react";

import {
  NavMenu,
  GigList,
  SoftwareList,
  RecordingList,
  Footer,
} from "../components";
import styles from "./App.css";

const App = () => (
  <div className={styles.App}>
    <NavMenu />
    <div id="recordings" className={styles.Section}>
      <h1 className={styles.StickyHeading}>Recordings.</h1>
      <RecordingList />
    </div>
    <div id="gigs" className={styles.Section}>
      <h1 className={styles.StickyHeading}>Gigs.</h1>
      <GigList />
    </div>
    <div id="software" className={styles.Section}>
      <h1 className={styles.StickyHeading}>Software.</h1>
      <SoftwareList />
    </div>
    <Footer />
  </div>
);

export default App;
