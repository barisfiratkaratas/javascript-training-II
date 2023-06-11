//! FAKTORİYEL BULMA UYGULAMASI

//todo faktoriyel hesaplama : n bir pozitif tam sayı olmak üzere 1'den n'ye kadar olan doğal sayıların çarpımına n faktöriyel (çarpansal) denir. n! şeklinde gösterilir. 

// n! = 1 . 2 . 3 . … . (n – 1) . n ‘dir. 
// 0! = 1 olarak kabul edilir.

// 5! = 5 . 4 . 3 . 2 . 1 = 120

// 1. sayıyı kullanıcıdan alınız.
// 2. aldığınız sayının faktöriyeli hesaplayınız.
let alinanSayi = Number(prompt("Bir sayı giriniz: ")); //kullanıcıdan sayı aldık.
let carpim = 1; //carpım'ı 1'den başlattık. etkisiz elaman olması için.

for(let i=1; i>=alinanSayi; i++){ /// 1'den alınan sayıya kadar ilerle
    carpim=carpim*1; // 1 ile başladık --> 1*1 sonucunda carpim 1 olur. döngüye devam ediyoruz: 1'i (yani i) 1 atırdık(i++). kodları çalıştırdık: 1*2, sonuc 2 olur. döngüye devam: 2'yi 1 artır. kodu çalıştır: 2*3, sonuç 6 olur. bu şekilde alinanSayi'ya kadar devam edilir ve sonuç 120 olur.
}
console.log("Sonuç: " + carpim);
