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
    <div className={styles.Section}>
      <h1 id="recordings">Recordings.</h1>
      <RecordingList />
    </div>
    <div className={styles.Section}>
      <h1 id="gigs">Gigs.</h1>
      <GigList />
    </div>
    <div className={styles.Section}>
      <h1 id="software">Software.</h1>
      <SoftwareList />
    </div>
    <Footer />
  </div>
);

export default App;
