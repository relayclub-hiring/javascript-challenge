const assert = require('assert');
const fs = require('fs');
const { execSync } = require('child_process');

const runProgram = () => execSync('node todo.js', { input: 'q\n' });

const getFileContent = () => fs.readFileSync('./to-do-list.json', 'utf8');

describe('To-Do Program', () => {
  beforeEach(() => {
    // Reset the to-do list file before each test
    fs.writeFileSync('./to-do-list.json', '[]');
  });

  it('adds a task to the list', () => {
    const input = 'a\nbuy milk\nq\n';
    execSync(`node todo.js`, { input });
    const fileContent = getFileContent();
    assert.equal(fileContent, '["buy milk"]');
  });

  it('lists all tasks in the list', () => {
    fs.writeFileSync('./to-do-list.json', '["task 1", "task 2"]');
    const output = runProgram();
    assert.ok(output.includes('1: task 1'));
    assert.ok(output.includes('2: task 2'));
  });

  it('marks a task as done', () => {
    fs.writeFileSync('./to-do-list.json', '["task 1", "task 2"]');
    const input = 'm\n1\nq\n';
    execSync(`node todo.js`, { input });
    const fileContent = getFileContent();
    assert.equal(fileContent, '["task 2"]');
  });

  it('exits when the user selects "q"', () => {
    const output = runProgram();
    assert.ok(output.includes('Goodbye!'));
  });
});
