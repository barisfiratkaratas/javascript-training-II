//! MANTIKSAL OPERATÖRLER

//?  "&&" Ve Operatörü : Birden fazla koşulun hep birlikte sağlnması gereken durumlar için kullanılır.

//todo Örnek:
// Yaşınızın 18'den büyük olması --ve-- en az 3.000TL tutarında paranızın olması gerekiyor. 
//             |                                   |
//             true                &&             true 

let yourAge = 18;
let hasMoney = 3200;

console.log(yourAge>=18 && hasMoney>=3000); //true


//?  "||" Veya Operatörü : iki koşuldan birisinin sağlanmasının yeterli olduğu durumlar için kullanılır.

//todo Örnek
let yasiniz = 18;
let money = 2800;
console.log(yasiniz>=18 || money>=3000); // true
console.log(yasiniz>=19 || money>=3000); // false --> yaş 19'dan büyük veya para en az 3000 olmalı. 


//todo Örnek
let yasin = 18;
let para = 350000;
let hakSayisi = 3;
let saglikliMi = false;
console.log((hakSayisi>=1 && money>=3000) || yasin>=18 && saglikliMi==true); // true
//                 |                |               |               |
//                 true     ve      true            true    ve      false
//                  |                 |
//                          true           veya             false
//                                 --------true ------------


//?  "!" Not Operatörü : bir koşulun değilini almak için kullanılır.
