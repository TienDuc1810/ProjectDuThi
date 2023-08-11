import { Grid, Row, Col } from '../../GridSystem/Grid';
import styles from './Form.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Form() {
    return (
        <Row>
            <Col size={['l-12', 'm-12', 's-12']}>
                <form>
                    <Grid>
                        <Row >
                            <Col size={['l-6', 'm-6', 's-12']} >
                                <div className={cx('form')}>
                                    <label htmlFor='firstname'>First Name*</label>
                                    <input type='text' id='firstname' />
                                </div>
                            </Col>
                            <Col size={['l-6', 'm-6', 's-12']} >
                                <div className={cx('form')}>
                                    <label htmlFor='lastname'>Last Name*</label>
                                    <input type='text' id='lastname' />
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col size={['l-6', 'm-6', 's-12']} >
                                <div className={cx('form')}>
                                    <label htmlFor='email'>Email*</label>
                                    <input type='email' id='email' />
                                </div>
                            </Col>
                            <Col size={['l-6', 'm-6', 's-12']} >
                                <div className={cx('form')}>
                                    <label htmlFor='subject'> Subject *</label>
                                    <input type='text' id='subject' />
                                </div>
                            </Col>
                        </Row>

                        <Row >
                            <Col size={['l-12', 'm-12', 's-12']} >
                                <div className={cx('form')}>
                                    <label htmlFor='message'> Message *</label>
                                    <textarea typeof='text' id='message' />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={['l-3', 'm-4', 's-12']}>
                                <div className={cx('form')}>
                                    <input className={cx('btn')} type='submit' value={'SUBMIT NOW'} />
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </form>
            </Col>
        </Row>
    )
}
export default Form;