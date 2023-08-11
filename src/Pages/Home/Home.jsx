import { Route, Routes } from 'react-router-dom';
import Main from '../../Components/Main';
import './Home.scss';

const Home = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
};

export default Home;
