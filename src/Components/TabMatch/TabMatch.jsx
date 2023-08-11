import AOS from "aos";
import "aos/dist/aos.css";
import classNames from 'classnames/bind';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from './TabMatch.module.scss';

const cx = classNames.bind(styles);

export default function TabMatch({ className, props, index }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={cx('tab-match', index % 2 === 1 ? 'opacity' : '', className)} data-aos="zoom-out-right">
      <p className={cx('left')}>
        <span>{props.nameLeft}</span>
        <span>{props.goals ? props.goals : 'VS'}</span>
        <span>{props.nameRight}</span>
      </p>
      <p className={cx('right')}>
        <span>{props.time}</span>
        <span>{props.stadium}</span>
        <span>
          <Link to={props.link} className={cx('link')}>
            {props.textLink}
          </Link>
        </span>
      </p>
    </div>
  );
}
