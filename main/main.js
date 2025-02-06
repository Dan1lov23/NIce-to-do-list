let counter = 0; // Счетчик задач
let tasks = []; // Массив для хранения задач

// Функция для добавления новой задачи
function add() {
    counter++;
    let newTask = document.getElementById("task").value;

    // Создаем новый элемент div для задачи
    let taskItem = document.createElement("div");

    // Устанавливаем стиль для отступа
    taskItem.style.marginBottom = "10px"; // Отступ между задачами
    taskItem.style.maxWidth = "700px"; // Максимальная ширина
    taskItem.style.textAlign = "left";
    taskItem.style.marginLeft = "25px";
    taskItem.style.marginRight = "25px";
    taskItem.style.backgroundColor = "DodgerBlue";
    taskItem.style.color = "white";
    taskItem.style.borderRadius = "7px";
    taskItem.style.wordWrap = "break-word"; // Перенос слов

    // Добавляем текст задачи в элемент
    taskItem.innerText = `${newTask}`;

    // Создаем кнопку удаления
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "🗑️";

    // Добавляем обработчик события для кнопки удаления
    deleteButton.onclick = function () {
        // Удаляем задачу при нажатии на кнопку
        taskItem.remove();
        tasks = tasks.filter(task => task !== newTask); // Удаляем задачу из массива
        saveTasks(); // Сохраняем обновленный массив задач
    };

    // Добавляем кнопку удаления в элемент задачи
    taskItem.innerText += " ";
    taskItem.appendChild(deleteButton);

    // Добавляем элемент задачи в контейнер задач
    document.getElementById("tasks").appendChild(taskItem);

    // Добавляем задачу в массив и сохраняем
    tasks.push(newTask);
    saveTasks();

    // Очищаем поле ввода после добавления задачи
    document.getElementById("task").value = '';
}

// Функция для сохранения задач в localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Функция для загрузки задач из localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach((task, index) => {
            counter = index + 1; // Обновляем счетчик
            let taskItem = document.createElement("div");
            taskItem.style.marginBottom = "10px"; // Отступ между задачами
            taskItem.style.maxWidth = "700px"; // Максимальная ширина
            taskItem.style.textAlign = "left";
            taskItem.style.marginLeft = "25px";
            taskItem.style.marginRight = "25px";
            taskItem.style.backgroundColor = "DodgerBlue";
            taskItem.style.color = "white";
            taskItem.style.borderRadius = "7px";
            taskItem.style.wordWrap = "break-word"; // Перенос слов
            taskItem.innerText = `${task}`;

            // Создаем кнопку удаления
            let deleteButton = document.createElement("button");
            deleteButton.innerText = "🗑️";

            // Добавляем обработчик события для кнопки удаления
            deleteButton.onclick = function () {
                taskItem.remove();
                tasks = tasks.filter(t => t !== task); // Удаляем задачу из массива
                saveTasks(); // Сохраняем обновленный массив задач
            };

            // Добавляем кнопку удаления в элемент задачи
            taskItem.innerText += " ";
            taskItem.appendChild(deleteButton);

            // Добавляем элемент задачи в контейнер задач
            document.getElementById("tasks").appendChild(taskItem);
        });
    }
}

window.onload = loadTasks;

let check = 0;

function changeTheme() {
    const body = document.body;
    const main = document.getElementById("main-container");
    const title = document.getElementById("title");
    const titleTask = document.getElementById("titleTask");
    if (check % 2 === 0) {
        document.getElementById('theme').innerText = '🌑';
        body.style.backgroundColor = 'black';
        main.style.backgroundColor = 'black';
        main.style.borderColor = 'white';
        title.style.color = 'white';
        titleTask.style.color = 'white';
    } else {
        document.getElementById('theme').innerText = '🌕';
        body.style.backgroundColor = 'deepskyblue';
        main.style.backgroundColor = 'white';
        title.style.color = 'black';
        titleTask.style.color = 'black';
    }
    check++;
}
