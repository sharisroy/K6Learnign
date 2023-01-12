/*
    TREAND is a custom metrics 
*/

// import { Trend } from "k6/metrics";
import { Counter, Trend } from "k6/metrics"; // Multiple Packages in single module
import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";


export let errorRate = new Rate(`errors`)
var retryTrend = new Trend('GETAPI_MAX_RETRY_TREND')

// define trend
var getApiTrendMocky = new Trend("Mocky_Trend_Get_Api_Duration")
var getApiTrendWaittingMocky = new Trend("Mocky_Trend_Get_Api_Waitting")
var getApiTrendHowhttps = new Trend("Howhttps_Trend_Get_Api_Duration")
var getApiTrendWaittingHowhttps = new Trend("Howhttps_Trend_Get_Api_Waitting")

// define Options
// export let options = {
//     thresholds : {
//         errors: ['rate<0.1']
//     }
// }

export default function () {
    let responsehowhttps = http.get('https://howhttps.works/')
    let responsemocky = http.get('https://run.mocky.io/v3/4a82b3f1-8ee0-4e5f-8ba9-36060a6bda8b');


    // added response duration inside custom trend
    // http_req_duration..............: avg=588.84ms min=588.84ms med=588.84ms max=588.84ms p(90)=588.84ms p(95)=588.84ms
    // Trend_Get_Api_Duration.........: avg=588.848  min=588.848  med=588.848  max=588.848  p(90)=588.848  p(95)=588.848 
    // both er same for one api
    // http duration will provide cummulative response for multiple api request in a single script
    getApiTrendMocky.add(responsemocky.timings.duration)
    getApiTrendWaittingMocky.add(responsemocky.timings.waiting)

    getApiTrendHowhttps.add(responsehowhttps.timings.duration)
    getApiTrendWaittingHowhttps.add(responsehowhttps.timings.waiting)


    /* 
    http_req_duration = summation of total duration / number of duration
     http_req_duration.................: avg=233.27ms min=216.32ms med=233.27ms max=250.22ms p(90)=246.83ms p(95)=248.52ms 
     Mocky_Trend_Get_Api_Duration......: avg=250.224  min=250.224  med=250.224  max=250.224  p(90)=250.224  p(95)=250.224
     Howhttps_Trend_Get_Api_Duration...: avg=216.326  min=216.326  med=216.326  max=216.326  p(90)=216.326  p(95)=216.326 
      
     http_req_waiting..................: avg=184.14ms min=118.26ms med=184.14ms max=250.01ms p(90)=236.83ms p(95)=243.42ms
     Mocky_Trend_Get_Api_Waitting......: avg=250.011  min=250.011  med=250.011  max=250.011  p(90)=250.011  p(95)=250.011 
     Howhttps_Trend_Get_Api_Waitting...: avg=118.269  min=118.269  med=118.269  max=118.269  p(90)=118.269  p(95)=118.269
    
    */


}