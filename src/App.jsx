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
import Contact from './Components/Bao/Contact/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import RollTop from './Components/RollTop';
import BarVsRealComming from './Components/khai/MatchStatictics/coming/barvsreal/match';
import BarVsRealResult from './Components/khai/MatchStatictics/result/barvsreal/match';
import Login from './Pages/Login/Login';
import Posts from './Pages/Posts/Posts';
import Profiles from './Pages/Profiles/Profiles';
import Register from './Pages/Register/Register';
import ClubList from './Pages/profile/ClubList/ClubList';
import History from './Pages/profile/HistoryClub/History';

library.add(fab, far, fas);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/match" element={<Match />} />
        <Route path="/coming/barvsreal/match" element={<BarVsRealComming />} />
        <Route path="/result/barvsreal/match" element={<BarVsRealResult />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<Posts />} />
        <Route path="/profiles" element={<Profiles />} />
        {History.map((item) => {
          const name = item.name.toLowerCase().replace(/\s+/g, '');
          return (
            <Route
              key={item.id}
              path={`/${name}`}
              element={<ClubList text={item.text} name={item.name} url={item.url} />}
            />
          );
        })}
      </Routes>
      <Footer />
      <RollTop />
    </div>
  );
}

export default App;
