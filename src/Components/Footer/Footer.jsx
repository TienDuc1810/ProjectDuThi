/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Grid, Row } from '../GridSystem/Grid';
import Title from '../Title';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Grid>
          <Row>
            <Col size={['l-3', 'm-6', 's-12']}>
              <Title className={cx('title')} title={'About Us'} />
              <div className={cx('content')}>
                <p className={cx('text')}>
                  We create Premium Html Themes for more than three years. Our team goal is to reunite the elegance of
                  unique.
                </p>
                <p className={cx('text')}>We create Unique and Easy To Use Flexible Html Themes.</p>
              </div>
            </Col>
            <Col size={['l-3', 'm-6', 's-12']}>
              <Title className={cx('title')} title={'Recent Posts'} />
              <div className={cx('content', 'flex')}>
                <div className={cx('date')}>
                  <span>28</span>
                  <span>July</span>
                </div>
                <div className={cx('post-title')}>
                  <Link className={cx('link')}>Welcome to Soccer Template</Link>
                  <span className={cx('desc')}>Design</span>
                </div>
              </div>
              <div className={cx('underline')}></div>
              <div className={cx('content', 'flex')}>
                <div className={cx('date')}>
                  <span>28</span>
                  <span>July</span>
                </div>
                <div className={cx('post-title')}>
                  <Link className={cx('link')}>Welcome to Soccer Template</Link>
                  <span className={cx('desc')}>Design</span>
                </div>
              </div>
            </Col>
            <Col size={['l-3', 'm-6', 's-12']}>
              <Title className={cx('title')} title={'Useful Links'} />
              <div className={cx('content')}>
                <div className={cx('post-title')}>
                  <Link className={cx('link1')} to={'/'}>
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-up" rotation={90} />
                    </span>
                    Home
                  </Link>
                  <div className={cx('underline')}></div>
                  <Link className={cx('link1')} to={'/barcelonafc'}>
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-up" rotation={90} />
                    </span>
                    Club List
                  </Link>
                  <div className={cx('underline')}></div>
                  <Link className={cx('link1')} to={'/match'}>
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-up" rotation={90} />
                    </span>
                    Match
                  </Link>
                  <div className={cx('underline')}></div>
                  <Link className={cx('link1')} to={'/news'}>
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-up" rotation={90} />
                    </span>
                    News
                  </Link>
                  <div className={cx('underline')}></div>
                  <Link className={cx('link1')} to={'/contact'}>
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-up" rotation={90} />
                    </span>
                    Contact
                  </Link>
                  <div className={cx('underline')}></div>
                </div>
              </div>
            </Col>
            <Col size={['l-3', 'm-6', 's-12']}>
              <Title className={cx('title')} title={'Newsletter'} />
              <div className={cx('content')}>
                <form className={cx('form')}>
                  <input className={cx('text')} type="text" placeholder="Name" name="name" />
                  <input className={cx('text')} type="email" placeholder="Email" name="email" />
                  <input className={cx('submit')} type="submit" value="SEND" />
                </form>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className={cx('underline')}></div>
      <div className={cx('footer')}>
        <div className={cx('copyright')}>
          <p>
            © 2023 <a href="#">WeWin.</a> All Rights Reserved.
          </p>
        </div>
        <div className={cx('social')}>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          </a>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
