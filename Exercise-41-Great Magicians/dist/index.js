"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
let magicians = ["zeeshan", "harry", "ron", "albus"];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magicians[i] = "the great " + magicianarray[i];
    }
}
make_great(magicians);
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magicians);
