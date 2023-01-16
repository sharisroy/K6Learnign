import http from "k6/http";
import { check } from "k6";

const { resArray, insertData, printData } = require("./18-SaveResponseIntoArray.js")
export default function () {
    insertData();
    // console.log(`${resArray.length}`)
    // console.log(`${resArray[1].name}`)
    console.log(printData()); // Prints: 
}