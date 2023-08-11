
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import RollTop from '../../Components/RollTop';
    import Match from "../MatchStatictics/match-page";
import './Home.scss';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
      <RollTop />
    
      <Link to="/MatchStatictics">Match</Link>
    
    </div>
  );
};

export default Home;
