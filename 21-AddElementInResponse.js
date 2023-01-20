import http from "k6/http";

export default function () {
    var response = http.get('https://run.mocky.io/v3/fb700aa6-fca2-497d-84d5-e7dc93375fd2')


    var body = JSON.parse(response.body)
    console.log(JSON.stringify(body))  // old Body
    
    body.email = "haris@mail.com"
    console.log(JSON.stringify(body))  // new Body

}