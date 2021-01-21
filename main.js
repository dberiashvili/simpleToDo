const button = document.querySelector(".submit");
const input = document.querySelector(".input")
const todoContainer = document.querySelector(".todoContainer");



const add = ()=>{
  const todo = document.createElement("p")
  todo.style.cursor = "pointer";
  todo.innerHTML = input.value;
  if(input.value!==""){
      saveToLocalStorage(input.value);
      todoContainer.appendChild(todo)
      input.value=""
  }
  todo.addEventListener("click", ()=>{
      todo.classList.add("line");
  })
  

  todo.addEventListener("dblclick", ()=>console.log(todo.remove()))
}

function saveToLocalStorage(todo){
  let todos;
  if(localStorage.getItem("todos")===null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getSavedTasks(){
  let todos;
  if(localStorage.getItem("todos")===null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {
    const task = document.createElement("p")
    task.style.cursor = "pointer";
    task.innerHTML = todo;
    todoContainer.appendChild(task)
  });
}

button.addEventListener("click", add)

getSavedTasks()
