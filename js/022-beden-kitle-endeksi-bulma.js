//! BEDEN KİTLE ENDEKSİ BULMA PRATİK ÇALIŞMASI

//todo Pratik Çalışma: 

let kilo = Number(prompt("Lütfen kilonuzu giriniz: ", "70"));
let boyunuz = prompt("Boy ölçünüzü giriniz", "1.77");

// vkiSonucunuz(kilo, boyunuz);

let vkiSonucunuz = (kilo/(boyunuz*boyunuz));

if(vkiSonucunuz<18.5){
    console.log("İdeal Kilonun Altında: " + "kilonuz," + kilo);
}
if(vkiSonucunuz>=18.5 && vkiSonucunuz<=24.9){
    console.log("Tebrikler, ideal kilonuzdasınız.");
}
if(vkiSonucunuz>=25 && vkiSonucunuz<=29.9){
    console.log("İdeal kilonun üstündesiniz.")
}
if(vkiSonucunuz>=30 && vkiSonucunuz<=39.9){
    console.log("İdeal kilonuz olsası gerekinin çok üzerinde(obez)");
}
if(vkiSonucunuz>=40){
    console.log("40 Kilonun üzerindeki sonuçlar morbid obezdir.")
}



