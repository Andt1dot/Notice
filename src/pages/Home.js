import React from "react";
import { Route, Switch } from "react-router-dom";
import { DeleteModal } from "../components/DeleteModal";
import NoticeCard from "../components/NoticeCard";
import "../style/HomePage.css";
import "../style/index.css";
import View from "./View";

const Home = () => {
  return (
    <div className="home-container">
      <NoticeCard />
      <Switch>
        <Route path="/delete-notice/:id" component={DeleteModal} />
      </Switch>
    </div>
  );
};

export default Home;
