import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
// import Login from './Pages/Login/Login';
import Match from './Components/khai/MatchStatictics/match-page';
// import Regiter from './Pages/Regiter/Regiter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RollTop from './Components/RollTop';
import BarVsRealComming from './Components/khai/MatchStatictics/coming/barvsreal/match';
import BarVsRealResult from './Components/khai/MatchStatictics/result/barvsreal/match';
import Contact from './Components/Bao/Contact/Contact'
library.add(fab, far, fas);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={<Login />}></Route>
        <Route path="/regiter" element={<Regiter />}></Route> */}
        <Route path="/match" element={<Match />} />
        <Route path="/coming/barvsreal/match" element={<BarVsRealComming />} />
        <Route path="/result/barvsreal/match" element={<BarVsRealResult />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <RollTop />
    </div>
  );
}

export default App;
