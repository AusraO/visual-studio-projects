import Post from './post.js'


fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
  return response.json()   //isvercia duomenis is json i skaitoma teksta

})
.then (data => {
    console.log(data)  //data gali buti bet koks pavadinimas koks mums butu aiskus kokie duomenys yra paimami, pvz cia galetu buti users
data.forEach (user =>{
    document.querySelector('body').innerHTML += `<h1>${user.name}</h1>`    //
})
})

.catch(error =>{
    console.log(error.message)   //kazka atliekame error atveju
})
.finally(()=> {
    console.log('end')   //parodo kai baigiamas 
})






fetch ('https://jsonplaceholder.typicode.com/posts')
.then (res => res.json())
.then(posts =>{
    const allPosts= document.querySelector('#allPosts')  //dazniausiai reiks sukti cikla per duomenis
    posts.forEach(post =>{
        console.log(post)
        const newPost = new Post(post)
        allPosts.appendChild(newPost)
    })
})




fetch('https://randomuser.me/api/')
.then(res =>res.json())
.then(data => {
    console.log(data) //per konsole pasiziureti ko reikia toliau
    console.log(data.results[0]) //per kons. nusprendziau ko reikia
})