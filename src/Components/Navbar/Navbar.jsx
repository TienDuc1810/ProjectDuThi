/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(true);
   const [isRotating, setIsRotating] = useState(false);

   const handleMenuClick = () => {
      if (!isRotating) {
         setIsRotating(true);
         setTimeout(() => {
            setIsMenuOpen(!isMenuOpen);
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
            <li className={cx('li-link')}>
               <a href="#" className={cx('link')}>
                  <span>Home</span>
               </a>
            </li>
            <li className={cx('li-link')}>
               <a href="#" className={cx('link')}>
                  <span>Club List</span>
               </a>
            </li>
            <li className={cx('li-link')}>
               <a href="#" className={cx('link')}>
                  <span>Match</span>
               </a>
            </li>
            <li className={cx('li-link')}>
               <a href="#" className={cx('link')}>
                  <span>News</span>
               </a>
            </li>
            <li className={cx('li-link')}>
               <a href="#" className={cx('link')}>
                  <span>Contract</span>
               </a>
            </li>
            <li className={cx('li-link')}>
               <span></span>
            </li>
         </ul>
      </nav>
   );
}

export default Navbar;
