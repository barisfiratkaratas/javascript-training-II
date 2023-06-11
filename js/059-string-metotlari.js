//!  STRING SINIFININ METOTLARI

let kurs ="Modern Web Geliştirme Kursu";
let tarih = "2022";
// charAt()
// concat()
// indexof()
// lastindexof()
// toUpperCase()
// toLowerCase()
// trim()
// slice()
// substring()
// replace()
// split()
// valueOf()
// startsWith()
// endsWith();

//? CHARTAT METOT KULLANIMI: index numarasındaki karakteri dönen metottur.
// let karakter = kurs.charAt(1);
// console.log(karakter);

//? CONCAT METOT: İki string ifadesinin birleştirmesi sağlar.
// let sonuc = kurs.concat(" ",tarih," Enes");
// console.log(sonuc);

//? INDEXOF METOT: karekterin index numarasını yazdıran metottur. 
// let index = kurs.indexOf("W");
// console.log(index);

// let index = kurs.lastIndexOf("K");
// console.log(index);


//? TOUPPERCASE METOT : kelimeleri büyük harfe dönüştüren metottur.
// let sonuc = kurs.toUpperCase();
// console.log(kurs);
// console.log(sonuc);

//? TOLOWERCASE METOT : kelimeleri küçük harfe dönüştüren metottur.
// let sonuc = kurs.toLowerCase();
// console.log(sonuc);

//? TRİM METOT: space'leri sağdan ve soldan kaldırmak için kullanılan metottur.
// console.log(kurs.trim());


//? SLİCE METOT: parametrelerle belirtilen indexleri çekip almak için kullanılan metottur. 
// console.log(kurs);
// console.log(kurs.slice(22,28));


//? SUBSTRİNG METOT : slice ile aynı amaçla kullanılır.
// console.log(kurs);
// console.log(kurs.substring(0,6));


//? REPLACE METOT: kelime değiştirmek için kullanılan metottur.
// console.log(kurs);
// console.log(kurs.replace("Modern","Güncel"));


//? SPLİT METOT: split(",") şeklinde yazıldığında buna (, virgüle) göre ayırma işlemi yaparak her parçayı ayrı ayrı eleman yapıp, dizi oluşturan metottur.
// console.log(kurs);
// let dizi = kurs.split(",");
// console.log(dizi);

//? VALUEOF METOT: bir değer valueof ile işaretlenir ise belirtilen obje primitive hale döner. || primitive'ler daha detaylı olarak ilerideki derslerde ele alınacaktır.
// console.log(kurs.valueOf());


//? STARTSWITH METOT: X karakteri ile mi başlıyor? sorusunu sormaya yarayan metottur.
// console.log(kurs);
// console.log(kurs.startsWith("M"));
// if(kurs.startsWith("M")){
//     console.log("M harfi ile başlamaktadır.");
// }


//? ENDSWITH METOT: sonu x ile mi bitiyor ? sorusunun cevabının alınabildiği metottur.
// console.log(kurs);
// console.log(kurs.endsWith("Geliştirme Kursu"));