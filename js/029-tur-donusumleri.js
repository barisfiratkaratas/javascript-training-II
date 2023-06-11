//! TÜR DÖNÜŞÜMLERİ 

//? Bir veri türünden başka bir veri türüne geçilmesidir.

/* string | numbers | boolean | undefined | null | object | function */

// Kodlama yaparken bazen tür dönüşümlerine ihtiyaç duyulur. 


//?String Veri Tipini Number'a dönüştürme :

let as = 5; //number
// let sa = "10"; //string
let sa = Number("10"); //Number() string tipindeki veriyi number'a dönüştürür.

console.log(as+sa); //eğer her iki değişken de number olmaz ise çıktı alınırken number ve string veri tipindeki ifadeleri peş peşe getirip birleştirir. 


//parseInt() : window içerisinde tanımlanmış bir metottur. Tür dönüşümlerinde kullanılır. Number'la aynı işlevi yerine getirir.
//parseFloat() : parseInt()'ten farklı olarak .'dan sonraki kısmı hesaba katmaz.


let nx = 3;
// let bn = "8";
let bn = parseInt("8");
let bx = parseFloat("12.5"); 

console.log(nx+bn);


//? Number Veri Tipini String'2 dönüştürme :

/// let jh = String(55); 
let jh = (55).toString();
console.log(typeof jh);
console.log(jh); 

//? Bolean Veri Tipini String'2 dönüştürme :

/*
let yanit = String(true); //boolean veri türünden string'e dönüşüm
console.log(typeof yanit);
console.log(yanit);
*/

//! Dikkat: 
let ç = Number("B"); // içerideki değer string tipinde olduğu için number'a dünüşmüyor. İçeride "" işareti içinde sayı olsaydı dönüşümü mümkün olacaktı.
console.log(ç);  // NaN : not a number(bir numara değil)


//? Arrat tipindeki veriyi String tipine çevirme:

//let rakam = [1, 2, 3, 4, 5] //object tipindedir. Array'dir.
let rakam = String([1, 2, 3, 4, 5])

console.log(typeof rakam); 
console.log(rakam); // NaN not a number: içerideki değer array tipindedir. sayı olmadığı için de number tipine değiştirilemez.

//!Dikkat:

let vbn = Number([1, 2, 3, 4, 5]);
console.log(typeof vbn);
