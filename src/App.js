import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusinessPage from "./Components/pages/BusinessPage";
import OwnerPage from "./Components/pages/OwnerPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="Apps">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BusinessPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/owner" element={<OwnerPage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
