import React from 'react';
import classNames from 'classnames/bind';
import styles from './Text-info.module.scss';

const cx = classNames.bind(styles);

const Textinfo = () => {
    return(
        <div className={cx('Text')}>
            <div className={cx('title-overview')}>Overview</div>
            <p className={cx('overview-text-1')}>Captivate football fans worldwide and inspire future generations of players. His dedication, humility, and extraordinary talent have etched his name in the annals of football lore, creating a legacy that will endure for generations to come.</p>
            <p className={cx('overview-text-2')}>Argentine professional footballer, is renowned for his exceptional dribbling skills, playmaking abilities, and goal-scoring prowess. Spending the majority of his career at FC Barcelona, Messi has shattered numerous records and won multiple Ballon d'Or awards. His impact on the game has solidified his status as one of the greatest players in football history. In 2021, he made a remarkable transfer to Paris Saint-Germain, marking a new chapter in his illustrious career.</p>
        </div>
    )
}
export default Textinfo;