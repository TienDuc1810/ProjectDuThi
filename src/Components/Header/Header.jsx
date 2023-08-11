import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import imageLogo from '../../Assets/image/logo';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logout from '../../Pages/Logout/Logout';
import Buttons from '../Button/Button';

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

  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login');
  }

  function handleRegister() {
    navigate('/register');
  }

  return (
    <header
      className={cx('header')}
      style={styleHeader ? { backgroundColor: 'black', transition: 'all 0.3s linear' } : null}
    >
      <div className={cx('wrapper')}>
        <Link to="/">
          <img src={imageLogo.logo} alt="footballnew" className={cx('logo')} />
        </Link>
        <Navbar />
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
      </div>
    </header>
  );
};

export default Header;
