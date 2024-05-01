"use strict";
// Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
// function showMagicians(magicians: string[]): void {
//     // Print the name of each magician in the list
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// function makeGreat(magicians: string[]): string[] {
//     // Add 'the Great' to each magician's name
//     let greatMagicians: string[] = [];
//     for (let magician of magicians) {
//         let greatMagician: string = magician + " the Great";
//         greatMagicians.push(greatMagician);
//     }
//     return greatMagicians;
// }
// let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// let greatMagicians: string[] = makeGreat([...magicians]);
// console.log("Original Magicians:");
// showMagicians(magicians);
// console.log("\nGreat Magicians:");
// showMagicians(greatMagicians);
let magicians = ["zeeshan", "harry", "ron", "albus"];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magicianarray[i] = "the great " + magicianarray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
function copyArray(arr) {
    return [...arr];
}
const copyMagicianArray = copyArray(magicians);
make_great(copyMagicianArray);
console.log("This is the original Array");
show_magicians(magicians);
console.log("This is my modified copy of the array: ");
show_magicians(magicians);
