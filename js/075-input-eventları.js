//! İNPUT EVENTLARI

//focus
//blur
//copy
//paste
//cut
//select

const todo = document.querySelector("#todoName");

todo.addEventListener("focus",run); //imleç inputun içine girdiğinde tetiklenir
todo.addEventListener("blur",run); //inputun içinden çıkıldığında tetiklenir.
todo.addEventListener("copy",run); // kopyalamayla tetiklenir
todo.addEventListener("paste",run); //kopyalama yapıştırıldığın
todo.addEventListener("cut",run); //kesme işlemi sırasında
todo.addEventListener("select",run); //seçim yapılıp mouse serbest bırakıldığı anda select çalışır.


function run(e) {
    console.log(e.type);
}