
//? 1. Kullanıcıya mesak verdik. İlk önce main sayfası çalışacak.

let mesaj =
`
Migros'a hoşgeldiniz.
Money kartınız var mı?

1-Evet
2-Hayır

`;

//? 2. urunlerimizi oluşturup, birden fazla urun girilebileceği için dizi haline getirdik. her bir ürünün birden fazla özellik olabileceğini düşünerek bunları bir ojbe olarak tanımladık.
const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 15
    },

    {
        urunIsmi : "Bebek Bezi",
        fiyat : 100
    },

    {
        urunIsmi : "Et",
        fiyat : 220
    }
]

//? 3. daha sonra sonucu ekrana verdik. 
// sonuc true veya false gelmesi için confirm kullandık. 
let sonuc = confirm(mesaj);
//? 4. kullanıcının verdiği cevaba göre sonucu alıp, işleme koyduk.

//? 4.1 eğer money üyeliği varsa sonuç true olur.
if (sonuc){
    //? 4.1.1 true ise isim ve soyismini alırız.
    //money club üyesi
    let isim = prompt("Adınızı Giriniz: ");
    let soyisim = prompt("Soyadınızı Giriniz: ");

    //? 4.1.2 isim soyisim bilgilerini müşteri'ye göndermek için müşteri sınıfından bir nesne türettik.(new Musteri(...);)
    const musteri = new Musteri(isim,soyisim,sonuc,urunler);

    //? 4.1.3 Musteri sınıfındaki isim ve soyisim 41.42. satırlarla alındı. sonucu en başta müşteri girmişti. ürünleri de zaten biz tanımlamıştık oradan geldi.

    //! 4.1.4 bu aşamada kod aşağıya devam edilerek okunmaz. Önce müşteri sınıfının constructor'ına gidilir. (MoneyClub-Project/Musteri.js içindedir.)
    //! 4.1.5 ödenecekTutar geri döndürüldükten sonra burada tutulur. ve alert ile kullanıcıya gösterilir.
    let odenecekTutar = musteri.hesapla();

    alert(
        // `Müşteri Bilgileri: ${isim} ${soyisim}
        // Ödenecek Tuttar: ${odenecekTutar} 
        // `
        `
        Müşteri Bilgileri: ${musteri.getIsim()} ${musteri.getSoyisim()}
        Ödenecek Tuttar: ${odenecekTutar} 
        `
        );
//? 4.2 eğer money üyeliği yoksa false.        
}else{ 
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(` Ödenecek Tuttar: ${odenecekTutar} `)
}