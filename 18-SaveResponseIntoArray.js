import http from "k6/http";

var url = 'https://reqres.in/api/unknown/'

var resArray = []
export default function () {

    insertData()
    printData()

}

export function insertData() {
    for (var i = 1; i < 5; i++) {
        var res = http.get(url + i);
        var data = JSON.parse(res.body).data
        resArray.push(data)
    }

    console.log(`Number Of Data insert into array : ${resArray.length}`)

}
export function printData() {


    for(var i = 0; i<resArray.length ; i++){
        // console.log(`ID: ${resArray[i].id}\tName: ${resArray[i].name}`) // For All
        if( `${resArray[i].name}` === 'fuchsia rose'){
            console.log(`ID: ${resArray[i].id}\tName: ${resArray[i].name}`)
            break;
        }
    }
}
// Send To another js. if want to print
module.exports = {resArray, insertData, printData}
