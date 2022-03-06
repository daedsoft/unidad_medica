const userName = document.querySelector('#name')
const userEmail = document.querySelector('#email')
const userMessage = document.querySelector('#message')
const successMessage = document.querySelector('#successMessage')

document.addEventListener('submit', (e) =>{
  const form = e.target
  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
  e.preventDefault()  
  finishSend()
})

const finishSend = () => {
  userName.value = ""
  userEmail.value = ""
  userMessage.value = ""
  successMessage.classList.add('show')
}
