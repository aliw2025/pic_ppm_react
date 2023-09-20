import React, { useEffect ,useState} from "react";
import axios from 'axios';

export default function VendorTable(props) {

  const [data,setData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/pic_ppm_api/api/Vendor');
      setData(response.data.data);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Data updated:', data);
  }, [data])
 

  // console.log(props);

  // const [data,setData]= useState(null)

  // useEffect(()=>{

  //   if(props.data){
  //     console.log("this is props data");
  //     console.log(props.data);
  //     setData(props.data);
  //   }
  // },[props.data]);

  // var data = props.data;  
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
         return <VendorRow key={index} {...vendorData} />;
        }): ""}
      </tbody>
    </table>
  );
}

function VendorRow(rowData) {

  return (
    <tr>
      <td>{rowData.id}</td>
      <td>{rowData.vendor_name}</td>
      <td>{rowData.business_name}</td>
      <td>{rowData.address}</td>
      <td>
        <i className="fa fa-eye mx-2"></i>
        <i className="fa fa-edit mx-2"></i>
        <i className="fa fa-trash mx-2"></i>
      </td>
    </tr>
  );
}
