
import http from "k6/http";
import { check } from "k6";

export default function(){
    let response = http.get('https://run.mocky.io/v3/4a82b3f1-8ee0-4e5f-8ba9-36060a6bda8b');
    console.log(`response body is ${response.body}`)
    console.log(`response body length is ${response.body.length}`)
    console.log(`Number of Vurtula User ${__VU}`)
    console.log(`Number of iteration ${__ITER}`)
}