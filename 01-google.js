// Call google.com
// When 1000s of users call google.com, what will happen
// Call means get - http.get

import http from 'k6/http'

// Main Function where user will be spread
export default function(){
    http.get('https://www.google.com/');
}