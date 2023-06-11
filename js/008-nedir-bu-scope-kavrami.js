// ! var let const 

// Bir js'de değişken tanımlamak istenildiğinde:

//todo Örnek:
/*
var degiskenİsmi = 10; //tanımlanan bu değişken ram bellek'te tutulur. daha sonra print yöntemleri kullanılarak değişkene karşılık gelen tanım ram bellekten alınarak, çıktı yansıtılır. 
console.log(degiskenİsmi); 
*/


// ! SCOPE

// ?Global Scope: En geniş, sınırı olmayan, her yerden erişebilen scope'tur.
    //todo Örnek:
    var a = 17; // global scope'tur. bu değişkene her yerden erişilebilir.

    // var : anahtar kelimedir. bu kullanılarak değişken tanımlanır. 
    // a : tanımlanan değişkenin kendisidir.
    // =(eşittir) : operatördür.
    // 5 : operatör ve anahtar kelime yardımıyla a değişkenine atanan tanımdır.
    // ;(noktalı virgül) :kullanılması js için zorunlu olmayıp, diğer kimi diller için kullanılması zorunlu olduğundan, bu amacı taşıyanların alışkanlık haline getirmesi tavsiye olunur.

    if(true){
        console.log(a); // eğer var a =5; tanımlaması süslü parantez içine alınmış olsaydı, global scope anlamı taşımayacağından her yerden okunamazdı. süslü parantez içinde olduğu zaman sadece bulunduğu yerde erişilebilir.
    }



// ? Function Scope: süslü parantez içerisinde erişilebilen değişkendir. 

    function method1(){
        var sayi = 10;
        console.log(sayi);
    } 



// ? Block Scope: Block scope funciton dışındaki bir süslü parantez içinde tanımlanan bir değişken varsa bu değişken block scope anlamını taşır.Aşağıdaki örnekte if, while, for, do-while 'ın her birindeki süslü parentezlerde tanımlanan dğeşkenler block scope olur.

//todo Örnek
var gs = 27; //global scope
function method3(){
        var fs = 13; //function scope
    if(true){
        var bs = 21; //block scope

    }

    while(true){
        
    }

    for(let i=0; i<10; i++){

    }

    do{

    }while(true);
}

