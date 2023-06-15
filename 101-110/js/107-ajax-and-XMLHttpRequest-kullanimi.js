//! 107-Asenkron #7 : AJAX & XMLHttpRequest Kullanımı | JAVASCRIPT Dersleri

//? ARTIK KULLANILMASA DA ÖĞRENİLMESİ FAYDALI OLABİLİR.

//? https://www.youtube.com/watch?v=Cz4n-GruwLY&list=PLURN6mxdcwL_D8H1iki2YCmp-lNyNAdbz&index=164


// https://jsonplaceholder.typicode.com

// https://www.hosting.com.tr/bilgi-bankasi/rest-api/

// function prepareURL(url, id){
//     if(id===null){
//         return url;
//     }
//     return `${url}?postId=${id}`
// }

// function getComments(url, id){
//     let newURL = prepareURL(url, id);
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener( "readystatechange", ()=>{
//         if(xhr.readyState===4 && xhr.status===200){
//             console.log(JSON.parse(xhr.responseText));
//         }
//     })
//     xhr.open("GET", newURL)
//     xhr.send();
// }

// function getData(url){
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener( "readystatechange", ()=>{
//         if(xhr.readyState===4 && xhr.status===200){
//             console.log(JSON.parse(xhr.responseText));
//         }
//     })

//     xhr.open("GET", url);
//     xhr.send();
// }

// getData("https://jsonplaceholder.typicode.com/users");


//getComments("https://jsonplaceholder.typicode.com/comments", 1) //post id'si 1 olanlar gelir.