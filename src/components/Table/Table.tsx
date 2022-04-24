import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// import the different themes from ag-grid
import "ag-grid-community/dist/styles/ag-theme-dark.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// import the types you defined for this component
import { TableType } from "./Table.types";

// assign variables for each of the props defined in your types
const Table = ({ isDark, rowData, pagination = false, perPage = 10, columnDefs }: TableType) => {

    return (
        <div
        // the theme can be dynamically assigned based on the `isDark` prop
        className={`ag-grid-default-table ${isDark ? "ag-theme-dark":"ag-theme-balham"}`}
        style={{ height: 400, width: 850 }}>
            <AgGridReact
                // the variables can be passed in here, moving the data and configuration out of this component
                rowData={rowData}
                columnDefs={columnDefs}
                pagination={pagination}
                paginationPageSize={perPage}
            />
        </div>
    );
    
};

export default Table;
