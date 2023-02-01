function confirmEnding(str, target) {
  console.log(str.length, target.length);
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
