import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from "k6/data";
import http from 'k6/http';
import { check } from 'k6';


// Read Data From File
const txtData = new SharedArray("text file data", function() {
    // return array
    return papaparse.parse(open('./txtData.txt'), { header: true }).data;
});
const csvData = new SharedArray("csv file data", function() {
    // return array
    return papaparse.parse(open('./data.csv'), { header: true }).data;
});




export default function () {

    console.log(`${JSON.stringify(txtData)}`)
    console.log(`${JSON.stringify(txtData[2])}`)
    // console.log(`${txtData.length}`)
    // console.log(`${txtData[2]['name']}`)
    // csvprintAllData()
    // txtPrintAllData()
}

// Print all Data from CSV
 function csvprintAllData(){
    console.log(`.....................Print Data from CSV`)
    csvData.forEach(element => {
        console.log(`${element.name}`)
    });
}

// Print all Data from TXT
function txtPrintAllData(){
    console.log(`.....................Print Data from TXT`)
    txtData.forEach(element => {
        console.log(`${element.pin}`)
    });
}