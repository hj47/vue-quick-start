"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// spread operator
var arr = [10, 20, 30];
var arr2 = [1, 2, 3].concat(arr);

console.log(arr2);

var obj = { name: "jane", age: 30 };
var obj2 = _extends({}, obj);

console.log(obj === obj2);