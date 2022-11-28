// let date = new Date();
// let iat = `Token Generated at ${date.getFullYear()}-${date.getUTCMonth()}-${date.getDay()}`

// console.log(date);
// console.log(iat);

let users = [{
    firstName: "Ahmed",
    lastName: "ElNawawy",
   },
   {
    firstName: "Khaled",
    lastName: "ElNawawy",
   }
];

users.sort((a, b) => a.firstname.localeCompare(b.firstname))