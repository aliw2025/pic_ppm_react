"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component
import VendorTable from "./componenets/VendorsTable";
import axios from "axios";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showVDetail, setShowVdetail] = useState(false);

  const [data, setData] = useState();

  const [formAction, setFormAction] = useState("save");

  const [vendorData, setVendorData] = useState({
    vendor_name: "",
    business_name: "",
    address: "",
  });

  function handleShowModal(action) {
    setShowModal(true);
    setFormAction(action);
  }

  function handHideModel() {
    setVendorData({ vendor_name: "", business_name: "", address: "" });
    setShowModal(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorData({ ...vendorData, [name]: value });
  };

  const getVendors = async () => {
    try {
      const response = await axios.get(
        "http://localhost/pic_ppm_api/api/Vendor"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getVendors();
  }, []);

  // the function is just for debuging
  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  const handleSave = () => {
    // Make the API POST request to store the vendor
    axios
      .post("http://localhost/pic_ppm_api/api/Vendor", vendorData)
      .then((response) => {
        // Handle success
        console.log("Vendor saved successfully:", response.data);
        setVendorData({ vendor_name: "", business_name: "", address: "" });
        handHideModel();
        getVendors();
      })
      .catch((error) => {
        // Handle error
        console.error("Error saving vendor:", error);
      });
  };

  const handleUpdate = (id) => {
    axios
      .put("http://localhost/pic_ppm_api/api/Vendor/" + id, vendorData)
      .then((response) => {
        // Handle success
        console.log("Vendor updated successfully:", response.data);
        setVendorData({ vendor_name: "", business_name: "", address: "" });
        handHideModel();
        getVendors();
      })
      .catch((error) => {
        // Handle error
        console.error("Error saving vendor:", error);
      });
  };

  const handleGetVendor = async (id) => {
    try {
      const response = await axios.get(
        "http://localhost/pic_ppm_api/api/Vendor/" + id
      );
      console.log("vendor: ");
      console.log(response);
      setVendorData(response.data.data);
    } catch (error) {
      console.error("Error fetching Vendor:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost/pic_ppm_api/api/Vendor/" + id
      );

      console.log(response);
      getVendors();
    } catch (error) {
      console.error("Error fetching Vendor:", error);
    }
  };

  function onDelete(id) {
    handleDelete(id);
  }

  function onEdit(id) {
    handleGetVendor(id);
    handleShowModal("update");
  }
  function handleDetail(id) {
    console.log("i am king");
    handleGetVendor(id);
    setShowVdetail(true);
  }
  function handleDetailClose() {
    setVendorData({ vendor_name: "", business_name: "", address: "" });
    setShowVdetail(false);
  }

  return (
    <div className=" mt-2 text-dark mx-4 ">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4>Vendors</h4>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleShowModal("save");
            }}
          >
            Add vendor
          </button>
        </div>
        <div className="card-body">
          <VendorTable
            onDetail={handleDetail}
            onDelete={onDelete}
            onEdit={onEdit}
            data={data}
          >
            {" "}
          </VendorTable>
        </div>
      </div>

      {showModal && (
        <div
          className="card"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          show={showModal.toString()}
          style={{
            width: "700px",
            position: "absolute",
            top: "20%",
            left: "30%",
          }} // ,position:'absolute',top:'40%',left:'50%'
        >
          <div className="card-body row">
            <div className="col-6">
              <label className="form-label"> Name</label>
              <input
                name="vendor_name"
                value={vendorData.vendor_name}
                placeholder="Name"
                className="form-control"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col-6">
              <label className="form-label">Business Name</label>
              <input
                value={vendorData.business_name}
                placeholder="Business Name"
                className="form-control"
                name="business_name"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col-12 mt-2">
              <label className="form-label">Address</label>
              <textarea
                value={vendorData.address}
                name="address"
                onChange={handleInputChange}
                className="form-control"
              ></textarea>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button
                className="my-4 btn btn-primary me-2"
                onClick={formAction == "save" ? handleSave : handleUpdate}
              >
                {formAction.toString()}
              </button>
              <button
                className="my-4 btn btn-secondary"
                onClick={handHideModel}
              >
                Cancel{" "}
              </button>
            </div>
          </div>
        </div>
      )}
      {showVDetail && (
        <div
          className="card"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          show={showVDetail.toString()}
          style={{
            width: "900px",
            position: "absolute",
            top: "20%",
            left: "30%",
          }}
        >
          <div className="card-header d-flex justify-content-between">
            <div>
              <h4>{vendorData.business_name.toUpperCase()}</h4>
              <p>{vendorData.business_name}</p>
            </div>

            <i className="fa fa-close" onClick={() => handleDetailClose()}></i>
          </div>
          <div className="card-body">
            <p>
              {" "}
              <span style={{ fontStyle: "bold" }}>Address :</span>{" "}
              {vendorData.address}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
