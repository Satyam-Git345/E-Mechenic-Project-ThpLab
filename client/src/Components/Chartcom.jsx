import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Chartcom() {
  const data = [
    // {
    //   name: "Services",
    //   uv: 4000,
    //   pv: 9400,
    //   amt: 2400,
    // },
    {
      name: "Customers",
      uv: 7000,
      pv: 8000,
      amt: 1210,
    },
    {
      name: "Reviews",
      uv: 8000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Products",
      uv: 6780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Our Clints",
      uv: 7890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Revinues",
      uv: 7390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Offers",
      uv: 5490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontFamily: "Helvetica Neue",
          color: "grey",
          textShadow: "0px 5px 7px ",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        Graph That Trust Our Business
      </h1>
      <BarChart
        width={1000}
        height={500}
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 120,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#33b1ff" />
        <Bar dataKey="uv" fill="#08bdba" />
      </BarChart>
    </>
  );
}

export default Chartcom;
