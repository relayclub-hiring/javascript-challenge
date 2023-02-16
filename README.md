## Program todo.js

To run this program, you will need to have Node.js installed on your system. Then, follow these steps:

- Clone the GitHub repository to a local folder.
- Open a terminal window and navigate to the directory where you saved the file.
- Run the command node `node todo.js --help` to start the program.

Commands:
- `node todo.js add -t <task name>`  Add a task to the list
- `node todo.js list`  List all tasks
- `node todo.js rm -n <task number>`  Remove a task from the list

Options:
--help     Show help

## Unit Tests

These tests can be run using a testing library such as Mocha. To run the tests, you will need to install Mocha by running the command npm install -g mocha, and then run the command mocha from the terminal in the directory where the tests are located:
- `mocha tests.js`