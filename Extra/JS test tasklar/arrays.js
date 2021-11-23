/* let names = ['alakbar', 'murad', 'orxan', 'kanan'];
let years = [2017, 1999, 2012, 2010];
let mix = ['alakbar', 'taghiyev', 1999, null, undefined, ['sinema','kitab']];

console.log(names[0]);
console.log(names[3])
console.log(names[4])

names[0] = 'alekber'
names[names.length] = 'ahmad'


console.log(names);
console.log(years);
console.log(mix);
console.log(names.length);
console.log(typeof names); */

var cars = ['BMW', 'Mercedes', 'Opel', 'Mazda'];

/* console.log(cars);
console.log(typeof cars);

console.log(cars.length)
console.log(cars[0])
console.log(cars[3])
console.log(cars[cars.length-1]) 

console.log(cars.concat('Renault'))
console.log(cars.push('Renault'))
cars[4] = 'Renault'
cars[cars.length] = 'Renault'
console.log(cars) */

/* cars.unshift('Toyota');    //1-ci elelementə əlavə edir
cars.shift();             //1-ci elementi silir
cars.pop();              //sonuncu elementi silir
console.log(cars) */

/* console.log(cars.reverse())
console.log(cars.sort()) */

/* console.log(cars.indexOf('Opel'))
console.log(cars.includes('Mercedes')) */

var str = 'Chevrolet, Dacia';
var arr = str.split(',');

//console.log(arr);
arr = arr.concat(cars);
console.log(arr); 

/* console.log(arr.pop()); */

console.log(arr.splice(4,2));     //hansı elementdən başlasın; ondan sonra element silinsin mi, silinməsin mi; element əlavə edilsin mi, edilməsin mi
