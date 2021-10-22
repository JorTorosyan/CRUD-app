import React from "react";
import './App.css';
import { renderRoutes } from "react-router-config";
import Routes from "./router/router";
import {Switch} from "react-router-dom";
import Sidebar from "./components/sidebar";


function App() {

  return (
      <div className="app">
          <Sidebar />
          <div className="content">
              <Switch>{renderRoutes(Routes)}</Switch>
          </div>
      </div>
  );
}

export default App;
