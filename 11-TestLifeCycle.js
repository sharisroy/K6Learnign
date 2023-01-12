/*
    Software Testing Life Cycle (STLC) is a sequence of specific activities conducted during 
    the testing process to ensure software quality goals are met.

    1. Start
    2. Set up function ; Call this function once when the program start
    3. Defult function ; 
    4. Tear Down function ;  Call this function once when the program end
*/

import http from "k6/http";

var counter = 1;

export function setup(){
    console.log(`Start Up : ${counter}`)
    return "Learning k6 by Haris"
}
export default function(data){
    console.log(`Default : ${counter}\tVU : ${__VU}\tIteration : ${__ITER}.\t ${data}`)
    counter =  counter + 1;
}
export function teardown(){
    console.log(`Tear Down : ${counter}`)
}