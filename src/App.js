import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusinessPage from "./Components/pages/BusinessPage";
import OwnerPage from "./Components/pages/OwnerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import PanAadhaarPage from './Components/pages/PanAadhaarPage';
import LegalDocumentPage from "./Components/pages/LegalDocumentsPage"
import BankDetailsPage from "./Components/pages/BankDetailsPage";
import ServiceInfoPage from "./Components/pages/ServiceInfoPage"
// import PreviewDocument from "./Components/pages/PreviewDocumentPage";
// import ReachIncreasedPage from "./Components/pages/ReachIncreasedPage"
function App() {
  return (
    <div className="Apps">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BusinessPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/owner" element={<OwnerPage />} />
             <Route path="/alldocument" element={<PanAadhaarPage />} />
            <Route path="/legaldocument" element={<LegalDocumentPage />} /> 
            <Route path="/bankdetails" element={<BankDetailsPage />} />
            <Route path="/serviceinfo" element={<ServiceInfoPage />} />
            {/* <Route path="/previewdocument" element={<PreviewDocument />} />
            <Route path="/reachincreased" element={<ReachIncreasedPage />} /> */}
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
