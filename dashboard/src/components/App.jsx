import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Layout from "../components/layout/Layout";
import Form from '../pages/Form'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/layout" component={Layout} />
        <Route path="/layout/form" exact component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
