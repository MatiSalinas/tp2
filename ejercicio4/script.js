const formulario = $('formulario')

formulario.addEventListener('submit', (e)=> {
    const peso = +formulario['peso'].value
    const altura = +formulario['altura'].value
    alert(`Tu imc es ${peso/(altura*altura)}`)
    e.preventDefault()
})

function $(elemento) {
    return document.getElementById(elemento)
}