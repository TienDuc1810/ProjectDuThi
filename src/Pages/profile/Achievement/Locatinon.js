import React from 'react';
import classNames from 'classnames/bind';
import styles from './Location.module.scss';
import { Link } from 'react-router-dom'
import { Grid,Row,Col } from '../../../Components/GridSystem/Grid';

const cx = classNames.bind(styles);

const Location = () => {
    return(
        
        <>
        <Grid>
            <Row>
                <Col size={['l-6','m-6','s-12']}>
                    <div>
                    <Row>
                    <Col size={['l-3','m-6','s-12']} className={cx('item-1')}>
                        <Link to='/' className={cx('Choice-info')}> Players</Link >
                    </Col>
                    <Col size={['l-3','m-6','s-12']} className={cx('item-1')}>
                        <Link to='/' className={cx('Choice-info')}> Champion</Link >
                    </Col>
                    <Col size={['l-3','m-6','s-12']} className={cx('item-1')}>
                        <Link to='/' className={cx('Choice-info')}> Gallery</Link >
                    </Col>
                    <Col size={['l-3','m-6','s-12']} className={cx('item-1')}>
                        <Link to='/' className={cx('Choice-info')}> Jersy</Link >
                    </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
           
        </Grid>
        
                
                <div className={cx('item-3')}>
                    <div className={cx('item-2')}>
                        <span className={cx('Label-image')}> Image</span >
                        <span className={cx('Label-name')}> Name</span >
                        <span className={cx('Label-designation')}> Designation</span >
                    </div >
                    <div className={cx('Info-player-a')}>
                        <div className={cx('Image-player')}>
                            <img src="https://image.bongda24h.vn/medias/640x359twebp/original/2022/2/28/1.jpg" />
                        </div>
                        <Link to='/Team/InfoPlayer' className={cx('Info-link')}>Marc-Andre ter Stegen</Link >
                        <span>Goal Kepper</span>
                    </div >
                    <div className={cx('Info-player-b')} >
                        <div className={cx('Image-player')}>
                            <img src="https://static.bongda24h.vn/medias/original/2022/07/19/franck-kessie_1907092736.jpg" />
                        </div>
                        <Link to='/Team/InfoPlayer' className={cx('Info-link')}>Franck Kessie</Link >
                        <span>DEFENDER</span>
                    </div >
                    <div className={cx('Info-player-a')}>
                        <div className={cx('Image-player')}>
                            <img src="https://image.bongda24h.vn/medias/640x400twebp/standard/2021/7/28/jules-kounde.jpg" />
                        </div>
                        <Link to='/Team/InfoPlayer' className={cx('Info-link')}>Jules Kounde</Link >
                        <span>DEFENDER</span>
                    </div >
                    <div className={cx('Info-player-b')}>
                        <div className={cx('Image-player')}>
                            <img src="https://static.bongda24h.vn/medias/original/2022/07/19/alex-balde_1907091605.jpg" />
                        </div>
                        <Link to='/Team/InfoPlayer' className={cx('Info-link')}>Alex Balde</Link >
                        <span>DEFENDER</span>
                    </div >
                </div >
            </>
    )
}
export default Location;