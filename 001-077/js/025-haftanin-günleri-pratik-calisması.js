//! SWITCH CASE PRATIK CALISMASI | HAFTANIN GÜNLERİ 


//todo PRATİK ÇALIŞMA 1:
//? Kullanıcıdan 1-5 arasında bir sayı seçsin. 

let sayiSec = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz: ");


switch(sayiSec){ // "1" "2" "3" "4" "5" 

    case "1":
    ///kodlarınız
    console.log("Girilen sayi 1'dir.")
    break;

    case "2":
    ///kodlarınız
    console.log("Girilen sayi 2'dir.")
     break;

    case "3":
    ///kodlarınız
    console.log("Girilen sayi 3'dir.")
    break;

    case "4":
    ///kodlarınız
    console.log("Girilen sayi 4'dir.")
    break;

    case "5":
    ///kodlarınız
    console.log("Girilen sayi 5'dir.")
    break;

    default:
    console.log("Girilen Sayi 1 ile 5 arasında olmalıdır.")
    break;
}


//todo PRATİK ÇALIŞMA 1:


let satirYap = "\r\n";
let metin = ("1. Pazartesi" + satirYap 
+ "2. Salı" + satirYap
+ "3. Çarşamba" + satirYap
+ "4. Perşembe" + satirYap
+ "5. Cuma" + satirYap
+ "6. Cumartesi" + satirYap
+ "7. Pazar" + satirYap);

let degerimiz = prompt("Lütfen 1 ile 5 arasında bir değer giriniz");
switch(degerimiz){
    case "1" :
        console.log("Pazartesi Günü")
        break;
    
    case "2" :
        console.log("Salı Günü")
        break;
    
    case "3" :
        console.log("Çarşamba Günü")
        break;

    case "4" :
        console.log("Perşembe Günü")
        break;

    case "5" :
        console.log("Cuma Günü")
        break;
    
    case "6" :
        console.log("Cumartesi Günü")
        break;

    case "7" :
        console.log("Pazar Günü")
        break;

    default:
        console.log("Lütfen geçerli bir değer giriniz.")
        break;
}