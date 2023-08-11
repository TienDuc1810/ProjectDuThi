import "./App.scss";
import Home from "./Pages/Home/Home";
import MyRoutes from "./Routes/MyRoutes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);
function App() {
  return (
    <div className="App">
      <MyRoutes />
      <Home />
    </div>
  );
}

export default App;
