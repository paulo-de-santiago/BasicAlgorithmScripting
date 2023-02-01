function repeatStringNumTimes(str, num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    if (num < 0) {
      return string;
    } else string += str;
  }
  return string;
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 0));
