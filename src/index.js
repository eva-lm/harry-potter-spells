import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react"; 
import { HashRouter } from "react-router-dom";
import { App } from "./components/App";

ReactDOM.render(
  <Auth0Provider 
  domain="evamy.eu.auth0.com" 
  clientId="FiFLaMhfvG7dyVSyQ7ldzyRgCuPYMRTD" 
  redirectUri={window.location.origin}>
  <HashRouter>
    <App />
  </HashRouter>
  </Auth0Provider>
,
  document.getElementById("root")
);
