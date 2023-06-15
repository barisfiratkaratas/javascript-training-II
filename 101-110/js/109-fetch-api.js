//! 109-Asenkron #9 | Tek Video'da FETCH APİ | JAVASCRIPT Dersleri


// function getStudents(url){
     // const promise = fetch(url);
     // console.log(promise);
//     fetch(url) //response tipinde promise döner.
//     .then((response)=>{ //response döndüğü için then ile yakaladık.
//         return response.json(); //
//     })
//     .then((date) => console.log(data))
//     .catch((err) => consoleçlog(err))
// }

// getStudents("students.json");



function getData(url){
    fetch(url)
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/albums")
.then((response) => response.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))