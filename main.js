// Q1 
const user = {
    name: 'najwa',
    id: 20,
    job: 'developer',
    email: 'NajwaBuayjan@gmail.com',
    Available: false,
    Address: {
        city: {
            name: 'Riyadh',
            country: 'KSA'
        },
        zip: 1234,
        Number: 3
    },
    modifyAvailable: function (newAvailable) {
        return this.Available = newAvailable
    },
    modifyId: function (newId) {
        return this.id = newId
    },
    skills: ['coding', 'swimming', 'reading']
}

// print the object user
console.log(user);
// print the property name 
console.log(user.name);
// modify the value of property id and print 
user.modifyId(21);
console.log(user.id);
// or 
// user.id=44

// delete the property email and print
delete user.email
console.log(user);
// test you function by changing the value to Available ,print the function 
user.modifyAvailable(true);
console.log(user.Available);
// print the address object 
console.log(user.Address);
// print one of the keys inside the city object 
console.log(user.Address.city.name);
// print the index 2 in the array skills 
console.log(user.skills[2]);
// print the array skills  index with out the “ [] “ and Divide them with “,”
console.log(user.skills);
console.log(user.skills.join(','));


// *************************************LAB2************************************************************
console.log("**********lab 2 *********");


characters = [
    {
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "kevien",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];

//   1-Get first name that has blue eyes.

let blue = characters.find(element => {
    return element.eye_color === 'blue'
})
console.log(blue.name);

// 2-Get first gender that is his mass is over 50
let gender = characters.find(element => {
    return element.mass > 50
})
console.log(gender.gender);

// 3-Get characters with height less than 200
let height = characters.filter(element => {
    return element.height < 200
})
console.log(height);

// 4-Get all male characters
let maleCharacters = characters.filter(element => {
    return element.gender ==='male'
})
console.log(maleCharacters);

// 5-Get array of all names only
let allNamesOnly = characters.map(element => {
    return element.name
})
console.log(allNamesOnly);

// 6-Get array of all heights only
let allheightsOnly = characters.map(element => {
    return element.height
})
console.log(allheightsOnly);

//7-Sort by mass (low to high)
const sortMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortMass);

console.log(',,,,,,,,,,');

// 8-Sort by height (high to low)
const sortHeight = characters.sort((a, b) => b.height - a.height);
console.log(sortHeight); 

// 9-Does every character have mass more than 40?
let allMoreThan40 = characters.every(element => element.mass > 40)
console.log('Does every character have mass more than 40?', allMoreThan40);

// 10-Is every character shorter than 200?
let allShorterThan = characters.every(element => element.height < 200)
console.log('Is every character shorter than 200?', allShorterThan);

// 11-Is there at least one character with blue eyes?
let blueEyes = characters.some(element => element.eye_color === "blue")
console.log('Is there at least one character with blue eyes', blueEyes);

// 12-Is there at least one character taller than 210?
let tallerThan210 = characters.some(element => element.height > 210)
console.log('Is there at least one character taller than 210?', tallerThan210);