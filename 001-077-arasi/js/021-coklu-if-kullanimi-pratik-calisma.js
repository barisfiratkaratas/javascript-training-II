//! ÇOKLU İF KULLANMA PRATİK ÇALIŞMA

//todo Pratik Çalışma: Kullanıcıdan ad ve tckn bilgisini alın. Kullanıcının adı boş geçilemez ve tckn 11 karakterden oluşsun. 


let adiniziGiriniz = prompt("İsminizi Giriniz: ");
let tckn = prompt("TCKN bilginizi giriniz.")

//todo 1. YOL
/*'
check(adiniziGiriniz, tckn);  //aldığımız bilgileri metoda verdik. ||||Metotlar ileride daha detaylı anlatılacaktır||||

function check(adiniziGiriniz, tckn){  // metodumuzu function'a soktuk. 
    if(adiniziGiriniz!== ""){
        if(tckn.length==11){
            console.log("Ad ve TCKN bilginiz alındı.");
        }else{
            console.log("TCKN bilgisi eksik girildi.");
        }
    }else{
        console.log("Lüfen isim alanını boş bırakmayınız.");
    }
}
*/

//todo 2. YOL
check2(adiniziGiriniz, tckn);

function check2(adiniziGiriniz, tckn){
    if(adiniziGiriniz!==""){
        console.log("TCKN bilgisi eksik girildi.");
        return; // Return bir metotdur. Eğer if koşulu sağlanmazsa kodları okumaya devam etme. işlemei burada sonlandır anlamına gelir.
    }
    if(tckn.length!==11){
        console.log("Lüfen isim alanını boş bırakmayınız.");
        return;
    }
}
console.log("Ad ve TCKN bilginiz alındı.");


//todo ÖZET:

// if else yapıları: 2 tane seçeneğin olduğu yerlerde kullanılır.

// if else if else yapıları : 2^den fazla seçeneğin olduğu durumlar içindir.

// if if if yapıları : her bir kosulun ayrı bir kosul olarak değerlendirmesi için kullanılır. 