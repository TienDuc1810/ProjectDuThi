import "./Home.scss";
import { Link } from "react-router-dom";
import Match from "../MatchStatictics/match-page";
const Home = () => {
  return (
    <>
      <Link to="/MatchStatictics">Match</Link>
    </>
  );
};

export default Home;
