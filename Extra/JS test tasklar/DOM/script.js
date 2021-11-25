/* let val;

val = window.document;
val = document.all;
val = document.all.length;
val = document.all[10];
val = document.head;
val = document.body;
val = document.anchors;
val = document.URL;
val = document.domain;
val = document.images;
val = document.title;
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute('src');

console.log(val); */

//Selecting Elements

// *** Single elements

// document.getElementById()

/* let val;

val = document.getElementById('header');
val = document.getElementById('header').id;
val = document.getElementById('header').className;

val.style.fontSize = '45px';
val.style.color = 'red';
val.style.fontWeight = 'bold'
val.style.display = 'none'

document.getElementById('header').innerText = 'my to do app';
document.getElementById('header').innerHTML = '<b> my to do app </b>'; */

// document.querySelector()

/* console.log(document.querySelector("#header"));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('li').style.color='red');
console.log(document.querySelector('li:last-child').style.color='blue');
console.log(document.querySelector('li:nth-child(2)').style.color='yellow');
console.log(document.querySelector('li').className='list-group-item list-group-item-primary');
console.log(document.querySelector('li').classList.add='active') */

// *** Multiple elements

// class name
// document.getElementsByClassName

/* let val;

val = document.getElementsByClassName('list-group-item');
val = document.getElementsByClassName('list-group-item')[0];
val = document.getElementsByClassName('list-group-item')[1];

val = val[1]


val[0].style.color = 'blue';
val[2].style.fontSize = '25px'

for (i=0; i<val.length; i++) {
    console.log(val[i].style.color='yellow');
    console.log(val[i].textContent='new item');
}

console.log(val); */

// document.getElementsByTagName()

/* let val;

val = document.getElementsByTagName('li');
// val = document.getElementsByTagName('a');
val = document.getElementById('task-list');
val = val.getElementsByTagName('a')

console.log(val) */

// document.querySelectorAll();

/* let val;

val = document.querySelectorAll('li');

val.forEach(function(item, index) {
    item.textContent = `${index} - hello`
});

val = document.querySelectorAll('li:nth-child(even)');

val.forEach(function(item) {
    item.style.background = 'yellow'
})

console.log(val) */


// Traversing the Dom

let val;


console.log(val);