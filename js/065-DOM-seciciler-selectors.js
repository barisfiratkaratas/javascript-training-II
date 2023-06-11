//! DOM-SECİCİLER(SELECTORS)

//classname , id , tag name

//? getElementById : id ye göre elementi yakalar
// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));



//getElementByClassName : class ismine göre yakalar.
//getElementByTagName : etiket ismine göre yakalar.







// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
// const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })

// console.log(classListesi);


// let buttonText = button.textContent; --> // button.innerHTML="<b>Todo Ekleyin</b>"; textContent ile yapıldığında innerHTML içerideki etiketleri string olarak yazar.
// let buttonText2 = button.innerHTML;  --> innerHTML ise bunları html kodu olarak okur ve uygular. 


// console.log(buttonText);
// console.log(buttonText2);


// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })
// console.log(todoList);



// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);


// const todoList = document.getElementsByTagName("li");
// console.log(todoList);



//? querySelector - querySelectorAll : getElementById - getElementByClassName - getElementByTagName yerine kulanabileceğimiz metotlardır. all ile document içinde geçenlerin hepsini çağırabiliriz. 


// const clearButton = document.querySelector("#todoClearButton"); 
// console.log(clearButton);

// console.log(document.getElementById("todoClearButton")));


// const todoList = document.querySelector(".list-group");
// console.log(todoList);

//odd ve even  --> odd tek sayıdakileri, even çift sayıda olanları seçer.

const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"));

todoList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})

console.log(todoList);