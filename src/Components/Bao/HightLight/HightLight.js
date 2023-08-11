import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { Col, Grid, Row } from '../../GridSystem/Grid';
import Title from '../../Title';
import styles from './HightLight.module.scss';

const cx = classNames.bind(styles);

function HightLight() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Grid>
      <Row>
        <Col size={['l-12', 'm-12', 's-12']}>
          <div className={cx('overly-bg')} data-aos="fade-up" data-aos-duration="3000">
            <Grid>
              <Row>
                <Col size={['l-2', 'm-2', 's-12']}>
                  <Title title={'Hightlight'} />
                </Col>
              </Row>
              <Row>
                <Col size={['l-7', 'm-12', 's-12']}>
                  <div className={cx('video')}>
                    <img src="https://images2.thanhnien.vn/zoom/700_438/Uploaded/diennv/2022_12_06/z3938081269632-0d38b14add56c95d59f44260945e9901-1318.jpg" />
                  </div>
                </Col>
                <Col size={['l-5', 'm-12', 's-12']}>
                  <div className={cx('inner-new')}>
                    <div className={cx('lastes-new')}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mKrASP7LkqH4qGIP0KC1HzUgBk1ag0cgXg&usqp=CAU" />
                    </div>
                    <div className={cx('text-new')}>
                      <h5>Badda FC vs Banni FC Highlights 1-1</h5>
                      <span>May 30, 2017</span>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={cx('inner-new')}>
                    <div className={cx('lastes-new')}>
                      <img src="https://keenitsolutions.com/products/html/soccer/images/latest-video/1.jpg" />
                    </div>
                    <div className={cx('text-new')}>
                      <h5>Badda FC vs Banni FC Highlights 1-1</h5>
                      <span>May 30, 2017</span>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={cx('inner-new')}>
                    <div className={cx('lastes-new')}>
                      <img src="https://media.bongda.com.vn/files/thach.pham/2018/05/15/11-0604.jpg" />
                    </div>
                    <div className={cx('text-new')}>
                      <h5>Badda FC vs Banni FC Highlights 1-1</h5>
                      <span>May 30, 2017</span>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}
export default HightLight;
