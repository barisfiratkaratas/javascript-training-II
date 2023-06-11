//! VERİ TİPLERİ

//? 1- String : tırnak içinde gösterilen her şey string tipinde olur.

let isim = "Baris";  
console.log(typeof isim); //typeof ile değşkenin tipinin ne olduğu tarayıcının konsolunde görüntülenebilir.

//? 2- Number

let numberDegisken = 10; //sayı tırnak içinde yazılırsa string türüne dönüşür.
let ondalikli = 10.5; 
console.log(typeof numberDegisken);

let stringDegisken = "Yaşınız ";
let age = 23;
console.log(stringDegisken + age)

//? 3- Boolean: true ve false'tan oluşur.

//todo Örnek:
let tz = 3;
let yl = 5;

let sonuc = tz + yl;
console.log(sonuc>5);
console.log(typeof sonuc);


//? 4- Null : içerisinde herhangi bir değer ataması yapılmamış

//todo Örnek:
let xy = null;
xy = 41;

console.log(xy);


//? 5- Undefined : tanımlanmamış veri tipi

//todo Örnek;
let ab;
console.log(ab);
console.log(typeof ab);


//? 6- Object : gelişmiş veri tiplerindendir. Atama operatöründen sonra süslü parantez kullanmak suretiyle oluşturulur.

//todo Örnek 1:
let insan ={  //atama operatöründen sonra süslü parantez açılarak oluşturulan veri türü objecttir.
    adı : "baris",
    yas : 28,
    soyad : "karatas"
}

console.log(insan);
console.log(typeof insan);

//todo Örnek 2:
let rakamDizi = [1, 2, 3, 4, 5, 6]; //object veri türlerindendir. Ama spesifik olarak bir array'dir. Her object array değildir, her array aynı zamanda bir objectir. Süslü parantez= object oluşturmak içinken, köşeli parantez array oluşturmak içindir. 
console.log(rakamDizi);
console.log(typeof rakamDizi);

//? 7- Function : atama operatöründen (=) sonra süslü parantez ile devam edildiği zaman function oluşturulur.süslü parantez içi de çalıştırmak istenilen js kodaları ile doldurulur. --> "İlerleyen derslerda function'lar daha detaylı anlatılacaktır."


let func = function(){
    console.log("Merhaba");
}

func(); // fonksiyonu çağırmak için
console.log(typeof func);
