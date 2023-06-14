//! 088-Arrow Function Kullanımı | ES6 

// function yazdir(){
//     console.log("Merhaba")
// }

// yazdir()

//ARROW FUNCTİON

// const yazdir = ()=>{
//     console.log("Merhaba")
// }

// yazdir()

//? Eğer arrow function ile yazılan fonksiyon tek kod satırından oluşuyor ise süslü parantezler kullanmaya gerek yoktur.
// const yazdir =(firstName,lastName)=>console.log("Merhaba",firstName,lastName) 

// yazdir("Enes","Bayram")

//? Eğer tek bir parametre kullaılarak bir fonksiyon yazılıyor ise bu durmda parametreyi çerçeveleyen parantezlere de ihtiyaç yoktur.
// const yazdir = firstName=> console.log("Merhaba",firstName)
// yazdir("Enes")


// const kupAl = (x) =>{
//     return x*x*x
// }
// console.log("Değer ", kupAl(3));

const kupAl = x=> x*x*x  //? tek parametre olduğu için; x parametresinin oval parantezlerini,  tek satır kod olduğu süslü parantezleri kaldırdık. ayrıca return ile tek bir satırlık işlem yapıyorsak return 'ü de kaldırabiliriz.
const kareAl = (x)=> x*x

console.log("Değer " , kareAl(3))



//todo 
document.addEventListener("click", function(){
    //kod yazılır.
})

//todo arrow function örneği
document.addEventListener("click",()=>{

})