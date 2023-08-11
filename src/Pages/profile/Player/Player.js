import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Player.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const Player = () => {
    const [infoPlayer, setInfoPlayer] = useState({
        id: '1', name: 'Masud Rana', info: {
            Born: 'sep 31,1988',
            Position: 'striker',
            SquadNumber: '11',
            PreviousClub: 'Badda',
            image: "https://keenitsolutions.com/products/html/soccer/images/team/5.jpg",
        }
    })
    return (
        <div className={cx('Info-soccer')}>
            <div className={cx('Image-player')}>
                <img src={infoPlayer.info.image} alt='' />
            </div>
            <div className={cx('Infomation')}>
                <div className={cx('Name')}> <Link to='/Team/InfoPlayer' className={cx('a-name')}>{infoPlayer.name}</Link></div>
                <div className={cx('Bor')}>
                    <div className={cx('Key')}>
                        <div className={cx('br')}>Born:</div>
                        <div className={cx('br')}>Position:</div>
                        <div className={cx('br')}>Squad number:</div>
                        <div className={cx('br')}>Previous Club:</div>
                        <div className={cx('br')}>Follow us on:</div>
                    </div>
                    <div className={cx('Value')}>
                        <div className={cx('br')}>{infoPlayer.info.Born}</div>
                        <div className={cx('br')}>{infoPlayer.info.Position}</div>
                        <div className={cx('br')}>{infoPlayer.info.SquadNumber}</div>
                        <div className={cx('br')}>{infoPlayer.info.PreviousClub}</div>
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