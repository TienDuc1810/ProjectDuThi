import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import styles from './BannerSlide.module.scss';
import classNames from 'classnames/bind';
import './PaginationDot.scss';

const cx = classNames.bind(styles);
const matches = [
  {
    id: 1,
    url: 'https://i2-prod.manchestereveningnews.co.uk/incoming/article26585983.ece/ALTERNATES/s1200/0_GettyImages-1421052908.jpg',
    match: 'Manchester United vs Manchester City',
  },
  {
    id: 2,
    url: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203420399690&ssbinary=true',
    match: 'Barcelona vs Real Madrid',
  },
  {
    id: 3,
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/211222144518-01-ac-milan-inter-san-siro-cathedral-spt-intl.jpg?q=h_1371,w_2362,x_0,y_0',
    match: 'AC Milan vs Inter Milan',
  },
];

const BannerSlide = ({ className }) => {
  const splideOptions = {
    type: 'loop',
    rewind: true,
    perPage: 1,
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
  };

  return (
    <div className={cx('carousel-wrapper')}>
      <Splide options={splideOptions} className={cx(className, 'wrapper')}>
        {matches.map((match) => (
          <SplideSlide key={match.id} className={cx('slide-item')}>
            <div className={cx('slide-content')}>
              <img className={cx('slide-img')} src={match.url} alt={`img ${match.id}`} />
              <div className={cx('overlay')}>
                <h2 className={cx('overlay-text')} style={{ fontSize: '30px', color: '#dba504' }}>
                  LIVE NOW
                </h2>
                <h2 className={cx('overlay-text')} style={{ margin: '30px 0' }}>
                  {match.match}
                </h2>
                <div className={cx('button-container')}>
                  <button className={cx('slide-button', 'outline')}>READ MORE</button>
                  <button className={cx('slide-button')}>BOOK A TICKET</button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide> 
    </div>
  );
};

export default BannerSlide;
