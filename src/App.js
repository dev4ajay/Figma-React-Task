import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page1 from "./Components/pages/BusinessPage";
import Page2 from "./Components/pages/OwnerPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="Apps">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
