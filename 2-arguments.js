const argsCount = process.argv.length - 2; // subtract the first 2 default items

if (argsCount === 0) {
  console.log("No argument");
} else if (argsCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

