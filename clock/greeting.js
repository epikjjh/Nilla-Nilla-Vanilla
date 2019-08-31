const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greeting")
const showingClass = "showing"
const USER_LS = "currentUser"

function saveName(text){
  localStorage.setItem(USER_LS,text)
}

function handleSubmit(event){
  event.preventDefault()
  const currentUser = input.value
  saveName(currentUser)
  paintGreeting(currentUser)
}

function askForName(){
  form.classList.add(showingClass)
  form.addEventListener("submit",handleSubmit)
}

function paintGreeting(text){
  form.classList.remove(showingClass)
  greeting.classList.add(showingClass)
  greeting.innerHTML = `Hello ${text}`
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS)
  if(currentUser===null){
    askForName()
    form.classList.add(showingClass)
  }else{
    paintGreeting(currentUser)
  }
}

function init(){
  loadName()
}
init()