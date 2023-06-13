//! ASAL SAYI BULMA UYGULAMASI

//todo: Asal sayı, 1'e ve kendisi dışında başka hiçbir sayıya bölünmeyen sayılardır.

/*

    15 : 1 2 3 4 5 6 7 8 9  --> bir sayının yarısından fazlasına bölümünden hep kalan olur. diğer bir deyişle tam olarak bölünmez. Bunun yanında, yarına bölündüğünde küsüratlı olabilir. 

*/

// let xc = Math.floor(7.9);  ---> math.floor metodu bir sayının ondalıklı kısmının altılmasını ve o haliyle yazılmasını sağlar
// console.log(xc); 

let girilenSayi = Number(prompt("Bir sayı giriniz: "));
let sonucNe = true;
for(let ii = 2; ii <= Math.floor(girilenSayi/2); ii++){
    if(girilenSayi%ii==0){ /// girilenSayi'nin asal olup olmadığını kontrol etmek için modunu alıyoruz. mod alırken de 2'den kedisinin yarısına kadar olan sayıları for döngüsüne sokuyoruz. bu yüzden mod'u ii'den başlatıyoruz. kalan eğer 0 ise o sayı asal olamayacağı için sonucNe = false döndürülür ve break ile döngü kırılır ki gereksiz yere asal olmadığı anlaşılmasına rağmen denemeye devam etmeyelim.
        /// asal sayı değildir.
        sonucNe = false;
        break; /// sayı asal olmadığı anlaşıldıktan sonra döngüyü sürdürmenin anlamı yok. bu yüzden break ile sonucun false olduğu anda döngüyü kırıyoruz.
    } 
}
if(sonucNe){
    console.log(sonucNe + "asal değildir.")
}else{
    console.log(sonucNe + "asaldır.")
}