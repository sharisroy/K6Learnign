/*
Checks use for assertion, pass or fail request

*/

import http from "k6/http";
import { check } from "k6";

export let options = {
    vus: 10,
    duration: '10s',
    thresholds:{
        // here threshold is configured on check metrics. 
        // rate of successfull check must be greater than 95%
        'checks':['rate>0.95']
    }
}

export default function(){
    let respons = http.get('https://www.google.com');
    
    check(respons, {
        // is status is 500
        // 'is status is 500 : ' : r=> r.status ===500
        'is status is 200 : ' : r=> r.status ===200  // true condition
    })
}