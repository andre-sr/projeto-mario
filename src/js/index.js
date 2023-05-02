/*
Obj 1 - Quando clicar em 'ver trailer' abrira o modal com o trailer

Obj 2 - Quando clicar no 'x' fechar a modal

*/ 

console.log (document)

console.log(document.querySelector(".botao-trailer"))

const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const fechar = document.querySelector(".fechar-modal")

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
})

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
})

fechar.addEventListener("click", () => {
    modal.classList.remove("aberto")
})