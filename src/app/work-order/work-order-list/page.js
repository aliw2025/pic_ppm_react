"use client";
import react, { useEffect, useState } from "react";
import Table from "../../componenets/Table";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function WorkOrders() {
  const [WorkOrders, setWorkOrders] = useState(null);
  const router = useRouter();

 
  function  deleteWorkOrder(id) {
    
    axios.delete("http://localhost/pic_ppm_api/api/Asset/"+id)
    .then((response)=>{

        toast.success("Asset deleted");  
       console.log("deleted");
       console.log(response);
       getWorkOrders();
    })
    .catch((error)=>{ 
      console.log(error);
    })
  }

  async function getWorkOrders() {
    console.log("one");
    try {
      var response = await axios.get("http://localhost/pic_ppm_api/api/WorkOrders");

      setWorkOrders(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
    console.log("two");
  }


  function handleDelete(id){
    console.log("delete "+id);
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteWorkOrder(id)
        },
        {
          label: 'No',
          
        }
      ]
    });

  }

  function handleEdit(id) {

    console.log("edit: "+id);
    router.push('/WorkOrders/add-asset?id='+id);
     
  }

  function handleDetail(id) {

    console.log("detail: "+id);

  }

  useEffect(() => {

    getWorkOrders();

  }, []);

  return (
    <div className="bg-light text-dark ">
      <div className="row">
        <link href="/"></link>
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Work Orders</h4>
              <button
                className="btn btn-primary"
                onClick={() => router.push("/work-order/add-work-order")}
              >
                Add Work order
              </button>
            </div>
            <div className="card-body">
              <Table
                columnNames={["id","equipment_category_name","equipment_type","manufacturer", "model", "serial_number"]}
                aliases={["id","category_name","equipment type","manufacturer","model", "serial_number"]}
                tableData={WorkOrders}
                onDelete={handleDelete}
                onDetails={handleDetail}
                onEdit={handleEdit}
              ></Table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
