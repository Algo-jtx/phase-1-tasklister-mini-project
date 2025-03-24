document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const newTaskDescription = document.getElementById(
      "new-task-description"
    ).value;

    if (newTaskDescription.trim() === "") return; 

    const taskItem = document.createElement("li");
    taskItem.textContent = newTaskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => taskItem.remove());

    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    form.reset();
  });
});