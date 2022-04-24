import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";
import { TableType } from "./Table.types";

import Car from "../../assets/sedan.png";
import Jeep from "../../assets/jeep.png";
import Van from "../../assets/van.png";

// define sane defaults that can be spread as a base for every story
const defaultArgs: TableType = {
    isDark: false,
    pagination: true,
    perPage: 10,
    rowData: [],
    columnDefs: []
};



export default {
    title: "Ag-Grid/Table",
    component: Table,
    argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    ...defaultArgs,
    isDark: false,
    rowData: [
        { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
        { make: "Nissan", model: "KDH", price: 32000, type: "van" },
        { make: "KIA", model: "Sorento", price: 72000, type: "jeep" }
    ],
    columnDefs: [
        { field: "make", },
        { field: "model" },
        { field: "price" },
        { field: "type" }
    ]

};

const carPrice = (value: number) => {
    return { color: value > 50000 ? "#FF5733" : "#00E676" };
};

  

const carType = (value: string) => {
    return <img 
        alt="" 
        src={value === "sedan" ? Car : value === "jeep" ? Jeep : Van} 
        style={{ width: "24px", height: "24px" }} 
    />;
};

export const CustomCellRender = Template.bind({});
CustomCellRender.args = {
    ...defaultArgs,
    isDark: false,
    rowData: [
        { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
        { make: "Nissan", model: "KDH", price: 32000, type: "van" },
        { make: "KIA", model: "Sorento", price: 72000, type: "jeep" }
    ],
    columnDefs: [
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
        }]

};

export const NoData = Template.bind({});
NoData.args = {
    ...defaultArgs
};
