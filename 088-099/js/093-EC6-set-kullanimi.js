//! 93-Set Kullanımı | ES6 | JAVASCRIPT Dersleri

//SET : set'lerin içine kullanılan değerler yalnız bir kere tutulur. diğer tüm özellikler Map ile aynıdır.

const set = new Set();

//? add metodu

set.add(true)
set.add(3.14)
set.add("Enes") //bir değerin yalnız bir kere tutulmasını istediğimiz yerlerde set kullanılır. 
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
set.add(7)
set.add({username:"enes" , password : "1"});
set.add([1,2,3,4])




//? Size
// console.log(set.size)


//? delete

// set.delete("Enes")
// set.delete(7) 
// set.delete([1,2,3,4]) //bu haliyle silinmez.  bunlar referans tipidir. aynı yere bakmaları sağlanıp o şekilde silinebilirler. 
// console.log(set.size)


//? Has
// console.log(set.has("Ali"))

//? For of döngüsü
// for(let value of set){
//     console.log(value)
// }

// const values = Array.from(set);
// values.forEach((value)=>{
//     console.log(value)
// })


//? SET DEN ARRAY OLUŞTURMA
// const values = Array.from(set);


//? ARRAY DEN SET OLUŞTURMAK

// let array = [1,"Enes",true,"Mustafa",15,[1,2,3]]

// const newSet = new Set(array);
// console.log(newSet)

