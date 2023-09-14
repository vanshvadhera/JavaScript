let myMap = new Map();
let key1 = "string", key2 = {}, key3 = function(){}
myMap.set(key1, "this is string");
myMap.set(key2, "this is an empty object");
myMap.set(key3, "this is an empty function");
// console.log(myMap);

let mapkeys = myMap.keys()
// console.log(mapkeys);
let mapvalues = myMap.values()
console.log(mapvalues);


