/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleMenuClick = () => {
    if (!isRotating) {
      setIsRotating(true);
      setTimeout(() => {
        setIsMenuOpen((prevState) => !prevState);
        setIsRotating(false);
      }, 20);
    }
  };

  return (
    <nav className={cx('nav-link', isMenuOpen && 'open')}>
      <div className={cx('menu-icon')} onClick={handleMenuClick}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          style={{ color: '#ffffff' }}
          className={cx('icon', isMenuOpen && 'rotate')}
        />
      </div>
      <ul className={cx('ul-link')}>
        {['Home', 'Club List', 'Match', 'News', 'Contract'].map((item) => (
          <li className={cx('li-link')} key={item}>
            <a href="#" className={cx('link')}>
              <span>{item}</span>
            </a>
          </li>
        ))}
        <li className={cx('li-link')}>
          <span></span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
