import TabMatch from "../TabMatch/tabmatch";
import TabPoint from "../TabPoint/tabpoint";
import classNames from "classnames/bind";
import styles from "./matchfixture.module.css";
const cx = classNames.bind(styles);

const matchFixture = [
  {
    nameLeft: "Barcelona",
    nameRight: "Real Madrid",
    time: "June 20,19:00",
    stadium: "Stadium",
    textLink: "View Statistics",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Man City",
    time: "June 20,23:00",
    stadium: "Stadium",
    textLink: "View Statistics",
  },
  {
    nameLeft: "Barcelona",
    nameRight: "Juventus",
    time: "June 21,17:00",
    stadium: "Stadium",
    textLink: "View Statistics",
  },
  {
    nameLeft: "Real Madrid",
    nameRight: "Man City",
    time: "June 21,21:00",
    stadium: "Stadium",
    textLink: "View Statistics",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Real Madrid",
    time: "June 22,15:00",
    stadium: "Stadium",
    textLink: "View Statistics",
  },
  {
    nameLeft: "Man City",
    nameRight: "Barcelona",
    time: "June 22,18:00",
    stadium: "Stadium",
    textLink: "View Statistics",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Man City",
    time: "June 24,14:00",
    stadium: "Stadium",
    textLink: "View Statistics",
  },
  {
    nameLeft: "Real Madrid",
    nameRight: "Juventus",
    time: "June 24,10:00",
    stadium: "Stadium",
    textLink: "View Statistics",
  },
];

const point = [
  {
    rank: 1,
    team: "Barcelona",
    win: 4,
    lose: 1,
    point: 7,
  },
  {
    rank: 2,
    team: "Real Madrid",
    win: 3,
    lose: 1,
    point: 4,
  },
  {
    rank: 3,
    team: "Juventus",
    win: 2,
    lose: 3,
    point: 2,
  },
  {
    rank: 4,
    team: "Man City",
    win: 2,
    lose: 2,
    point: 3,
  },
  {
    rank: 5,
    team: "Manchester United",
    win: 0,
    lose: 0,
    point: 0,
  },
  {
    rank: 6,
    team: "PSG",
    win: 0,
    lose: 0,
    point: 0,
  },
  {
    rank: 7,
    team: "Tottenham",
    win: 0,
    lose: 0,
    point: 0,
  },
  {
    rank: 8,
    team: "Liverpool",
    win: 0,
    lose: 0,
    point: 0,
  },
  {
    rank: 9,
    team: "---",
    win: "---",
    lose: "---",
    point: "---",
  },
  {
    rank: 10,
    team: "---",
    win: "---",
    lose: "---",
    point: "---",
  },
];

export default function MatchFixture() {
  return (
    <>
      <div className={cx("container-match")} id="match">
        <div className={cx("tab-fixture")}>
          <div className={cx("tab-fixture_header")}>
            <h2>Match Fixture</h2>
            <a href="" className={cx("link")}>
              View More {">>"}
            </a>
          </div>
          <div className={cx("tab-fixture_schelude")}>
            {matchFixture.map((props, index) => {
              return <TabMatch props={props} index={index} key={index} />;
            })}
          </div>
        </div>

        <div className={cx("tab-point")}>
          <div className={cx("tab-fixture_header")}>
            <h2>Point</h2>
          </div>
          <div className={cx("tab-point_tables")}>
            <div className={cx("tables")}>
              <div className={cx("team")}>
                <span className={cx("name")}>Team</span>
              </div>
              <div className={cx("win-lose")}>
                <span>W</span>
                <span>L</span>
                <span>P</span>
              </div>
            </div>
            {point.map((props, index) => {
              return <TabPoint props={props} index={index} key={index} />;
            })}
            <div className={(cx("tables"), cx("more-view"))}>
              <a href="" className={cx("link-match")}>
                More View {">>"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
