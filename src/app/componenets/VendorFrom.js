

export default  VendorForm(){

    return (
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
              
              onClick={ formAction=="save"?handleSave:handleUpdate}
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
    );
}