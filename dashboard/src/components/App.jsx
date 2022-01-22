import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Layout from "../components/layout/Layout";
import Form from '../pages/Form'
import Form3 from "../pages/Form3";
import Succes from "../pages/Succes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/layout" component={Layout} />
        <Route path="/layout/form" exact component={Form} />
        <Route path="/layout/form3"  exact component={Form3} />
        <Route path="/layout/succes" exact component={Succes} />
      </Switch>
    </Router>
  );
}

export default App;
