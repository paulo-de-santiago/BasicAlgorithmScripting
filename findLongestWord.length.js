function findLongestWordLength(str) {
  let currentLength = 0;
  let strWord = str.split(" ");
  //console.log(strWord)

  for (let i = 0; i < strWord.length; i++) {
    for (let j = 0; j < strWord[i].length; j++) {
      if (strWord[i].length > currentLength) currentLength = strWord[i].length;
    }
  }

  return currentLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
); //should return 6
