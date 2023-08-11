import classNames from 'classnames/bind';
import { Col, Grid, Row } from '../GridSystem/Grid';
import Title from '../Title';
import styles from './TopTournaments.module.scss';

const cx = classNames.bind(styles);
const TopTournaments = () => {

  return (
    <div className={cx('wrapper')} >
      <div className={cx('overlay')}></div>
      <Grid>
        <Row className={cx('container')}>
          <Col size={['l-2', 'm-2', 's-12']}>
            <Title className={cx('title')} title={'Top Tournament'} />
          </Col>
        </Row>
        <Row className={cx('container')}>
          <Col size={['l-3', 'm-6', 's-12']}>
            <div className={cx('trophy')}>
              <img
                className={cx('img')}
                src="https://parspng.com/wp-content/uploads/2022/05/Worldcupqatarpng.parspng.com-3.png"
                alt=""
              />
              <div className={cx('trophy-name')}>
                <h3>Europa League</h3>
              </div>
            </div>
          </Col>
          <Col size={['l-3', 'm-6', 's-12']}>
            <div className={cx('trophy')}>
              <img
                className={cx('img')}
                src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3508558/coppa-campioni-clipart-xl.png"
                alt=""
              />
              <div className={cx('trophy-name')}>
                <h3>Champion League</h3>
              </div>
            </div>
          </Col>
          <Col size={['l-3', 'm-6', 's-12']}>
            <div className={cx('trophy')}>
              <img
                className={cx('img')}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Europa_League.svg/1200px-Europa_League.svg.png"
                alt=""
              />
              <div className={cx('trophy-name')}>
                <h3>Europa League</h3>
              </div>
            </div>
          </Col>
          <Col size={['l-3', 'm-6', 's-12']}>
            <div className={cx('trophy')}>
              <img
                className={cx('img')}
                src="https://i.pinimg.com/originals/f3/7a/21/f37a214bee82fb8097a872dec972d6f1.png"
                alt=""
              />
              <div className={cx('trophy-name')}>
                <h3>Premier League</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default TopTournaments;
