import React from "react";
import Spreadsheet from "react-spreadsheet";
 
const data = [
  [{ value: "Vanilla" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }]
];
 
const BeginnerSheetWeek1BTC = () => <Spreadsheet data={data} />;

export default BeginnerSheetWeek1BTC.js;