function truncateString(str, num) {
  if (str.length > num) {
    str = str.slice(0, num) + "...";
  } else str;
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //should return the string A-tisket....
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
); //should return the string A-tisket a-tasket A green and yellow basket.

function truncateString(str, num) {
  return str.length > num ? (str = str.slice(0, num) + "...") : str;
}
