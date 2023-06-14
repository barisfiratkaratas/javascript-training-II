//! ATM UYGULAMASI

//todo Pratik Çalıma: 1. Bakiye Görüntüleme | 2. Para Çekme | 3. Para Yatırma | 4. Çıkış

let bakiye =1000;

const satirAtla = "\r\n"

const islemMetni = ("1. Bakiye Görüntüleme" + satirAtla
+ "2. Para Çekme" + satirAtla
+ "3. Para Yatırma" + satirAtla 
+ "4. Çıkış" + satirAtla);

let secimYap = Number(prompt("Yapmak istediğiniz işlemin numarasını giriniz: " + satirAtla + islemMetni));

switch(secimYap) {
    case 1 : 
        console.log("Bakiyeniz : " + bakiye)
        break;
    
    case 2 :
        let cekimTutari = prompt("Çekmek istediğiniz tutarı giriniz: ");
        if(cekimTutari<bakiye){
            ///bakiye yeterli
            console.log("Bakiye Yetersiz.")
        }else if(cekimTutari>bakiye){
            ///bakiye yetersiz.
            console.log("Bakiye Yetersiz.")
        }
        break;
    
    case 3 :
        let paraYatir = prompt("Yatırmak istediğiniz tutarı giriniz: ");
        bakiye = paraYatir + bakiye;
        console.log("Para yatırma işlemi gerçekleştirildi. Güncel bakiyeniz: " + bakiye)
        break;

    case 4 :
        console.log("Çıkış yapıldı.")
        break;
    default :
        console.log("Lütfen belirtilen işlemlerden birisini seçiniz. ")
        break;
}