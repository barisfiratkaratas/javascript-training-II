//! DECIMAL SAYIYI BINARY SAYIYA ÇEVİRME 

//? Decimal : Onlu sayı sistemi, tam sayı olan ve olmayan sayıları belirtmek için kullanılan ve Hint-Arap sayı sistemini referans alan on tabanlı sayı sistemidir. 

//? Binary : İkili sayılar sayıların 2 tabanında yazılmasıyla elde edilir. Dolayısıyla tüm sayılar 0 ve 1 rakamları kullanılarak ifade edilirler. 


//todo Örnek:

convertDecimalToBinary(6);

function convertDecimalToBinary(number){
    let binary ="";
    while(true){
        binary+=(number%2).toString(); //hatırlayalım: toString ile number - string tür dönüşümünü sağlarız.
        number=Math.floor(number/2);  //hatırlayalım: math.floor elde edilen sayının küsüratlı kısmını atar ve o haliyle sayıyı vermeye yarar.
        if(number==1){ 
            //Artık bölmek yok döngüden cıkacagız.
            binary+=1; //son bölme işlemindeki bölümü eklemek içindir.
            break;
        }
    }
    let result  = reverse(binary);
    console.log("Sonuç : " + result);
}


function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.length-1 ; i>=0 ; i--){
        reverseBinary+=binary.charAt(i);
    }

    return reverseBinary;
}