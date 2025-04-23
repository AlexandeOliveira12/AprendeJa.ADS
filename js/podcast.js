let doctitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Volta, a Tecnologia ama você 💙";
})

window.addEventListener("focus", () =>{
    document.title = doctitle;
})