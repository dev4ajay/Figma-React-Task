import React from "react";
import Header from "../sections/HeroSection";
import Sidebar from "../sections/sidebar";
import BankDetails from "../sections/BankDetails";

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
            <BankDetails />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
  );
}

export default page3;
