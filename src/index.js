
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  // Add event listener for form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the task description input value
    const taskDescription = document.getElementById("new-task-description").value.trim();

    if (taskDescription !== "") {
      // Create a new list item for the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Add a delete button to each task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.marginLeft = "10px";

      // Delete task on button click
      deleteButton.addEventListener("click", () => {
        tasksList.removeChild(taskItem);
      });

      // Append the delete button to the task item
      taskItem.appendChild(deleteButton);

      // Add the new task to the tasks list
      tasksList.appendChild(taskItem);

      // Clear the form input field
      form.reset();
    } else {
      alert("Please enter a valid task description.");
    }
  });
});


