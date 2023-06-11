//! DO-WHILE DONGUSU PRATIK CALIŞMA

//todo Pratik Çalışma : 1'den 10'a kadar sayıları yazdır.

let doWhile = 1;

do {
    console.log(doWhile);
    doWhile++;
} while (doWhile<=10);

//todo Pratik Çalışma : 25 yaştan büyükseniz ehliyet alabilirsiniz.


let kisininYasi = 23;

do{
    console.log("Ehliyet Alabilirsiniz.")
}while(kisininYasi>=25);  //kişinin yaşı 25 koşulunu sağlamasa da kodlar derleyici tarafından yukarıdan aşağıya doğru okunurken "Ehliyet Alabilirsiniz." konsol'a 


//todo Pratik Çalışma : 1'den 20'ye kadar olan tek sayıları toplayalım.

let sayacDoWhile = 1;
let toplamDoWhile = 0;

do {
    if(sayacDoWhile%2==1){
        toplamDoWhile+=sayacDoWhile;
    }
    sayacDoWhile++;
} while (sayacDoWhile<=20);
console.log("Toplam: " +toplamDoWhile);

