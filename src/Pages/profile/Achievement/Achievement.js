import React , {useState}from 'react';
import classNames from 'classnames/bind';
import styles from './achievement.module.scss';
import { Col, Grid, Row } from '../../../Components/GridSystem/Grid'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Achievement = ({name, text, url}) => {
    return (
        <div className={cx('wrapper')}>
            <Grid>
                <Row>
                    <Col size={['l-2', 'm-2', 's-12']} className={cx('item-1')}>
                        <div className={cx('Top-logo')}>
                            <div className={cx('Logo')}>
                                <img src={url} />
                                <Link to={`/Team/${name.toLowerCase().replace(/\s+/g, '')}`}><h2>{name}</h2></Link>
                            </div>
                        </div >
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
                                            <div className={cx('circle')}> 1790</div >
                                            <p className={cx('under-text1')}> Established in</p >
                                        </div >
                                    </div>
                                </Col>
                                <Col size={['l-3', 'm-6', 's-12']}>
                                    <div className={cx('Result')}>
                                        <div className={cx('item')}>
                                            <div className={cx('circle')}> 350</div >
                                            <p className={cx('under-text')}> Champions</p >
                                        </div >
                                    </div>
                                </Col>
                                <Col size={['l-3', 'm-6', 's-12']}>
                                    <div className={cx('Result')}>
                                        <div className={cx('item')}>
                                            <div className={cx('circle')}> 180</div >
                                            <p className={cx('under-text')}> Current Players</p >
                                        </div >
                                    </div>
                                </Col>
                                <Col size={['l-3', 'm-6', 's-12']}>
                                    <div className={cx('Result')}>
                                        <div className={cx('item')}>
                                            <div className={cx('circle')}> 60</div >
                                            <p className={cx('under-text')}> Top Players</p >
                                        </div >
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
            <div className={cx('item-2')}>
                <h2>Club History</h2>
                <p>{text}</p>
            </div >
        </div>

    )
}
export default Achievement;