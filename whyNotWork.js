let list = [];

function sortList() {
  console.log("sortList");
  var sorted = list.sort(function sortfunction(a, b){
    return a - b
  });
  return sorted;
}

console.log("pre export");

module.exports = { //module.exports is the object name
    putInList: function(...numbers){
        list = []
        list.push(...numbers)
        // return list
    },
    getAssorted: sortList
};
console.log("post export");

// module.exports.putInList(10, 2, 3, 1);

// console.log(module.exports.putInList([10, 2, 3, 1]));       //testing putinlist
// console.log("sort list: ",sortList);       //testing putinlist
// console.log(module.exports.hello)        //prints out hello world //need module.exports
// console.log(list);