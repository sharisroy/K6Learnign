import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 600,
  duration: '30s',
};

export default function () {
  // 

  console.log(`Main Function`)
}

var a;

function print(b) {
  a = b;
  console.log(`${b}`)
}

function printa(b) {
  console.log(`${a}`)
}

module.exports = {a,print, printa}