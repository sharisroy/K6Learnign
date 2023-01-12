/*
Requirement - verify when API returns response code
check response if code !=200
then wait for 1 secound and call again


Counter is a golobal variable
This is not for per vertual user
This is not perfect example for multiple users it will fail

*/

import { Counter } from "k6/metrics";
var retryCounter = new Counter("GetAPI_MAX_RETRY")
import http from "k6/http";
import { sleep } from "k6";

export let options = {
    vus: 2,
    duration: '2s'
}
export default function () {
    var maxAttempts = 5

    retryCounter.add(1)
    for (var retries = 5; retries > 0; retries--) {
        var numberOfAttempts = maxAttempts - retries + 1
        let response = http.get('https://run.mocky.io/v3/4a82b3f1-8ee0-4e5f-8ba9-36060a6bda8b');
        // if status code !=400, retry 
        if (response.status != 404) {
            retryCounter.add(1)
            console.log(`response is not 404, it is ${response.status} attempts ${numberOfAttempts} VU ${__VU} Iterations ${__ITER}`)
            // call after 1 second 
            sleep(1)
        } else {
            // response is correct 
            console.log(`Response is correct`)
            retries == 0
        }
    }
}