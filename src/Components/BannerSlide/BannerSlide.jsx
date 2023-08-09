import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import styles from './BannerSlide.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const images = [
   {
      id: 1,
      url: 'https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/primary/qgyr8vnrdn3lemt4tobb',
      match: 'Manchester United VS Manchester City',
   },
   {
      id: 2,
      url: 'https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/primary/qgyr8vnrdn3lemt4tobb',
      match: 'Barcelona VS Real Madrid',
   },
   {
      id: 3,
      url: 'https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/primary/qgyr8vnrdn3lemt4tobb',
      match: 'AC Milan VS Inter Milan',
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
      interval: 3000,
      pauseOnHover: true,
   };

   return (
      <Splide options={splideOptions} className={cx(className, 'wrapper')}>
         {images.map((image) => (
            <SplideSlide key={image.id} className={cx('slide-item')}>
               <div className={cx('slide-content')}>
                  <img className={cx('slide-img')} src={image.url} alt={`img ${image.id}`} />
                  <div className={cx('overlay')}>
                     <p className={cx('overlay-text')}>{image.match}</p>
                     <div className={cx('button-container')}>
                        <button className={cx('slide-button')}>READ MORE</button>
                        <button className={cx('slide-button')}>BOOK A TICKET</button>
                     </div>
                  </div>
               </div>
            </SplideSlide>
         ))}
      </Splide>
   );
};

export default BannerSlide;
