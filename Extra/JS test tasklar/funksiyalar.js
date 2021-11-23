/* function yashHesablama(dogumyili) {
    return 2021 - dogumyili;
}

let val = yashHesablama(1999);
 console.log(val) */

// Function Declaration

/* function sum (a,b) {
    var c = a+b
    return c
}

console.log(sum(10,20)) */

// Function Expressions
// ES6 defaul parameters

/* const sum = function(a=0,b=0) {
    if (typeof a==="undefined") {
        a=0
    }
    if (typeof b==="undefined") {
        b=0
    }

    var c = a+b
    return c
}
console.log(sum(20,30))
console.log(sum(20)) */

/* function sumAll() {
    var total = 0;
    for(i=0; i<arguments.length; i++) {
        total+=arguments[i]
    }
    return total;
}

console.log(sumAll(10,20,30,40)) */

/* var hesabA = {
    ad: "Alakbar Taghiyev",
    hesapNo: '123456789',
    bakiye: 2000,
    ekHesab: 1000
}

var hesabB = {
    ad: 'Kanan Huseynov',
    hesapNo: '123456789',
    bakiye: 3000,
    ekHesab: 2000
}

function paraCek (hesap, miqdar) {
    console.log(`merhaba ${hesap.ad}`);

    if (hesap.bakiye>miqdar) {
        console.log('paranizi alabilirsiniz')
    } else {
        var toplam = hesap.bakiye + hesap.ekHesab;

        if (toplam>=miqdar) {
            if (confirm ('ek hesabinizi kullanmak istermisiniz')) {
                console.log('paranizi alabilirsiniz')
            } else {
                console.log(`${hesap.hesapNo} nomreli hesabinizda ${miqdar} bulunmamaktadir`)
            }
        } else {
            console.log ('uzgunuz bakiye yetersiz')
        }
    }

}

paraCek (hesabA, 2000); */

/* let val
var a = 10;
function abc() {
    return 0;
}

val = window

//alert
alert('Salam')

//prompt
var b = prompt('Say daxil edin')
console.log(b)

//confirm
val = confirm('eminsiniz?')

if(val) {
    console.log('ok');
} else {
    console.log('no')
}

console.log(val) */

/* //location
val = location;
val = location.host;
val = location.hostname;
val = location.href;
val = location.protocol;
val = location.search;
location.reload();
console.log(val) */

