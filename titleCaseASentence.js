/* SOLUTION WITH FOR IN LOOP  */

function titleCase(str) {
  const words = str.split(" ");
  const updatedUpperCase = [];

  for (let st in words) {
    updatedUpperCase[st] =
      words[st][0].toUpperCase() + words[st].slice(1).toLowerCase();
  }
  return updatedUpperCase.join(" ");
  //console.log(words.length);

  /*   for (let i = 0; i <= str.length; i++) {
    //console.log(i, words[i], str.length);
  } */
}

/*  SOLUTION WITH MAP */

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("I'm a little tea pot");

console.log(titleCase("I'm a little tea pot")); // should return a string

console.log(titleCase("I'm a little tea pot")); //should return the string I'm A Little Tea Pot.

console.log(titleCase("sHoRt AnD sToUt")); //should return the string Short And Stout.

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//should return the string Here Is My Handle Here Is My Spout.
