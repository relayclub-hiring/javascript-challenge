# Instructions for the candidate

This exercise is part of the hiring process at relay.club. We use it to gauge your skill with code reviews, an important part of our software development process. For the exercise, we will schedule a video meeting for you with one of our engineers. Allow about an hour for the meeting. In advance, you can review the README here and the content of the repo. A few minutes prior to the scheduled meeting, we will submit a pull request to the repo that updates two files:

- todo.js
- todo.test.js

For the exercise, we ask you to play the role of a senior engineer. You’ll need to show us how you do a code review, pretending that the pull request was submitted by a junior developer who will benefit from your experience. You’ll catch some basic JavaScript code quality problems, maybe some obvious implementation issues, and also some higher level organizational issues. You'll use GitHub to add comments to the code. We'd like you to talk us through your thought process as you do the code review. We expect you to write complete and detailed comments as if guiding a junior developer to improve their code. You'll have only one chance to tell the junior developer how to improve their code (no back and forth) so please give them all the information they will need in comments.

At the end of the simulated code review, we will give you feedback and discuss any problems you may have missed. If there's time, you can also ask our engineer any questions you have about working at relay.club.

Below you'll find the README for the application. It will give you an idea of what the program is supposed to do.

# README

The repository contains a simple command-line JavaScript program for a to-do list. Using the command line, you can add tasks, list tasks, mark tasks as done, and remove tasks. All tasks are saved to a file named `to-do-list.json`.

## todo.js

To run this program, you will need to have Node.js installed on your system. Then, follow these steps:

- Clone the GitHub repository to a local folder.
- Open a terminal window and navigate to the directory where you saved the file.
- Run `npm install` to install all dependencies.
- Run the command node `node todo.js --help` to start the program.

Commands:
- `node todo.js list`  List all tasks
- `node todo.js add -t <task name>`  Add a task to the list
- `node todo.js done -n <task number>`  Mark a task as done
- `node todo.js rm -n <task number>`  Remove a task from the list

Options:
--help     Show help

## todo.test.js

This file contains unit tests using the Jest testing library. Jest is installed as part of running `npm install`. Run the tests with the command:

- npm test
