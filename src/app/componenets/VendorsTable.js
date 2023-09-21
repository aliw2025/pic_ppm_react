import React, { useEffect ,useState} from "react";
import axios from 'axios';

export default function VendorTable(props) {


  const [data,setData]= useState(null)

  useEffect(()=>{
    
    if(props.data){
      console.log("this is props data");
      console.log(props.data);
      setData(props.data);
    }
  },[props.data]);

  function onDelete(id) {

    props.onDelete(id);

  }

  function onEdit(id) { 
    props.onEdit(id);
  }
  

  return  (
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
        { data!=null? data.map((vendorData, index) => {
         return <VendorRow onDetail={()=>{props.onDetail}} onDelete={onDelete} onEdit={onEdit} key={index} {...vendorData} />;
        }): ""}
      </tbody>
    </table>
  );
}

function VendorRow(rowData) {

  
  function handleEdit(id){

    console.log("editing: "+id);
     rowData.onEdit(id);

  }

  function handleDelete(id){
    console.log("deleting: "+id);
    rowData.onDelete(id);
  }

  return (
    <tr>
      <td>{rowData.id}</td>
      <td>{rowData.vendor_name}</td>
      <td>{rowData.business_name}</td>
      <td>{rowData.address}</td>
      <td>
        <i className="fa fa-eye mx-2"onClick={()=>{ console.log('eye'); rowData.onDetail(rowData.id)}} ></i>
        <i className="fa fa-edit mx-2" onClick={()=> { handleEdit(rowData.id) }  }></i>
        <i className="fa fa-trash mx-2"onClick={()=>{ handleDelete(rowData.id)}} ></i>
      </td>
    </tr>
  );
}
