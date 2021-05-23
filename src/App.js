import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from './Components/LoginPage/Login';
import Welcome from "./Components/WelcomePage/Welcome";
import GetStarted from "./Components/GetStarted/GetStarted";
import ProjUpload from "./Components/ProjUpload/ProjUpload";
import Home from "./Components/Home/Home";
import Login from "./Components/LoginPage/Login";
import Share from "./Components/UploadAndShare/Share";
import TheShare from "./Components/TheShare/TheShare";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={Login} />
          <Route path="/start" exact component={GetStarted} />
          <Route path="/upload" exact component={ProjUpload} />
          <Route path="/shareupload" exact component={Share} />
          <Route path="/shearing" exact component={TheShare} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
