nums = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(
  nums.sort(function (a, b) {
    return a - b;
  })
);

// lasrgest name from a Array
var human = ["rahim","karim","jabbar","rocket", "rastructure",];
var lasrgestName = human[0];
for (var i = 0; i<human.length; i++){
    if (lasrgestName.length < human[i].length){
        lasrgestName = human[i];
    }
}
console.log(lasrgestName);

