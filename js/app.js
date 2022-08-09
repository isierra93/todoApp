//Captura de datos del DOM
let taskInput = document.getElementById(`taskInput`);
let taskAdd = document.getElementById(`taskAdd`);
let taskList = document.getElementById(`taskList`);
let dateLive = document.getElementById(`dateLive`);

let todoDoneList = [];
if (localStorage.getItem(`todoDoneList`) == null) {
    localStorage.setItem(`todoDoneList`, JSON.stringify(todoDoneList));
} else {
    todoDoneList = JSON.parse(localStorage.getItem(`todoDoneList`));
}


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
    taskList.innerHTML = `<thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tasks</th>
                                <th scope="col">Done?</th>

                            </tr>
                        </thead>`;
    let tbody = document.createElement(`tbody`);
    taskList.appendChild(tbody);

    todoList.forEach((element, i) => {
        let tarea = document.createElement(`tr`);
        tarea.setAttribute(`id`, i);
        let contador = i+1
        tarea.innerHTML = `<th scope="row">${contador}</th>
                            <td>${element}</td>
                            <td><img class="removePic" src="img/remove.png" style="width: 1rem;height: 1rem;" alt="Remove pic" onClick="deleteTask(${i})"></td>`
        tbody.appendChild(tarea);
    });
}

const deleteTask = (i) => {
    todoDoneList.unshift(todoList[i]);
    localStorage.setItem(`todoDoneList`, JSON.stringify(todoDoneList));
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

//Tracker
const tracker = document.querySelector(".tracker");
document.body.addEventListener(`mousemove`, e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
})

//Hora actual
const DateTime = luxon.DateTime;
reloj();
setInterval(reloj, 1000);

// Ejecucion
actualizarToDo();



