//! MOUSE EVENTLARI

//? DOMContentLoaded 
// document.addEventListener("DOMContentLoaded", run)

// function run(){
//     console.log("Sayfa Yüklendi");
// }



//? load
// window.addEventListener("load", run)

// function run(){
//     console.log("Sayfa Yüklendi");
// }



//? click
// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardBody.addEventListener("click",run);

//?dblclick
// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardBody.addEventListener("dbclick",run);


//? over, out, enter, leave eventları
//mouseover
//mouseout
//mouseenter
//mouseleave

const cardBody = document.querySelectorAll(".card-body")[1];
const cardTitle = document.querySelectorAll(".card-title")[1]; 


// cardBody.addEventListener("mouseover",run); -> over hem karlar hem de içindeki html elementlerinin üzerinde girildiğinde tetiklenir.
// cardBody.addEventListener("mouseout",run);

cardBody.addEventListener("mouseenter",run); //mouse enter sadece verilmiş hedef element üzerinde çalışır.
cardBody.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);
}