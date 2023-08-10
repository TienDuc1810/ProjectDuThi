import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopTournaments.module.scss';
import Title from '../Title';
import { Col, Grid, Row } from '../GridSystem/Grid';

const cx = classNames.bind(styles);
const TopTournaments = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('overlay')}></div>
      <Grid>
        <Row className={cx('container')}>
          <Col size={['l-2', 'm-2', 's-12']}>
            <Title className={cx('title')} title={'Top Tournament'} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default TopTournaments;
