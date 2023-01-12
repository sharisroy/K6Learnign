/*
    RPS - Request per second 
    Total number of request = duration * rps

    Example: 
    request 1 : http_reqs......................: 235    45.508416/s
    request 2: http_reqs......................: 205     2.295637/s

    the request depends on devices configuration


*/


import http from "k6/http";

export let options = {
    vus: 2,
    duration: '5s'
    // rps: 5
}

export default function(){
    http.get('https://run.mocky.io/v3/4a82b3f1-8ee0-4e5f-8ba9-36060a6bda8b')
}