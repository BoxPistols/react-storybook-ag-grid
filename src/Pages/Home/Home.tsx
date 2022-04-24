import React from "react";
import { row } from "../../components/Table/Table.types";
import Table from "../../components/Table/Table";

const Home = ({ rowData, title }: { rowData: Array<row>; title: string; footer: string }) => {
    return (<div><Table rowData={rowData} /></div>);
};

export default Home;
