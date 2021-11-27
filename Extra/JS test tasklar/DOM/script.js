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

/* let val;

let list = document.querySelector('.list-group');

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;  // text
val = list.childNodes[1].nodeType  //element

val = list.children;
val = list.children[0];
val = list.children[2];

val = list.children[2].textContent='new item';
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;

val = list.parentElement.parentElement;

val = list.children[0].nextSibling;
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;

console.log(val);

for(let i=0; i<list.childNodes.length; i++) {
   
    if(list.childNodes[i].nodeType===3) {
        console.log(list.childNodes[i]);
    }
} */


// Creating Elements

// create element

/* const li = document.createElement('li'); */

// add class

/* li.className='list-group-item list-group-item-secondary'; */

// add attribute

/* li.setAttribute('title', 'new item');
li.setAttribute('data-id', '5'); */

// text node

/* const text = document.createTextNode('new item');

li.appendChild(text);

const a = document.createElement('a');
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML = '<i classs="fas fa-times"></i>'; */

// append a to li

/* li.appendChild(a); */

// append lu to ul

/* document.querySelector('#task-list').appendChild(li);

console.log(li); */

const taskList  = document.querySelector('#task-list');

// ** removing element

// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[0].remove()
// taskList.removeChild(taskList.children[3]);

// ** removing attribute

/* taskList.children[0].removeAttribute('class');

for(let i=0; i<taskList.children.length; i++) {
    taskList.children[i].removeAttribute('class')
} */

// ** replacing Elements

/* const cardHeader = document.querySelector('.card-header');

// create element

const h2 = document.createElement('h2');
h2.setAttribute('class', 'card-header');
h2.appendChild(document.createTextNode('My list'));

const parent = document.querySelector('.card')
parent.replaceChild(h2, cardHeader);


console.log(taskList); */

// ** Classes

let val;

link = taskList.children[0].children[0]

/* val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList[1];

link.classList.add('new');
link.classList.remove('new'); */

// Attributes

val = link.setAttribute('href', 'alakbar-taghiyev.com')
val = link.getAttribute('href');
val = link.hasAttribute('href')  //true
val = link.hasAttribute('data')  //false


console.log(val)
