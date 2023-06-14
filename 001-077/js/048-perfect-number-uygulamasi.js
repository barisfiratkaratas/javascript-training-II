//! Mükemmel Sayı Uygulaması 

// 6    - 28 -   496 sayıları mükemmel sayıdır.

//? 6   = 1 ,2 ,3 ,6      = 12  =  6*2   // 6'yı tam bölen sayıları buluyoruz. Eğer tam bölen sayıların toplamı, ilk sayımızın iki katına eşit ise bu sayı mükemmel sayıdır.

//? 28 = 1,2,4,7,14,28  = 56  = 28*2

/* */

//todo Örnek: 

isPerfectNumber(6); //1. 6 sayısını verdik.

function isPerfectNumber(number){ //2. 6 sayısı fonksiyonda yerini alır.
    let toplam = 0;
    for(let i =2 ; i<=number/2 ; i++){  //3. 2'den baila, 6'nın yarısı 3(number/2)'e kadar devam et. 6'ya kadar bölmüyoruz çünkü yarısına bölen sayıdan sonrası zaten tam bölmeyecek.
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;  //1 ve kendisine de tam bölüneceği için toplama bunları da ekliyoruz.

    if(toplam==number*2){
        console.log("Mükemmel Sayıdır...");
    }else{
        console.log("Mükemmel Sayı Değildir..");
    }
}