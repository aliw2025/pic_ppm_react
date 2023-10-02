"use client";
import react, { useEffect } from "react";
import Table from "../../componenets/Table";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import { data } from "jquery";

export default function Assets() {
console.log("ddcfdf");
var router = useRouter();

  var asset = [];
  var assets = [];
  const[departments,setDepartments]  = useState([]);
  const[vendors,setVendors] = useState([]);
  const [blocks,setBlocks] = useState([]);
  const [floors,setFloors] = useState([]);

  useEffect(()=>{

    function getFormData(){
     
        axios.get("http://localhost/pic_ppm_api/api/Asset/create")
      .then((response)=>{
        console.log("this is reponse"+response);
        console.log(response.data);
        setFloors(response.data.floors);       
        setDepartments(response.data.departments); 
        setVendors(response.data.vendors);
        setBlocks(response.data.blocks);
        console.log(departments);
      }).catch((error)=>{
        console.log(error);
      })

      
    }

    getFormData();

  },[])

  

  const [formData, setFormData] = useState({
    asset_tech_cat: '',
    equipment_category_name: '',
    equipment_type: '',
    manufacturer: '',
    model: '',
    serial_number: '',
    fa_number: '',
    equipment_seq_number: '',
    manufacture_date: '',
    installation_date: '',
    asset_status: '',
    vendor: '',
    file_name: '',
    building_block: '',
    floor: '',
    department: '',
    room_area: '',
    section: '',
    sub_section: '',
    custodian_name: '',
    custodian_ofc_ext: '',
    custodian_mobile: '',
    custodian_email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file_name: e.target.files[0] });
  };

  const handleSubmit = async () => {

    // e.preventDefault();

    try {
      const response = await axios.post("http://localhost/pic_ppm_api/api/Asset", formData,{headers: {
        'Content-Type': 'multipart/form-data'
      }});
      console.log("asset create:", response.data);
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
                <button className="btn btn-primary me-2" onClick={()=>{ handleSubmit(); }}> Save  </button>
                <button className="btn btn-secondary" onClick={()=>{ router.back();}} > Cancel  </button>

              </div>
              
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <label className="mt-1 form-label">
                    Asset Technical Category{" "}
                  </label>
                  <select
                    name="asset_tech_cat"
                    id=""
                    className="form-control"
                    value={formData.asset_tech_cat}
                    onChange={handleInputChange}
                  ></select>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Equipment Category Name</label>
                  <input
                    name="equipment_category_name"
                    placeholder="Name"
                    type="text"
                    className="form-control"
                    value={formData.equipment_category_name}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Equipment Type</label>
                  <input
                    name="equipment_type"
                    placeholder="Equipment Type"
                    type="text"
                    className="form-control"
                    value={formData.equipment_type}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Manufacturer</label>
                  <input
                    name="manufacturer"
                    placeholder="Manufacturer"
                    type="text"
                    className="form-control"
                    value={formData.manufacturer}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Model</label>
                  <input
                    name="model"
                    placeholder="Model"
                    type="text"
                    className="form-control"
                    value={formData.model}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Serial number</label>
                  <input
                    name="serial_number"
                    placeholder="Serial number"
                    type="text"
                    className="form-control"
                    value={formData.serial_number}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">FA #</label>
                  <input
                    name="fa_number"
                    placeholder="FA #"
                    type="text"
                    className="form-control"
                    value={formData.fa_number}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label">Equipment Sequence #</label>
                  <input
                    name="equipment_seq_number"
                    placeholder="Equipment Sequence #"
                    type="text"
                    className="form-control"
                    value={formData.equipment_seq_number}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label"> Manufacture Date</label>
                  <input
                    name="manufacture_date"
                    placeholder="Manufacture Date"
                    type="date"
                    className="form-control"
                    value={formData.manufacture_date}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label"> Installation Date</label>
                  <input
                    name="installation_date"
                    placeholder=" Installation Date"
                    type="date"
                    className="form-control"
                    value={formData.installation_date}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label"> Status</label>
                  <select
                    name="asset_status"
                    id=""
                    className="form-control"
                    value={formData.asset_status}
                    onChange={handleInputChange}
                  ></select>
                </div>
                <div className="col-4">
                  <label  className="mt-1 forml-label">
                    Vendor
                  </label>
                  <select name="vendor" id="" className="form-control"
                    value={formData.vendor}
                    onChange={handleInputChange}>
                    { vendors.map((vendor)=>{
                      return (
                        <option key={vendor.id} value={vendor.id} >{vendor.vendor_name} </option>
                      );
                    }) }
                  </select>
                </div>
                <div className="col-4">
                  <label className="mt-1 form-label"> Manual</label>
                  <input
                    name="file_name"
                    placeholder="Attach Manual"
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
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
                            value={formData.building_block}
                            onChange={handleInputChange}
                          >
                            {/* Map over building block data */}
                            {blocks.map((block) => (
                              <option
                                key={block.id}
                                value={block.id}
                                defaultValue={
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
                          <select name="floor" id="" className="form-control"   value={formData.floor}
                            onChange={handleInputChange}>
                            {/* Map over floor data */}
                            {floors && floors.map((floor) => (
                              <option
                                key={floor.id}
                                value={floor.id}
                                defaultValue={asset && asset.floor === floor.id}
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
                            value={formData.department}
                            onChange={handleInputChange}
                          >
                            {/* Map over department data */}
                            {departments.map((dept) => (
                              <option
                                key={dept.id}
                                value={dept.id}
                                defaultValue={asset && asset.department === dept.id}
                              >
                                {dept.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Room/Area</label>
                          <input
                            name="room_area"
                            type="text"
                            className="form-control"
                            value={formData.room_area}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Section</label>
                          <input
                            name="section"
                            placeholder="Section"
                            type="text"
                            className="form-control"
                            value={formData.section}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Sub Section</label>
                          <input
                            name="sub_section"
                            placeholder="Sub Section"
                            type="text"
                            className="form-control"
                            value={formData.sub_section}
                            onChange={handleInputChange}
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
                            name="custodian_name"
                            placeholder="Custodian Name"
                            type="text"
                            className="form-control"
                            value={formData.custodian_name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">
                            Office Extention
                          </label>
                          <input
                            name="custodian_ofc_ext"
                            placeholder="Office Extention"
                            type="text"
                            className="form-control"
                            value={formData.custodian_ofc_ext}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Mobile</label>
                          <input
                          
                            name="custodian_mobile"
                            placeholder="Mobile"
                            type="text"
                            className="form-control"
                            value={formData.custodian_mobile}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-3">
                          <label className="mt-1 form-label">Email</label>
                          <input
                           value={formData.custodian_email}
                           onChange={handleInputChange}
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
