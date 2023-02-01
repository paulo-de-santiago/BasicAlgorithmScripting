function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
); //should return 8.
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
); //should return undefined.

/* Second solution with find()


function findElement(arr, func) {
  return arr.find(func);
}

*/

function booWho(bool) {
  if (typeof bool === "boolean") return true;
  else return false;
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(""));
