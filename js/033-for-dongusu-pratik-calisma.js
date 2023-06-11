//! FOR DÖNGÜSÜ PRATİK ÇALIŞMA

//? 1-10'a kadar olan sayıları yazdır:

for(let birdenOna = 0; birdenOna<=10; birdenOna++){
    console.log(birdenOna);
}


//? 1-10'a kadar olan çift sayıları yazdır:
for(birdenOnaÇiftler = 0; birdenOnaÇiftler<=10; birdenOnaÇiftler= birdenOnaÇiftler+2){
    console.log(birdenOnaÇiftler);
}

//? 1-10'a kadar olan tek sayıları yazdır:
for(birdenOnaTekler = 1; birdenOnaTekler<=10; birdenOnaÇiftler= birdenOnaTekler+2){
    console.log(birdenOnaTekler);
}

/*

1. Tek olan sayılarda Enes, çift olan sayılarda Naber yazdırılsın.
    * Enes 
    * Naber
    * Enes 
    * Naber
*/


for(let i=1; i<=10; i++){
    if(i%2==1){
        console.log("Enes");
    }else{
        console.log("Naber?")
    }
}

//? 50'den 1'e kadar gidelim ve sayıları toplayalım:

let toplam = 0;
for(let i=1; i<=50; i--){ 
    toplam = toplam + i; 
    console.log(i);
}

console.log("Toplam: "+ toplam);