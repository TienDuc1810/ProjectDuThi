/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logout from '../../Pages/Logout/Logout';
import Buttons from '../Button/Button';

const cx = classNames.bind(styles);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef();
  const submenuItems = ['Barcelona FC', 'Real Madrid', 'Manchester United', 'Manchester City', 'Juventus', 'Liverpool'];

  const handleMenuClick = () => {
    if (!isRotating) {
      if (isMenuOpen) {
        setIsClosing(true);
        setIsRotating(true);
        setTimeout(() => {
          setIsMenuOpen(!isMenuOpen);
          setIsClosing(false);
          setIsRotating(false);
        }, 300);
      } else {
        setIsMenuOpen(true);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsMenuVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login');
  }

  function handleRegister() {
    navigate('/register');
  }

  return (
    <nav className={cx('nav-link', isMenuOpen && 'open', isClosing && 'close')} ref={menuRef}>
      <div className={cx('menu-icon')} >
        <div className={cx('btnnn')}>
          {JSON.parse(localStorage.getItem('tokens')) ? (
            <div className="logout">
              <Logout />
            </div>
          ) : (
            <div className={cx('login-register')}>
              <Buttons className={cx('btn')} title="Login" onClick={handleLogin} />
              <Buttons title="Register" onClick={handleRegister} style={{ background: '#f9f9f9', color: '#bd8f04' }} />
            </div>
          )}
        </div>
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          style={{ color: '#ffffff' }}
          className={cx('icon', isMenuOpen && 'rotate')}
          onClick={handleMenuClick}
        />
      </div>
      <ul className={cx('ul-link', isMenuVisible && 'visible')}>
        <li className={cx('li-link')}>
          <Link to="/" className={cx('link')}>
            <span>Home</span>
          </Link>
        </li>
        <li className={cx('li-link')}>
          <Link to="/barcelonafc" className={cx('link')}>
            <span>Club list</span>
            <ul className={cx('submenu')}>
              {submenuItems.map((subItem) => {
                const subItemProcessed = subItem.toLowerCase().replace(/\s+/g, '');
                return (
                  <>
                    <li key={subItem} className={cx('submenu-item')}>
                      <Link to={subItemProcessed} className={cx('submenu-link')}>
                        {subItem}
                      </Link>
                    </li>
                  </>
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
