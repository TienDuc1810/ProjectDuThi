import React from 'react';
import classNames from 'classnames/bind';
import styles from './Team.module.scss';
import SubBanner from '../../../Components/SubBanner'
import Player from '../Player/Player';
import { Col, Grid, Row } from '../../../GridSystem'

const cx = classNames.bind(styles);

const Team = () => {
    return (

        <div className={cx('Team-container')}>
            <SubBanner url={'https://images.livemint.com/img/2022/12/06/1600x900/Stadium_974_1670308763958_1670308770302_1670308770302.jpg'} title={'Team'} children={'Barcelona Fc'} />
            <div className={cx('Content')}>
                <Grid>
                    <Row className={cx('container')}>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                    </Row>
                    <Row className={cx('container')}>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                    </Row>
                    <Row className={cx('container')}>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                    </Row>
                    <Row className={cx('container')}>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                        <Col size={['l-3', 'm-6', 's-12']}>
                            <Player />
                        </Col>
                    </Row>
                </Grid>

            </div>
        </div>
    );
};

export default Team;
