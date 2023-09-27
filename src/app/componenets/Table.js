import { data } from "jquery";
import React from "react";
import { useState,useEffect } from "react";

export default function Table({columnNames,aliases, tableData}) {

  //  columnNames = ["id", "name",  "buisnessName", "address"];
  //  aliases = ["id", "name",  "buisness Name", "address"];

  //  data = [
  //   {
  //     id: 1,
  //     name: "apex",
  //     buisnessName: "apex Trd",
  //     address: "university Road",
  //   },
  //   {
  //     id: 1,
  //     name: "flex",
  //     buisnessName: "flex Trd",
  //     address: "university Road",
  //   },
  // ];
  // const [data,setData]= useState(null)
  // useEffect(()=>{
    
  //   if(tableData){
  //     console.log("this is props data");
  //     console.log(tableData);
  //     setData(tableData);
  //   }
  // },[tableData]);
  var data = tableData;

  return (
    <table className="table  table-striped table-bordered  ">
      <thead>
        <tr>
          {aliases.map((colName, index) => {
            return <th key={index}>{colName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        { data!=null? data.map((item, index) => {
          return <TableRow key={index} rowData={item} columnNames={columnNames}></TableRow>;
        }) : null}
      </tbody>
    </table>
  );
}

function TableRow({ rowData, columnNames }) {
  
  return (
   
      <tr key={rowData.id} >
        {columnNames.map((column, colIndex) => (
          <td key={colIndex}>{rowData[column]}</td>
        ))}
      </tr>
   
  );
}
