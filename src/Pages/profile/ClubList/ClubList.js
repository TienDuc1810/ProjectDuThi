
import React from 'react';
import classNames from 'classnames/bind';
import styles from './ClubList.module.scss';
import { Col, Grid, Row } from '../../../Components/GridSystem'
import SubBanner from '../../../Components/SubBanner'
import Achievement from '../Achievement/Achievement';
import Location from '../Achievement/Locatinon';

const cx = classNames.bind(styles);

const ClubList = ({text, name, url}) => {
    return (
        <>
            <SubBanner url={'https://images.livemint.com/img/2022/12/06/1600x900/Stadium_974_1670308763958_1670308770302_1670308770302.jpg'} title={'Team'} children={name} />
            <div className={cx('ClubList-container')}>
                <div className={cx('Child-container')}>
                <Achievement text={text} name={name} url={url} />
                    <Location />
                </div>
            </div >
        </>
    )
}

export default ClubList;
