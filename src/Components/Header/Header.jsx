import Navbar from '../Navbar/Navbar';
import imageLogo from '../../Assets/image/logo';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
   return (
      <header className={cx('header')}>
         <div className={cx('wrapper')}>
            <img src={imageLogo.logo} alt="footballnew" className={cx('logo')} />
            <Navbar />
         </div>
      </header>
   );
};
export default Header;
