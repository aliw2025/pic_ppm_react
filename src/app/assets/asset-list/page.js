"use client";
import react from "react";
import Table from "../../componenets/Table";
import { useRouter } from 'next/navigation'



export default function Assets(){
  const router = useRouter()
    return(
        <div className='bg-light text-dark '>
        <div className='row'>
         <link href='/'></link>
          <div className='col-12'>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4>Assets</h4>
                <button className="btn btn-primary" onClick={() => router.push('/assets/add-asset')}>Add Asset</button>
              </div>
              <div className="card-body">
                <Table columnNames={["Name","Location","department"]} aliases={["Name","Location","department"]}>

                </Table>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
}