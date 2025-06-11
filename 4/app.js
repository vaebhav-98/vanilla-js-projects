
const form = document.getElementById("todoForm");
const tableBody = document.getElementById("todoTable");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const price = document.getElementById("price").value.trim();

  if (!title || !description || !gender || !price) {
    alert("Please fill out all fields.");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${title}</td>
    <td>${description}</td>
    <td>${gender}</td>
    <td>${price}</td>
  `;

  tableBody.appendChild(row);
  form.reset();
});
