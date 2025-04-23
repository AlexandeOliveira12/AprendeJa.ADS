function scrollToContent(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const conteudo = document.getElementById('conteudo');
    conteudo.scrollIntoView({ behavior: 'smooth' }); // Executa a rolagem suave
}

let doctitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Volta, a Tecnologia ama você 💙";
})

window.addEventListener("focus", () =>{
    document.title = doctitle;
})