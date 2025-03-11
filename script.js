// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  // Split the string of flavors into an array of strings.
  const stringArray = userInputString.split(",");
  
  console.log("User input as array:", stringArray);

  const stringCount = {};

// Count occurrences of each string in the array
stringArray.forEach(str => {
    stringCount[str] = (stringCount[str] || 0) + 1;
});

console.table(stringCount);