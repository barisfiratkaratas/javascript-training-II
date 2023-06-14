

//? 4.1.5 main sınıfı bilgileri Müşteri sınıfına o da MigrosBase sınıfına götürür. 

class Musteri extends MigrosBase{
    constructor(isim, soyisim, kartVarmi, urunler){
        super(isim,soyisim,kartVarmi,urunler)
    }

    //? 4.1.6 dönen değer buradaki fonksiyonun çağrıldığı yere return ile geri gönderilir. yani main.js 
    hesapla(){
        return super.hesapla();
    }

}

