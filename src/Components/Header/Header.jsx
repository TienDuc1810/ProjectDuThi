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

// =======
// import { DownOutlined } from '@ant-design/icons';
// import { faFacebook, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Dropdown, Space } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import ENG from './ENG.png';
// import VI from './Flag_of_Vietnam.svg.png';
// import './Header.scss';

// const Header = () => {

//     const items = [
//         {
//             label: (
//                 <div className='VI'>
//                     <img src={VI} alt="" />
//                     <a target="_blank" rel="noopener noreferrer" href="#!">
//                         Vietnamese
//                     </a>
//                 </div>
//             ),
//             key: '0',
//         },
//         {
//             label: (
//                 <div className='ENG'>
//                     <img src={ENG} alt="" />
//                     <a target="_blank" rel="noopener noreferrer" href="#!">
//                         English
//                     </a>
//                 </div>
//             ),
//             key: '1',
//         }
//     ];

//     const navigate = useNavigate();

//     function handleClickLogin(){
//         navigate('/login');
//     }

//     return (
//         <div className='header'>
//             <div className="header-main">
//                 <div className="header-right">
//                     <div className="email">
//                         <FontAwesomeIcon icon={faEnvelope} />
//                         <p>support@wewin.com</p>
//                     </div>
//                     <div className="change-language">
//                         <Dropdown
//                             menu={{
//                                 items,
//                             }}
//                             className='dropdown-btn'
//                         >
//                             <a onClick={(e) => e.preventDefault()}>
//                                 <Space>
//                                     Change Language
//                                     <DownOutlined />
//                                 </Space>
//                             </a>
//                         </Dropdown>
//                     </div>
//                 </div>
//                 <div className="header-right">
//                     <div className="social">
//                         <FontAwesomeIcon icon={faFacebook} />
//                         <FontAwesomeIcon icon={faSquareInstagram} />
//                         <FontAwesomeIcon icon={faLinkedin} />
//                     </div>
//                     <button className="login-regiter" onClick={handleClickLogin}>
//                         <div className="login">
//                             <FontAwesomeIcon icon={faRightToBracket} />
//                             <p>Login</p>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// >>>>>>> code/DucVu
export default Header;
