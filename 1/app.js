document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("productContainer");

  //   modal
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalPrice = document.getElementById("modalPrice");
  const modalBrand = document.getElementById("modalBrand");
  const modalRating = document.getElementById("modalRating");
  const closeBtn = document.querySelector(".close-btn");

  const openModal = (product) => {
    modalImage.src = product.thumbnail;
    modalImage.alt = product.title;
    modalTitle.innerHTML = product.title;
    modalDescription.innerHTML = product.description;
    modalPrice.innerHTML = product.price;
    modalRating.innerHTML = product.rating;
    modalBrand.innerHTML = product.brand;

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  };

  closeBtn.addEventListener("click", () => closeModal());

  const productCard = (product) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
        <img src=${product.thumbnail} alt=${product.title} />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        `;

    card.addEventListener("click", () => openModal(product));
    return card;
  };

  const renderProduct = (products) => {
    productContainer.innerHTML = "";
    products.forEach((product) => {
      const card = productCard(product);
      productContainer.appendChild(card);
    });
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      renderProduct(result.products);
    } catch (error) {
      console.log(error);
      productContainer.innerHTML = "<p>Something went wrong</p>";
    }
  };

  fetchProducts();
});
