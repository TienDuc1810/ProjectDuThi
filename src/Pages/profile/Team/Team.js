import React from 'react';
import classNames from 'classnames/bind';
import styles from './Team.module.scss';
import SubBanner from '../../../Components/SubBanner'
import Player from '../Player/Player';
import { Col, Grid, Row } from '../../../Components/GridSystem'
import bar from "./Data/Barcelona.json"
const cx = classNames.bind(styles);

const Team = ({ name, team }) => {
    const barceLona = bar.Player

    return (

        <div className={cx('Team-container')}>
            <SubBanner url={'https://images.livemint.com/img/2022/12/06/1600x900/Stadium_974_1670308763958_1670308770302_1670308770302.jpg'} title={'Home'} children={'Barcelona FC'} />
            <div className={cx('Content')}>
                <Grid>
                    <Row className={cx('container')}>
                        {barceLona.map((data, index) => {
                            return (
                                <Col key={index} size={['l-3', 'm-6', 's-12']}>
                                    <Player namePlayer={data.namePlayer} DatePlayer={data.DatePlayer} Location={data.Location} IdPlayer={data.IdPlayer} Img={data.Img} Nationality={data.Nationality} />
                                </Col>
                            )
                        })}
                    </Row>

                </Grid>

            </div>
        </div>
    );
};

export default Team;
