import React from "react";
import HomePage from "./pages/Home";
import { Route, NavLink, Switch } from "react-router-dom";
import "./style/HomePage.css";
import EditNotice from "./pages/EditNotice";
import "./style/index.css";
import CreateNotice from "./pages/CreateNotice";
import About from "./pages/About";
import View from "./pages/View";

function App() {
  return (
    <div className="container-wrapper">
      <nav>
        <div className="title-header">
          <h1>Notice Book</h1>
        </div>
        <div className="nav-link">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/new-notice">
            New notice
          </NavLink>
          <NavLink exact to="/about">
            About
          </NavLink>
        </div>
      </nav>

      <Switch>
        <Route path="/new-notice" component={CreateNotice} />
        <Route path="/edit-notice/:id" component={EditNotice} />
        <Route path="/about" component={About} />
        <Route path= '/view-notice/:id' component={View}/>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
