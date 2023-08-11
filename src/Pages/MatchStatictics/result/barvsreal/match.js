import styles from "./match.module.css";
import classNames from "classnames/bind";
import barcelona from "../../../../Data/Barcelona.json";
import real from "../../../../Data/RealMadrid.json";
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
    TextLeft: "3",
    TextMiddle: "Goal",
    TextRight: "2",
  },
  {
    TextLeft: "30",
    TextMiddle: "Possession %",
    TextRight: "40",
  },
  {
    TextLeft: "23",
    TextMiddle: "Shots on target",
    TextRight: "50",
  },
  {
    TextLeft: "90",
    TextMiddle: "Shots",
    TextRight: "40",
  },
  {
    TextLeft: "765",
    TextMiddle: "Touches",
    TextRight: "890",
  },
  {
    TextLeft: "12",
    TextMiddle: "Tackles",
    TextRight: "34",
  },
  {
    TextLeft: "16",
    TextMiddle: "Clearances",
    TextRight: "45",
  },
  {
    TextLeft: "32",
    TextMiddle: "Corners",
    TextRight: "23",
  },
  {
    TextLeft: "45",
    TextMiddle: "Offsides",
    TextRight: "34",
  },
  {
    TextLeft: "1",
    TextMiddle: "Yellow Cards",
    TextRight: "0",
  },
  {
    TextLeft: "0",
    TextMiddle: "Red Cards",
    TextRight: "0",
  },
  {
    TextLeft: "67",
    TextMiddle: "Fouls conceded",
    TextRight: "69",
  },
];

const teamOne = barcelona.Player.map((data) => {
  return {
    TextLeft: data.IdPlayer,
    TextMiddle: data.namePlayer,
    TextRight: data.Location,
  };
});
const teamTwo = real.Player.map((data) => {
  return {
    TextLeft: data.IdPlayer,
    TextMiddle: data.namePlayer,
    TextRight: data.Location,
  };
});
const logoOne =
  "https://static.bongda24h.vn/Medias/thumnail/2020/7/23/Barcelona.png";
const logoTwo =
  "https://static.bongda24h.vn/Medias/thumnail/2020/7/23/RealMadrid.png";
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
              Barcelona <img src={logoOne} />
            </span>
            <span className={cx("text")}>
              {information[1].TextLeft + "-" + information[1].TextRight}
            </span>
            <span className={cx("highlight", "text")}>
              <img src={logoTwo} /> RealMadrid
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
