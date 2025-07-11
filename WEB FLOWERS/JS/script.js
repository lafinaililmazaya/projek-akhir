document.addEventListener("DOMContentLoaded", function () {
  // === Toggle Navbar Menu ===
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");

  // Tambahkan event ke parent-nya, bukan hanya <i>
  document
    .querySelector(".navbar-extra")
    .addEventListener("click", function (e) {
      if (e.target.closest("#hamburger-menu")) {
        e.preventDefault();
        navbarNav.classList.toggle("active");
        e.stopPropagation(); // Hindari close langsung
      }
    });

  // Klik di luar menu menutup navbar
  document.addEventListener("click", function (e) {
    if (
      !navbarNav.contains(e.target) &&
      !document.querySelector("#hamburger-menu").contains(e.target)
    ) {
      navbarNav.classList.remove("active");
    }
  });

  // === Toggle Cart Popup ===
  const cartButton = document.querySelector("#shopping-cart");
  const cartPopup = document.querySelector("#cart-popup");
  const closeCart = document.getElementById("close-cart");

  cartButton.addEventListener("click", function (e) {
    e.preventDefault();
    cartPopup.style.display = "block";
  });

  closeCart.addEventListener("click", function () {
    cartPopup.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === cartPopup) {
      cartPopup.style.display = "none";
    }
  });

  // === Toggle Search Popup ===
  const searchIcon = document.querySelector("#search");
  const searchPopup = document.querySelector("#search-popup");
  const searchInput = document.querySelector("#search-input");
  const closeSearch = document.querySelector("#close-search");

  searchIcon.addEventListener("click", function (e) {
    e.preventDefault();
    searchPopup.style.display = "flex";
    setTimeout(() => searchInput.focus(), 100);
  });

  closeSearch.addEventListener("click", function () {
    searchPopup.style.display = "none";
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      searchPopup.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // === Toggle Navbar Menu ===
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");

  // Tambahkan event ke parent-nya, bukan hanya <i>
  document
    .querySelector(".navbar-extra")
    .addEventListener("click", function (e) {
      if (e.target.closest("#hamburger-menu")) {
        e.preventDefault();
        navbarNav.classList.toggle("active");
        e.stopPropagation(); // Hindari close langsung
      }
    });

  // Klik di luar menu menutup navbar
  document.addEventListener("click", function (e) {
    if (
      !navbarNav.contains(e.target) &&
      !document.querySelector("#hamburger-menu").contains(e.target)
    ) {
      navbarNav.classList.remove("active");
    }
  });

  // === Toggle Cart Popup ===
  const cartButton = document.querySelector("#shopping-cart");
  const cartPopup = document.querySelector("#cart-popup");
  const closeCart = document.getElementById("close-cart");

  cartButton.addEventListener("click", function (e) {
    e.preventDefault();
    cartPopup.style.display = "block";
  });

  closeCart.addEventListener("click", function () {
    cartPopup.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === cartPopup) {
      cartPopup.style.display = "none";
    }
  });

  // === Toggle Search Popup ===
  const searchIcon = document.querySelector("#search");
  const searchPopup = document.querySelector("#search-popup");
  const searchInput = document.querySelector("#search-input");
  const closeSearch = document.querySelector("#close-search");

  searchIcon.addEventListener("click", function (e) {
    e.preventDefault();
    searchPopup.style.display = "flex";
    setTimeout(() => searchInput.focus(), 100);
  });

  closeSearch.addEventListener("click", function () {
    searchPopup.style.display = "none";
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      searchPopup.style.display = "none";
    }
  });
});
