import React from "react";
import Header from "../sections/HeroSection";
import Sidebar from "../sections/sidebar";
import PanAadhaarDetails from "../sections/PanAadhaarDetails";

function page3() {
  return (
    <React.Fragment>
    <section>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Sidebar />
          </div>
          <div className="col-lg-8">
            <PanAadhaarDetails />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
  );
}

export default page3;
