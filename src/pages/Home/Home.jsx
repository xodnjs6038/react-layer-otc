import React from "react";
import styles from "./Home.module.css";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";

const Home = () => {
  return (
    <main className={styles.main}>
      <SectionA />
      <SectionB />
      <SectionC />
    </main>
  );
};

export default Home;
