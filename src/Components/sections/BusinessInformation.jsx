import React from "react";
import iicon from "../../assets/icons/info.svg";
import clock from "../../assets/icons/clock.svg";
import down from "../../assets/icons/down.svg";
import uploadimage from "../../assets/icons/upload.svg";
import MapImg from "../../assets/icons/map-pin.png";

function Informationsection() {
  return (
    <>
      <section>
        <div className="container mt-4 mb-3">
          <div className="side-content-head"> Business Information</div>
          <form>
            <div className="row">
              <div className="col-lg-6 mt-4 mb-2">
                <div>
                  <label
                    id="businessname"
                    className="block   text-sm group-label  dark:text-white"
                  >
                    Business Name *<img src={iicon} />
                  </label>
                  <input
                    type="text"
                    id="businessname"
                    className="bg-gray-50 border  text-sm  focus:ring-blue-500  block w-full p-2.5 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                    placeholder="Enter  Your Business Name *"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-4 mb-2">
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
              <div className="col-lg-6 mt-2 mb-2">
                <label
                  id="state"
                  className="block mb-2  text-sm font-medium  group-label dark:text-white"
                >
                  State * <img src={iicon} />
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
                  City * <img src={iicon} />
                </label>
                <select
                  id="city"
                  className="bg-gray-50 border  text-sm  focus:ring-blue-500  block w-full p-2.5 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
                >
                  <option>Choose a City</option>
                  <option> Hisar</option>
                </select>
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

              <div className="col-lg-6 mt-2 mb-2">
                <label
                  className="blocktext-sm group-label font-bold mb-2"
                  id="time"
                >
                  Opening Time *
                </label>
                <input
                  className=" border rounded w-full py-2 px-3leading-tight focus:outline-none focus:shadow-outline bg-gray-50"
                  id="time"
                  type="time"
                  placeholder="Select time"
                />
              </div>

              <div className="col-lg-6 mt-2 mb-2">
                <label
                  className="block group-label text-sm font-bold mb-2"
                  id="time"
                >
                  Closing Time *
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline"
                  id="time"
                  type="time"
                  placeholder="Select time"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6  mt-2 mb-2">
                <label className="block group-label" id="email">
                  E-mail * <img src={iicon} />
                </label>
                <div className="flex items-center">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="kingsway.delhi@domino.com"
                    className="w-full py-2 px-3 border border-gray-300  bg-gray-50 rounded-sm  focus:outline-none focus:border-blue-500"
                  />
                  <button
                    className="  py-1 px-1  bg-red-500 text-white text-xs rounded-sm   focus:outline-none"
                    type="button"
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              <div className="col-lg-6 mt-2 mb-2">
                <label className="block group-label" id="mobile">
                  Mobile Number *<img src={iicon} />
                </label>
                <div className="flex items-center">
                  <input
                    type="tel"
                    name="number"
                    id="mobile"
                    placeholder="37453289457"
                    className="w-full py-2 px-3 border border-gray-300 bg-gray-50 rounded-sm  focus:outline-none focus:border-blue-500"
                  />
                  <button
                    className=" py-1 px-1 bg-red-500 text-white  text-xs rounded-sm focus:outline-none"
                    type="button"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <div className="col-lg-6  mt-2 mb-2">
                <label className="group-label">
                  Upload image of your Restaurant * <img src={iicon} />{" "}
                </label>
                <div className="flex items-center justify-center w-50  ">
                  <label
                    id="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 "
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
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
            <div className="Manager-Details mt-2 mb-2">
              <button
                type="button"
                onClick={() => {
                  window.location = "/page2";
                }}
                className="Proceed-btn "
              >
                Proceed to Owner & Manager Details{" "}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Informationsection;
