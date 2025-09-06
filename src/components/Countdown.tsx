import { useEffect, useState, type ReactNode } from "react";
import dayjs from "dayjs";
import exchange from "../config/exchange.json";

const deadlines: { id: number; label: string; date: string }[] = [
  {
    id: 0,
    label: "Nominations Open",
    date: dayjs.unix(exchange.nominationsOpen).format(),
  },
  {
    id: 1,
    label: "Sign-Ups Open",
    date: dayjs.unix(exchange.signUpsOpen).format(),
  },
  {
    id: 2,
    label: "Sign-Ups Close",
    date: dayjs.unix(exchange.signUpsClose).format(),
  },
  { id: 3, label: "Works Due", date: dayjs.unix(exchange.worksDue).format() },
  {
    id: 4,
    label: "Works Revealed",
    date: dayjs.unix(exchange.worksRevealed).format(),
  },
  {
    id: 5,
    label: "Creators Revealed",
    date: dayjs.unix(exchange.creatorsRevealed).format(),
  },
];

const nextDeadline = deadlines.find(
  (deadline) => +new Date(deadline.date) - +new Date() >= 0
);

interface timeLeft {
  days: number;
  hours: number;
  minutes: number;
}
export default function Countdown() {
  if (nextDeadline) {
    const calculateTimeLeft = () => {
      const difference = +new Date(nextDeadline!.date) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0"),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
            .toString()
            .padStart(2, "0"),
          minutes: Math.floor((difference / 1000 / 60) % 60)
            .toString()
            .padStart(2, "0"),
        };
      }

      return timeLeft as timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    const timerComponents: ReactNode[] = [];

    (Object.keys(timeLeft) as Array<keyof typeof timeLeft>).forEach(
      (interval) => {
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      }
    );
    return (
      <div className="mx-auto my-0 max-w-max text-center" style={{ paddingTop: 20 }}>
        <h2 key={nextDeadline.id}>{nextDeadline!.label}</h2>
        <b>{timerComponents.length ? timerComponents : <span>Now!</span>}</b>
      </div>
    );
  } else {
    return (
      <div className="mx-auto my-0 max-w-max text-center" style={{ paddingTop: 20 }}>
        <b>
          Join us for{" "}
          <a href="https://arlathanexchange.neocities.org">Arlathan eXchange</a> in
          Spring or join us at{" "}
          <a href="https://thehangedman.club/">The Hanged Man!</a>
        </b>
      </div>
    );
  }
}
