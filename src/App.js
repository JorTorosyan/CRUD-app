import React from "react";
import './App.css';
import { renderRoutes } from "react-router-config";
import Routes from "./router/router";
import {Switch} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <Switch>{renderRoutes(Routes)}</Switch>
      </div>
  );
}

export default App;
