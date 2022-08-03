// Assigning the CL arguments to a variable and slicing
// to remove the first 2 elements of the array: the interpreter and executed file.
const time = process.argv.slice(2);

// Emit beeps after the amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments.

for (let seconds of time) {
  if (seconds >= 0 && !isNaN(seconds)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
}

// Expected output for " node timer1.js 10 3 5 15 9 ":
// Beep at 3/5/9/10/15 seconds.