document.addEventListener("DOMContentLoaded", () => {
  const prodBody = document.getElementById('prodBody');

  const getTableRow = (product) => {
    const rowData = document.createElement('tr');
    rowData.classList.add('prodRow'); 

    const tdId = document.createElement('td');
    tdId.textContent = product.id;
    tdId.classList.add('prodCell'); 

    const tdTitle = document.createElement('td');
    tdTitle.textContent = product.title;
    tdTitle.classList.add('prodCell');

    const tdDesc = document.createElement('td');
    tdDesc.textContent = product.description;
    tdDesc.classList.add('prodCell');

    const tdPrice = document.createElement('td');
    tdPrice.textContent = product.price;
    tdPrice.classList.add('prodCell');

    rowData.appendChild(tdId);
    rowData.appendChild(tdTitle);
    rowData.appendChild(tdDesc);
    rowData.appendChild(tdPrice);

    return rowData;
  };

  const renderProducts = (products) => {
    prodBody.innerHTML = ''; 

    products.forEach(product => {
      const row = getTableRow(product);
      prodBody.appendChild(row);
    });
  };

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      renderProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  getProducts();
});
