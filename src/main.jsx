import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);
