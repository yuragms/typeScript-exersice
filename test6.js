"use strict";
function logTime(num) {
    console.log(new Date());
    return num;
}
function logTime1(num) {
    console.log(new Date());
    return num;
}
logTime1(5);
function logTime2(num) {
    if (typeof num == 'string') {
        num.toLocaleUpperCase();
    }
    return num;
}
class MyGenClass {
}
const p = new MyGenClass();
p.value;
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
