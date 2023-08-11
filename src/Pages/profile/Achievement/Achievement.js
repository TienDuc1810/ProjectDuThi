import React from 'react';
import classNames from 'classnames/bind';
import styles from './achievement.module.scss';
import { Grid, Row, Col } from '../../../Components/GridSystem/Grid';
const cx = classNames.bind(styles);

const Achievement = () => {
  return (
    <div className={cx('wrapper')}>
      <Grid>
        <Row>
          <Col size={['l-2', 'm-2', 's-12']} className={cx('item-1')}>
            <div className={cx('Top-logo')}>
              <div className={cx('Logo')}>
                <img src="https://keenitsolutions.com/products/html/soccer/images/upcoming/1.png" />
                <h2>Badda FC</h2>
              </div>
            </div>
          </Col>
          <Col size={['l-10', 'm-10', 's-12']} className={cx('item-1')}>
            <Grid>
              <Row className={cx('Info-club')}>
                <Col size={['l-3', 'm-6', 's-5']} className={cx('President-list')}>
                  <li>
                    <strong>Former President</strong>
                    <span>Arturo Vidal</span>
                  </li>
                </Col>
                <Col size={['l-3', 'm-6', 's-5']} className={cx('President-list')}>
                  <li>
                    <strong>Manager Name</strong>
                    <span>Mahabub Alam</span>
                  </li>
                </Col>
                <Col size={['l-3', 'm-6', 's-5']} className={cx('President-list')}>
                  <li>
                    <strong>Former President</strong>
                    <span>Arturo Vidal</span>
                  </li>
                </Col>
                <Col size={['l-3', 'm-6', 's-5']} className={cx('President-list')}>
                  <li>
                    <strong>Former President</strong>
                    <span>Arturo Vidal</span>
                  </li>
                </Col>
              </Row>
              <Row className={cx('Info-club')}>
                <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('Result')}>
                    <div className={cx('item')}>
                      <div className={cx('circle')}> 1790</div>
                      <p className={cx('under-text1')}> Established in</p>
                    </div>
                  </div>
                </Col>
                <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('Result')}>
                    <div className={cx('item')}>
                      <div className={cx('circle')}> 350</div>
                      <p className={cx('under-text')}> Champions</p>
                    </div>
                  </div>
                </Col>
                <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('Result')}>
                    <div className={cx('item')}>
                      <div className={cx('circle')}> 180</div>
                      <p className={cx('under-text')}> Current Players</p>
                    </div>
                  </div>
                </Col>
                <Col size={['l-3', 'm-6', 's-12']}>
                  <div className={cx('Result')}>
                    <div className={cx('item')}>
                      <div className={cx('circle')}> 60</div>
                      <p className={cx('under-text')}> Top Players</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
      <div className={cx('item-2')}>
        <h2>Club History</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy.
        </p>
      </div>
    </div>
  );
};
export default Achievement;
