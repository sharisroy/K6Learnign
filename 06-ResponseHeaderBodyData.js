/*
    Print all response Data
*/

import http from "k6/http";
import { check } from "k6";

export default function () {
    let url = "https://reqres.in/api/users?page=2";
    const response = http.get(url);

    console.log(`Full Response: ${JSON.stringify(response)}`)


    console.log(`-----------------Object---------------------`)
    console.log(`Remote IP : ${response.remote_ip}`)
    console.log(`URL : ${response.url}`)


    console.log(`-----------------Header---------------------`)
    console.log(`Full Header : ${JSON.stringify(response.headers)}`)
    console.log(`Cache-Control : ${response.headers['Cache-Control']}`)
    console.log(`Date : ${response.headers.Date}`)
    console.log(`Content-Type : ${response.headers['Content-Type']}`)

    console.log(`-----------------Body---------------------`)
    let body = JSON.parse(response.body)
    console.log(`Full Body : ${JSON.stringify(body)}`)
    console.log(`Page Number : ${body.page}`)
    console.log(`Total Page Number : ${body.total_pages}`)
    console.log(`Total Object Number : ${body.total}`)

    console.log(`-----------------Body Data---------------------`)
    // console.log(`Full Body Data : ${JSON.stringify(body.data)}`)
    let data = JSON.stringify(body.data)
    console.log(`Full Data : ${data}`)
    let d = JSON.parse(data)
    // console.log(`Full Data : ${d[0].email}`)
    // Print all 
    d.forEach(element => {
        console.log(`ID: ${element.id} \tEmail: ${element.email} \tFirst Name: ${element.first_name}`)
    });
}