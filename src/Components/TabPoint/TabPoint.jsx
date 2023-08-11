import classNames from 'classnames/bind';
import styles from './Tabpoint.module.scss';
const cx = classNames.bind(styles);

export default function TabPoint({ props }) {
  return (
    <div className={cx('tables')}>
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
