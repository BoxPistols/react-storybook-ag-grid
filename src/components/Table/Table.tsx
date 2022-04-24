import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import "ag-grid-community/dist/styles/ag-theme-dark.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// image assets
import Car from "../../assets/sedan.png";
import Jeep from "../../assets/jeep.png";
import Van from "../../assets/van.png";

const carPrice = (value: number) => {
    return { color: value > 50000 ? "#FF5733" : "#00E676" };
};

  

const carType = (value: string) => {
    return (<img
             src={value === "sedan" ? Car : value === "jeep" ? Jeep : Van}
             style={{ width: "24px", height: "24px" }}
            />);
};


const Table = ({ isDark }: any) => {

    const [columnDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price",
          cellStyle: (params: any) => {
            return carPrice(params.value);
          },
        },
        { field: "type",
          cellRenderer: (params: any) => {
            return carType(params.value);
          },
        }]);
        
        


    const [rowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000, type:"sedan" },
        { make: "Nissan", model: "KDH", price: 32000, type:"van" },
        { make: "KIA", model: "Sorento", price: 72000, type:"jeep" },
    ]);


    return (
        <div
        className={`ag-grid-default-table ${isDark ? "ag-theme-dark":"ag-theme-balham"}`}
        style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
            />
        </div>
    );
    
};

export default Table;
