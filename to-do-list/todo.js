const form = document.querySelector(".toDoForm");
const input = form.querySelector("input");
const list = document.querySelector(".toDoList");
const TODOLIST_LS = "todolist";
let toDoList = [];

function loadToDoList(){
  const toDoList = localStorage.getItem(TODOLIST_LS);
  if(toDoList!==null){
    const parsedtoDoList = JSON.parse(toDoList);
    parsedtoDoList.forEach(function(toDo){
      paintToDo(toDo.text)
    })
  }
}

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  list.removeChild(li);
  const cleanToDoList = toDoList.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  })
  toDoList = cleanToDoList;
  saveToDoList();
}

function saveToDoList(){
  localStorage.setItem(TODOLIST_LS, JSON.stringify(toDoList));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const id = toDoList.length+1;
  delBtn.addEventListener("click", deleteToDo);
  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = id;
  list.appendChild(li);
  const toDoObj = {
    text: text,
    id: id
  };
  toDoList.push(toDoObj);
  saveToDoList();
}

function handleSubmit(event){
  event.preventDefault();
  const value = input.value;
  paintToDo(value);
  input.value = "";
}

function init(){
  loadToDoList();
  form.addEventListener("submit", handleSubmit);
}
init();