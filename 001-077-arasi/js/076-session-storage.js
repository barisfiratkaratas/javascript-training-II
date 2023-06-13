//! SESSION STORAGE

//local storage'a eklenen veriler taryıcı açılıp kapansa bile kalmaya devam eder.

//? Değer Ekleme
// sessionStorage.setItem("350","Enes");
// sessionStorage.setItem("216","Yasin");
// sessionStorage.setItem("154","Bilal");
// sessionStorage.setItem(552,37);

//? Değer Silme
// sessionStorage.removeItem("154");

// let value =  sessionStorage.getItem("350");
// if(value ===null){
//     console.log("Değer bulunamadı.");
// }else{
//     console.log("Değer bulundu :",value);
// }


//? Hepsini Silme
// sessionStorage.clear();


// let value = sessionStorage.getItem(552);
// console.log(typeof value);


//? Session Storage - Array Yazdırma

// let names = ["Ali","Enes","Kübra","Adem","Ayşenur"];
// sessionStorage.setItem("names",JSON.stringify(names));

// let value = JSON.parse(sessionStorage.getItem("names")); //json.parse ile string'i array'miş gibi gömebiliriz. Array olmayan bir şey üzerinde forEach ile döenemeyiz.
// value.forEach(function(name){
//     console.log(name);
// })

