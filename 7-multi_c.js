const times = parseInt(process.argv[2]);

if (times > 0) {
  let i = 0;
  while (i < times) {
    console.log("C is fun");
    i++;
  }
}
// Do nothing if times is missing, invalid, or <= 0

