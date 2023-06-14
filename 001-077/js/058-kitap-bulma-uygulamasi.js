//! KİTAP BULMA UYGULAMASI


//1. kitaplarımızı tanımladık.
let kitap1 = { isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 25 ,raf:"1.5.RAF"}
let kitap2 = { isim: "Hiçbir Karşılaşma Tesadüf Değildir", yazar: "Hakan Mengüç", fiyat: 56,raf:"2.3.RAF" }
let kitap3 = { isim: "İnsan Neyle Yaşar", yazar: "Tolstoy", fiyat: 34 ,raf:"3.4.RAF"}
let kitap4 = { isim: "Zafer Sızlanarak Kazanılmaz", yazar: "Haluk Tatar", fiyat: 45,raf:"4.1.RAF" }
let kitap5 = { isim: "Şeker Portakalı", yazar: "José Mauro de Vasconcelos", fiyat: 22,raf:"5.3.RAF"}

//2. kitapları bir dizi içinde topladık.
let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

//3.rafları birer object olarak tanımladık. Çünkü true false değerlerine göre dinamik yapıp, kitabın olduğu rafı göstereceğiz. aksi halde statik kalacaktı. 
let raf11 = { raf: "1.1.RAF", goster: false }
let raf12 = { raf: "1.2.RAF", goster: false }
let raf13 = { raf: "1.3.RAF", goster: false }
let raf14 = { raf: "1.4.RAF", goster: false }
let raf15 = { raf: "1.5.RAF", goster: false }

let raf21 = { raf: "2.1.RAF", goster: false }
let raf22 = { raf: "2.2.RAF", goster: false }
let raf23 = { raf: "2.3.RAF", goster: false }
let raf24 = { raf: "2.4.RAF", goster: false }
let raf25 = { raf: "2.5.RAF", goster: false }

let raf31 = { raf: "3.1.RAF", goster: false }
let raf32 = { raf: "3.2.RAF", goster: false }
let raf33 = { raf: "3.3.RAF", goster: false }
let raf34 = { raf: "3.4.RAF", goster: false }
let raf35 = { raf: "3.5.RAF", goster: false }

let raf41 = { raf: "4.1.RAF", goster: false }
let raf42 = { raf: "4.2.RAF", goster: false }
let raf43 = { raf: "4.3.RAF", goster: false }
let raf44 = { raf: "4.4.RAF", goster: false }
let raf45 = { raf: "4.5.RAF", goster: false }

let raf51 = { raf: "5.1.RAF", goster: false }
let raf52 = { raf: "5.2.RAF", goster: false }
let raf53 = { raf: "5.3.RAF", goster: false }
let raf54 = { raf: "5.4.RAF", goster: false }
let raf55 = { raf: "5.5.RAF", goster: false }

//5. dizi içinde dizi oluşturduk.
let raflar = [
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]];

    //6. rafOlustur metodu yazdık: metot her çalıştığında console temizle dedik.
    function rafOlustur(){
        console.clear();
        let satir="";
        //7. Temizledikten sonra başla; i=0'dan başla rafların sayısı kadar dön ve ayrıdca i'nin raf sayısından küçük olup olamadığını kontrol et.
        for(let i =0  ; i<raflar.length ; i++){
            //8. Küçük ise süslü paranteze geç, j=0'dan başla ve 5'e kadar dön. Ayrıca j'nin 5'ten küçük olup olmadığını kontol et.
            for(let j=0 ; j<5 ; j++){
                //4. goster ? raflar --> göster true ise kodunu yazdır false ise --- yazdır.
                //9. raflar dizisinin i'ninci index'i(yani ilk okuma için; 0'ncı index'in 0ıncı index'ini yakala. raf51 bir objedir.) 
                //10. Buna göre bu object'in göster alanı true ise ?(soru işareti)'den sonraki kodu yazdır.
                //11. true değilse de --- yazdır.
                //12. içteki for'da dönmeye devam ederiz. bu durumda i, j sonuna kadar 0 olur. j birer birer artar, 5'e kadar. 
                satir+="|"+ (raflar[i][j].goster ? raflar[i][j].kod : "---")+"";
              
            }
            //13. satırı yazdır. 
            console.log(satir);
            console.log("--------------------");
            //14. satırı temizle.
            satir="";
        }//15. içteki for 5'e kadar döndükten sonra içteki fordan çıkılır. dıştaki for'a geçilir. bu işlemler i için i<raflar.length kadar döndürülür.
        
    }

    function kodBul(kitapIsmi){
        let rafKod=null;
        kitaplar.forEach(function(kitap){
            if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
                rafKod=kitap.raf;
            }
        });
        return rafKod;
    }

    function raftaGoster(rafKodu){
        for(let i =0 ; i<raflar.length; i++){
            for(let j=0 ; j<5 ; j++){
                if(raflar[i][j].raf==rafKodu){
                    raflar[i][j].goster=true;
                    break;
                }
            }
        }
    }

    rafOlustur();

    let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz.");
    let rafKod = kodBul(kitapIsmi);
   
    if(rafKod!=null){
        raftaGoster(rafKod);
        rafOlustur();
    }else{
        alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır.");
    }
    



 



