import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Player.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);


const Player = ({ namePlayer, DatePlayer, Location, IdPlayer, Img, Nationality }) => {

    const namePlayerr = namePlayer.toLowerCase().replace(/\s+/g,'');
    return (
        <div className={cx('Info-soccer')}>
            <div className={cx('aaa')}>
                <div className={cx('Image-player')}>
                    <img src={Img} alt='hinh'/>
                </div>
            </div>
            <div className={cx('Infomation')}>
                <div className={cx('Name')}> <Link to={`/Team/${namePlayerr}`} className={cx('a-name')}>{namePlayer}</Link></div>
                <div className={cx('Bor')}>
                    <div className={cx('Key')}>
                        <div className={cx('br')}>Born:</div>
                        <div className={cx('br')}>Position:</div>
                        <div className={cx('br')}>Squad number:</div>
                        <div className={cx('br')}>Nationality:</div>
                        <div className={cx('br')}>Follow us on:</div>
                    </div>
                    <div className={cx('Value')}>
                        <div className={cx('br')}>{DatePlayer}</div>
                        <div className={cx('br')}>{Location}</div>
                        <div className={cx('br')}>{IdPlayer}</div>
                        <div className={cx('br')}>{Nationality}</div>
                        <div className={cx('icon')}>
                            <span className={cx('icon-1')}><FontAwesomeIcon icon="fa-brands fa-facebook-f" size="sm" /></span>
                            <span className={cx('icon-1')}><FontAwesomeIcon icon="fa-brands fa-twitter" size="sm" /></span>
                            <span className={cx('icon-1')}><FontAwesomeIcon icon="fa-brands fa-square-instagram" size="sm" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Player;