import React from "react";
import Header from "../sections/HeroSection";
import Sidebar from "../sections/sidebar";
import ServiceInfo from "../sections/ServiceInfo";

function page6() {
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
            <ServiceInfo />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
  );
}

export default page6;
