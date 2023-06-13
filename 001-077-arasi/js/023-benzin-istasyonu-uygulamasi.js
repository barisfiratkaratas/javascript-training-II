//! BENZİN İSTASYONU PRATİK ÇALIŞMASI

//? 1- Dizel: 24.53     2- Benzin: 22.25    3-LPG: 11.1

//? Gelen müşteriden alınacak bilgiler: 1- Yakıt Tipi    2-Kaç Litre


//todo PRATİK ÇALIŞMA: Müşteriden yakit tipi ve litresini öğrenip, ücret hesaplanmalı.

let dizel = 24.53;
let benzin = 22.25;
let lpg = 11.1;

const yeniSatir = "\r\n"; // javascript'te yeni satır için kullanılan ifade "\r\n" olup, bu ifadeyi yeniSatir değişkeni ile tanımladık. Bu tanımlamayı, ,kodu tekrar tekrar yazmamak için yapıyoruz. 

const yakitMetni = ("1. Dizel: 24.53" + yeniSatir + "2. Benzin: 22.25" + yeniSatir + "3. LPG: 11.1" + yeniSatir + "Lütfen Yakıt Tipinizi giriniz.")

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){ // bu bir tür controller'dır. Eğer kullanıcı bu üç seçenekten birini girmişse aşağıdaki kodlar çalıştırılır. Eğer kullacını 1, 2 ve 3 dışında bir değer girerse 669. satırdaki else çalıştırılır.
    let yakitLitresi = Number(prompt("Yakıt litresini giriniz"));
    let bakiye = Number(prompt("Bakiyenizi giriniz"));

    if(yakitTipi=="1"){
        //DİZEL
        let odenecekTutar =  dizel*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye : " + bakiye);
        }else{
            //bakiye yeterli değil
            alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : " + (odenecekTutar-bakiye));
        }
    }else if(yakitTipi=="2"){
        //BENZİN
        let odenecekTutar =  benzin*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye : " + bakiye);
        }else{
            //bakiye yeterli değil
            alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : " + (odenecekTutar-bakiye));
        }
    }else if(yakitTipi=="3"){
        //LPG
        let odenecekTutar =  lpg*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye : " + bakiye);
        }else{
            //bakiye yeterli değil
            alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : " + (odenecekTutar-bakiye));
        }
    }
}
else{
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}


//? PRATİK ÇALIŞAMDA SPAGETTİ YANİ TEKRAR EDEN KOD YAZMAK SURETİYLE GELİŞTİRME YAPTIK. METHOD VE FUNCTİON DERSLERİ ÖĞRETİLDİKTEN SONRA DAHA İYİ YÖNTEMLERLE DE KODLANABİLECEKTİR.