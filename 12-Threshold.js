/*
    Threshold define pass or fail critera for tests
    Example: 
     System does not produce more than 10% of errors
     95% of requests must finish within 200ms.
     99% of requests must finish within 400ms.

    Threshold analyse performance metrics defined above determine final tets result

    Result: 
    http_req_duration..............: avg=235ms    min=235ms    med=235ms    max=235ms    p(90)=235ms    p(95)=235ms  
    failed requests................: 0.00%  ✓ 0        ✗ 1 

*/

import http from "k6/http";
import { Rate } from "k6/metrics";


// Declare Rate
const failureRate = new Rate('failed requests')

export let options = {
    thresholds: {
        'failed requests': ['rate<0.1'],
        // 'http_req_duration': ['p(95)<200', 'p(99)<400']
        'http_req_duration': ['p(95)<20', 'p(99)<40']
    }
};

export default function () {
    let respons = http.get('https://run.mocky.io/v3/4a82b3f1-8ee0-4e5f-8ba9-36060a6bda8b');
    //Threadsholds
    failureRate.add(respons.status !== 200) // if response is not 200, then fail
}