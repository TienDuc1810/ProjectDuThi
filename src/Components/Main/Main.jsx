import BannerSlide from '../BannerSlide';
import MatchGallery from '../MatchGallery';
import TopTournaments from '../TopTournaments';
import MatchComming from '../MatchComming/MatchComming';

const Main = () => {
  return (
    <>
      <BannerSlide />
      <MatchComming />
      <MatchGallery />
      <TopTournaments />
    </>
  );
};

export default Main;
