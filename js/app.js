//Captura de datos del DOM
let taskInput = document.getElementById(`taskInput`);
let taskAdd = document.getElementById(`taskAdd`);
let taskList = document.getElementById(`taskList`);
let dateLive = document.getElementById(`dateLive`);

//LocalStorage
let todoList = [];

if (localStorage.getItem(`todoList`) == null) {
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
} else {
    todoList = JSON.parse(localStorage.getItem(`todoList`));
}

//Funciones
const actualizarToDo = () => {
    todoList = JSON.parse(localStorage.getItem(`todoList`));
    taskList.innerHTML = `<h3>My Day:</h3>`;
    todoList.forEach((element, i) => {
        let tarea = document.createElement(`li`);
        tarea.setAttribute(`id`, i);
        tarea.innerHTML = ` ${element} <img src="img/remove.png" style="width: 1rem;height: 1rem;" alt="Remove pic" onClick="deleteTask(${i})">`;
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

const reloj = () => {
    let dt = DateTime.now();
    dateLive.innerHTML = `<p>${dt.toLocaleString(DateTime.DATE_FULL)}</p>
                        <p>${dt.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</p>`
};


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

//Hora actual
const DateTime = luxon.DateTime;
reloj();
setInterval(reloj, 1000);


// Ejecucion
actualizarToDo();



