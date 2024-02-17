import React, { useState } from "react";
import iicon from "../../assets/icons/info.svg";
import uploadimage from "../../assets/icons/upload.svg";
import MapImg from "../../assets/icons/map-pin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function LegalDocuments() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    UploadPan: "",
    uploadfile: "",
  
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const fileName = file.name; // Extract the filename
    setFormData({ ...formData, uploadfile:fileName });
    console.log("Uploaded file:", fileName);
 
  };
  const PanCardUpload = (e) => {
    const file = e.target.files[0];
    const fileName = file.name; // Extract the filename
    setFormData({ ...formData, UploadPan:fileName });
    console.log("Uploaded file:", fileName);
   
  };
  const BusinessSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.UploadPan ||
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
          text: "!Legal Documents Successfully !",
          timer: 3000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
      navigate("/bankdetails");
    } catch (error) {
      console.error("  error:", error);
      // Handle login error, show error message to the user
      Swal.fire({
        icon: "error",
        text: " Please check all  deltails",
      });
    }

    setFormData({  
      uploadfile: "",
      UploadPan:""// Resetting the file input value
    });
  };

  return (
    <>
      <section>
        <div className="container mt-4 mb-3">
          <div className="side-content-head">  Legal Documents Details</div>
          <form onSubmit={BusinessSubmit}>
         

            <div className="row">
        
            <div className="col-lg-6 mt-2 mb-2">
      <label className="group-label">
        1  * <img src={iicon} alt="icon" />
      </label>
      <div className="flex items-center justify-center ">
        <label
          htmlFor="uploadfile"
          className="flex flex-col items-center justify-center w-full h-40 border-2 rounded-lg cursor-pointer border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center  ">
        
           
              <>
                <img src={uploadimage} alt="upload icon" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Click to upload
                </p>
              </>
          
          </div>
          <input
            id="uploadfile"
            type="file"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>
    </div>
            <div className="col-lg-6 mt-2 mb-2">
      <label className="group-label">
        2 * <img src={iicon} alt="icon" />
      </label>
      <div className="flex items-center justify-center ">
        <label
          id="uploadfile"
          className="flex flex-col items-center justify-center w-full h-40 border-2 rounded-lg cursor-pointer border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center  ">
         
              <>
                <img src={uploadimage} alt="upload icon" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Click to upload
                </p>
              </>
         
          </div>
          <input
            id="UploadPan"
            type="file"
            onChange={PanCardUpload}
            className="hidden"
          />
        </label>
      </div>
    </div>
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


export default LegalDocuments;
