//! EVENTS(OLAYLAR) NASIL KULLANILIR ? | Event Listener


//? Event'ları uygulamak için birden fazla yol vardır:

// 1. HTML kodlarında uygulama yapmak
// 2. haricen oluşturduğumuz js uzantılı dosya ile oluşturma
// 3. event listener kullanarak

//todo :

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", changeTittle);

// function changeTittle(){
//     document.querySelectorAll('.card-title')[1].textContent="Todo Başlık Değişti";
// }

function changeTittle(e){
console.log(e.type); //tetiklediğimiz event'ın type'ını alırız.
console.log(e.target); //event'ın çalışmış olduğu html elementini verir.
console.log(e.target.textContent); //dönen html elementinin textContent'ini yazdır.
console.log(e.target.className); 
}