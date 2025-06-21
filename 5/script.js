let count = 0;

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) {
    alert("Please enter a task");
    return;
  }

  count++;
  const table = document.getElementById("todoBody");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${count}</td>
    <td class="task">${task}</td>
    <td class="status">Pending</td>
    <td>
      <button onclick="markDone(this)">Done</button>
      <button onclick="deleteTask(this)">Delete</button>
    </td>
  `;

  table.appendChild(row);
  input.value = "";
}

function markDone(button) {
  const row = button.closest("tr");
  const taskCell = row.querySelector(".task");
  const statusCell = row.querySelector(".status");

  taskCell.classList.add("completed");
  statusCell.textContent = "Completed";
}

function deleteTask(button) {
  const row = button.closest("tr");
  row.remove();
}
