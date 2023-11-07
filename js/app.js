// variables
const sendBtn = document.querySelector('#sendBtn'),
      email = document.querySelector('#email'),
      subject = document.querySelector('#subject'),
      message = document.querySelector('#message'),
      resetBtn = document.querySelector('#resetBtn'),
      form = document.querySelector('#email-form')



// eventListeners
eventListeners()
function eventListeners(){
    // app initialization
    document.addEventListener('DOMContentLoaded', appInit)
    // validating fields
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    message.addEventListener('blur', validateField)
    resetBtn.addEventListener('click', resetField)
    form.addEventListener('submit', sendForm)
}




// functions
function appInit(){
    // disabled send button on load
    sendBtn.disabled = true
}

function sendForm(e){
    e.preventDefault()
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'block'
    const sendEmailImg = document.createElement('img')
    console.log(sendEmailImg);
    sendEmailImg.src = 'img/mail.gif'
    sendEmailImg.style.display = 'block'
    setTimeout(function() {
        
        spinner.style.display = 'none'
        const loaders = document.querySelector('#loaders')
        loaders.appendChild(sendEmailImg)
        setTimeout(() => {
            resetField()
            sendEmailImg.remove()
        }, 5000);
    }, 3000);
    
}

// validating fields of form
function validateField(){
    validateLength(this)
    if(this.type === 'email'){
        validateEmail(this)
    }
    let error  = document.querySelectorAll('.error')
    
    if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if (error.length === 0 ){
            sendBtn.disabled = false
        }
    }
}

// validate length of fields
function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}
function validateEmail(field){
    
    const emailText= field.value
    if(emailText.includes('@')){
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}

function resetField(){
    form.reset()
}