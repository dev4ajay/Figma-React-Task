import React from "react";
import Header from "../sections/HeroSection";
import Sidebar from "../sections/sidebar";
import ManagerDetails from "../sections/OwnerManagerDetails";

function Page2() {
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
              <ManagerDetails />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Page2;
