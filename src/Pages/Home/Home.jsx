import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import RollTop from '../../Components/RollTop';
import './Home.scss';

const Home = () => {
   return (
      <div className="container">
         <Header />
         <Main />
         <Footer />
         <RollTop />
      </div>
   );
};

export default Home;
