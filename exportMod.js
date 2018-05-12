let list = [];
function sortList() {   //same as sortlist = function() { }
  var sorted = list.sort(function sortfunction(a, b){
    return a - b
  });
  return sorted;
}
var getListMyFriend = function () { return list }   // var getListMyFriend = () => { return list }

module.exports = { //module.exports is the object name
    // hello: 'Hello World',
    putInList: function(...numbers){
        list.push(...numbers)
        return list
    },
    getAssorted: sortList,                                // this is fine
    // getAssorted: function() { return sortList() },     // this is fine too, but whyyy?
    // clearList: function(){
    //   list = [];
    //   return list;
    // },
    getList: getListMyFriend
};
//***^CANT DO getAssorted: sortList() becuase invoking sortlist() in importMod
//^if invoked here, it will run before the list is sorted

// module.exports.putInList(10, 2, 3, 1);

// console.log(module.exports.putInList([10, 2, 3, 1]));       //testing putinlist
// console.log("sort list: ",sortList);       //testing putinlist

// console.log(module.exports.hello)        //prints out hello world //need module.exports

// console.log(list);