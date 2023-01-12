/*
Dummy API : https://run.mocky.io/v3/e237d192-6601-4789-9115-0c527e49856d
what is iteration ? -> vu will keep on producing for 10 seconds i.e duration that we have specified
Check response 
*/

import http from "k6/http";
import { check } from "k6";

export default function () {
    // this function returns response code
    let response = http.get('https://run.mocky.io/v3/e237d192-6601-4789-9115-0c527e49856d');

    console.log(`response body : ${response.body.length} for number of user ${__VU} and iteration ${__ITER}`)

    check(response,{
        // here use === so along with 200, it also checks for data type ie number === number, string === string.
        'is response status is 200 : ' : (r) => r.status === 200,
        'body size is 0 bytes: ' : (r) => r.body.length == 0,
    })
}
