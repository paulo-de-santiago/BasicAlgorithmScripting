function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice();
  arr.splice(n, 0, ...arr1);

  return arr;
}

/* Solution with for loop */

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); //should return [4, 1, 2, 3, 5].

console.log(frankenSplice([1, 2], ["a", "b"], 1)); //should return ["a", 1, 2, "b"].

console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
); //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
/* 
 All elements from the first array should be added to the second array in their original order.   */
console.log(frankenSplice([1, 2, 3, 4], [], 0)); // should return [1, 2, 3, 4].

//The first array should remain the same after the function runs.

// The second array should remain the same after the function runs.
