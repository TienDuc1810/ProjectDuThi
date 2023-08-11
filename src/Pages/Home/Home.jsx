import { Link, Route, Routes } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import RollTop from '../../Components/RollTop';
import './Home.scss';
import Match from '../../Components/khai/MatchStatictics/match-page.js';

const Home = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
      <RollTop />
    </div>
  );
};

export default Home;
