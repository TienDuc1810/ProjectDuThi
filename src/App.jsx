import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';

import Login from './Pages/Login/Login';
import Regiter from './Pages/Regiter/Regiter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/regiter" element={<Regiter/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
