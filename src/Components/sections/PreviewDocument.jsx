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
          <div className="side-content-head"> Preview Documents</div>
       
        </div>
      </section>
    </>
  );
}

export default ServiceInfo;
