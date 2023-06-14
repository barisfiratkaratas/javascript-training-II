//! ARMSTRONG SAYIYI UYGULAMASI

//? Basamaklarının küpleri toplamı kendisine eşit olan sayılara Armstrong sayı denir . 407 için = (4*4*4)+(7*7*7)=470 Bu yüzden 407 armstrong bir sayıdır.

//todo Pratik Calışma: 1. Kullanıcıdan bir sayı al. | 2. Alınan sayının her rakamının küpünü al ve topla | 3. Toplamdan elde edilen sonuç ile alınan sayı birbirine eşit ise sayı Armstrong sayı olur.

//let userSayi = Number(prompt("Lütfen bir sayı giriniz: "));
let userSayi = prompt("Lütfen bir sayı giriniz: "); //Number'a çevirmiyoruz. Çünkü string veri tipine özgü bazı metotları  (indexOf, charAt,length etc. )  kullanmamız gerekiyor. Bu yüzden string olarak kalsın sitiyoruz.
let toplamSonuc = 0;

for(let i=0; i<userSayi.length; i++){
    let rakamX = userSayi.charAt(i);  // charAt(i) parantez içinde belirtilen indexteki rakamı çağırır. dizilerde ilk eleman 0. index olur. İleride diziler(array) daha detaylı ele alıancaktır.
    toplamSonuc+=rakamX*rakamX*rakamX;
}
if(Number(userSayi)==toplamSonuc){
    console.log("Armstrong sayısıdır.");
}else{
    console.log("Armstrong sayısı değildir");
}



