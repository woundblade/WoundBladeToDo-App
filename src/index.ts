enum TaskStatus {
  Pending = 'Pending',
  Done = 'Done',
}

interface Task {
  readonly id: number;
  title: string;
  status: TaskStatus;
}

let tasks: Task[] = [];

function addTask(title: string): void {
    let newTask: Task = {
        id: tasks.length,
        title: title,
        status: TaskStatus.Pending
    }
    tasks.push(newTask);
    console.log(`\n${title} – успешно добавлено!`);
}

function getListTasks(): void {
    console.log('\nСписок задач:');
    tasks.forEach(function(val) {
        console.log(`${val.id}. ${val.title} – ${val.status}`);
    })
}

function markTaskDone(id: number): void {
    console.log(`\n${tasks[id]?.title} - было выполнено!`);
    if (tasks[id]) {
        tasks[id].status = TaskStatus.Done;
    }
}

function deleteTask(id: number): void {
    console.log(`\n${tasks[id]?.title} - было удалено!`);
    if (tasks[id]) {
        delete tasks[id];
    }
}

addTask('Выспаться');
addTask('Сделать проект на TypeScript с использованием Git.');
console.log(getListTasks());
markTaskDone(1);
console.log(getListTasks());
deleteTask(1);
console.log(getListTasks());