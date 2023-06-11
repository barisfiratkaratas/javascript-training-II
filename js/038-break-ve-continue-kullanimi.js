//!BREAK VE CONTINUE ANAHTAR KELİME KULLANIMI

//? BREAK

//todo break pratik çalışması: 1'den 10 kadar olan sayılardan 8'ye kadar olanları yazdıralım.


let sayacimiz = 1;

while(sayacimiz<=10){
    console.log(sayacimiz);
    if(sayacimiz==8){
        break; //break anahtar kelimesi ile gereksiz yere döngüyü sürdürerek performansı düşürmektense döngüyü sonuca ulaştıktan sonra kırar.
    }
    sayacimiz++;

}


//? CONTINUE:

//todo Pratik Çalışma: 1 2 3 4 5 6 7   9 10  sayılarını yazıp, 8'i atlayalım.

let sayacim = 0;

while(sayacim<=10){
    sayacim++;
    if(sayacim>10){
        break;
    }
    if(sayacim==8){
        continue; // bu satır çalışınca; bu satır ile while döngüsünü sona erdiği 35. satırdaki süslü paranteze kadarki kodlar çalıştırılmaz. Bu nedenle sayaç konsola yazdırılmaz. Kısacası Döngüyü 1 defa için kırar. Sonrası için devam eder.
    }
    console.log(sayacim);
}