import styles from './Content.module.scss'
import { Grid,Row,Col } from '../../GridSystem/Grid';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Content({
    title,
    children
}) {
    return (
        <Row >
            <Col size={['l-12', 'm-12', 's-12']} >
                <div className={cx('content')}>
                    <h3>{title}</h3>
                    <p>{children}</p>
                 </div>
            </Col>
        </Row>
    )
}
export default Content;