let counter = 0;
let interval = setInterval(() => {
    console.log("Hello World!")
    if (++counter == 5) clearInterval(interval)
}, 1000);

// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
