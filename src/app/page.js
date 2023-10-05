"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component
import VendorTable from "./componenets/VendorsTable";
import axios from "axios";
import Table from "./componenets/Table";

export default function Home() {
  // to handle the add and update vendor model
  const [showModal, setShowModal] = useState(false);
  // to handle the show vendor detail modal
  const [showVDetail, setShowVdetail] = useState(false);
  // to hanlde the contact form in vendor detail
  const [showContact, setShowContact] = useState(false);
  // vendors form action
  const [formAction, setFormAction] = useState("save");
   // all vendors data
   const [data, setData] = useState();
  // single vendor data
  const [vendorData, setVendorData] = useState({
    vendor_name: "",
    business_name: "",
    address: "",
  });

  // all vendor contacts
  const [vcontacts, setVcontacts] = useState();
  //  single vendor cantact data
  const [vendorContact, setVendorContact] = useState({
    name: "",
    designation: "",
    mobile: "",
    vendor: vendorData.id,
  });


  // handle vendor form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorData({ ...vendorData, [name]: value });
  };

  // handle vendor form change
  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setVendorContact({ ...vendorContact, [name]:  value });
  };


  // vendors
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

  // contact apis
  const handleSaveContact = () => {
    // Make the API POST request to store the vendor
    vendorContact.vendor = vendorData.id;
    axios
      .post("http://localhost/pic_ppm_api/api/Vendor/store-contact-person", vendorContact)
      .then((response) => {
        // Handle success
        console.log("Vendor saved successfully:", response.data);
        handleHideContact();
        handleGetVendor(vendorContact.vendor);
        
        
      })
      .catch((error) => {
        // Handle error
        console.error("Error saving vendor:", error);
      });
  };

  function onDelete(id) {
    handleDelete(id);
  }

  function onEdit(id) {
    handleGetVendor(id);
    handleShowModal("update");
  }

  // show and hide section

  function handleShowModal(action) {
    setShowModal(true);
    setFormAction(action);
  }

  function handHideModel() {
    setVendorData({ vendor_name: "", business_name: "", address: "" });
    setShowModal(false);
  }

  function handleDetail(id) {
    // opening the contact form in closed state
    setShowContact(false);
    handleGetVendor(id);
    setShowVdetail(true);
  }

  function handleDetailClose() {
    setVendorData({ vendor_name: "", business_name: "", address: "" });
    setShowVdetail(false);
  }

  function handleContactShow() {
    
    setShowContact(true);
  }

  function handleHideContact() {

    setVendorContact( {
      name: "",
      designation: "",
      mobile: "",
      vendor: vendorData.id,
    });
   
    setShowContact(false);
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
          <Table 
            columnNames={["id","vendor_name","business_name","address"]}
            aliases={["id","name","business name","address"]}
            tableData = {data}
            onDetails={handleDetail}
            onDelete={onDelete}
            onEdit={onEdit}
            >
          </Table>
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
            <div className="d-flex justify-content-end my-2">
              <button className="btn btn-primary" onClick={handleContactShow}>
                Add Contact{" "}
              </button>
            </div>
            {showContact && (
              <div className="card">
                <div className="row card-body">
                  <div className="col-4">
                    <input
                      value={vendorContact.name}
                      placeholder="name"
                      className="form-control"
                      name="name"
                      onChange={handleContactInputChange}
                    ></input>
                  </div>
                  <div className="col-4">
                    <input
                      value={vendorContact.designation} 
                      placeholder="Designation"
                      className="form-control"
                      name="designation"
                      onChange={handleContactInputChange}
                    ></input>
                  </div>
                  <div className="col-4">
                    <input
                      value={vendorContact.mobile}
                      placeholder="Contact"
                      className="form-control"
                      name="mobile"
                      onChange={handleContactInputChange}
                    ></input>
                  </div>
                  <div className="col-12 d-flex justify-content-center mt-4">
                    <button className="btn btn-primary me-2" onClick={handleSaveContact} >Save</button>
                    <button
                      className="btn btn-secondary me-2"
                      onClick={handleHideContact}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            <h4 className="my-4"> Contacts </h4>
            <Table columnNames={["name","designation","mobile"]} aliases={["name","designation","mobile"]} tableData={vendorData.contacts}  ></Table>
          </div>
        </div>
      )}
    </div>
  );
}
