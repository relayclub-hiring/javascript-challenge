const yargs = require('yargs');
const fs = require('fs');

let toDoList = [];

const loadList = () => {
    try {
        const list = require('./to-do-list.json');
            toDoList = list.sort();
    } catch (err) {
        toDoList = [];
}
    }

function saveList(logWhenDone)
{
    // TODO: maybe we need try/catch
    // try {
        fs.writeFile('./to-do-list.json', JSON.stringify(toDoList));
       if (logWhenDone) console.log('saved')
    // }
    // catch(e)
    // console.error(e) {}
}

const argv = yargs
    .command('add', 'Add a task to the list', {
        task: {
            describe: 'The task to add',
            demand: true,
            alias: 't'
        }
    })
    .command('list', 'List all tasks')
    .command('done', 'Remove a task', {
        task: {
            describe: 'The task number to remove',
            demand: true,
            alias: 'n'
        }
    })
    .command('delete', 'Mark a task as complete', {
        task: {
            describe: 'The task number to complete',
            demand: true,
            alias: 'n'
        }
    })
    .help()
    .argv;

loadList();

let command = argv._[0];

if (command === 'add') {
    var task = argv.task;
    toDoList.push(task);
    saveList(true);
    console.log("${task} added to the list.");
} else if (command === 'list') {
    console.log('To-Do List:');
    toDoList.forEach((task, index) => console.log(`  ${index + 1}: ${task}`));
} else if (command === 'done') {
    var index = argv.task;
    console.log(`"${toDoList[index - 1]}" marked as done.`);
    toDoList[index] = toDoList[index]+=' (done)';
    console.log(toDoList)
    fs.writeFileSync('./to-do-list.json', JSON.stringify(toDoList))
    loadList();

}else if (command === 'delete') {
    var index = argv.task;
    console.log(`"${toDoList[index - 1]}" deleted`);
    delete toDoList[index - 1];
}
