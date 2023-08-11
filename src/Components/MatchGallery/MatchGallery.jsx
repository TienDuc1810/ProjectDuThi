import React from 'react';
import classNames from 'classnames/bind';
import styles from './MatchGallery.module.scss';
import Title from '../Title';
import { Col, Grid, Row } from '../GridSystem/Grid';

const cx = classNames.bind(styles);

const MatchGallery = () => {
  return (
    <div className={cx('wrapper')}>
      <Grid>
        <Row className={cx('container')}>
          <Col size={['l-2', 'm-2', 's-12']}>
            <Title title={'Match Gallery'} />
          </Col>
        </Row>
        <Row className={cx('container')}>
          {Array.from({ length: 8 }, (_, index) => (
            <Col key={index} size={['l-3', 'm-6', 's-12']}>
              <img src={`https://keenitsolutions.com/products/html/soccer/images/gallery2/${index + 1}.jpg`} alt="" />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default MatchGallery;
