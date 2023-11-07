const todoInput = document.querySelector('.input')
const btn = document.querySelector('.btn')
const ul = document.querySelector('.todo-list')
//console.log(btn, todoInput, ul)

const addToDo = (evt) => {
  evt.preventDefault()
  console.log(evt.target)
  const newLi = document.createElement('li')
  //add text from input to newLi
  newLi.textContent = todoInput.value
  //attach li to ul
  ul.append(newLi)
  todoInput.value = ''
}

btn.addEventListener('click', addToDo)
