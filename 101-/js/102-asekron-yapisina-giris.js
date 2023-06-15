//! 102-Asenkron #2 : Asenkron Yapısına Giriş | JAVASCRIPT Dersleri

/*

JS Senkron çalışan bir programlama dilidir. Yani derleyici yukarıdan aşağıya kodları okur ve çalıştırır.

*/

selam();

console.log(1);
console.log(2);
console.log("Baris");

/* CONSOLE 
JS yukarıdan aşağıya derlendiği için çıktısı aşağıdaki gibi görünür:

1
2
Baris

*/


function selam(){
    console.log("Selam");
}

// selam();
/* CONSOLE 
JS yukarıdan aşağıya derlendiği için çıktısı aşağıdaki gibi görünür:

1
2
Baris
Selam

Çünkü 10, 11, 12 ve 28. satırlarda kodlar yukarıdan aşağıya çalıştırılıp konsola yadırılır. Eğer en üste yazdırılırsa;

selam
1
2
Baris 

şeklinde yazdırılır.
*/

//? JS NE ZAMAN ASENKRON ÇALIŞIR?

//? 1. Timing
//todo : 
// setTimeout(()=> {

// }, timeout);

//? 2. Event(Olay)
//? 3. Http istekleri : Bir bir rest apı'a http istekleri attığımızda oradan cevap alırken biz bunları asenkron alırız. Web API tarafından yönetilen her şey asenkron çalışır. https://developer.mozilla.org/en-US/docs/Web/API

// JS SENKRON çalışırken, bazı durumlarda senkron'dan asenkron 'a dönüşür. Örneğin event'lar, http istekleri, timing işlemleri js'in asenkron'a dönüşmesini sağlar.


//*****
// console.log("Baris");

// setTimeout(() => {
//     console.log("Süre doldu ve çalıştı.")
    
// }, 1000);


// console.log("Karatas")
//****

// Yukarıdaki kodların konsole'daki görüntüsü aşağıdaki gibidir:

// Baris
// Karatas
// Süre doldu ve çalıştı.

//? Normalde kod yukarıdan aşağıya doğru okunacağı için 

// Baris
// Süre doldu ve çalıştı.
// Karatas

// olması beklenirdi. Ama timing işlemi olduğu için Karatas timing işlemlerini beklemeden konsola yazdırılır. 

//! Senkron çalışan kodlar asenkron çalışan kodları beklemez.


//?  "Callback, Promise, Async & Await" yapılarını kullarak asenkron yapıları senkron'a çevirip, yönetiyoruz.Bu yapılar daha detaylı olarak işlenecektir.