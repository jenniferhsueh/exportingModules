var myMod = require("./exportMod.js") //grab file from current directory + file name
// // console.log(myMod.hello)
// console.log(myMod.putInList(10, 5, 6, 7, 1))
var result = myMod.putInList(10, 5, 6, 7, 1);
//console.log("result ", result);
console.log(myMod.getList());
console.log(myMod.getAssorted())
myMod.putInList(55, 5, 2, 1, 111);
console.log(myMod.getList());
console.log(myMod.getAssorted())

console.log('-------');
var ohGod = require('./whyNotWork.js');
console.log("done with import")
console.log(ohGod.getAssorted());
ohGod.putInList(1, 5, 9, 2, 6, 3, 8);
console.log(ohGod.getAssorted());