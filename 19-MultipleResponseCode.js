//  http_req_failed................: 50.00% ✓ 

// if return multiple response code it's show 50% failed.
// set expected Status code

import http from "k6/http";
import { check } from "k6";

var url1 = 'https://run.mocky.io/v3/b778818d-3aee-4d60-8ddc-8bc4575737ac' // response code 401
var url2 = 'https://run.mocky.io/v3/acc22da1-beb5-4b12-a3f0-4cbbb8eaa6e5' // response code 200

var k1 = 'https://httpbin.test.k6.io/status/500'; // return 500 code
var k2 = 'https://httpbin.test.k6.io/status/400'; // return 400 code

// Set accepted code 
http.setResponseCallback(
    http.expectedStatuses(401, 200)
    );

export default function(){
    var res1 = http.get(url1)
    console.log(`${res1.status}`)
    var res2 = http.get(url2)
    console.log(`${res2.status}`)

}