//! PARAMETRESİZ METOT OLUŞTURMA

/*

    function yazdir(){
       bu bölüme kodlar yazılacak
    }

*/


//todo örnek 1: 

/*
function yazdir(){
    console.log("Baris")
}

/// yukarıda yazılan haliyle konsol'da çıktı alınmaz. Ayrıca bu fonksiyonun çağrılması gerekmektedir.

yazdir(); // function'un çağrılması bununla mümkün olur.
yazdir(); // function'ların avantajı budur. binlerce satırdan oluşan bir kodu tek satırda çağırmak mümkündür. Burada yukarıda oluşturulan fonksiyonu 2 ayrı satırda ayrı ayrı yazdırdık.
*/

//todo örnek 2: 
// fonksiyonun kodlar içinde nerede olduğu önemli değildir. çalışmasını etkilemez.
function topla(){
    console.log(5+7);
}

topla();