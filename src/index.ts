import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


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

// addTask('Выспаться');
// addTask('Сделать проект на TypeScript с использованием Git.');
// console.log(getListTasks());
// markTaskDone(1);
// console.log(getListTasks());
// deleteTask(1);
// console.log(getListTasks());

let main = () => {
    rl.question('\nВведите команду: ', (input: string) => {
        let cmd: string = '';
        let fullArgs: string = '';


        const [cmdRaw, ...args] = input.trim().split(' ');
        cmd = cmdRaw ?? '';

        fullArgs = args.join(' ');

        if (fullArgs) {
            let num: number = Number(fullArgs);
            switch(cmd) {
                case 'add':
                    addTask(fullArgs);
                    break;
                case 'done':
                    markTaskDone(num);
                    break;
                case 'del':
                    deleteTask(num);
                    break;
            }
        } else if (cmd == 'list') {
            getListTasks();
        } else if (cmd == 'exit') {
            rl.close();
            return;
        }

        main(); 
    });
}

main();