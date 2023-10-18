"use client";
import react, { useEffect } from "react";
import Table from "../../componenets/Table";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { data } from "jquery";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RingLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { userAgent } from "next/server";

export default function WorkOrder() {
  var router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log("id: " + id);

  useEffect(() => {
    function getAsset() {
      axios
        .get("http://localhost/pic_ppm_api/api/WorkOrder/" + id)
        .then((response) => {
          console.log("got the asset");
          console.log(response.data);
          setFormData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getAsset();
  }, [id]);

  const [loading, setLoading] = useState(false);
  const [requestTypes, setRequestTypes] = useState(null);
  const [statuses, setStatuses] = useState(null);
  const [vendors, setVendors] = useState(null);
  const [priorities,setPriorities] = useState(null);
  const [departments,setDepartments]= useState(null);
  const [assets,setAssets] = useState(null);
  const [technicians,setTechnicians] = useState(null);



  useEffect(() => {
    function getFormData() {
      setLoading(true); // Set loading to true when starting the request

      axios
        .get("http://localhost/pic_ppm_api/api/WorkOrder/create")
        .then((response) => {
          console.log("this is reponse");
          console.log(response.data);
          //  setFloors(response.data.floors);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false); // Set loading to true when starting the request
        });
    }

    getFormData();
  }, []);

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file_name: e.target.files[0] });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost/pic_ppm_api/api/WorkOrder",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("WorkOrder created:", response.data);
      toast.success("Record Saved");
    } catch (error) {
      console.error("Error creating contact:", error);
    } finally {
      setLoading(false); // Set loading to true when starting the request
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        "http://localhost/pic_ppm_api/api/WorkOrder/update" + id,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("work Order updated :", response.data);
      toast.success("Record updated");
    } catch (error) {
      console.log(error);
      // toast.failed(error);
    } finally {
      setLoading(false); // Set loading to true when starting the request
    }
  };
  console.log("testing id");
  console.log(formData);
  return (
    <div className="bg-light text-dark ">
      {loading && (
        <RingLoader
          className="spinner"
          size={150}
          color={"#36D7B7"}
          loading={loading}
        />
      )}

      <div className="row">
        <link href="/"></link>
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div>
                <h4>Work Order</h4>
              </div>
              <div>
                {id == null ? (
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      handleUpdate();
                    }}
                  >
                    update
                  </button>
                )}

                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    router.back();
                  }}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <label className="mt-1 form-label">Request Type</label>
                  <select
                    name="request-type"
                    id=""
                    className="form-control"
                    value={""}
                    onChange={handleInputChange}
                  >
                    {/* Map over department data */}
                    {requestTypes &&
                      requestTypes.map((req) => (
                        <option key={req.id} value={req.id}>
                          {req.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">department</label>
                  <select
                    name="department"
                    id=""
                    className="form-control"
                    value={""}
                    onChange={handleInputChange}
                  >
                    {/* Map over department data */}
                    {departments &&
                      departments.map((dep) => (
                        <option key={dep.id} value={dep.id}>
                          {dep.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Due date</label>
                  <input
                    name="due-date"
                    placeholder="due date"
                    type="date"
                    className="form-control"
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label"> Status</label>
                  <select
                    name="status"
                    id=""
                    className="form-control"
                    onChange={handleInputChange}
                  >
                    {statuses &&
                      statuses.map((status) => {
                        return (
                          <option key={status.id} value={status.id}>
                            {status.status_name}{" "}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Category</label>
                  <input
                    name="Category"
                    placeholder="Category"
                    type="text"
                    className="form-control"
                    value={formData.Category ?? ""}
                    onChange={handleInputChange}
                  ></input>
                </div>

                <div className="col-4">
                  <label className="mt-1 form-label">Asset</label>
                  <select
                    className="form-control"
                    onChange={handleInputChange}
                    name="asset"
                  >
                    {assets &&
                      assets.map((asset) => {
                        return (
                          <option key={asset.id} value={asset.id}>
                            {asset.name}{" "}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Priority</label>
                  <select
                    className="form-control"
                    name="priority"
                    onChange={handleInputChange}
                  >
                    {priorities &&
                      priorities.map((priority) => {
                        return (
                          <option key={priority.id} value={priority.id}>
                            {priority.name}{" "}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="col-4">
                  <label className="mt-1 forml-label">Vendor</label>
                  <select
                    name="vendor"
                    id=""
                    className="form-control"
                    value={formData.vendor ?? ""}
                    onChange={handleInputChange}
                  >
                    {vendors && vendors.map((vendor) => {
                      return (
                        <option key={vendor.id} value={vendor.id}>
                          {vendor.vendor_name}{" "}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-4">
                  <label className="mt-1 forml-label">Techincian</label>
                  <select
                    name="technechcian"
                    id=""
                    className="form-control"
                    onChange={handleInputChange}
                  >
                    {technicians && technicians.map((technician) => {
                      return (
                        <option key={technician.id} value={technician.id}>
                          {technician.name}{" "}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
