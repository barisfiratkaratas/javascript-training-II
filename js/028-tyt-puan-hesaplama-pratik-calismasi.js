//! TYT PUAN HESAPLAMA PRATİK ÇALIŞMASI

//todo Pratik Çalışma :  1. Türkçe 40 Her soru (Her soru 4. puan) | 2. Matematik 40 | 3. Sosyal 20 | 4. Fen Bilgisi 20

//todo----->100 puan öss veriyor.
//todo----->60 max okul puanı geliyor

//todo Kullanıcıya 2 temel seçenek sunulsun: 1. tyt puanını hesapla | 2. çıkış yap

let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenbilgisiDogru, fenbilgisiYanlis = 0;

const satirEkle ="\n\r"
let hosgeldinEkranı = ("Hoşgeldiniz." 
+ satirEkle + "Gerçekleştirmek istediğiniz işlemin numarasını giriniz: " 
+ satirEkle + "1 - TYT Puan Hesaplama"
+ satirEkle + "2 - Çıkış Yap")

let secimYapildi = Number(prompt(hosgeldinEkranı));

switch(secimYapildi){
    case 1 :
        let okulPuani = Number(prompt("Okul puanınızı giriniz: "));

        let turkceDogru = Number(prompt("Türkçe doğru sayısını giriniz: "));
        let turkceYanlis = Number(prompt("Türkçe yanlış sayısını giriniz: "));

        let matematikDogru = Number(prompt("Matematik doğru sayısını giriniz: "));
        let matematikYanlis = Number(prompt("Matematik yanlış sayısını giriniz: "));

        let sosyalDogru = Number(prompt("Sosyal doğru sayısını giriniz: "));
        let sosyalYanlis = Number(prompt("Sosyal yanlış sayısını giriniz: "));

        let fenbilgisiDogru = Number(prompt("Fen Biglisi doğru sayısını giriniz: "));
        let fenbilgisiYanlis = Number(prompt("Fen Bilgisi yanlış sayısını giriniz: "));

        let dogruSayisi = (turkceDogru + matematikDogru + sosyalDogru + fenbilgisiDogru);
        let yanlisSayisi = (turkceYanlis + matematikYanlis + sosyalYanlis + fenbilgisiYanlis);

        ///4 yanlış 1 doğruyu götürdüğüne göre;
        let yanlisMod = (yanlisSayisi%4);
        let yanlisNet = (yanlisSayisi-yanlisMod);
        let netiHesapla = (dogruSayisi - yanlisNet);

        let puanHesapla = ((dogruSayisi*4) - (yanlisNet*4) + 100 + okulPuani);

        alert("Toplam dogru sayınız: " + dogruSayisi + "," 
        + satirEkle + "Toplam yanlış sayınız: " + yanlisSayisi + ","
        + satirEkle + "Toplam netiniz: " + netiHesapla + "," 
        + satirEkle + "Buna göre;"
        + satirEkle + "TYT Puanınız: " + puanHesapla)
        break;

    case 2:
        console("Uygulamadan Çıkış Yapıldı.");
        break;
    default:
        console.log("Lütfen geçerli aralıkta bir değer giriniz.")
        break;
}