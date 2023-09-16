import React from "react";
export default function VendorTable() {
  var data = [
    {
      id: 1,
      name: "apex",
      buisnessName: "apex Trd",
      address: "university Road",
    },
    {
      id: 2,
      name: "flex",
      buisnessName: "flex Trd",
      address: "university Road",
    },
  ];

  return (
    <table className="table  table-striped table-bordered  ">
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
        {data.map((vendorData, index) => {
         return <VendorRow key={index} {...vendorData} />;
        })}
      </tbody>
    </table>
  );
}

function VendorRow(rowData) {
  // var rowData = props.rowData;
  // console.log(props.rowData);
  return (
    <tr>
      <td>{rowData.id}</td>
      <td>{rowData.buisnessName}</td>
      <td>{rowData.buisnessName}</td>
      <td>{rowData.address}</td>
      <td>
        <i className="fa fa-eye mx-2"></i>
      </td>
    </tr>
  );
}
