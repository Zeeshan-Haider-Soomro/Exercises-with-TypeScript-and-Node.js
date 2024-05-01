"use strict";
// Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
let answer = storeCarInfo("toyota", "gli", { color: "white" }, { features: ["navigation", "power window"] });
console.log(answer);
// let obj1 = {num1:1, num2:2}
// let obj1 = {num3:1, num2:5}
// let obj3 = Object.assign(obj1, obj2 )
