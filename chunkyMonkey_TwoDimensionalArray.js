/* Chunky Monkey
https://learn.saylor.org/mod/book/tool/print/index.php?id=26826
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr.slice(size));
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
}

/* 

    First, we create an empty array newArr where we will store our ‘chunks’.
    The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
    Note we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
    Inside our loop, we create each chunk using arr.slice(i, i+size). The slice method accepts two arguments with the first argument being the index of where the slice should start and the second argument being where the slice should end but does not include the ending index.
    We add this chunk/slice to newArr with newArr.push().
    Finally, we return the value of newArr once the for loop is complete.
 */

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // should return [["a", "b"], ["c", "d"]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // should return [[0, 1, 2], [3, 4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // should return [[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // should return [[0, 1, 2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // should return [[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
