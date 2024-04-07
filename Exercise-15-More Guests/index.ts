let guest_List: string[] = ["Imran Khan", "Nawaz sharif", "asif ali zardari"];

// for (let i = 0; i < guest_List.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       guest_List[i] +
//       ",\n\n it is our pleaure to invite you in our program.\n\n" +
//       "Thak you❤\n\n"
//   );
// }

let absent_Guest :string = 'Imran Khan';
let new_Guest :string = 'Kamran Tessori';

guest_List[0] = new_Guest;

for (let i = 0; i < guest_List.length; i++) {
    console.log(
      "Dear Mr. " +
        guest_List[i] +
        ",\n\n it is our pleaure to invite you in our program.\n\n" +
        "Thak you❤\n\n"
    );
  }

  console.log(`Mr. ${absent_Guest} is not coming to the program.`);

console.log('Good news! we find big table so we are inviting 3 more guest. ');

guest_List.unshift('bilawal bhutto')
guest_List.push('shebaz sharif')
guest_List.splice(2,0,"fazal ul rehman")

for (let i = 0; i < guest_List.length; i++) {
    console.log(
      "Dear Mr. " +
        guest_List[i] +
        ",\n\n it is our pleaure to invite you in our program.\n\n" +
        "Thak you❤\n\n"
    );
  }










