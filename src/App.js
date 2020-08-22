import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Title from "./Components/Title/Title";
import FirstPage from "./Components/FirstPage/FirstPage";
import News from "./Components/SecondPage/News/News";
import Vaccination from "./Components/ThirdPage/Vaccination/Vaccination";
import Footer from "./Components/Footer/Footer";

const App = (props) => (
  <Router>
    <Title />
    <Switch>
      <Route exact path="/">
        <FirstPage />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/vaccination">
        <Vaccination />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;
