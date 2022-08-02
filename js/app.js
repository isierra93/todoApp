//Captura de datos del DOM
let taskInput = document.getElementById(`taskInput`);
let taskAdd = document.getElementById(`taskAdd`);
let taskList = document.getElementById(`taskList`);

//Funciones
const actualizarToDo = () => {
    todoList = JSON.parse(localStorage.getItem(`todoList`));
    taskList.innerHTML = ``;
    todoList.forEach((element, i) => {
        let tarea = document.createElement(`li`);
        tarea.setAttribute(`id`, i);
        tarea.innerHTML = `${element} <img src="img/remove.png" style="width: 1.5rem;height: 1.5rem;" alt="Remove pic" onClick="deleteTask(${i})">`;
        taskList.appendChild(tarea);
    });
}

const deleteTask = (i) => {
    todoList.splice(i, 1);
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
    actualizarToDo()
}

const addTaskToList = () => {
    todoList.push(taskInput.value);
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
    taskList.innerHTML = ``;
    actualizarToDo();
    taskInput.value = ``;
}
//LocalStorage
let todoList = JSON.parse(localStorage.getItem(`todoList`)) || [];

//Eventos
taskAdd.addEventListener(`click`, (e) => {
    e.preventDefault();

    if (taskInput.value != ``) {
        addTaskToList();
    }
});

taskInput.addEventListener(`keyup`, (event) => {
    if (event.key === `Enter`) {
        if (taskInput.value != ``) {
            addTaskToList();
        }
    }
})



actualizarToDo();



