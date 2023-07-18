import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
// import AuthProvider from "./contexts/AuthProvider";
import { LoginPageProvider } from "./contexts/LoginPageProvider"; // update with your file path

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginPageProvider>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <App />
        {/* </AuthProvider> */}
      </BrowserRouter>
    </LoginPageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
