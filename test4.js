"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "DOWN";
    Direction1["Left"] = "LEFT";
    Direction1["Right"] = "RIGHT";
})(Direction1 || (Direction1 = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision["No"] = "No";
})(Decision || (Decision = {}));
var Decision1;
(function (Decision1) {
    Decision1[Decision1["Yes"] = 1] = "Yes";
    Decision1[Decision1["No"] = calcEnum()] = "No";
})(Decision1 || (Decision1 = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) { }
runEnum(Direction1);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test1 = Test.A;
let nameA = Test[test1]; // A
let t = 0 /* ConstEnum.A */;
