import http from "k6/http";
// Ramp up and Ramp down user

export let options = {
    stages: [
        { duration: '10s', target: 5 }, // 5 users for 10s
        { duration: '20s', target: 3 }, // 3 users for 20s
        { duration: '20s', target: 0 } // 3 users for 0s
    ]
}
// Main Function
export default function () {
    http.get('https://www.google.com/');
} 