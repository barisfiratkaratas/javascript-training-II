//! IF ELSE IF ELSE YAPISI PRATIK ÇALIŞMA

//todo Pratik 1: Yol Ayrımı Uygulaması: Kullancıya 3 yoldan birisini seçme imkanına sahip, kullanıcıya hangi yoldan gitmek istediğiniz soracağız.

// 1.yol       2.yol       3. yol ---> Dör ihtimal vardır. Kullanıcı 3 yoldan birisini ya da hiçbirisini seçebilir.


let secilenYol =prompt("Lütfen gitmek istediğniz yolu seçiniz: ", "1. yol")

if(secilenYol =="1. yol"){
    alert("Seçilen yol " + secilenYol +"dur.")
}else if(secilenYol =="2. yol"){
    alert("Seçilen yol " + secilenYol +"dur.")
}else if(secilenYol =="3. yol"){
    alert("Seçilen yol " + secilenYol +"dur.")
}else{
    alert("Lütfen geçerli bir yol seçiniz.")
}