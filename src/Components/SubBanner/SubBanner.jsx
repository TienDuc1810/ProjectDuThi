import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SubBanner.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function SubBanner({ children, url, title }) {
  console.log(url);
  return (
    <div>
      <div className={cx("active")} style={{ backgroundImage: `url(${url})` }}>
        <ul className={cx("cactive")}>
          <h3>{children}</h3>
          <div>
            <li>{title}</li>
            <li>
              {" "}
              <FontAwesomeIcon icon="fa-solid fa-link" />
            </li>
            <li>{children}</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default SubBanner;
