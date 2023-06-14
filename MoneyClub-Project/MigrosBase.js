class MigrosBase{
    indirimorani = 50;

    /*
    urunler[

        fiyat : 10
        urunAdı : "Süt"
    ]
    */

    //? 4.1.6 Müşteri'ye gelen değerler bu constructor'a düşecektir. bu değerler aşağıdaki değişkenler ile tutulur. Tüm özellikler artık migrostadır.
    constructor(isim, soyisim, kartVarmi, urunler){
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;

    }

    //? 4.1.7 aldığımız özellikleri hesapla fonksiyonunda çalıştırırız. 
    hesapla(){

        let odenecekTutar = 0;
        //? 4.1.7.1 ürünleriKontrolEt ile ürünüü olup olmadığını kontrol ederiz. 46. satırdaki fonksiyon çağrılır. ürünler null değilse true döner ve if'in içine girer.
        if(this.urunleriKontrolEt(this.urunler)){
            //Sepetim Dolu
            //? 4.1.7.3 kartı var mı yok mu diye bakılır. varsa if'e girilir ve ürünlerin her biri üzerinde forEach ile dönülür.
            if(this.kartVarmi){
                //moneyclub üyesidir.
                this.urunler.forEach((urun)=>{
                    odenecekTutar += (urun.fiyat *(100-this.indirimorani) / 100)
                })
            }else{
                //? eğer kartı yoksa indirim yapmadan hesaplama yapılır
                //değildir.
                this.urunler.forEach((urun)=>{
                    odenecekTutar += urun.fiyat
                })
            }

        }else{
            alert("En az bir tane ürün satın almalısınız.")
        }
        //! 24 ile 44 arası çalıtırıldıktan sonra odenecekTutar return edilir. bu durumda bu metodun çağrıldığı yere odenecekTutar oraya geri gönderilir. yani musteri.js'teki super.hesapla();
        return odenecekTutar;
    }
    //? 4.1.7.2 ürün olup olmadığı kontrol edilir.
    urunleriKontrolEt(urunler){
        if(urunler !==null && urunler.length>0){
            return true;
        }
        return false;
    }

    getIsim(){
        return this.isim
    }
    
    getSoyisim(){
        return this.soyisim
    }

}


