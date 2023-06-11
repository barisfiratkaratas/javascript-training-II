// ! Var-Let-Const



//? Değişken nedir? : ihtiyacımız olan değeri, ihtiyaç anında kullanabilmemiz için bu değere bir değişken tanımlarız. bu değişkeni kullanarak ihtiyaç halinde değişkeni anahtar kelimelerle veritabanından çağırarak kullanabiliriz.

// değişken tanımlama formulü: 
// var a = 5;
// anahtar kelime + degiskenİsmi + operatör + tanımlanan değer + noktalı virgül(zorunlu değil)
//        |                |             |                |               |
//        var              p             =                5               ;    
          
    

//? Peki hangi değişkeni neye göre seçmeliyiz?

// var : var ile tanımlanan her şey function scope halini alır. block scope içinde taımlanmış olsa dahi. dolayısıyla her yerden ulaşılabilir. böyle olduğu için de çok fazla yer kaplar. let ve const'un çıkma nedeni budur. 

//let ve const; block scope özelliğine sahiptir.


//todo Örnek 1: 
function selamVer(){
    var selam = "Herkese Selam"; // hatırlayalım: fucntion scope
    if(true){
        var n=19; //kural olarak block scope olmasına rağmen var ile oluşturduğumuz için function scope halini alır.
    }

    console.log(selam);
    console.log(n);
}
selamVer(); // metodu çağırmak için.

//todo Örnek 2:
var f = 6;
var f = 11;
console.log(f); // var anahtar kelimesi kullanıldığında console en son okunan yansıtılır.

let c = 7;
//let c  = 14;
console.log(c); //let ve const söz konusu oldığı zaman aynı değişken iki kez tanımlanmaz. //SyntaxError: Cannot declare a let variable twice: 'a'.



//? Let ve Const arasındaki fark nedir?

//const :constant : sabit, değişmez.

//todo Örnek 1:
let j = 14;
j = 24;
console.log(j); // let j =14; ile j'yi 14 olarak tanımladık.Daha sonraki satırda 24 olarak tanımladık. Console.log ile ekrana 24 yansır. Let anahtar kelimesi ile yapılan tanımlamalarda son okunan değerin ekrana yansıtılması mümkündür.

const kl = 34;
// kl = 44;
console.log(k); // const kl =34; ile k değişkenini 34 ile tanımlamışken sonraki satırda kl değiştenine 44 atadık ve console.log ile ekrana yansıtmayı denedik. AMA bu mümkün olmaz. ÇÜNKÜ const ile tanımlanan değişken değiştirilemez.

//todo Örnek 2:
const user = {  //object tanımlamak için "anahtar kelimi + değişken ismi + operatör + süslü parantez" formulü kullanıır. (//todo örnek: let degiskenİsmi = {firstName: "XYZ", lastName: "KLM",})
    userAdı : "Baris",
    password : "123",
}

// user ={} 
// user = {age: 28}; //Üsteki örneklerle benzer şekilde eğer const anahtar kelimesi ile bir object tanımlarsak ve daha sonra bu object'e yeni bir değer tanımlarsak ("SyntaxError: Unexpected token ';'. Expected '}' to end an object literal.") hata alırız. Const değiştirilemez.

user.userAdı="barisfirat"; // bu yolla içerideki tanımlamayı değiştirmek mümkün.
console.log(user);



