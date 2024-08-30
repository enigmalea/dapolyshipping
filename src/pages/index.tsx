import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageText from "../components/HomepageText";
import Countdown from "../components/Countdown";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <img src="/img/banner.png" className={styles.banner} />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="A Dragon Age fan exchange focused on a celebration of polyamorous ships.">
      <HomepageHeader />
      <main>
        <Countdown />
        <HomepageText />
      </main>
    </Layout>
  );
}
