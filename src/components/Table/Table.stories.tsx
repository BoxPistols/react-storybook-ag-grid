import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";

export default {
    title: "Ag-Grid/Table",
    component: Table,
    argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    isDark: false,
    rowData: [
        { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
        { make: "Nissan", model: "KDH", price: 32000, type: "van" },
        { make: "KIA", model: "Sorento", price: 72000, type: "jeep" }
    ],
};

export const NoData = Template.bind({});
NoData.args = {
    isDark: false,
    rowData: [],
};
