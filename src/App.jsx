import "./App.scss";
import Home from "./Pages/Home/Home";
import Match from "./Pages/MatchStatictics/match-page";
import BarVsRealComing from "./Pages/MatchStatictics/coming/barvsreal/match";
import ManvsJuvComing from "./Pages/MatchStatictics/coming/manvsju/match";
import BarVsRealResult from "./Pages/MatchStatictics/result/barvsreal/match";
import ManvsJuvResult from "./Pages/MatchStatictics/result/manvsju/match";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/MatchStatictics" element={<Match></Match>}></Route>
        <Route
          path="/coming/barvsreal/match"
          element={<BarVsRealComing></BarVsRealComing>}
        ></Route>
        <Route
          path="/coming/barvsreal/match"
          element={<BarVsRealComing></BarVsRealComing>}
        ></Route>
        <Route
          path="/coming/manvsju/match"
          element={<ManvsJuvComing></ManvsJuvComing>}
        ></Route>
        <Route
          path="/result/barvsreal/match"
          element={<BarVsRealResult></BarVsRealResult>}
        ></Route>
        <Route
          path="/result/manvsju/match"
          element={<ManvsJuvResult></ManvsJuvResult>}
        ></Route>
      </Routes>
  
    </div>
  );
}

export default App;
