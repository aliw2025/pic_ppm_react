"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import Link from "next/link"; // Import the Link component

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

  function handleShowModal(){
    setShowModal(true);
  }
  function handHideModel(){
    setShowModal(false);
  }


  return (
    <div className=" mt-2 text-dark mx-4 ">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4>Vendors</h4>
          <button
            className="btn btn-primary"
            onClick={handleShowModal}
          >
            Add vendor
          </button>
        </div>
        <div className="card-body">
          <table className="table  table-striped table-bordered  ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Apex</td>
                <td>University Road</td>
                <td>
                  {" "}
                  <i className="fa fa-eye mx-2"></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Apex</td>
                <td>University Road</td>
                <td>
                  {" "}
                  <i className="fa fa-eye mx-2"></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Apex</td>
                <td>University Road</td>
                <td>
                  {" "}
                  <i className="fa fa-eye mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showModal && <div
        className="card"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        show = {showModal}
        style={{
          width: '100%',
          height: '100%  ',
          position: 'relative',
         
          // backgroundColor: 'rgba(0, 0, 0, 0.5)' // Corrected background color
        }}        // ,position:'absolute',top:'40%',left:'50%'
      >
        
      </div>}
    </div>
  );
}




// <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <p>Modal body text goes here.</p>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//                 onClick={handHideModel}
//               >
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>