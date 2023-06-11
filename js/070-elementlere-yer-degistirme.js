//! ELEMENTLERİ YER DEGİSTİRME

const cardBody = document.querySelectorAll(".card-body")[1];

// <h5 class="card-title">Todo Listesi</h5>

const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent = "Todo Listesi - Yeni";



cardBody.replaceChild(newTitle,cardBody.childNodes[1]);  


// https://www.w3schools.com/jsref/met_node_replacechild.asp
