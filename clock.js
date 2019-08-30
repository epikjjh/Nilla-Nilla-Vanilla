const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector(".js-title")
const clickedClass = "clicked"

function getTime() {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  clockTitle.innerText = `${hours >= 10 ? hours : `0${hours}`}:${ minutes >= 10 ? minutes : `0${minutes}`}:${ seconds >= 10 ? seconds : `0${seconds}`} `
}

function handleClick(){
  clockTitle.classList.toggle(clickedClass)
}

function init() {
  getTime()
  setInterval(getTime, 1000)
  clockTitle.addEventListener("click", handleClick)
}
init()