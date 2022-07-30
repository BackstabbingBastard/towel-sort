
// You should implement your task here.

module.exports = function towelSort (array) {
  let returnArray = [];
  let usedArray = [];

  for (let i in array) {
    if (i % 2 == 0) {
      usedArray = array[i].sort((a, b) => a - b);
    } else {
      usedArray = array[i].sort((a, b) => b - a);;
    }
    returnArray = returnArray.concat(usedArray);
    console.log(returnArray);
  }

  return returnArray;
}
