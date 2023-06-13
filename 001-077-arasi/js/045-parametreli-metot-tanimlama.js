//! PARAMETRELİ METOT TANIMLAMA

function fonksiyonİsmi (parametre1, parametre2){ //parametrelerde sınırlama yoktur. 
    console.log;(parametre1 + " " + parametre2);
}

//Eğer bir yerde parantez açıp kapatılıyorsa o bir metottur.

//todo örnek 1:
function cube(sayi){
    console.log(sayi*sayi*sayi)
}

cube(5);
cube(2); 

//todo örnek 2:
let yasiniziGiriniz = Number(prompt("Lütfen yaşınızı giriniz."));

yasKontrolü(yasiniziGiriniz);

//function metodu
function yasKontrolü(yas){
    if(yas>18){
        console.log("Ehliyet almanız mümkündür.")
    }else{
        console.log("Ehliyet almanız mümkün değildir.")
    }
}