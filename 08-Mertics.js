import http from 'k6/http'
export let options = {
    vus: 10,
    duration: '10s'
}
export default function () {
    http.get('https://www.google.com/');
}



/*
    data_received..................: 4.0 MB 383 kB/s
     data_sent......................: 31 kB  2.9 kB/s
     http_req_blocked...............: avg=31.55ms  min=0s       med=1µs      max=789.62ms p(90)=1µs      p(95)=1µs     
     http_req_connecting............: avg=1.78ms   min=0s       med=0s       max=44ms     p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=408.57ms min=305.28ms med=354.25ms max=1.52s    p(90)=561.35ms p(95)=735.26ms
       { expected_response:true }...: avg=408.57ms min=305.28ms med=354.25ms max=1.52s    p(90)=561.35ms p(95)=735.26ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 232 
     http_req_receiving.............: avg=37.38ms  min=81µs     med=13.3ms   max=1.19s    p(90)=54.56ms  p(95)=125.29ms
     http_req_sending...............: avg=82.45µs  min=22µs     med=57µs     max=1.34ms   p(90)=108.9µs  p(95)=131.44µs
     http_req_tls_handshaking.......: avg=24.48ms  min=0s       med=0s       max=624.55ms p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=371.1ms  min=295.2ms  med=339.61ms max=851.74ms p(90)=525.78ms p(95)=541.72ms
     http_reqs......................: 232    22.427511/s
     iteration_duration.............: avg=440.28ms min=305.45ms med=355.08ms max=1.52s    p(90)=720.71ms p(95)=991.86ms
     iterations.....................: 232    22.427511/s
     vus............................: 10     min=10      max=10
     vus_max........................: 10     min=10      max=10

*/