//! DİYALOG KUTULARI | ALERT(), PROMPT(), CONFIRM() | 

//? alert() 
//? prompt()


// tüm diyalog kuruları window object içinde tanımlanmışlardır.

// bir object window içinde tanımlanmışsa başına window koyamdan da alert kullanabiliriz | hatırlayalım: console.log(winndow) ile console window object açılabilir.
//todo Örnek:
/*
window.confirm() 
confirm()
*/

// alert("Lütfen bilgilerinizi eksiksiz giriniz: ")

// prompt("İsminizi giriniz: "); // bu haliyle kullanıcan bilgi alınır ama girdiği bilgi tutulmaz. bunun geri alnımasını istersek aşağıdaki gibi yazmalıyız:

// let yasGiriniz = prompt("Yasinizi Giriniz: "); // bu haliye kullanıcının girdiği bilgi yasGiriniz değişkenine tanımlanır.

// |||| Kullanıcıdan alınan değerlerler string tipindedir. Dolayısıyla gelen string tipindeki veriyi number tipindeki veriler ile koşullandıramayız ya da karşılaştıramayız. Önce kullanıcıdan gelen bilgiyi number'a dönüştürmeliyiz. --> Daha detaylı olarak TÜR DÖNÜŞÜMLERİ'nde anlatılacaktır. |||| hatırlayalım: verinin tipini öğrenmek için: console.log(typeof isim);


//? confirm() : kullanıcıya yönelttiğimiz soruya karşılık olarak tamam, hayır cevabu alabildiğimiz yapılardır. Aldığımız cevaba göre veri tabanından bir veriyi silmemiz, eklememiz mümkündür.

// confirm("Ürünü silmek istediğinize emin misiniz?") // kullanıcı tamam'a basarsa true, hayır'a basmışsa false dönecektir.

// let cevap = confirm("Silmek istediğinize emin misiniz?"); // tamam: true ; hayır: false
// console.log(cevap); 

