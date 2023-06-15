//! 108-Asenkron #8 | Tek Video'da PROMİSE | JAVASCRIPT Dersleri |

//? ARTIK KULLANILMASA DA ÖĞRENİLMESİ FAYDALI OLABİLİR.

let check = true;

// const promise1 = new Promise((resolve, reject)=>{
//     if(check){
//         resolve("Promise Başarılı");
//     }else{
//         reject("Promise başarısız.")
//     }
// })

// console.log(promise1);

/*
function createPromise(){
    return new Promise((resolve, reject)=>{
        if(check){
            resolve("Promise'te bir sıkıntı yok.")
        }else{
            reject("Bir problemle karşılaşıldı.")
        }
    })
}

createPromise()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>console.log("Her zaman çalışır."))

*/

/* //?
Bir promise var. Bu promise'in 3 durumu vardır.

1. pending
2. resolve(fullfiiled) : .then ile yakalanır.
3. reject  : .catch ile yakalanır.


Promise asenkron yapıları senkron yapılara çevirmek için kullanılır.
*/


//? PROMİSE + XMLHTPREQUEST
//todo
function readStudents(url){
    return new Promise((resolve, reject)=>{
        const xhr = XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", ()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })    
        } catch(error){
                reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}
// readStudents("Student.json")
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

function getUsers(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", ()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(json.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url)
        xhr.send()
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")
.then((data)=> {
    // console.log(data)
    data.forEach((user)=>{
        console.log(user.name)
    })
    console.log("Daha sonra farklı esenkron kodlarını çalıştırabiliriz.")
})
.catch((err)=> console.log(err))
.finally(()=>{
    //mail atma kodlarını yazarsınız.
})

const p4 = Promise.reject("Hata var.");

//todo
const p1 = Promise.resolve("Birinci promise başarılı")
const p2 = Promise.resolve("Birinci promise başarılı")
const p3 = new Promise((resolve, reject)=>{
    resolve("Üçüncü promise başarılı")
})

Promise.all([p1, p2, p3])
.then((res)=>{
    // console.log(res)
    for(let value of res){
        console.log(value)
    }
})
.catch()