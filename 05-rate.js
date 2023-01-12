import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics"; // Import Rate form  Metrics

export let errorRate = new Rate('errors')


export let options = {
    thresholds:{
        errors: ['rate<0.1'] // i.e. 10% error
    }
}

export default function(){
    let response = http.get('https://run.mocky.io/v3/4a82b3f1-8ee0-4e5f-8ba9-36060a6bda8b');
    console.log(`${response.body.length}`)
    const checkRate1 = check(response, {
        'is response is 200 : ' : (r) => r.status ===200,
    })
    errorRate.add(!checkRate1);
    const checkRate2 = check(response, {
        'is body length is 20 : ' : (r) => r.body.length ===20,
    })
    errorRate.add(!checkRate2);
}
