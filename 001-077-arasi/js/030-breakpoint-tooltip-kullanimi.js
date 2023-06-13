//! BREAKPOINT VE TOOLTIP KULLANIMI


//! 1. TOOLTIP:
//? Bir kod yazarken vsc tarafından kullanıcıya gösterilerek, kullandığı metot hakkında bilgi veren bilgi kutucuklarıdır.
/*
    parseInt() : function parseInt(string: string, radix?: number | undefined): number

    Converts a string to an integer.

    @param string — A string to convert into a number.

    @param radix
    A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
*/

/*
    parseFloat() : function parseFloat(string: string): number

    Converts a string to a floating-point number.

    @param string — A string that contains a floating-point number.
*/
/*

ortalamaBul // function ortalamaBul(vize1: any, vize2: any, finalNot: any): number 
/// Önce aşağıda bir fonksiyon tanımladık. Daha sonra tanımladığımız bu fonksiyonu çağırdığımızda yukarıda sözünü ettiğimiz tooltip ile bu fonksiyonun nasıl çalıştığını gösteren bir bilgi kutusu ile karşılaştık. 

function ortalamaBul (vize1, vize2, finalNot){
    ///kodlar
    return 75;
}

*/

//! BREAKPOINT 

//? Derleyici kodları milisaniyeler içinde yukarıdan aşağıya doğru okur. Eğer bir yerde hata olduğunu düşünüyor ve hatayı tespit etmek istiyorsak bunun için kodları derleyicinin satır satır çalıştırmasını sağlamak için breakpoint'den faydalanırız. Bunun için debugger anahtar kelimesini kullanırız. Tarayıcının konsol bölümündeki sourse bölümünde, kodların derleyici tarafından tek tek okunmasını sağlayarak hatayı tespit edebiliriz. debugger anahtar kelimesini hangi satıra koyarsak tek tek okuma işlemi o satırdan başalr.