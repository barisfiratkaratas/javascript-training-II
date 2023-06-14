//! 096-Nesne Oluşturma ve Yapıcı Metot Kullanımı | JAVASCRIPT Dersleri

// OOP GİRİŞ

let a;


class Insan{ //1. sınıf oluşturuldu.
    /*
        1-Özellikler
        2-Yapıcı metot
        3-Function 
    */

        //YAPICI METOT
    constructor(isim,soyisim,yas,maas){ //2. yapıcı metot oluşturuldu.
        //ÖZELLİKLER
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas= maas;
    }
    //FUNCTION
    bilgileriGoster(){
        console.log(
            ` İsim : ${this.isim} 
              Soyisim : ${this.soyisim}
              Yaş : ${this.yas}
              Maaş : ${this.maas}`
            )
    }


}

const insan1 = new Insan("Enes","Bayram",23,10000);
const insan2 = new Insan("Betül","Çınar",24,7500);

console.log(insan1.isim) //Bir sınıf içindeki bir özelliğe erişmek içindir.
console.log(insan2.isim)
// insan1.bilgileriGoster()
// insan2.bilgileriGoster()

//? nesne oluşturma
// const insan1 = new Insan();

// bir obje oluşturulduğunda ram bellek'te insan1 ve insan2 şeklinde iki farklı referans olarak bulunur. bu referanslar insan nesnesini tutarlar. dolayısıyla 32 ve 33. satırlarda da görüleceği üzere Insan nesneleri insan1 ve insan2 referanslarıyla tutulmaktadır.

// bir sınıf vardır, bir yapıcı metodu vardı. sınıfın özellikleri vardır. yapıcı metot aracılığıyla sınıfın içindeki özellikler doldurulur. bunun içine de functionlar tanımlanır. sınıftan nesne türetilerek özellikler, funtionlar kullanılır.  