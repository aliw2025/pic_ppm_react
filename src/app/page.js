"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import Link from "next/link"; // Import the Link component
import VendorTable from "./componenets/VendorsTable"; 

export default function Home() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  var c = 0;
  function Click() {
    console.log("i am clicked");
    setCount(count + 1);
    c = c + 1;
    // count =
  }

  function handleShowModal() {
    console.log("settig true");
    setShowModal(true);
  }
  function handHideModel() {
    setShowModal(false);
  }

  return (
    <div className=" mt-2 text-dark mx-4 ">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4>Vendors</h4>
          <button className="btn btn-primary" onClick={handleShowModal}>
            Add vendor
          </button>
        </div>
        <div className="card-body">
          {/* <table className="table  table-striped table-bordered  ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Buisness Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Apex</td>
                <td>Apex Trd</td>
                <td>University Road</td>
                <td>
                  {" "}
                  <i className="fa fa-eye mx-2"></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Apex</td>
                <td>Apex Trd</td>
                <td>University Road</td>
                <td>
                  {" "}
                  <i className="fa fa-eye mx-2"></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Apex</td>
                <td>Apex Trd</td>
                <td>University Road</td>
                <td>
                  {" "}
                  <i className="fa fa-eye mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table> */}
          <VendorTable></VendorTable>
        </div>
      </div>

      {showModal && (
        <div
          className="card"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          show={showModal}
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
              <input placeholder="Name" className="form-control"></input>
            </div>
            <div className="col-6">
              <label className="form-label">Business Name</label>
              <input
                placeholder="Business Name"
                className="form-control"
              ></input>
            </div>
            <div className="col-12 mt-2">
              <label className="form-label">Address</label>
              <textarea
               
                className="form-control"
              ></textarea>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button className="my-4 btn btn-primary me-2">Save </button>
              <button className="my-4 btn btn-secondary" onClick={handHideModel} >Cancel </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

