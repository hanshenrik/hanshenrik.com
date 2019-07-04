import React from "react";

import {
  NavMenu,
  GigList,
  SoftwareList,
  RecordingList,
  Footer
} from "../components";
import styles from "./App.css";

const App = () => (
  <div className={styles.App}>
    <NavMenu />
    <h1 id="recordings">Recordings.</h1>
    <div className={styles.Section}>
      <RecordingList />
    </div>
    <h1 id="gigs">Gigs.</h1>
    <div className={styles.Section}>
      <GigList />
    </div>
    <h1 id="software">Software.</h1>
    <div className={styles.Section}>
      <SoftwareList />
    </div>
    <Footer />
  </div>
);

export default App;
