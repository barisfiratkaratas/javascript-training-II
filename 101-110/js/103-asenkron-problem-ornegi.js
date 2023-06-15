// //! 103-Asenkron #3 : Asenkron Problemi Örnek | JAVASCRIPT Dersleri

//HTTTP İstekleri

// const users = [
//     {
//         userId : 5,
//         post : "Baris Post 1"
//     },
//     {
//         userId : 5,
//         post : "Baris Post 2"
//     },
//     {
//         userId : 5,
//         post : "Baris Post 3"
//     },
//     {
//         userId : 6,
//         post : "Firat Post 1"
//     },
//     {
//         userId : 5,
//         post : "Firat Post 2"
//     }
// ]


 //user id
 // post by user ıd


// //todo PROBLEM:
// function getUserId(){
//     setTimeout(() => {
         //servise gittik ve cevap aldık.
//         return 5;
//     }, 1000);
// }

// function getPostByUserId(userId){
     //Gerçek bir rest api 'ye istek atılacak ama biz simüle etmek için böyle çalıştık.
//     setTimeout(() => {
//         users.forEach((user)=>{
//             if(user.userId===userId){
//                 console.log(user.post);
//             }
//         })
//     }, 500);
// }


// let userId = getUserId();
// getPostByUserId(userId);



// setTimeout(() => {
    
// }, 2000);

// //! Yukarıda kodlar çalıştırıldığı zaman çıktı alınmayacaktır. Çünkü aynı function'lar aynı anda çalışacakları için biri diğerinden yanıt almadan çalışır ve sonuç yazılamaz.

// //? Bu sorunu çözmek için asenkron yapıları senkrona çevirmeliyiz ki çıktı alabilelim. Bunun için de "callback" - "promise" - "async & await" yapılarından faydalanmaz gerekiyor. Sıradaki derste bunu inceleyeceğiz.