/* Getting an array with the object's keys using Object.keys */

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));

/* Count users online */

/* const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
}; */

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;

  for (let obj in usersObj) {
    if (usersObj[obj].online) count++;
  }
  return count;

  // Only change code above this line
}

console.log(countOnline(users));

/* Check Items in an object */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let checkItem = foods[scannedItem];
  return checkItem;
  // Only change code above this line
}

console.log(checkInventory("apples"));
