const fs = require('fs');
const { execSync } = require('child_process');

describe('todo.js', () => {
  const listFilePath = './to-do-list.json';

  beforeEach(async() => {
    await fs.promises.writeFile(listFilePath, '[]');
  });

  test('add a task to the list', () => {
    const taskName = 'Buy Milk';

    // Add task to the list
    execSync(`node todo.js add -t "${taskName}"`);
    const list = require(listFilePath);
    // Check if the task is added to the list
    expect(list).toHaveLength(1);
    expect(list).toContain(taskName);
  });

  test('list all tasks', () => {
    // Add some tasks to the list
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    tasks.forEach((taskName) => {
      execSync(`node todo.js add -t "${taskName}"`);
    });

    // List all tasks and check if they are listed correctly
    const output = execSync('node todo.js list').toString();
    expect(output).toContain('Taks 1');
    expect(output).toContain('Task 2');
    expect(output).toContain('Task 3');
  });

  // Add some tasks to the list
  const tasks = ['Task 1', 'Task 2', 'Task 3'];
  tasks.forEach((taskName) => {
    execSync(`node todo.js add -t "${taskName}"`);
  });

  test('remove a task', () => {
    // Mark a task as done to remove from the list
    execSync('node todo.js rm -n 2').toString();
    const list = require(listFilePath);
    // Check if the task is removed from the list
    expect(list.includes('Task 2')).toBe(false);
  });

  test('mark a task as complete', () => {
    const taskName = 'Buy Milk';
    // Add task to the list
    execSync(`node todo.js add -t "${taskName}"`);
    // Mark a task as done
    execSync('node todo.js done -n 1')
    const listAfter = require(listFilePath);
    expect(listAfter.some((li) => li.includes('(done)'))).toBe(true);
  });
});
