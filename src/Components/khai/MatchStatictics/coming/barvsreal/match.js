/* eslint-disable jsx-a11y/alt-text */
import styles from './match.module.css';
import classNames from 'classnames/bind';
import barcelona from '../../../Data/Barcelona.json';
import real from '../../../Data/RealMadrid.json';
import TabMatchStatic from '../../../TabMatch/tabmatch-static/tabmatch-static';
import SubBanner from '../../../../SubBanner/SubBanner';
import Title from '../../../../Title';

const cx = classNames.bind(styles);

const information = [
  {
    TextLeft: '4-3-3',
    TextMiddle: 'Information',
    TextRight: '5-2-3',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Goal',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Possession %',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Shots on target',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Shots',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Touches',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Tackles',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Clearances',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Corners',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Offsides',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Yellow Cards',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Red Cards',
    TextRight: '---',
  },
  {
    TextLeft: '---',
    TextMiddle: 'Fouls conceded',
    TextRight: '---',
  },
];

const teamOne = barcelona.Player.map((data) => {
  return {
    TextLeft: data.IdPlayer,
    TextMiddle: data.namePlayer,
    TextRight: data.Location,
  };
});
const teamTwo = real.Player.map((data) => {
  return {
    TextLeft: data.IdPlayer,
    TextMiddle: data.namePlayer,
    TextRight: data.Location,
  };
});
const logoOne = 'https://static.bongda24h.vn/Medias/thumnail/2020/7/23/Barcelona.png';
const logoTwo = 'https://static.bongda24h.vn/Medias/thumnail/2020/7/23/RealMadrid.png';
export default function MatchStatic() {
  return (
    <div className={cx('wrapper')}>
      <SubBanner
        children={'Match Statistics'}
        url={'https://keenitsolutions.com/products/html/soccer/images/breadcrumbs/point-table.jpg'}
        title={'Match'}
      />
      <div className={cx('container-static')}>
        <Title title={'Match Statictics'} />
        <div className={cx('match-static')}>
          <p className={cx('team-match')}>
            <span className={cx('highlight', 'text')}>
              Barcelona <img src={logoOne} />
            </span>
            <span className={cx('text')}>---</span>
            <span className={cx('highlight', 'text')}>
              <img src={logoTwo} /> RealMadrid
            </span>
          </p>
          {information.map((value, index) => {
            return <TabMatchStatic props={value} index={index} key={index}></TabMatchStatic>;
          })}
        </div>
        <Title title={'Line-Up'} />
        <div className={cx('information')}>
          <div className={cx('team-infor')}>
            <div className={cx('img-team')} style={{ marginLeft: '8px' }}>
              <img src={logoOne} />
            </div>
            {teamOne.map((data, index) => {
              return <TabMatchStatic props={data} index={index} key={index} />;
            })}
          </div>
          <div className={cx('team-infor')}>
            <div className={cx('img-team')}>
              <img src={logoTwo} />
            </div>
            {teamTwo.map((data, index) => {
              return <TabMatchStatic props={data} index={index} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
