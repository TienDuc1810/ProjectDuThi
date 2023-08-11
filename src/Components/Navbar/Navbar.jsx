/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const submenuItems = ['Barcelona FC', 'Real Madrid', 'Manchester United', 'Manchester City', 'Juventus', 'Liverpool'];

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
        {/* {['Home', 'Club List', 'Match', 'News', 'Contract'].map((item) => (
          <li className={cx('li-link')} key={item}>
            {item === 'Club List' ? (
              <>
                <Link to={'/clublist'} className={cx('link')}>
                  <span>{item}</span>
                </Link>
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
              
            )} */}
        <li className={cx('li-link')}>
          <Link to="/" className={cx('link')}>
            <span>Home</span>
          </Link>
        </li>
        <li className={cx('li-link')}>
          <Link to="/clublist" className={cx('link')}>
            <span>Club list</span>
            <ul className={cx('submenu')}>
              {submenuItems.map((subItem) => {
                const subItemProcessed = subItem.toLowerCase().replace(/\s+/g, '');
                return (
                  <li key={subItem} className={cx('submenu-item')}>
                    <Link to={subItemProcessed} className={cx('submenu-link')}>
                      {subItem}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Link>
        </li>
        <li className={cx('li-link')}>
          <Link to="/match" className={cx('link')}>
            <span>Match</span>
          </Link>
        </li>
        <li className={cx('li-link')}>
          <Link to="/news" className={cx('link')}>
            <span>News</span>
          </Link>
        </li>
        <li className={cx('li-link')}>
          <Link to="/contact" className={cx('link')}>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
