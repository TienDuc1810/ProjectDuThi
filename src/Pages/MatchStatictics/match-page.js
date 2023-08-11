import styles from "./match-page.module.css";
import classNames from "classnames/bind";
import TabMatch from "../../Components/TabMatch/tabmatch";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const cx = classNames.bind(styles);

const matchFixture = [
  {
    nameLeft: "Barcelona",
    nameRight: "Real Madrid",
    time: "June 20,19:00",
    stadium: "Stadium",
    textLink: "View Statistics",
    link: "/coming/barvsreal/match",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Man City",
    time: "June 20,23:00",
    stadium: "Stadium",
    textLink: "View Statistics",
    link: "/coming/barvsreal/match",
  },
  {
    nameLeft: "Barcelona",
    nameRight: "Juventus",
    time: "June 21,17:00",
    stadium: "Stadium",
    textLink: "View Statistics",
    link: "/coming/barvsreal/match",
  },
  {
    nameLeft: "Real Madrid",
    nameRight: "Man City",
    time: "June 21,21:00",
    stadium: "Stadium",
    textLink: "View Statistics",
    link: "/coming/barvsreal/match",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Real Madrid",
    time: "June 22,15:00",
    stadium: "Stadium",
    textLink: "View Statistics",
    link: "/coming/barvsreal/match",
  },
  {
    nameLeft: "Man City",
    nameRight: "Barcelona",
    time: "June 22,18:00",
    stadium: "Stadium",
    textLink: "View Statistics",
    link: "/coming/barvsreal/match",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Man City",
    time: "June 24,14:00",
    stadium: "Stadium",
    textLink: "View Statistics",
    link: "/coming/barvsreal/match",
  },
  {
    nameLeft: "Real Madrid",
    nameRight: "Juventus",
    time: "June 24,10:00",
    stadium: "Stadium",
    textLink: "View Statistics",
    link: "/coming/barvsreal/match",
  },
];

const result = [
  {
    nameLeft: "Barcelona",
    nameRight: "Real Madrid",
    time: "June 20,19:00",
    stadium: "Stadium",
    goals: "3:2",
    textLink: "Result",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Man City",
    time: "June 20,23:00",
    stadium: "Stadium",
    goals: "2:2",
    textLink: "Result",
  },
  {
    nameLeft: "Barcelona",
    nameRight: "Juventus",
    time: "June 21,17:00",
    stadium: "Stadium",
    goals: "1:2",
    textLink: "Result",
  },
  {
    nameLeft: "Real Madrid",
    nameRight: "Man City",
    time: "June 21,21:00",
    stadium: "Stadium",
    goals: "1:1",
    textLink: "Result",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Real Madrid",
    time: "June 22,15:00",
    stadium: "Stadium",
    goals: "2:0",
    textLink: "Result",
  },
  {
    nameLeft: "Man City",
    nameRight: "Barcelona",
    time: "June 22,18:00",
    stadium: "Stadium",
    goals: "4:2",
    textLink: "Result",
  },
  {
    nameLeft: "Juventus",
    nameRight: "Man City",
    time: "June 24,14:00",
    stadium: "Stadium",
    goals: "1:2",
    textLink: "Result",
  },
  {
    nameLeft: "Real Madrid",
    nameRight: "Juventus",
    time: "June 24,10:00",
    stadium: "Stadium",
    goals: "1:3",
    textLink: "Result",
  },
];

export default function Match() {
  const [isMatch, setIsMatch] = useState(true);
  const [isReSult, setIsResult] = useState(false);
  const handClickMatch = (e) => {
    setIsMatch(true);
    setIsResult(false);
  };
  const handClickResult = (e) => {
    setIsMatch(false);
    setIsResult(true);
  };
  return (
    <>
      <div className={cx("container")}>
        <div className={cx("nav")}>
          <button
            style={{ color: isMatch ? "#fbc02d" : "" }}
            onClick={(e) => handClickMatch(e)}
          >
            Match Fixture
          </button>

          <button
            style={{ color: isReSult ? "#fbc02d" : "" }}
            onClick={(e) => handClickResult(e)}
          >
            Result
          </button>
        </div>
        <div className={cx("tab-match")}>
          {isMatch
            ? matchFixture.map((data, index) => {
                return <TabMatch props={data} index={index} key={index} />;
              })
            : result.map((data, index) => {
                return <TabMatch props={data} index={index} key={index} />;
              })}
        </div>
      </div>
    </>
  );
}
