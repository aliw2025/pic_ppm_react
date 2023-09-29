"use client";
import react from "react";
import Table from "../../componenets/Table";
import { useState } from "react";
import { useRouter } from 'next/navigation'
export default function Assets() {

  var router = useRouter();

  var asset = [];
  var assets = [];
  var departments = [];
  var floors = [];
  var blocks = [];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("file", formData.file);

    try {
      const response = await axios.post("/api/contacts", formDataToSend);
      console.log("Contact created:", response.data.contact);
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };
  return (
    <div className="bg-light text-dark ">
      <div className="row">
        <link href="/"></link>
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div>
                <h4> Add new Equipment</h4>
              </div>
              <div >
                <button className="btn btn-primary me-2"> Save  </button>
                <button className="btn btn-secondary" onClick={()=>{ router.back();}} > Cancel  </button>

              </div>
              
            </div>
            <div className="card-body">
              {/* <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input type="file" name="file" onChange={handleFileChange} />
                </div>
                <button type="submit">Submit</button>
              </form> */}
              <div class="row">
                <div class="col-4">
                  <label class="mt-1 form-label">
                    Asset Technical Category{" "}
                  </label>
                  <select
                    name="asset_tech_cat"
                    id=""
                    class="form-control"
                  ></select>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label">Equipment Category Name</label>
                  <input
                    name="equipment_category_name"
                    placeholder="Name"
                    type="text"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label">Equipment Type</label>
                  <input
                    name="equipment_type"
                    placeholder="Equipment Type"
                    type="text"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label">Manufacturer</label>
                  <input
                    name="manufacturer"
                    placeholder="Manufacturer"
                    type="text"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label">Model</label>
                  <input
                    name="model"
                    placeholder="Model"
                    type="text"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label">Serial number</label>
                  <input
                    name="serial_number"
                    placeholder="Serial number"
                    type="text"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label">FA #</label>
                  <input
                    name="fa_number"
                    placeholder="FA #"
                    type="text"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label">Equipment Sequence #</label>
                  <input
                    name="equipment_seq_number"
                    placeholder="Equipment Sequence #"
                    type="text"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label"> Manufacture Date</label>
                  <input
                    name="manufacture_date"
                    placeholder="Manufacture Date"
                    type="date"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label"> Installation Date</label>
                  <input
                    name="installation_date"
                    placeholder=" Installation Date"
                    type="date"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label"> Status</label>
                  <select
                    name="asset_status"
                    id=""
                    class="form-control"
                  ></select>
                </div>
                <div class="col-4">
                  <label for="" class="mt-1 forml-label">
                    Vendor
                  </label>
                  <select name="vendor" id="" class="form-control"></select>
                </div>
                <div class="col-4">
                  <label class="mt-1 form-label"> Manual</label>
                  <input
                    name="file_name"
                    placeholder="Attach Manual"
                    type="file"
                    class="form-control"
                  ></input>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row ">
                        <div className="col-3">
                          <label className="mt-1 form-label">
                            Building Block
                          </label>
                          <select
                            name="building_block"
                            id=""
                            className="form-control"
                          >
                            {/* Map over building block data */}
                            {blocks.map((block) => (
                              <option
                                key={block.id}
                                value={block.id}
                                selected={
                                  asset && asset.building_block === block.id
                                }
                              >
                                {block.building_block_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Floor</label>
                          <select name="floor" id="" className="form-control">
                            {/* Map over floor data */}
                            {floors.map((floor) => (
                              <option
                                key={floor.id}
                                value={floor.id}
                                selected={asset && asset.floor === floor.id}
                              >
                                {floor.floor_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Department</label>
                          <select
                            name="department"
                            id=""
                            className="form-control"
                          >
                            {/* Map over department data */}
                            {departments.map((dept) => (
                              <option
                                key={dept.id}
                                value={dept.id}
                                selected={asset && asset.department === dept.id}
                              >
                                {dept.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Room/Area</label>
                          <input
                            value={asset ? asset.room_area : ""}
                            name="room_area"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Section</label>
                          <input
                            value={asset ? asset.section : ""}
                            name="section"
                            placeholder="Section"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Sub Section</label>
                          <input
                            value={asset ? asset.sub_section : ""}
                            name="sub_section"
                            placeholder="Sub Section"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-3">
                          <label className="mt-1 form-label">
                            {" "}
                            Custodian Name
                          </label>
                          <input
                            value={asset ? asset.custodian_name : ""}
                            name="custodian_name"
                            placeholder="Custodian Name"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">
                            Office Extention
                          </label>
                          <input
                            value={asset ? asset.office_extention : ""}
                            name="custodian_ofc_ext"
                            placeholder="Office Extention"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Mobile</label>
                          <input
                            value={asset ? asset.mobile : ""}
                            name="custodian_mobile"
                            placeholder="Mobile"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Email</label>
                          <input
                            value={asset ? asset.email : ""}
                            name="custodian_email"
                            placeholder="Email"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
