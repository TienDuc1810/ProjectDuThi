import BannerSlide from '../../Components/BannerSlide/BannerSlide';
import './Home.scss';

const Home = () => {
   /**
    * l - large - desktop
    * m - medium - tablet
    * s - small - mobile
    */
   return (
      <div className="container">
         <BannerSlide />
      </div>
   );
};

export default Home;
