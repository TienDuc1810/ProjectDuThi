import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import BannerSlide from '../BannerSlide';
import CaRousel from '../Bao/Carousel/Carousel';
import HightLight from '../Bao/HightLight/HightLight';
import MatchComming from '../MatchComming/MatchComming';
import MatchGallery from '../MatchGallery';
import TopTournaments from '../TopTournaments';



const Main = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
