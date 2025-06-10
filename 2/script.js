console.log('Script loaded'); // Debug: Confirm script is running

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded'); // Debug: Confirm DOM is ready
    const tbody = document.getElementById('productBody');
    
    if (!tbody) {
        console.error('Table body element not found');
        return;
    }

    // Function to display error message in table
    function showError(message) {
        console.error('Error:', message);
        tbody.innerHTML = `<tr><td colspan="5">${message}</td></tr>`;
    }

    console.log('Initiating fetch request'); // Debug: Confirm fetch is called
    fetch('https://dummyjson.com/products')
        .then(response => {
            console.log('Fetch response received:', response.status); // Debug: Log response status
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data); // Debug: Log API data
            if (!data.products || !Array.isArray(data.products)) {
                throw new Error('Invalid data format: products array not found');
            }
            tbody.innerHTML = ''; // Clear existing content
            data.products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id || 'N/A'}</td>
                    <td>${product.title || 'N/A'}</td>
                    <td>$${product.price || 'N/A'}</td>
                    <td>${product.category || 'N/A'}</td>
                    <td>${product.rating || 'N/A'}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            showError(`Failed to load products: ${error.message}`);
        });
});