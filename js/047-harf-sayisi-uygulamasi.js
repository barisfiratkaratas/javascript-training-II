//! HARF SAYISI BULMA UYGULAMASI

//Bir metin içerisinde kullanıcının girmiş olduğu harfin kaç kez geçtiğini bulacağımız bir uygulama yapalım.

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nam?"

let harf = prompt("Lütfen harf giriniz.");

let sonuc = bul(harf);
console.log("Harf Sayisi : " + sonuc);

function bul(harf){
    let toplam = 0;
    for(let i=0; i<lorem.length; i++){
        if(lorem.charAt(i).toLowerCase===harf.toLowerCase){  //toLowerCase kullanarak küçük büyük harf hassasiyetini kaldırmış oluruz. Bu sayede harfi sorgularken küçük büyük fark etmeden hepsinin toplamı yazdırılır.
            toplam+=1
        }
    }
    return toplam;
}