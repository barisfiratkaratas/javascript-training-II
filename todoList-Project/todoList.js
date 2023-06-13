//! 079-TodoList-Projesi #2 | ARAYÜZE TODO EKLEME | JAVASCRIPT Dersleri


//1. Elementler seçildi.

const form = document.querySelector("#todoAddForm"); 
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch")

let todos = [];


//2. runEvents(); metotu çağrıldı.
runEvents();

//3. runEevnt(); metot'u çalıştı.
//4. " <button id="todoAddButton" type="submit" class="btn btn-primary mt-4 btn-sm">Todo Ekleyin</button> " --->Buna göre eğer Todo Ekleyin buttonu'a tıklanırsa submit tetiklenir. index.html:28
function runEvents(){
    // 5. submit tetiklendiği zaman addTodo fonkisiyonunu çağır.
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);  //! 082-Storage'dan Alınan Değerleri Ekrana Yazdırmak #5 
    secondCardBody.addEventListener("click", removeTodoToUI); //! 83-Ekrandan Todo Silme #6
    clearButton.addEventListener("click", allTodosEverywhere); //! 084-Tüm Todoları Temizleme #8
    filterInput.addEventListener('keyup', filter); //! 86 Todolar Üzerinde Filtreleme #9

}


//6. addTodo metodu çalıştı.
function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText==null || inputText==""){
        //alert("Lütfen bir değer giriniz.");
        showAlert(warning, "Lütfen boş bırakmayınız."); //! 081-bilgilendirme-mesaji-yapma #4
    }else{
        //Arayüze Ekleme:
        //7. Kullanıcı bir değer girmiş ise arayüze ekleme yapılır. Bunun için addTodoToUI çağrıldı.Çağrıldığında içine de inputText verilmesi istendi. Yani kullanıcı'nın gireceği değe r yazılacak.
        addTodoToUI(inputText);
        addTodoToStorage(inputText);//! 080-todolist-projesi#3
        showAlert("success", "Todo Eklendi."); //! 081-bilgilendirme-mesaji-yapma #4       
    }
    //Storage'e ekleme: 
    //console.log("Submit event'ı çalıştı.")
    e.preventDefault(); // preventDefault submit ile farklı sayfaya yönlendirileceği için bu metot ile bunu engelliyoruz.
}

//8. addTodoToUI çağrılmıştı, bu sayde bu metot çalıştırıldı. İçine ise çağrılırken kullanıcının girdiği değer buradaki metotta newTodo yerine yazıldı.
function addTodoToUI(newTodo){
    /*
    <li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
        </a>
    </li>
    */

    //9. Tek tek li, a ve i elementleri todo Eklemek için oluşturuldu. Yaparken index.html içindeki satırdan faydalandık.
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href="#";
    a.className="delete-item";

    const i = document.createElement("i");
    i.className="fa fa-remove";

    //10. i a'nın, a li'nin, li todoList'in içine eklenmesini istedik.
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    //11. kullancı değer girip, bu eklendikten sonra input alanından silinmesini istediğimiz için aşağıdaki satırı oluşturduk.
    addInput.value =""; // to-do eklendikten sonra input'un temizlenmesi içindir.
}


//! 080-TodoList-Projesi #3 | STORAGE'E TODO EKLEME | JAVASCRIPT Dersleri

//1. 36. satırda kullanıcıdan aldığımız değerin storage'e de eklenmesini istedik ve bunun için addTodoToStorage(newTodo) metodunu çağırdık.

//2. addTodoToStorage(newTodo) metodu çalıştırıldı. Kullanıcının girdiği değer metottaki parametrenin yerini aldı.
function addTodoToStorage(newTodo){
    //3. addTodoToStorage(newTodo) metodu "checkTodosFromStorage();" metodunu çağırdı.
    checkTodosFromStorage();
    //6. kontrol yapıldı. eklenen todos değeri diğerlerinin yanına eklendi.
    todos.push(newTodo);
    //7. hemen üst satırla elde edilen güncel array localStorage'a setItem ile todos 'un üzerine yeni haliyle yazdırılır. yani todos array 'e çevrilmiş bir şekilde yazdırılır. 
    localStorage.setItem("todos",JSON.stringify(todos));
}
//4. 80. satırda çağrılan bu metoda göre; önce local storage'da todos keyine sahip bir değer olup olmadığı kontrol edildi. eğer yoksa todos=[] ile temiz bir şekilde başlatılır. Varsa; else çalışır 
function checkTodosFromStorage(){
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        //5. localstorage'de todos keyine sahip değer varsa bu durumda bunlar alınıp todos'a eklenir. todos global scope'ta tanımlanmıştı.
        todos = JSON.parse(localStorage.getItem('todos'));
    }
}

//! 081-TodoList-Projesi #4 | BİLGİLENDİRME MESAJI YAPMA | JAVASCRIPT Dersleri

function showAlert(type,message){
    /*<div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
    </div>*/

// div oluştur, class ve message parametrelerini kullan. 
const div = document.createElement("div");
// div.className="alert alert-" +type;
div.className=`alert alert-${type}`; 
div.textContent = message;

// firstCardBody içine div'i ekle.
firstCardBody.appendChild(div);

// 2,5 sn sonra pop-up'ın ekrandan kalmasını sağlar.
setTimeout(function(){
    div.remove()
},2500);
}

//! 082-TodoList-Projesi #5 | STORAGE'TAN ALINAN DEĞERLERİ EKRANA YAZDIRMAK | JAVASCRIPT Dersler


function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}


//! 083-TodoList Projesi #6 | EKRANDAN TODO SİLME | JAVASCRIPT Dersleri

function removeTodoToUI(e){
    // console.log(e.target);
    if(e.target.className==="fa fa-remove"){
        // console.log("Çarpıya basılmıştır.")
        //Ekrandan Silme
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        //Storage'tan Silme //! 084-TodoList Projesi #7
        removeTodoToStorage(todo.textContent)
        showAlert("success", "Todo başarıyla silinmiştir.")
    }
}

//! 084-TodoList Projesi #7 | STORAGE'TEN DEĞER SİLME | JAVASCRIPT Dersleri

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo, index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}


//! 085-TodoList Projesi #8 | TÜM TODOLARI TEMİZLEME | JAVASCRIPT Dersleri


function allTodosEverywhere(){
    const todoListesi = document.querySelectorAll(".list-group-item")
    if(todoListesi.length>0){
        //Ekrandan Sİlme
        todoListesi.forEach(function(todo){
            todo.remove();
        });
        //Storage'ten silme
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Başarılı bir şekilde silindi.")
    }else{
        showAlert("warning", "Silme işlemini gerçekleştirmek için kayıtlı todo görünmüyor.")
    }
    console.log(todoListesi);
}

//! 086-TodoList Projesi #9 | TODO'LAR ÜZERİNDE FİLTRELEME YAPMA | JAVASCRIPT Dersleri

// e'yi ihtiyacımız olan zamanlarda kullanmalıyız. burada ihtiyacımız olarak çünkü e.target kullanacağız.
function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style","display : block");
            }else{
                todo.setAttribute("style","display : none !important");
            }
        });
    }else{
        showAlert("warning","Filtreleme yapmak için en az bir todo olmalıdır!");
    }
}
