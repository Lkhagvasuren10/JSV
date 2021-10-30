const btn = document.querySelector("#getData");
const container = document.querySelector("#container");
btn.addEventListener("click", async ()=>{
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: "get"
    })
    const result = await responce.json();
    console.log(result)
})