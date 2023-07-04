import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProviderWrapper } from "./context/auth.context"; 
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>      
        <App />
      </AuthProviderWrapper>     
    </Router>
  </React.StrictMode>
);
 
reportWebVitals();