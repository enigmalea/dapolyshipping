import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type EventItem = {
  title: string;
  tagset: string;
  collection: string;
  requests: string;
  nominations: string;
  tumblr: string;
  stats: JSX.Element;
};

const EventList: EventItem[] = [
  {
    title: "DA Poly Exchange 2021",
    tagset: "https://archiveofourown.org/tag_sets/7219",
    collection: "http://archiveofourown.org/collections/dapolyex2021/profile",
    requests: "https://autoao3app.fandom.tools/#/dapolyex2021/all",
    nominations: "https://bit.ly/3n2XnzD",
    tumblr: "http://dapolyshipping.tumblr.com/tagged/dapolyex2021",
    stats: (
      <>
        <strong>Nominations:</strong> 400
        <br />
        <strong>Sign-Ups:</strong> 26
        <br />
        <strong>Works:</strong> 43
        <br />
        <div className={styles.display}>
          <blockquote className={styles.stats}>
            <strong className={styles.stats}>Rated G:</strong> 11.63%
            <br />
            <strong className={styles.stats}>Rated T:</strong> 34.88%
            <br />
            <strong className={styles.stats}>Rated M:</strong> 13.95%
            <br />
            <strong className={styles.stats}>Rated E:</strong> 30.23%
            <br />
          </blockquote>
        </div>
        <div className={styles.display}>
          <blockquote className={styles.stats}>
            <strong className={styles.stats}>Mixed Gender:</strong> 37.2%
            <br />
            <strong className={styles.stats}>Female Only:</strong> 7.0%
            <br />
            <strong className={styles.stats}>Male Only:</strong> 37.2%
            <br />
          </blockquote>
        </div>
        <div className={styles.display}>
          <blockquote className={styles.stats}>
            <strong className={styles.stats}>Art:</strong> 9.3%
            <br />
            <strong className={styles.stats}>Fics:</strong> 90.7%
          </blockquote>
        </div>
      </>
    ),
  },
  {
    title: "DA Poly Exchange 2022",
    tagset: "https://archiveofourown.org/tag_sets/11946",
    collection: "http://archiveofourown.org/collections/dapolyex2022/profile",
    requests: "https://autoao3app.fandom.tools/#/dapolyex2022/all",
    nominations:
      "https://docs.google.com/spreadsheets/d/1xvcTzUAcScThPZC85SMyjiW9MmStGVjfg2vlqNFx1LA/edit?usp=sharing",
    tumblr: "http://dapolyshipping.tumblr.com/tagged/dapolyex2022",
    stats: (
      <>
        <strong>Nominations:</strong> 340
        <br />
        <strong>Sign-Ups:</strong> 24
        <br />
        <strong>Works:</strong> 36
        <br />
        <div className={styles.display}>
          <blockquote className={styles.stats}>
            <strong className={styles.stats}>Rated G:</strong> 8.33%
            <br />
            <strong className={styles.stats}>Rated T:</strong> 30.56%
            <br />
            <strong className={styles.stats}>Rated M:</strong> 22.22%
            <br />
            <strong className={styles.stats}>Rated E:</strong> 22.22%
            <br />
          </blockquote>
        </div>
        <div className={styles.display}>
          <blockquote className={styles.stats}>
            <strong className={styles.stats}>Mixed Gender:</strong> 37.2%
            <br />
            <strong className={styles.stats}>Female Only:</strong> 11.6%
            <br />
            <strong className={styles.stats}>Male Only:</strong> 34.9%
            <br />
          </blockquote>
        </div>
        <div className={styles.display}>
          <blockquote className={styles.stats}>
            <strong className={styles.stats}>Art:</strong> 16.67%
            <br />
            <strong className={styles.stats}>Fics:</strong>83.33%
          </blockquote>
        </div>
      </>
    ),
  },
];

function Event({
  title,
  tagset,
  collection,
  requests,
  nominations,
  tumblr,
  stats,
}: EventItem) {
  return (
    <div className="card-demo padding-bottom--md">
      <div className={clsx("card", styles.responsive)}>
        <div className="card__header padding-bottom--sm">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{stats}</p>
        </div>
        <div className={clsx("card__footer", styles.nounderline)}>
          <div className="button-group button-group--block">
            <Link
              className={clsx(
                "button button--secondary",
                styles.nounderline,
                styles.responsive
              )}
              to={collection}
            >
              collection
            </Link>
            <Link
              className={clsx(
                "button button--secondary",
                styles.nounderline,
                styles.responsive
              )}
              to={requests}
            >
              requests
            </Link>
            <Link
              className={clsx(
                "button button--secondary",
                styles.nounderline,
                styles.responsive
              )}
              to={nominations}
            >
              nominations
            </Link>
            <Link
              className={clsx(
                "button button--secondary",
                styles.nounderline,
                styles.responsive
              )}
              to={tagset}
            >
              tagset
            </Link>
            <Link
              className={clsx(
                "button button--secondary",
                styles.nounderline,
                styles.responsive
              )}
              to={tumblr}
            >
              <i className="fa-brands fa-tumblr"></i> tag
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PastEvents(): JSX.Element {
  return (
    <section>
      <div className="container padding-top--lg padding-bottom--lg">
        <div className={clsx("row", styles.events)}>
          {EventList.map((props, idx) => (
            <Event key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
