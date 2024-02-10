import React from 'react'
import iicon from "../../assets/icons/info.svg";
import uploadimage from "../../assets/icons/upload.svg";
import MapImg from "../../assets/icons/map-pin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function LegalDocuments() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      businessname: "",
      city: "",
      country: "",
      state: "",
      address: "",
      openingtime: "",
      closeingtime: "",
      uploadfile: "",
      mobile: "",
      email: "",
    });
  
    const BusinessSubmit = async (e) => {
      e.preventDefault();
      try {
        if (
          !formData.email ||
          !formData.businessname ||
          !formData.mobile ||
          !formData.address ||
          !formData.city ||
          !formData.closeingtime ||
          !formData.country ||
          !formData.openingtime ||
          !formData.state ||
          !formData.uploadfile
        ) {
          Swal.fire({
            icon: "error",
            text: " Please check your all details",
          });
          return;
        }
  
        console.log(formData);
  
        const res = await axios.post(`http://localhost:3000/posts`, formData);
  
        console.log(res);
        setFormData(res.data.posts);
  
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            text: "! Business Information Details Successfully !",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
        navigate("/owner");
      } catch (error) {
        console.error("Bussiness information  error:", error);
        // Handle login error, show error message to the user
        Swal.fire({
          icon: "error",
          text: " Please check all  deltails",
        });
      }
  
      setFormData({
        businessname: "",
        city: "",
        country: "",
        state: "",
        address: "",
        openingtime: "",
        closeingtime: "",
        uploadfile: "",
        mobile: "",
        email: "", // Resetting the file input value
      });
    };
  return (
    <section>
    <div className="container mt-4 mb-3">
      <div className="side-content-head"> Legal Documents</div>
      <form onSubmit={BusinessSubmit}>
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
                name="businessname"
                value={formData.businessname}
                className="peer block w-full rounded border-2 border-gray-300 bg-white px-3 py-2 focus:outline-none focus:border-blue-500 "
                placeholder="Enter  Your Business Name *"
                onChange={(e) =>
                  setFormData({ ...formData, businessname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-lg-6 mt-4 mb-2">
            <label className="block   text-sm font-medium  group-label dark:text-white">
              Country * <img src={iicon} />
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              className="peer block w-full rounded border-2 border-gray-300 bg-white px-3 py-2 focus:outline-none focus:border-blue-500 "
            >
              <option>Choose a Country</option>
              <option>USA</option>
              <option>India</option>
              <option>SIngpur</option>
              <option>India</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Antigua</option>
              <option> Barbuda</option>
              <option>Argentina</option>
              <option>Armenia</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>United Kingdom</option>
              <option>Iceland</option>

              <option>Indonesia</option>
              <option>Iran</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Israel</option>
              <option>Italy</option>
            </select>
          </div>
          <div className="col-lg-6 mt-2 mb-2">
            <label className="block mb-2  text-sm font-medium  group-label dark:text-white">
              State * <img src={iicon} />
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              className="peer block w-full rounded border-2 border-gray-300 bg-white px-3 py-2 focus:outline-none focus:border-blue-500 "
            >
              <option>Choose a State</option>
              <option>Punjab</option>
              <option>Haryana</option>
              <option>Gujrat</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Rajasthan</option>
              <option>Tamil Nadu</option>
              <option>Uttarakhand</option>
              <option>Uttar Pradesh</option>
              <option>West Bengal</option>
            </select>
          </div>
          <div className="col-lg-6 mt-2 mb-2">
            <label className="block mb-2  text-sm font-medium  group-label dark:text-white">
              City * <img src={iicon} />
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="peer block w-full rounded border-2 border-gray-300 bg-white px-3 py-2 focus:outline-none focus:border-blue-500 "
            >
              <option>Choose a City</option>
              <option> Bengaluru</option>
              <option> Jaipur</option>
              <option> Mumbai</option>
              <option>Bhopal</option>
              <option> Delhi</option>
              <option>Hyderabad</option>
              <option> Kolkata</option>
              <option> Pune</option>
              <option> Ahmedabad</option>
              <option>Lucknow </option>
              <option>Kanpur </option>
              <option>Nagpur</option>
              <option>Thane </option>
              <option>Visakhapatnam</option>
              <option> Ludhiana </option>
              <option>Faridabad </option>
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
                  value={formData.address}
                  name="address"
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  id="address"
                  className="peer block w-full rounded border-2 border-gray-300 bg-white px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter Your Address *"
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
            <label className="blocktext-sm group-label font-bold mb-2">
              Opening Time *
            </label>
            <input
              className=" peer block w-full rounded border-2 border-gray-300 bg-white px-3 py-2 focus:outline-none focus:border-blue-500"
              id="openingtime"
              type="time"
              name="openingtime"
              value={formData.openingtime}
              onChange={(e) =>
                setFormData({ ...formData, openingtime: e.target.value })
              }
              placeholder="Select time"
            />
          </div>

          <div className="col-lg-6 mt-2 mb-2">
            <label className="block group-label text-sm font-bold mb-2">
              Closing Time *
            </label>
            <input
              className="peer block w-full rounded border-2 border-gray-300 bg-white px-3 py-2 focus:outline-none focus:border-blue-500"
              id="closeingtime"
              type="time"
              value={formData.closeingtime}
              name="closeingtime"
              onChange={(e) =>
                setFormData({ ...formData, closeingtime: e.target.value })
              }
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
                value={formData.email}
                id="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="kingsway.delhi@domino.com"
                className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
              />
              <button
                className="   py-1.5 px-4  bg-red-500 text-white  text-xs rounded-sm focus:outline-none"
                type="button"
              >
                Send OTP
              </button>
            </div>
          </div>

          <>
            <div className="col-lg-6 mt-2 mb-2">
              <label className="block group-label" id="mobile">
                Mobile Number *<img src={iicon} />
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  name="mobile"
                  country={"in"}
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  id="mobile"
                  placeholder="37453289457"
                  className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
                />
                <button className=" py-1.5 px-4  bg-red-500 text-white  text-xs rounded-sm focus:outline-none ">
                  <span> Send OTP</span>
                </button>
              </div>
            </div>
          </>

          <div className="col-lg-6  mt-2 mb-2">
            <label className="group-label">
              Upload image of your Restaurant * <img src={iicon} />{" "}
            </label>
            <div className="flex items-center justify-center w-50  ">
              <label
                id="uploadfile"
                className="flex flex-col items-center justify-center w-full h-40 border-2  rounded-lg cursor-pointer  border-gray-300  px-3 py-2 focus:outline-none focus:border-blue-500 bg-gray-50 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <img src={uploadimage} />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Click to upload{" "}
                  </p>
                </div>
                <input
                  id="uploadfile"
                  type="file"
                  value={formData.uploadfile}
                  onChange={(e) =>
                    setFormData({ ...formData, uploadfile: e.target.value })
                  }
                  className="hidden "
                />
              </label>
            </div>
          </div>
        </div>
        <div className="Manager-Details mt-2 mb-2">
          <button type="submit" className="Proceed-btn ">
            Proceed to Owner & Manager Details{" "}
          </button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default LegalDocuments