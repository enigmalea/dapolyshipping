import React, { useEffect, useState } from "react";

import styles from "../pages/index.module.css";

import { SignUpsDate } from "./Schedule";

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2024-11-17T11:00:00-05:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className={styles.countdown}>
      <h2>Works Due</h2>
      {/* <b>
        Join us for{" "}
        <a href="https://arlathanxchange.neocities.org">Arlathan eXchange</a> in
        Spring 2024
        <br />
        or join us at{" "}
        <a href="https://thehangedmanpub.netlify.app/">The Hanged Man!</a>
      </b> */}
      <b>{timerComponents.length ? timerComponents : <span>Now!</span>}</b>
    </div>
  );
}

export default Countdown;
