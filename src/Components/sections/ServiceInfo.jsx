import React, { useState } from "react";
import iicon from "../../assets/icons/info.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ServiceInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    page1: "",
page2: "",
page3: "",
page4: "",
  });


 
  const BusinessSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.page1 ||
       
        !formData.page2 ||
        !formData.page3 ||
       
        !formData.page4 
       
      ) {
        Swal.fire({
          icon: "error",
          text: " Please check fill all details",
        });
        return;
      }

     

      const res = await axios.post(`http://localhost:3000/posts`, formData);

      console.log(res);
      setFormData(res.data.posts);

      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          text: "!Service Details Successfully !",
          timer: 3000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
      navigate("/serviceinfo");
    } catch (error) {
      console.error("  error:", error);
      // Handle login error, show error message to the user
      Swal.fire({
        icon: "error",
        text: " Please check all  deltails",
      });
    }

    setFormData({
        page1: "",
      page2: "",
      page3:"",
      page4:""
     // Resetting the file input value
    });
  };

  return (
    <>
      <section>
        <div className="container mt-4 mb-3">
          <div className="side-content-head"> Service info</div>
          <form onSubmit={BusinessSubmit}>
         
            <div className="row">
              <div className="col-lg-6  mt-2 mb-2">
                <label className="block group-label" id="accountno">
               1  * <img src={iicon} />
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="page1"
                    value={formData.page1}
                    id="page1"
                    onChange={(e) =>
                      setFormData({ ...formData, page1: e.target.value })
                    }
                    placeholder="*******"
                    className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <>
                <div className="col-lg-6 mt-2 mb-2">
                  <label className="block group-label" id="mobile">
                    2 *<img src={iicon} />
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="page2"
                  
                      value={formData.page2}
                      onChange={(e) =>
                        setFormData({ ...formData, page2: e.target.value })
                      }
                      id="page2"
                      placeholder="******"
                      className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </>
            </div>
          
            <div className="row">
              <div className="col-lg-6  mt-2 mb-2">
                <label className="block group-label" id="accountno">
               3  * <img src={iicon} />
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="page3"
                    value={formData.page3}
                    id="page3"
                    onChange={(e) =>
                      setFormData({ ...formData, page3: e.target.value })
                    }
                    placeholder="*******"
                    className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <>
                <div className="col-lg-6 mt-2 mb-2">
                  <label className="block group-label" id="mobile">
                    4 *<img src={iicon} />
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="page4"
                
                      value={formData.page4}
                      onChange={(e) =>
                        setFormData({ ...formData, page4: e.target.value })
                      }
                      id="page4"
                      placeholder="******"
                      className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </>
            </div>
            <div className="Manager-Details mt-4 mb-2">
              <button type="submit" className="Proceed-btn ">
                Submit All Details
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ServiceInfo;
