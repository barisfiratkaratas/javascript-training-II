//! 104-Asenkron #4 : Nedir Bu CALLBACK ? | JAVASCRIPT Dersleri

//? ARTIK KULLANILMASA DA ÖĞRENİLMESİ FAYDALI OLABİLİR.

// callback'ler kullanılmadan önce:
// function getName(){
//     setTimeout(() => {
         //servisten ismimi getirsin.
//         console.log("Baris");
//     }, 1000);
// }

// function getSurname(){
//     setTimeout(() => {
//         console.log("Karatas");
//     }, 500);
// }

// getName();
// getSurname();

// //? JS kural olarak senkron çalışan bir programlama dilidir. Ancak yukarıdaki örnekte timing işlemleri olduğu için asenkron çalışacaktur.


// 1. getName(); getSurname(); her ikisi de aynı anda çalışmaya başlayacak.

//2. yarım saniye sonra ekranda Karatas görünür, 1 sn sonra ise altında Baris görünecektir.

// - Her ne kadar yazarken önce getName() sonra getSurname 'i yazmış olsak da bu şekilde çalışmayacaktır. Çünkü function'lar asenkron yapıdadır. Üstelik servisten yanıt geleceği için de süresini tam olarak bilmeyeceğimiz için sağlıklı çıktılar elde etmemiz bu haliyle oldukça güç.

//! Callback 'ler artık kullanılmıyor ve kullanılması da tavsiye edilmiyor olsa da yeni yöntemlerin daha iyi anlaşılabilmesi için anlatılmaktadı r.

//Asenkron yapıların senkron'a çevrilmesi süre yönünden dezavantaj yatratacaktır.

// Callback bir fonksiyonu başka bir fonksiyona paremetre geçerek asenkron yapıyı senkrona çeviririz. 

//todo
// function getName(callback){ //callback = getSurname halini alır.
//     setTimeout(() => {
         //servisten ismimi getirsin.
//         console.log("Baris");
//         callback(); //callback getSurname 'in yerini alınca burada tetiklenerek getSurname çalıştırılır.
//     }, 1000);
// }

// function getSurname(){
//     setTimeout(() => {
//         console.log("Karatas");
//     }, 500);
// }

// getName(getSurname);



//todo 
// function getName(callback){ //1. getName çağrıldı ve callback yerine getSurname verildi.
//     setTimeout(() => {
         //servisten ismimi getirsin.
//         let name = "Enes"; //web service 'ten geldi.
//         callback(name);
//     }, 1000);
// }

// function getSurname(name){
//     setTimeout(() => {
//         let surname = "Karatas" ; // web service'ten geldi.
//         console.log(name, surname);
//     }, 500);
// }

// getName(getSurname);






//todo 
// function getName(callback) {
//     setTimeout(() => {
         //servisten ismimi getirdi.
//         let name = "Enes"; //web servisten geldi.
//         callback(name);
//     }, 1000);
// }

// function getSurname(name, callback) {
//     setTimeout(() => {
//         let surname = "Bayram"; // name 'e göre soyismi buldu.
//         callback(surname)
//     }, 500);
// }

// const a = () => {

// }

// function getAge(name, surname, callback) {
//     setTimeout(() => {
//         let age = 23; //ismi Enes ve Soyisimi Bayram olanı servisten yaşını getirdi.
//         callback(age);
//     }, 300);
// }
 // getName(getSurname)
// getName((name) => {
//     getSurname(name, (surname) => {
//         getAge(name, surname, (age) => {
//             console.log(name, surname, age);
//         })
//     })
// })



// getName();
// getSurname();