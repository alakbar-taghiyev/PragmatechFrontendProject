/* const firstName = 'Alakbar';
const age = 29;
const isStudent = true;
const school = 'high school';

if(firstName==='Alakbar') {
    console.log('Hello Alakbar');
} */

/* if(age===19) {
    console.log('yashiniz 19');
} */

/* if (age>=18) {
    if ((school==='university') || (school==='high school')) {
        console.log('suruculuk vesiqesi ala biler');
    } else {
        console.log('mumkun deyil')
    }
}
else {
    console.log('ala bilmez')
} */

/* if (age>0 && age<12) {
     console.log(`${firstName} is child`);
} else if (age>12 && age<=19) {
    console.log(`${firstName} is teenager`);
} else {
    console.log(`${firstName} is adult`);
}

id = 12  

if (typeof id !== 'undefined') {
    console.log('id: ' +id);
} else {
    console.log('no id')
} */

/* let category = 'telefon';

switch (category) {
    case 'telefon':
        console.log('telefon kateqorisi')
    break

    case 'komputer':
        console.log('komputer kateoqirisi')
    break
    
    default:
        console.log('eshya')
} */

/* let day;

switch (new Date().getDay()) {
    case 0:
    case 6:
        day = 'Hafta sonu';
        break;

    case 1:
    case 2 :
    case 3 :
    case 4 :
    case 5 :
        day = 'Hafta ici';
        break;
}

console.log(`bu gun gunlerden ${day}`)
 */

/* const age = 29;
const firstName = 'Alakbar';

switch(true) {
    case age>0 && age<12:
        console.log(`${firstName} is child`);
    break;
    case age>12 && age<=19:
        console.log(`${firstName} is teenager`);
    break;
    default:
        console.log(`${firstName} is adult`);
} */

/* var result = prompt("who's there");
let password = prompt('enter password');


if (result=='cancel') {
    console.log('cancelled');
} else if (result=='Admin') {

    // var password = prompt('enter password');
    if (password == 'cancel'){
        console.log('cancelled');
    } else if (password == '123') {
        console.log('welcome Admin');
    } else {
        console.log('wrong password');
    }  
} else {
    console.log("I don't know");
} */

/* let val;

let person = {
    firstName : 'Alakbar',
    lastName : 'Taghiyev',
    age :  22,
    hobbies : ['music', 'game'],
    adress : {
        city: 'Baku',
        country: 'Azerbaijan',
    },
    getBirthYear: function() {
        return 2018 - this.age;
    }
}

val = person.adress;
val = person.hobbies;
val= person.hobbies[1];
val = person.hobbies.length;
val = person.adress;
val = person.adress.city;
val = person.adress['country'];
val = person.getBirthYear()

console.log(val)
console.log(typeof person) */

/* let people = [
            {firstname: 'Alakbar', lastName: 'Taghiyev', age: 22},
            {firstname: 'Alakbar', lastName: 'Taghiyev', age: 22},
            {firstname: 'Alakbar', lastName: 'Taghiyev', age: 22},
            {firstname: 'Alakbar', lastName: 'Taghiyev', age: 22}
            ]

val = people[1].lastName

console.log (people);
console.log(typeof people);
console.log(val)

for (let i=0; i<people.length; i++) {
    console.log(people[i].age)
} */
