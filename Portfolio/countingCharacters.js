function countingCharacters(stringToCount){
    // The length property has been mentioned in
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " +
              stringToCount.length + " characters.");
}
function countingCharacters2(stringToCount, characterToFind){
  // Let's count the number of times a character appears in a string
  // We will look at each character one-by-one with the help of a for loop
  var characterCount=0;
  for (var characterPosition = 0;
      characterPosition < stringToCount.length;
      characterPosition++){
    if(stringToCount[characterPosition] == characterToFind){
      characterCount++;
    }
  }
  console.log("Sting to search in: " + stringToCount);
  console.log("Character to find: " + characterToFind);
  console.log("Number of time the character appears: " + characterCount);

}
function countingCharacters3(str,search){
  var count = 0; // number found
  var numChars = search.length;
  var lastIndex = str.length - numChars;

  for (var index = 0; index <= lastIndex; index++){
    var current = str.substring(index, index + numChars);
  if (current == search){
        count++;
      }
  }

  return count;
}
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
