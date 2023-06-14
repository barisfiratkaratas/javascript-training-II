//! DİNAMİK OLARAK ELEMENT OLUŞTURMA

const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");

console.log(cardBody);

const link = document.createElement("a");
link.id="goBlogWebSite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://enesbayram.net";
link.target="_blank";
link.innerHTML = "Kişisel Websiteme Git";

/*

<li class="list-group-item d-flex justify-content-between">Todo 3
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>
*/
cardBody.appendChild(link);  //Child'ın sonuna eklemek için kullanılır.


const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i  = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.href="#";
todoLink.className="delete-item";


i.className="fa fa-remove";


todoLink.appendChild(i);
todo.appendChild(todoLink);

todoList.appendChild(todo);


console.log(link);
