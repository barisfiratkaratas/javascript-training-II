//! 097-Static Anahtarı Kullanımı | JAVASCRIPT Dersleri

//? Nedir?

//Bazı metotlar statik olarak tanımlandırğında class'tan nesne türetmeden direkt sınıf ismi üzerinden class'larımıza ve metotlara erişim sağlanır.

//? Bir function veya özellik static ise CLASS'a özgüdür, değilse nesneye özgüdür.

class StringUtil{
    static  isNull(){
  
      }
      static getCharacterLength(){
  
      }
  }
  
  // class Insan{
  
  //     static languagesCount=10;
  
  //     constructor(firstName , lastName, salary){
  //         this.firstName = firstName;
  //         this.lastName=lastName;
  //         this.salary = salary;
  //     }
  
  
  //     writeInfo(){
  //         console.log(this.firstName,this.lastName,
  //             this.salary,this.languagesCount)
  //     }
  // }
  
  // // const insan1 = new Insan("Enes","Bayram","10000");
  // // insan1.writeInfo();
  
  // console.log(Insan.languagesCount);
  
  
  // class Matematik{
  
  //    static topla(a,b){  //static'lere sınıf ismi üzerinden erişim sağlanır.
  //         console.log(a+b)
  //     }
  
  //     cikar(a,b){
  //         console.log(a-b)
  //     }
  
  //    static carp(a,b){
  //         console.log(a*b)
  //     }
  
  //     bol(a,b){
  //         console.log(a/b)
  //     }
      
  // }
  
  // const matematik = new Matematik(); //constructor tanımlanmamışsa derleyici default olarak arkaplanda bir tane tanımlar. 
  // matematik.topla(10,5);
  // matematik.carp(5,7)
  
  //? Static olarak tanımlanmamışsa NESNE üzerinden, Static ise CLASS İSMİ üzerinden erişilir.
  
  //! const stringUtil = new StringUtil();
  
  
  
  
  