import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import imageLogo from '../../Assets/image/logo';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  const [styleHeader, setStyleHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY <= 0) {
      setStyleHeader(true);
    } else {
      setStyleHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cx('header')} style={styleHeader ? { backgroundColor: 'black', transition: 'all 0.3s linear' } : null}>
      <div className={cx('wrapper')}>
        <img src={imageLogo.logo} alt="footballnew" className={cx('logo')} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
