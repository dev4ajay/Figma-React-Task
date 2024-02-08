import React, { useState } from "react";
import iicon from "../../assets/icons/info.svg";
import uploadimage from "../../assets/icons/upload.svg";
import MapImg from "../../assets/icons/map-pin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function ManagerDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    city: "",
    country: "",
    state: "",
    address: "",
    uploadfile: "",
    mobile:"",
    email:"",
  });

  const OwnerSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.email || !formData.fullname || !formData.mobile  || !formData.address || !formData.city   || !formData.country  || !formData.state || !formData.uploadfile ) {
      Swal.fire({
        icon: "error",
        text: " Please check your all details",
      });
      return;
    }
    console.log(formData);

    axios.post(`http://localhost:3000/posts` ,formData).then((res)=>{

      console.log(res);
      setFormData(res.posts)

      if (res.status === 201) {
         
        Swal.fire({
          icon: "success",
          text: "Owner & Manager Details  Successfully",
          timer: 3000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
      navigate("/")
    })
    .catch(error => {
      console.error(' error:', error);
      // Handle  error, show error message to the user
      Swal.fire({
        icon: "error",
        text: " Please check your  all details",
      });
    });
    setFormData({
      fullname: "",
      city: "",
      country: "",
      state: "",
      address: "",
      mobile:"",
      email:"",
     
      uploadfile: "",  // Resetting the file input value
    });
    

  };
  return (
    <>
      {" "}
      <section>
        <div className="container mt-4 mb-3">
          <div className="side-content-head">Owner & Manager Details</div>
          <button className="Owners mt-4 mb-2">Owner Details</button>
          <form onSubmit={OwnerSubmit}>
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
                    name="fullname"
                   value={formData.fullname}
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                    className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500 "
                    placeholder="Enter  Your FullName *"
                    
                  />
                </div>
              </div>
              <div className="col-lg-6  mt-3 mb-2 ">
                <label className="group-label">Profile pic * </label>
                <div className="flex items-center justify-center w-50 ">
                  <label
                    id="uploadfile"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 "
                  >
                    <div className="flex flex-col items-center justify-center mt-5 pb-4">
                      <img src={uploadimage} />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Click to upload{" "}
                      </p>
                    </div>
                    <input  
                    value={formData.uploadfile}
                    onChange={(e) =>
                        setFormData({ ...formData, uploadfile: e.target.value })
                      }  id="uploadfile" type="file" className="hidden"    />
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-lg-6 mt-2 mb-2">
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
                  className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500 "
                >
                  <option>Choose a Country</option>
                  <option>USA</option>
                  <option>India</option>
                  <option>SIngpur</option>
                  <option>India</option>
                </select>
              </div>
            </div>
            <div className="row">
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
                  className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500 "
                >
                  <option>Choose a State</option>
                  <option>Punjab</option>
                  <option>Haryana</option>
                  <option>Gujrat</option>
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
                  className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500 "
                >
                  <option>Choose a City</option>
                  <option> Hisar</option>
                  <option> Gurugram</option>
                  <option> Jind</option>
                  <option>Rohtak</option>
                  <option> Karnal</option>
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
                      value={formData.address}
                      name="address"
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      id="address"
                      className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
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

            <div className="row mt-2 mb-2">
              <div className="col-lg-6">
                <label className="block group-label" id="email">
                  E-mail *
                </label>
                <div className="flex items-center">
                <input
                    type="email"
                  name="email"
                  value={formData.email}
                    id="email"
                    
                  onChange={(e=>setFormData({...formData , email:e.target.value}))}
                    placeholder="kingsway.delhi@domino.com"
                    className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    className=" py-1.5 px-4  bg-red-500 text-white  text-xs rounded-sm focus:outline-none  "
                    type="button"
                  >
                    Send OTP
                  </button>
                </div>
                <div className="flex gap-2 justify-end mb-4 mt-3">
                  <label
                    id="default-radio"
                    className="ms-2 text-sm font-medium group-label dark:text-gray-300"
                  >
                    Same as business e-mail
                  </label>
                  <input
                    id="default-radio"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 mt-2  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  "
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <label className="block group-label" id="email">
                  Mobile Number *
                </label>
                <div className="flex items-center">
                <input
                    type="number"
                   name="mobile"
                   value={formData.mobile}
                    id="mobile"
                    
                 onChange={(e=>setFormData({...formData , mobile:e.target.value}))}
                    placeholder="37453289457"
                    className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    className=" py-1.5 px-4  bg-red-500 text-white  text-xs rounded-sm focus:outline-none "
                    type="button"
                  >
                    Send OTP
                  </button>
                </div>
                <div className="flex gap-2  justify-end  mb-4 mt-3">
                  <label
                    id="default-radio"
                    className="ms-2 text-sm font-medium group-label  dark:text-gray-300"
                  >
                    Same as business mobile number
                  </label>
                  <input
                    id="default-radio"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 mt-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  "
                  />
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="d-fles mt-4 ">
                <p>Do you want to fill manager details?</p>
                <button className="yes-btn" type="submit">Yes</button>
                <button className="yes-btn" type="button">No</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ManagerDetails;
