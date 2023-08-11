import styles from "./match.module.css";
import classNames from "classnames/bind";
import man from "../../../../Data/Juventus.json";
import juv from "../../../../Data/ManCity.json";
import TabMatchStatic from "../../../../Components/TabMatch/tabmatch-static/tabmatch-static";
import SubBanner from "../../../../Components/SubBanner/SubBanner";
const cx = classNames.bind(styles);

const information = [
  {
    TextLeft: "4-3-3",
    TextMiddle: "Information",
    TextRight: "5-2-3",
  },
  {
    TextLeft: "---",
    TextMiddle: "Goal",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Possession %",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Shots on target",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Shots",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Touches",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Tackles",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Clearances",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Corners",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Offsides",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Yellow Cards",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Red Cards",
    TextRight: "---",
  },
  {
    TextLeft: "---",
    TextMiddle: "Fouls conceded",
    TextRight: "---",
  },
];

const teamOne = man.Player.map((data) => {
  return {
    TextLeft: data.IdPlayer,
    TextMiddle: data.namePlayer,
    TextRight: data.Location,
  };
});
const teamTwo = juv.Player.map((data) => {
  return {
    TextLeft: data.IdPlayer,
    TextMiddle: data.namePlayer,
    TextRight: data.Location,
  };
});
const logoOne =
  "https://static.bongda24h.vn/Medias/thumnail/2023/03/23/juventus-2303153222.jpg";
const logoTwo =
  "https://static.bongda24h.vn/Medias/thumnail/2017/6/26/manchester-city.jpg";
export default function MatchStatic() {
  return (
    <>
      <SubBanner
        children={"Match Statistics"}
        url={
          "https://keenitsolutions.com/products/html/soccer/images/breadcrumbs/point-table.jpg"
        }
        title={"Match"}
      />
      <div className={cx("container-static")}>
        <h2>Match Statictics</h2>

        <div className={cx("match-static")}>
          <p className={cx("team-match")}>
            <span className={cx("highlight", "text")}>
              Juventus <img src={logoOne} />
            </span>
            <span className={cx("text")}>---</span>
            <span className={cx("highlight", "text")}>
              <img src={logoTwo} /> ManCity
            </span>
          </p>
          {information.map((value, index) => {
            return (
              <TabMatchStatic
                props={value}
                index={index}
                key={index}
              ></TabMatchStatic>
            );
          })}
        </div>
        <h2>Line-Up</h2>
        <div className={cx("information")}>
          <div className={cx("team-infor")}>
            <div className={cx("img-team")} style={{ marginLeft: "8px" }}>
              <img src={logoOne} />
            </div>
            {teamOne.map((data, index) => {
              return <TabMatchStatic props={data} index={index} key={index} />;
            })}
          </div>
          <div className={cx("team-infor")}>
            <div className={cx("img-team")}>
              <img src={logoTwo} />
            </div>
            {teamTwo.map((data, index) => {
              return <TabMatchStatic props={data} index={index} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
