import AOS from "aos";
import "aos/dist/aos.css";
import classNames from 'classnames/bind';
import React, { useEffect } from "react";
import styles from './Tabpoint.module.scss';

const cx = classNames.bind(styles);

export default function TabPoint({ props }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={cx('tables')} data-aos="zoom-out-down">
      <div className={cx('team')}>
        <span className={cx('index')}>{props.rank}</span>
        <span className={cx('name')}>{props.team}</span>
      </div>
      <div className={cx('win-lose')}>
        <span>{props.win}</span>
        <span>{props.lose}</span>
        <span>{props.point}</span>
      </div>
    </div>
  );
}
