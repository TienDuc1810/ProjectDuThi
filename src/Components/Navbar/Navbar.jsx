/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const submenuItems = ['Barcelona FC', 'Real Madrid', 'Manchester United', 'Manchester City','Ac Milan', 'Inter Milan'];

  const handleMenuClick = () => {
    if (!isRotating) {
      setIsRotating(true);
      setTimeout(() => {
        setIsMenuOpen((prevState) => !prevState);
        setIsRotating(false);
      }, 200); // Increased delay for smoother animation
    }
  };

  return (
    <nav className={cx('nav-link', isMenuOpen && 'open')}>
      <div className={cx('menu-icon')} onClick={handleMenuClick}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars} // Changed to faTimes when menu is open
          style={{ color: '#ffffff' }}
          className={cx('icon', isMenuOpen && 'rotate')}
        />
      </div>
      <ul className={cx('ul-link')}>
        {['Home', 'Club List', 'Match', 'News', 'Contract'].map((item) => (
          <li className={cx('li-link')} key={item}>
            {item === 'Club List' ? (
              <>
                <a href="#" className={cx('link')}>
                  <span>{item}</span>
                </a>
                <ul className={cx('submenu')}>
                  {submenuItems.map((subItem) => (
                    <li key={subItem} className={cx('submenu-item')}>
                      <a href="#" className={cx('submenu-link')}>
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a href="#" className={cx('link')}>
                <span>{item}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
