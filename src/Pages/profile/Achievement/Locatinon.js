import React from 'react';
import classNames from 'classnames/bind';
import styles from './Location.module.scss';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from '../../../Components/GridSystem/Grid'

const cx = classNames.bind(styles);

const Location = () => {
  return (
    <>
      <Grid>
        <Row>
          <Col size={['l-6', 'm-6', 's-12']}>
            <div>
              <Row>
                <Col size={['l-3', 'm-6', 's-12']} className={cx('item-1')}>
                  <Link to="/" className={cx('Choice-info')}>
                    {' '}
                    Players
                  </Link>
                </Col>
                <Col size={['l-3', 'm-6', 's-12']} className={cx('item-1')}>
                  <Link to="/" className={cx('Choice-info')}>
                    {' '}
                    Champion
                  </Link>
                </Col>
                <Col size={['l-3', 'm-6', 's-12']} className={cx('item-1')}>
                  <Link to="/" className={cx('Choice-info')}>
                    {' '}
                    Gallery
                  </Link>
                </Col>
                <Col size={['l-3', 'm-6', 's-12']} className={cx('item-1')}>
                  <Link to="/" className={cx('Choice-info')}>
                    {' '}
                    Jersy
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
      <div className={cx('item-2')}>
        <span className={cx('Label-image')}> Image</span>
        <span className={cx('Label-name')}> Name</span>
        <span className={cx('Label-designation')}> Designation</span>
      </div>
      <div className={cx('item-3')}>
        <div className={cx('Info-player-a')}>
          <div className={cx('Image-player')}>
            <img src="https://keenitsolutions.com/products/html/soccer/images/team/5.jpg" />
          </div>
          <Link to="/Team/InfoPlayer" className={cx('Info-link')}>
            {' '}
            Peter Thugs
          </Link>
          <span>Goal Kepper</span>
        </div>
        <div className={cx('Info-player-b')}>
          <div className={cx('Image-player')}>
            <img src="https://keenitsolutions.com/products/html/soccer/images/team/6.jpg" />
          </div>
          <Link to="/Team/InfoPlayer" className={cx('Info-link')}>
            {' '}
            Chris Morshal
          </Link>
          <span>Midfilder</span>
        </div>
        <div className={cx('Info-player-a')}>
          <div className={cx('Image-player')}>
            <img src="https://keenitsolutions.com/products/html/soccer/images/team/7.jpg" />
          </div>
          <Link to="/Team/InfoPlayer" className={cx('Info-link')}>
            {' '}
            John Sharp
          </Link>
          <span>Goal Kepper</span>
        </div>
        <div className={cx('Info-player-b')}>
          <div className={cx('Image-player')}>
            <img src="https://keenitsolutions.com/products/html/soccer/images/team/8.jpg" />
          </div>
          <Link to="/Team/InfoPlayer" className={cx('Info-link')}>
            {' '}
            Mike Flame
          </Link>
          <span>Midfilder</span>
        </div>
      </div>
    </>
  );
};
export default Location;
