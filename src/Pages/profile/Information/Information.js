import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Grid, Row } from '../../../Components/GridSystem/Grid'

const cx = classNames.bind(styles);

const Information = ({ name, position, clubName, country, height, dayBr, img }) => {
    return (
        <div className={cx('Container')}>
            <Grid>
                <Row>
                    <Col size={['l-3', 'm-12', 's-12']} className={cx('Child-container-1')}>
                        <div className={cx('item-1')}>
                            <img src={img} />
                            <div className={cx('player-info')}>
                                <h5 className={cx('player-title')}>{name}</h5>
                                <span className={cx('player-position')}>{position}</span>
                                <div className={cx('player-club')}>Barcelona FC</div>
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
                                        <h5>{dayBr}</h5>
                                        <h5>75kg</h5>
                                        <h5>{height}</h5>
                                        <h5>{country}</h5>
                                        <h5>{clubName}</h5>
                                    </div>
                                    <div className={cx('single-text')}>
                                        <h5>"Known for his incredible speed, skill, and goal-scoring prowess, for several top clubs, including Manchester United and Real Madrid."</h5>
                                        <div className={cx('sigh')}>
                                            <span>{name}</span>
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
                                        <h5>Barcelona FC</h5>
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