import React, { useState } from "react";
import iicon from "../../assets/icons/info.svg";
import clock from "../../assets/icons/clock.svg";
import down from "../../assets/icons/down.svg";
import uploadimage from "../../assets/icons/upload.svg";
import MapImg from "../../assets/icons/map-pin.png";
function ManagerDetails() {
  return (
    <>
      {" "}
      <section>
        <div className="container mt-4 mb-3">
          <div className="side-content-head">Owner & Manager Details</div>
          <button className="Owners mt-4 mb-2">Owner Details</button>
          <form>
            <div className="row">
              <div className="col-lg-6 mt-3 mb-2">
                <div>
                  <label
                    id="fullname"
                    className="block  mb-2 text-sm group-label  dark:text-white"
                  >
                    Full Name*
                    <img src={iicon} />
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    className="bg-gray-50 border  text-sm  focus:ring-blue-500  block w-full p-2.5 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                    placeholder="Enter  Your FullName *"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6  mt-3 mb-2">
                <label className="group-label">Profile pic * </label>
                <div className="flex items-center justify-center  profile-pic-img  ">
                  <label
                    id="dropzone-file"
                    className="flex flex-col items-center justify-center w-full  border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 "
                  >
                    <div className="flex flex-col items-center justify-center mt-5 pb-4">
                      <img src={uploadimage} />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Click to upload{" "}
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 ">
                <label
                  id="country"
                  className="block   text-sm font-medium  group-label dark:text-white"
                >
                  Country * <img src={iicon} />
                </label>
                <select
                  id="country"
                  className="bg-gray-50 border  text-sm  focus:ring-blue-500  block w-full p-2.5 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                >
                  <option>Choose a Country</option>
                  <option> india</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-2 mb-2">
                <label
                  id="state"
                  className="block mb-2  text-sm font-medium  group-label dark:text-white"
                >
                  State
                </label>
                <select
                  id="state"
                  className="bg-gray-50 border  text-sm  focus:ring-blue-500  block w-full p-2.5 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                >
                  <option>Choose a State</option>
                  <option> Haryana</option>
                </select>
              </div>

              <div className="col-lg-6 mt-2 mb-2">
                <label
                  id="city"
                  className="block mb-2  text-sm font-medium  group-label dark:text-white"
                >
                  City
                </label>
                <select
                  id="city"
                  className="bg-gray-50 border  text-sm  focus:ring-blue-500  block w-full p-2.5 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                >
                  <option>Choose a City</option>
                  <option> Hisar</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 mt-2 mb-2">
              <div className="relative">
                <label
                  id="address"
                  className="block text-sm group-label dark:text-white"
                >
                  Address*
                  <img
                    src={iicon}
                    alt="icon"
                    className="inline-block w-4 h-4 ml-1"
                  />
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="address"
                    className="bg-gray-50 border text-sm focus:ring-blue-500 block w-full p-2.5 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter Your Address *"
                    required
                  />
                  <img
                    src={MapImg}
                    alt="map image"
                    className="absolute inset-y-0 right-0 w-6 h-6 mt-2 mr-3"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-2 mb-2">
              <div className="col-lg-6">
                <label className="block group-label" id="email">
                  E-mail *
                </label>
                <div className="flex items-center">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="kingsway.delhi@domino.com"
                    className="w-full py-2 px-3 border border-gray-300 bg-gray-50  focus:outline-none focus:border-blue-500"
                  />
                  <button
                    className="  py-1 px-1  bg-red-500 text-white text-xs focus:outline-none "
                    type="button"
                  >
                    Send OTP
                  </button>
                </div>
                <div class="flex gap-2 justify-end mb-4 mt-3">
                  <label
                    id="default-radio"
                    class="ms-2 text-sm font-medium group-label dark:text-gray-300"
                  >
                    Same as business e-mail
                  </label>
                  <input
                    id="default-radio"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 mt-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  "
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <label className="block group-label" id="email">
                  Mobile Number *
                </label>
                <div className="flex items-center">
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="37453289457"
                    className="w-full py-2 px-3 border border-gray-300  bg-gray-50 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    className=" py-1 px-1 bg-red-500 text-white text-xs focus:outline-none"
                    type="button"
                  >
                    Send OTP
                  </button>
                </div>
                <div class="flex gap-2  justify-end  mb-4 mt-3">
                  <label
                    id="default-radio"
                    class="ms-2 text-sm font-medium group-label  dark:text-gray-300"
                  >
                    Same as business mobile number
                  </label>
                  <input
                    id="default-radio"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 mt-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  "
                  />
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="d-fles mt-4 ">
                <p>Do you want to fill manager details?</p>
                <button className="yes-btn">Yes</button>
                <button className="yes-btn">No</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ManagerDetails;
