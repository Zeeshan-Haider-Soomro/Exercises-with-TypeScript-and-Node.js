"use strict";
let guest_List = ["Imran Khan", "Nawaz sharif", "asif ali zardari"];
for (let i = 0; i < guest_List.length; i++) {
    console.log("Dear Mr. " +
        guest_List[i] +
        ",\n\n it is our pleaure to invite you in our program.\n\n" +
        "Thak you❤\n\n");
}
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
guest_List[0] = new_Guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log("Dear Mr. " +
        guest_List[i] +
        ",\n\n it is our pleaure to invite you in our program.\n\n" +
        "Thak you❤\n\n");
}
console.log(`Mr. ${absent_Guest} is not coming to the program.`);
