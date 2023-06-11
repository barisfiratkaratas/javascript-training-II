//! WHILE DONGUSU PRATİK CALISMASI

//todo Pratik Calisma:  1'den 10 'a kadar olan sayıları yazdıralım.

let sayac = 1; // degisken tanımlama

while (sayac<=1) { //kosul 
    console.log(sayac);

    sayac++;   // artırma azaltma islemleri 
}

// while dongusu for dongusunun parçalanmoş hali olarak da kabul edilebilir.

//todo Pratik Calisma: 1'den 10 'a kadar olan çift ve tek sayıları yazdıralım.

let sayacCift = 1;

while (sayacCift<=10) {
    if(sayacCift%2==0){
        console.log(sayacCift);
    }
    sayacCift++;
}

while (sayacTek<=10) {
    if(sayacTek%2==1){
        console.log(sayacTek);
    }
    sayacTek++; 
}

//todo Pratik Calisma : 1'den 10'a kadar olan sayılardan 7'ye kadar olanı yazdır.

let sayacBoolean = 1; 

while(true){ 
    console.log(sayacBoolean);
    if(sayacBoolean==7){
        break; //çalıştığı andan itibaren döngüyü kıran ifadedir. s
    }
    sayacBoolean++;
}