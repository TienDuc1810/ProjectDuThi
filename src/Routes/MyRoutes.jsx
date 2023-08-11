import { Route, Routes } from "react-router-dom";
import Match from ".././Pages/MatchStatictics/match-page";
import BarVsRealComing from ".././Pages/MatchStatictics/coming/barvsreal/match";
import ManvsJuvComing from ".././Pages/MatchStatictics/coming/manvsju/match";
import BarVsRealResult from ".././Pages/MatchStatictics/result/barvsreal/match";
import ManvsJuvResult from ".././Pages/MatchStatictics/result/manvsju/match";

export default function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/MatchStatictics" element={<Match></Match>}></Route>
        <Route
          path="/coming/barvsreal/match"
          element={<BarVsRealComing />}
        ></Route>
        <Route
          path="/coming/barvsreal/match"
          element={<BarVsRealComing />}
        ></Route>
        <Route
          path="/coming/manvsju/match"
          element={<ManvsJuvComing />}
        ></Route>
        <Route
          path="/result/barvsreal/match"
          element={<BarVsRealResult />}
        ></Route>
        <Route
          path="/result/manvsju/match"
          element={<ManvsJuvResult />}
        ></Route>
      </Routes>
    </>
  );
}
