import React from "react";
import ReactDOM from "react-dom/client";
import Freelance from "./freelance";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/freelance" element={<Freelance />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
