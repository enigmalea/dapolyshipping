import React from 'react';
import styles from './styles.module.css';

export default function HomepageText(): JSX.Element {
  return (
    <section className={styles.text}>
      <div className="container padding-top--xl">
        <h2>Welcome to DA Polyshipping!</h2>
        <p> Dragon Age Polyshipping was created as a way to celebrate polaymorous shipping within the Dragon Age fandom, in all its forms. The account started in Jan 2021 as dapolyshippingday on tumblr, with the intention of hosting a monthly event on tumblr on the first of each month. In July 2021, the mods introduced the Dragon Age Poly Exchange, a yearly fan exchange hosted on Archive of Our Own. With the introduction of the exchange, the mods decided to update the name to dapolyshipping.</p>

        <p>Starting in 2022, the events have been changed to a quarterly DA Polyshipping Week and an annual DA Poly Exchange. Our website serves a resource for participants of both events.</p>
      </div>
    </section>
  );
}
