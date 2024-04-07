"use strict";
let guest_List = ["Imran Khan", "Nawaz sharif", "asif ali zardari"];
// for (let i = 0; i < guest_List.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       guest_List[i] +
//       ",\n\n it is our pleaure to invite you in our program.\n\n" +
//       "Thak you❤\n\n"
//   );
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
guest_List[0] = new_Guest;
// for (let i = 0; i < guest_List.length; i++) {
//     console.log(
//       "Dear Mr. " +
//         guest_List[i] +
//         ",\n\n it is our pleaure to invite you in our program.\n\n" +
//         "Thak you❤\n\n"
//     );
//   }
//   console.log(`Mr. ${absent_Guest} is not coming to the program.`);
// console.log('Good news! we find big table so we are inviting 3 more guest. ');
// in array 3 guest added
guest_List.unshift('bilawal bhutto');
guest_List.push('shebaz sharif');
guest_List.splice(2, 0, "fazal ul rehman");
// here we print 6 guest from array
// for (let i = 0; i < guest_List.length; i++) {
//     console.log(
//       "Dear Mr. " +
//         guest_List[i] +
//         ",\n\n it is our pleaure to invite you in our program.\n\n" +
//         "Thak you❤\n\n"
//     );
//   }
// sorry guest for not inviting
//   console.log('\n sorry we can not arrange big table, only two peoples will be invited. ');
// here we remove guest 
while (guest_List.length > 2) {
    let remove_Guest = guest_List.pop();
    // console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner.`);
}
// remaining 2 invited guest 
//   for (let i = 0; i < guest_List.length; i++) {
//     console.log(
//       "Dear Mr. " +
//         guest_List[i] +
//         ",\n\n you are still invited. \n\n" +
//         "Thak you❤\n\n"
//     );
//   }
// remove all guest from array
guest_List.splice(0, 2);
console.log(guest_List);
console.log(`total number of guest are: ${guest_List.length}`);
