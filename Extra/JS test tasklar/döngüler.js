/* for (let i=0; i<10; i++) {
    if (i==3){
        console.log('en sevdiyim rakam: '+i);
        continue;
    }

    if (i==6) {
        console.log('en sevmediyim rakam: ' +i)
        break
    }
    console.log(i)
} */

let i=0;
while (i<10) {
    console.log(i);
    i++;
}

/* let i=0;
do {
    console.log(i);
    i++;
} while(i<10) */

/* let toplam=0;

for (let i=10; i>0; i--) {
    if (i%2==0) {
        toplam+=i;
    }
    console.log(toplam);
} */

/* let hasil=1;

for (let i=10; i>0; i--) {
    if (i%2==0) {
        hasil*=i;
    }
}
console.log(hasil); */

/* let val = "\n"

for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
        val+= "* ";
    }
    val+= '\n';
}

console.log(val); */

/* let cars = ['BMW', 'Mercedes', 'Audi'];
let people = [
    {firstName: 'Ada', lastName: 'Bilgi'},
    {firstName: 'Turan', lastName: 'Bilgi'},
    {firstName: 'Sadik', lastName: 'Bilgi'},
] */

/* for (let i=0; i<cars.length; i++) {
    console.log(cars[i])
}

for (let i=0; i<people.length; i++) {
    console.log(people[1].firstName);
}
 */
//for-in

/* for (let i in cars) {
    console.log(`index: ${i} ; value: ${cars[i]}`)
}

for (let i in people) {
    console.log(`index: ${i} ; value: ${people[i].firstName}`)
} */

// forEach

/* cars.forEach (
    function(item) {
    console.log(item)
    }
)

people.forEach (
    function (person) {
        console.log (person.firstName);
    }
) */

// map: returns an array

/* let val = people.map(function(item) {
    return item.firstName + ' ' + item.lastName;
}
)
console.log(val);

let number = [1,5,6,8,10];

let num  = number.map(function(n) {
    return n*n;
}
)
console.log(num); */

/* let val = '/n';

for (let i=0; i<10; i++) {
     for(let j=0; i<10; j++) {
            val += "* ";
    }
}

console.log(val); */

