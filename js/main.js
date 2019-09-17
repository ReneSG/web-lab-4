document.getElementById("submitTodo").addEventListener("click", function(){
  const todoContainer = document.getElementById("todoList");
  const div = document.createElement('div');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  span.innerHTML = document.getElementById('todoInput').value;
  checkbox.type = "checkbox";
  div.appendChild(checkbox)
  div.appendChild(span)
  todoContainer.appendChild(div);
  document.getElementById('todoInput').value = ''
});


document.getElementById("deleteTodos").addEventListener("click", function(){
  const todoContainer = document.getElementById("todoList");
  while (todoContainer.firstChild) {
    todoContainer.removeChild(todoContainer.firstChild);
  }
});


document.getElementById("markTodos").addEventListener("click", function(){
  const todoContainer = document.getElementById("todoList");
  const children = todoContainer.children;

  for(var i = 0; i < children.length; i++) {
    children[i].firstElementChild.checked = true;
  }
});

document.getElementById("clearTodos").addEventListener("click", function(){
  const todoContainer = document.getElementById("todoList");
  const children = todoContainer.children;

  for(var i = 0; i < children.length; i++) {
    children[i].firstElementChild.checked = false;
  }
});
