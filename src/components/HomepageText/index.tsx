import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageText(): JSX.Element {
  return (
    <section className={styles.main}>
      <div className={clsx("container, margin--xl", styles.text)}>
        <h2>Welcome to DA Polyshipping!</h2>
        <p>
          Dragon Age Polyshipping was created as a way to celebrate polaymorous
          shipping within the Dragon Age fandom, in all its forms. The account
          started in Jan 2021 as dapolyshippingday on tumblr, with the intention
          of hosting a monthly event on tumblr on the first of each month. In
          July 2021, we began running Dragon Age Poly Exchange, a yearly fan
          exchange hosted on Archive of Our Own. With the introduction of the
          exchange, the mods decided to update the tumblr username to
          dapolyshipping.
        </p>
        <p>
          In 2022, the monthly DA Polyshipping Day event was altered to a
          quarterly DA Polyshipping Week. The next year brought another change
          for the event, with the mods choosing to boost Dragon Age polyamorous
          content all year long!{" "}
          <strong>
            You can tag the @dapolyshipping tumblr at any time to have your
            polyamory content reblogged.
          </strong>
          For more information on our reblogging policies, see the "Poly
          Sharing" section of the site!
        </p>
      </div>
    </section>
  );
}
