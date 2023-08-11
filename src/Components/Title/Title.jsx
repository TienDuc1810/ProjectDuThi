import React from 'react';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

const Title = ({ title, className }) => {
   return (
      <div className={cx('wrapper')}>
         <h2 className={className}>{title}</h2>
      </div>
   );
};

export default Title;