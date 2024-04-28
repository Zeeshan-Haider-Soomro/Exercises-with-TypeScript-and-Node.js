// // Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// // • Make a list of five or more usernames called current_users.

// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// // new username. If a username has not been used, print a message saying that the username is available.

// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// let current_users :string[] = ["ZeEshAn","AftAb","REhan","MaRyAm"]; 

// let newUser:string[] = ["Bilal", "huzaifa", "Yusra", "sameer"];

// // for(let i=0; i<newUser.length; i++){
// //     if(current_users.includes(newUser[i])){
// //         console.log(`The user name ${newUser} is not available.please write different name.`);   
// //     }else{
// //         console.log(`The ${newUser} username is available.`);
        
// //     }
// // };

// newUser.forEach(newUserName => {
//     let lowerCase = newUserName.toLowerCase();
//     if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
//         console.log(`the username ${newUserName} is not available. Please write a different username.`);
//     }else{
//         console.log(`The ${newUserName} username is available.`);
        
//     }
// });


// another method

// List of current users
let currentUsers: string[] = ["zeeshan", "maryam", "tahir", "saqib", "ali"];

// List of new users
let newUsers: string[] = ["maryam", "aftab", "sarah", "mansoor", "ali"];

// Convert currentUsers list to lowercase
let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

// Check if new usernames are unique
newUsers.forEach(user => {
    if (currentUsersLower.includes(user.toLowerCase())) {
        console.log(`Sorry, the username '${user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${user}' is available.`);
    }
});











