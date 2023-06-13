//! FOREACH DÖNGÜSÜ KULLANIMI | DİZİLER

let dizi1 = []; //direkt tanımlama yöntemi
let dizi2 = new Array(); //nesne üzerinden tanımlama yöntemi. 

//aşağıdaki şekillerde de dizi tanımlaması yapılabilir. gösterilen indexler karşılık gelen tanımlamalarla doldurulur. Ayrıca daha dizi tanımlanırken de tanımlamalar yapılabilir. " let dizi2 = new Array("Baris", "Firat"); " gibi.
dizi1[0] = "Ayse";
dizi1[1] = "Fatma";

dizi2[0] = "Baris";
dizi2[1] = "Firat"; 

//hatırlayalım : object(array) --> diziler object veri türündedirler. 

// for döngüsü, while dongüsü, do- while dongüsü

//forEach döngüsü ise diziler için kullanılan döngüdür.

let isimler = ["Ahmet", "Mehmet", "Hasan", "Ali", "Kerem"];
//todo: 1. yol
isimler.forEach(function(isim){ //isimler dizisi forEach döngüsüne sokulur. içeride fonksiyon okunur. 1. index ahmet fonksiyonda isim yerine koyulup, console.log ile ekrana yazdırılır. ayni işlem dizideki tüm indexler için tekrarlanır.
    console.log(isim);
});

/*

Output: 

Ahmet
Mehmet
Hasan
Ali
Kerem
*/

//todo: 2. yol

for(let i; i<isimler.length; i++){ //i<= yazmıyoruz çünkü böyle olursa 6. index'i de bakarız.
    console.log(isimler[i]);
}