import AOS from "aos";
import "aos/dist/aos.css";
import classNames from 'classnames/bind';
import React, { useEffect } from "react";
import { Col, Grid, Row } from '../GridSystem/Grid';
import Title from '../Title';
import styles from './MatchGallery.module.scss';

const cx = classNames.bind(styles);

const MatchGallery = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
            <Col key={index} size={['l-3', 'm-6', 's-12']} >
              <img src={`https://keenitsolutions.com/products/html/soccer/images/gallery2/${index + 1}.jpg`} alt="" data-aos="flip-right" />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default MatchGallery;
