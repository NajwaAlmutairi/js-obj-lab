// انشئ obj  اسمه User 

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