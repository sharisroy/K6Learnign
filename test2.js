/*
    Create Post Request
    Url: https://run.mocky.io/v3/15dcbd8c-dfc3-429e-b214-00d348929628
*/

import http from "k6/http";
import { check } from "k6";

export default function () {
    var url = "https://run.mocky.io/v3/15dcbd8c-dfc3-429e-b214-00d348929628";

    var headerParam = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    var payload = JSON.stringify({
        email : "sharisroy@gmail.com",
        name: "Haris Chandra Roy"
    })

    // URL, Header , JSON Body
    const response = http.post(url, headerParam, payload)

}