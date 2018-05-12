let array = [];

module.exports = {
 addToArray: function(number){
   array.push(number);
   return array;
 },
 getArray: function() {
   return array;
 },
 sortArray: function() {
   return array.sort(function sortfunction(a, b){
     return a - b
   })
 }
}