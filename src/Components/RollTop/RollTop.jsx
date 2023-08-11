/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './RollTop.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const RollTop = () => {
  const [showBtnScrollTop, setShowBtnScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowBtnScrollTop(true);
    } else {
      setShowBtnScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cx('wrapper', { active: showBtnScrollTop })}>
      <a href="#" className={cx('icon')}>
        <FontAwesomeIcon icon={['fa-solid', 'chevron-up']} />
      </a>
    </div>
  );
};

export default RollTop;
