import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main';
import './Home.scss';

const Home = () => {
   return (
      <div className="container">
         <Header />
         <Main />
         <Footer />
      </div>
   );
};

export default Home;
