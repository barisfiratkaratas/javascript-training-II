//! RETURN İLE DEĞER DONDURMEK

//? 1. Bir değeri metot dışına çıkarmak için kullanılır.
//? 2. return 'dan sonraki kodlar okunmaz.

//Geriye döndüren metot tanımlamak : return 

//kodlar yukarıdan aşağıya koğru sağdan başlamak suretiyle okunur.

//derleyici küp'ü 3 olarak okur. küp değişkenin geçtiği aşağıdaki fonksiyona ilerler ve sayiGir parametresinin yerine 3 değerini koyar. küpünü alır ve return sayesinde elde ettiği sonucu en baştaki küp(3)'ün yerine koyar. donenDeger 27 olur ve console.log ile 27 ekrana yazdırılır.

let donenDeger = küp(3);       //1. küp 3 okunur.  //4. donenDeger'e 27 tanımlanır.
//console.log(donenDeger);     
kareAl(donenDeger);            //5. karaAl içinde 27 koyulur.

function kareAl(sayi){         //6. kareAl(donenDeger için fonksiyon çalıştırılır.)
    let sonuc = sayi*sayi;     //7. 27*27 729 sonucu elde edilir.
    console.log(sonuc);        //8. sonuç konsola yazdırılır. 
}

function küp(sayiGir){      //2. 3 burada yerine koyulur. 3*3*3 27 sonucu alınır. 
    let sonucumuz = (sayiGir*sayiGir*sayiGir);
    return(sayiGir);        //3. return sayesinde elde edilen sonu. 9. satırda yerine koyulur. 
}   

//! GERİYE DEĞER DONDURMEYEN METOTLAR:


//? İçerisinde return anahtar kelimesi barındırmayan metotlardır. void metotlar olarak adlandırılır.

// function kareAl(sayi){         
//     let sonuc = sayi*sayi;     
//     console.log(sonuc);        
// }
