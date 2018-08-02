import React from "react";

import { GigList, SoftwareList, RecordingList, Footer } from "../components";
import styles from "./App.css";

const App = () => (
  <div className={styles.App}>
    <h1>Recordings.</h1>
    <div className={styles.Section}>
      <RecordingList />
    </div>
    <h1>Gigs.</h1>
    <div className={styles.Section}>
      <GigList />
    </div>
    <h1>Software.</h1>
    <div className={styles.Section}>
      <SoftwareList />
    </div>
    <Footer />
  </div>
);

export default App;
