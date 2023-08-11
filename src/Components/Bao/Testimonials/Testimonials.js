import { Grid, Row, Col } from '../../GridSystem/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Testimonials.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Testimonials({
    children,
    position,
    src
}) {
    return (
        <Row>
            <Col size={['l-12', 'm-12', 's-12']}>
                <div className={cx('testimonial')}>
                    <Grid>
                        <Row>
                            <Col size={['l-2', 'm-6', 's-12']}>
                                <div className={cx('testimonial-profile')}>
                                    <img src={src} />
                                </div>
                            </Col>
                            <Col size={['l-10', 'm-6', 's-12']}>
                                <div className={cx('testimonial-content')}>
                                    <h3>
                                        {children}
                                    </h3>
                                    <span>
                                        {position}
                                    </span>
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
                                        <span><FontAwesomeIcon icon="fa-regular fa-star" /></span>
                                    </ul>
                                    <p>
                                        Sed condimentum viverra tellus, at cursus massa. Praesent tristique gravida elit,
                                        in fermentum ligula varius id. Vivamus commodo malesuada elit. Cras non iaculis enim.
                                    </p>
                                    <p>
                                        Sed condimentum viverra tellus, at cursus massa. Praesent tristique gravida elit,
                                        in fermentum ligula varius id. Vivamus commodo malesuada elit. Cras non iaculis enim.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Col>
        </Row>
    )
}

export default Testimonials;