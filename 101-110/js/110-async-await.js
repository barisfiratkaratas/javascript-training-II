//! 110-Asenkron #10 | Tek Video'da ASYNC AWAİT | JAVASCRIPT Dersleri

//promise then zinciri

/*
async function hello(){ //async key girilirse promise döner.
    return "Hello World"
}

// console.log(hello())
hello()
.then((res)=>console.log(res));
*/

document.querySelector("#button").addEventListener('click', ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response)=>response.json())
        .then((comments)=>console.log(comments))
    })
})

//async await ile yapılışı
document.querySelector("#button").addEventListener('click', async ()=>{
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await responsePost.json();

    const responseComments  = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    const comments = await responseComments.json();
    console.log(responsePost) 
})


//todo kısa yol:
document.querySelector("#button").addEventListener('click', async ()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const responseComments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();

    const comments = await responseComments.json();
    console.log(post, comments) 
})