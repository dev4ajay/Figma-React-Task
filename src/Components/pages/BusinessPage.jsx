import React from "react";
import Header from "../sections/HeroSection";
import Sidebar from "../sections/sidebar";
import Informationsection from "../sections/BusinessInformation";

function Page1() {
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
              <Informationsection />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Page1;
