import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InforPlayer.module.scss';
import SubBanner from '../Components/SubBanner'
import Information from '../Pages/profile/Information/Information';
import Textinfo from '../Pages/profile/Information/Text-info';
import { Grid } from '../../../GridSystem/Grid' 
const cx = classNames.bind(styles);

const InforPlayer = () => {
    const [text, setText] = useState('');
    const UpperText = (event) => {
        setText(event.target.value.toUpperCase());
    };

    return (
        <div className={cx('Container')}>
            <SubBanner url={'https://images.livemint.com/img/2022/12/06/1600x900/Stadium_974_1670308763958_1670308770302_1670308770302.jpg'} title={'Team'} children={'Barcelona Fc'} />
            <Grid>

            </Grid>
            <div className={cx('Main')}>
                <Information />
                <Textinfo />
                <div className={cx('Comment')}>
                    <div className={cx('title-comment')}>Post a Comment</div>
                    <textarea className={cx('area-text')} placeholder='COMMENTS HERE' onChange={(event) => UpperText(event)} value={text} />
                    <div>
                        <button type="button" className={cx('submit-button')}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InforPlayer;