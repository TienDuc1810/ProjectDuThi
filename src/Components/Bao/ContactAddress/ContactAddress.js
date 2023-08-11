import styles from './ContactAddress.module.scss'
import classNames from 'classnames/bind';
import { Grid, Col, Row } from '../../GridSystem/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)
function ContactAddress() {
    return (
        <div>
            <Row>
                <Col size={['l-12', 'm-12', 's-12']} >
                    <div className={cx('contact')}>
                        <Row >
                            <Col size={['l-4', 'm-4', 's-12']}>
                                <div className={cx('address')}>
                                    <a><FontAwesomeIcon icon="fa-solid fa-location-dot" /></a>
                                    <h4>ADDRESS</h4>
                                    <p>503 Old Buffalo Street</p>
                                    <p>Northwest #205, New York-3087</p>
                                </div>
                            </Col>
                            <Col size={['l-4', 'm-4', 's-12']} >
                                <div className={cx('phone')}>
                                    <a><FontAwesomeIcon icon="fa-solid fa-phone" /></a>
                                    <h4>PHONE NUMBER</h4>
                                    <p>+345-678-8900</p>
                                    <p>+345-678-8900</p>
                                </div>
                            </Col>
                            <Col size={['l-4', 'm-4', 's-12']} >
                                <div className={cx('email')}>
                                    <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
                                    <h4>EMAIL ADDRESS</h4>
                                    <p>info@gmail.com</p>
                                    <p>www.your.name</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default ContactAddress;