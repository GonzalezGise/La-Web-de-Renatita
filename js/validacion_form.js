const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const mail = document.getElementById('email')
const form = document.getElementById('form')


form.addEventListener('submit',e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let exp_reg_nombre = /[A-Za-z]+$/
    let exp_reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if(!exp_reg_nombre.test(nombre.value)){
        warning += 'El nombre solo debe contener letras'
        entrar = true
        alert(warning)
    }

    if(!exp_reg_nombre.test(apellido.value)){
        warning += 'El apellido solo debe contener letras'
        entrar = true
        alert(warning)
    }

    console.log(exp_reg_email.test(email.value))
    if(!exp_reg_email.test(email.value)){
        warning += 'El email ingresado no es valido'
        entrar = true
        alert(warning)
    }

    





})