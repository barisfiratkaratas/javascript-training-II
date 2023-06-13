//!  BINARY TO DECIMAL CONVERSION (İkilik sistemden 10'luk sisteme çevirme)


//? Onluk sayı sistemindeki bir sayıyı ikilik sayı sistemine çevirmek içinse sayıyı 2'den küçük olana kadar sürekli 2'ye böleriz ve kalan sayılarıda birleştiririz.



let binary = "10110010101";

function convertBinaryToDecimal(binary){
    let toplam =0;
    let ust =0;

    for(let i=binary.length-1 ; i>=0 ; i--){
        if(Number(binary.charAt(i))!=0){  //matematiksel işlemler yapacağımız için number çevirdik. Ayrıca if koşulunu getirdik ki 0 ile çarpımdan 0 sonucu geleceği için bunları fonksiyonda çalıştırıp zaman ve performans kaybetmeyelim. 
            toplam+= Number(binary.charAt(i)) * Math.pow(2,ust); //bir sayının üstünü almak için math.pow metodunu kullanırız.
        } 
        ust++;
    }

    console.log("Sonuç : " + toplam);
}
convertBinaryToDecimal(binary);


