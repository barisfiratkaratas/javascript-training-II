//! DEĞER VE REFERANS TİPLER

//? değer tipli değişkenler: ilkel(primitive) değişkenler olarak tanımlanır. string, number, boolean, null, undefined bunlar arasındadır. ram bellek'in stack bölümünde tutulur. bunlar birbirilerine değer set'lemesi yaparken daha sonradan birisi üzerindeki değişiklikler diğerini etkilemeyecektir.

// let a = 7;

// let b = a;

// console.log("a : " + a);
// console.log("b :" + b);

// console.log("----------------------------");

//? referans tipli değişkenler : ilkel olmayan değişkenlerdir. object, array, function bunlardandır. ram bellek'in heap bölümünde tutulurlar.

// b = 10;
// console.log("a : " + a);
// console.log("b : " + b);

// let dizi1 = [1,2,3];
// let dizi2 = [1,2,3];
// let dizi2 = dizi1;

// if(dizi1==dizi2){
//     console.log("esittir");
// }else{
//     console.log("esit degildir");
// }

// console.log(dizi1);
// console.log(dizi2);



let dizi1 = [1,2,3];
let dizi2 = dizi1;
let dizi3 = dizi2;


dizi3.push(23); //dizi3 'ün sonuna 23 ekledik ama dizi1'i de etikedik. referans tipli değişkenler böyleyken aynı şey değer tipli değişkenlerde bu durum söz konusu olmaz.

console.log(dizi1);
console.log(dizi2);
console.log(dizi3);