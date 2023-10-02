"use client";
import react, { useEffect, useState } from "react";
import Table from "../../componenets/Table";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Assets() {
  const [assets, setAssets] = useState(null);

  async function getAssets() {
    console.log("one");
    try {
      var response = await axios.get("http://localhost/pic_ppm_api/api/Asset");

      setAssets(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
    console.log("two");
  }

  useEffect(() => {
    getAssets();
  }, []);

  const router = useRouter();
  return (
    <div className="bg-light text-dark ">
      <div className="row">
        <link href="/"></link>
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Assets</h4>
              <button
                className="btn btn-primary"
                onClick={() => router.push("/assets/add-asset")}
              >
                Add Asset
              </button>
            </div>
            <div className="card-body">
              <Table
                columnNames={["id","equipment_category_name","equipment_type","manufacturer", "model", "serial_number"]}
                aliases={["id","category_name","equipment type","manufacturer","model", "serial_number"]}
                tableData={assets}
              ></Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
