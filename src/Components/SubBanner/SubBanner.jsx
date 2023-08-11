import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import classNames from "classnames/bind";
import React, { useEffect } from "react";
import styles from "./SubBanner.module.scss";

const cx = classNames.bind(styles);
function SubBanner({ children, url, title }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
