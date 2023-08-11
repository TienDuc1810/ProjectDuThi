import styles from "./tab-match-static.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


export default function TabMatch({ props, index }) {
  return (
    <>
      <div className={cx("match", index % 2 === 0 ? "opacity" : "")}>
        <span className={cx("text")}>{props.TextLeft}</span>
        <span className={cx("highlight", "text")}>{props.TextMiddle}</span>
        <span className={cx("text")}>{props.TextRight}</span>
      </div>
    </>
  );
}
