//! ATAMA OPERATÖRLERİ

//?  "=" Atama Operatörü

//todo Örnek:
let nb = 5; // "=" ifadesi eşittir anlamaına gelmez. atama operatörü olup, nb değişkeninin 5 ile tanımlanmasını sağlar.
console.log(nb);

//?  "==" Eşittir Operatörü: Matematiksel olarak eşittir anlamına gelen eşittir operatörüdür.
//todo Örnek:
let lk = 10;
let cx = 5;

let sonucLC = (lk + cx);
console.log(sonucLC == 16); //false 15 eşit değildir 16'ya. bu yüzden false
console.log(sonucLC == 15); //true
 
//? "===" Hem veri türünün (string, number, boolean vb.) hem de içindeki değerin aynı olup olmadığına bakılır.
//todo Örnek:
let yx = 10;
let yo = "10";

console.log(yx===yo); //false .Çünkü yx number veri türünde iken, "10" string veri türündedir.

//?  "+=" : Artı Eşittir Operatörü
//todo Örnek:
let artiEsittir = 10;
// artiEsittir = artiEsittir + 2; //kodlar sağdan okunur. "artiEsittir + 2" iki artı, bir üst satırda artiEsittir 10 olarak tanımlandığı için, dört anlamına gelir. bu nedenle console'da 12 gösterilir.
artiEsittir+=2
console.log("Artı Eşittir " + artiEsittir);

//?  "-=" Eksi Eşittir Operatörü
//todo Örnek:
let eksiEsittir = 11;
//eksiEsittir = eksiEsittir - 2;
eksiEsittir -= 2;
//     |    | 
//     11 - 2 = 9
console.log("Eksi Eşittir: " +eksiEsittir);

//?  "*=" Çarpı Eşittir Operatörü
//todo Örnek:
let carpiEsittir = 12;
carpiEsittir *= 5;
console.log("Çarpı Eşittir: " + carpiEsittir);

//?  "/=" Bölü Eşittir Operatörü
//todo Örnek:
let boluEsittir = 12;
boluEsittir /= 5;
console.log("Bolu Esisttir: " + boluEsittir);

//?  "%=" Mod Eşittir Operatörü
//todo Örnek:
let modEsittir = 12;
modEsittir %= 5;
console.log("Mod Esisttir: " + modEsittir); 

//?  "/=" Üs Eşittir Operatörü
//todo Örnek:
let usEsittir = 3;
usEsittir **= 5;
console.log("Üssü Esisttir: " + usEsittir);