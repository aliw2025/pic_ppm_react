import { data } from "jquery";
import React from "react";
import { useState, useEffect } from "react";

export default function Table({
  columnNames,
  aliases,
  tableData,
  onDelete,
  onEdit,
  onDetails,
}) {

  var data = tableData;

  return (
    <table className="table  table-striped table-bordered  ">
      <thead>
        <tr>
          {aliases.map((colName, index) => {
            return <th key={index}>{colName}</th>;
          })}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data != null
          ? data.map((item, index) => {
              return (
                <TableRow
                  key={index}
                  rowData={item}
                  columnNames={columnNames}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  onDetails={onDetails}
                ></TableRow>
              );
            })
          : null}
      </tbody>
    </table>
  );
}

function TableRow({ rowData, columnNames,onDelete,onEdit,onDetails }) {
  return (
    <tr key={rowData.id}>
      {columnNames.map((column, colIndex) => (
        <td key={colIndex}>{rowData[column]}</td>
      ))}
      <td>
        <i
          className="fa fa-eye mx-2"
          onClick={() => {
           
            onDetails(rowData.id);
          }}
        ></i>
        <i
          className="fa fa-edit mx-2"
          onClick={() => {
            onEdit(rowData.id);
          }}
        ></i>
        <i
          className="fa fa-trash mx-2"
          onClick={() => {
           onDelete(rowData.id);
          }}
        ></i>
      </td>
    </tr>
  );
}

  // var [data ,setData]  = useState([]);
  // useEffect(()=>{

  //   if(tableData){
  //     console.log("this is props data");
  //     console.log(tableData);
  //     setData(tableData);
  //   }
  // },[tableData]);