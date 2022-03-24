const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

console.log(users.filter(function(users){
    return users.firstName === "Jose"
}))

console.log(users.filter(function(users){
    return users.isPremiumMember === true
}))

const lastoname = users.map(Deeznuts => Deeznuts.lastName);
console.log(lastoname);

const userOlderThan40 = users.filter(user => user.logins > 10);
let fdsa = userOlderThan40.map(sack => sack.firstName + sack.lastName);
console.log(fdsa);

let nuts = users.map(balls => balls.logins);

const sum = nuts.reduce((idk, things) => idk + things); 
console.log(sum);