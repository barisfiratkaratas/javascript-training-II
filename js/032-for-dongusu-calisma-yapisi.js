//! FOR DÖNGÜSÜ ÇALIŞMA YAPISI

/*

    for(degisken; kosul; artırma-azaltma){
        ///kodlar
    }

*/

//todo Örnek:
    // for döngüsü 3 parçadan oluşur. 
/*
    for(let degiskenTanımla=9; degiskenTanımla<=10; degiskenTanımla++){
        console.log(degiskenTanımla);
    }

    1. Anahtar kelime yazılır. ( let )
    2. Degiskenin ismi yazılır. ( degiskenTanımla )
    3. Operatör yazılır. ( = )
    4. Anahtar kelime ve operatör yardımıyla degisken tanımlanarak bir deger atanır. ( 9 )

    ---

    1.kosul yazılır.
    
    ----

    1. for'dan sonra parantez içi okunmaya başlanır. İlk olarak let ile başlayan değişken'e ilişkin bölüm okunur. Daha sonra tanımlanan degiskenin kosulu sağlayıp sağlamadığı kontrol edilir. Sonuç true ise; süslü parantez içindeki kodlar okunur. Ardından parantez içindeki kodlar okunmaya devam edilir ve ++ 'nın geçtiği kısım okunarak bir artırılır. (Uygulanacak işlem burada tanımlanan koda göre seçilir.) Artırdıktan sonra elde edilen sonuç tekrar başta söylenen sırasıyla parantez içindeki kodlara tabi tutulur. Yani elde edilen (artırılarak) yeni sayının 10'dan küçük veya eşit olup olmadığı koşuluna sokulur true alınırsa tekrar artırılır ta ki bu koşul sağlanmasın.

    DİKKAT: Derleyici yukarıdan aşağıya satır satır kodları çalıltırırken for döngüsüne gelindiğinde önce for döngüsünün içerisini çalıştırır, bu bölümde de koşuldan true sonucu alındığında sonraki adıma geçmeden(yukarıudaki örnekte artırma işlemi) süslü parantez içinde yazılan kodlar çalıştırılır. İlk seferden sonra derleyici bu kez koşuldan sonra artırma işlemine ilk işlemden elde edilen sonucu sokar.


*/