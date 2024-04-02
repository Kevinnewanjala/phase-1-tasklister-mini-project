document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.querySelector('form');

  newTaskForm.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    const newToDo = e.target.querySelector('#new-task-description').value;
    buildToDoElement(newToDo);
    newTaskForm.reset();
  }

  function buildToDoElement(task) {
    const taskLi = createTaskElement(task);
    const deleteButton = createDeleteButton();
    taskLi.appendChild(deleteButton);
    document.querySelector('#tasks').appendChild(taskLi);
    deleteButton.addEventListener('click', () => {
      taskLi.remove();
    });
  }

  function createTaskElement(task) {
    const taskLi = document.createElement('li');
    taskLi.textContent = task;
    return taskLi;
  }

  function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    return deleteButton;
  }
});