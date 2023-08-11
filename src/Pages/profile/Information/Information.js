import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Grid, Row } from '../../../GridSystem/Grid'

const cx = classNames.bind(styles);

const Information = () => {
    return (
        <div className={cx('Container')}>
            <Grid>
                <Row>
                    <Col size={['l-3', 'm-12', 's-12']} className={cx('Child-container-1')}>
                        <div className={cx('item-1')}>
                            <img src="https://keenitsolutions.com/products/html/soccer/images/team/team-single.jpg" />
                            <div className={cx('player-info')}>
                                <h5 className={cx('player-title')}>Masud Rana</h5>
                                <span className={cx('player-position')}>Stricker</span>
                                <div className={cx('player-club')}>Mirpur FC</div>
                                <div className={cx('icon-social')}>
                                    <span className={cx('icon')}><FontAwesomeIcon icon="fa-brands fa-facebook-f" size="sm" /></span>
                                    <span className={cx('icon')}><FontAwesomeIcon icon="fa-brands fa-twitter" size="sm" /></span>
                                    <span className={cx('icon')}><FontAwesomeIcon icon="fa-brands fa-square-instagram" size="sm" /></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col size={['l-9', 'm-12', 's-12']} className={cx('Child-container-1')}>
                        <div className={cx('item-2')}>
                            <div className={cx('info-1')}>
                                <h2 className={cx('title-info')}>Personal Info</h2>
                                <div className={cx('background-top')}>
                                    <div className={cx('key-top')}>
                                        <h5>Born:</h5>
                                        <h5>Weight:</h5>
                                        <h5>Height:</h5>
                                        <h5>Birth Place:</h5>
                                        <h5>Citizenship:</h5>
                                    </div>
                                    <div className={cx('value-top')}>
                                        <h5>Sep 31,1988</h5>
                                        <h5>72kg</h5>
                                        <h5>182cm</h5>
                                        <h5>Linkuije, Badda</h5>
                                        <h5>Badda</h5>
                                    </div>
                                    <div className={cx('single-text')}>
                                        <h5>"Lorem ipsum dolor sit amet, consectetur adip isc ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</h5>
                                        <div className={cx('sigh')}>
                                            <span>Masud Rana</span>
                                            <img src="https://keenitsolutions.com/products/html/soccer/images/team/team-single-sign.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('info-2')}>
                                <h2 className={cx('title-info')}>Career Info</h2>
                                <div className={cx('background-bottom')}>
                                    <div className={cx('key-bottom')}>
                                        <h5>Matches:</h5>
                                        <h5>Goals:</h5>
                                        <h5>Free Kick:</h5>
                                        <h5>Penalty:</h5>
                                        <h5>Card:</h5>
                                        <h5>Present Club:</h5>
                                        <h5>Previous Club:</h5>
                                        <h5>Club Debut:</h5>
                                    </div>
                                    <div className={cx('value-bottom')}>
                                        <h5>40 Matches</h5>
                                        <h5>32 Goals</h5>
                                        <h5>4 Goals (13)</h5>
                                        <h5>5 Goals (7)</h5>
                                        <h5>1 Red, 3 Yellow</h5>
                                        <h5>Badda FC</h5>
                                        <h5>Kapa FC</h5>
                                        <h5>March 21, 2005</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <div className={cx('Child-container-1')}>


            </div>
        </div>
    )
}
export default Information;