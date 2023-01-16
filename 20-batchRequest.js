// import http from 'k6/http';
// import { check } from 'k6';

// export default function () {
//   const responses = http.batch([
//     ['GET', 'https://test.k6.io', null, { tags: { ctype: 'html' } }],
//     ['GET', 'https://test.k6.io/style.css', null, { tags: { ctype: 'css' } }],
//     ['GET', 'https://test.k6.io/images/logo.png', null, { tags: { ctype: 'images' } }],
//   ]);
//   check(responses[0], {
//     'main page status was 200': (res) => res.status === 200,
//   });
// }



import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const req1 = {
    method: 'GET',
    url: 'https://httpbin.test.k6.io/get',
  };
  const req2 = {
    method: 'GET',
    url: 'https://test.k6.io',
  };
  const req3 = {
    method: 'POST',
    url: 'https://httpbin.test.k6.io/post',
    body: {
      hello: 'world!',
    },
    params: {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    },
  };
  const responses = http.batch([req1, req2, req3]);
  // httpbin.test.k6.io should return our POST data in the response body, so
  // we check the third response object to see that the POST worked.
  check(responses[2], {
    'form data OK': (res) => JSON.parse(res.body)['form']['hello'] == 'world!',
  });
}

