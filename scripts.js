const input = document.querySelector(".todo-input");
const button = document.querySelector(".add-btn");
const todosDiv = document.querySelector(".todos");
const todoForm = document.querySelector(".todo-form");

// functions

//function to create todo after taking value from input tag
const createTodo = (inputValue) => {
    let todoDiv = document.createElement('div');
    let todoTitle = document.createElement('h3');
    let iconDiv = document.createElement('div');
    let editImg = document.createElement('img');
    let deleteImg = document.createElement('img');

    todoDiv.classList.add("todo");
    todoTitle.classList.add("todo-title");
    iconDiv.classList.add("icons");
    editImg.classList.add("icon");
    deleteImg.classList.add("icon");

    todoTitle.innerText = inputValue;
    editImg.setAttribute('src', "./assets/edit.svg");
    deleteImg.setAttribute('src', "./assets/delete.svg");

    editImg.addEventListener('click', () => {editTodo(todoTitle)});
    deleteImg.addEventListener('click', () => {deleteTodo(todoDiv)});

    iconDiv.appendChild(editImg);
    iconDiv.appendChild(deleteImg);

    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(iconDiv);

    todosDiv.appendChild(todoDiv);
    input.value = null;
}

//function to edit a todo
const editTodo = (todoTitle) => {
    input.value = todoTitle.innerText;

    let editBtn = document.createElement('button');
    editBtn.classList.add("add-btn");
    editBtn.innerText = "Edit Todo";

    todoForm.removeChild(button);
    todoForm.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
        todoTitle.innerText = input.value;
        input.value = null;
        editBtn.remove();
        todoForm.appendChild(button);
    });
}

//function to delete a too
const deleteTodo = (todoDiv) => {
    todoDiv.remove(this);
}

// listener on add button
button.addEventListener('click', () => {
    createTodo(input.value)
});