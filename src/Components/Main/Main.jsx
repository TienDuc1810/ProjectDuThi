import BannerSlide from '../BannerSlide';
import MatchGallery from '../MatchGallery';
import TopTournaments from '../TopTournaments';
import MatchComming from '../MatchComming/MatchComming';
import CaRousel from '../Bao/Carousel/Carousel';
import HightLight from '../Bao/HightLight/HightLight';

const Main = () => {
  return (
    <>
      <BannerSlide />
      <MatchComming />
      <MatchGallery />
      <HightLight />
      <TopTournaments />
      <CaRousel />
    </>
  );
};

export default Main;
