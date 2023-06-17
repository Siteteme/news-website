import {Switch, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div className="m-auto px-2">
      <Header />
      <div>
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/" component={HomePage} />
        </Switch>
        <section style={{height: "100vh"}}></section>
      </div>
    </div>
  );
};

export default App;
