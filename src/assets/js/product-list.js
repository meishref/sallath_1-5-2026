document.addEventListener("DOMContentLoaded", function () {
  var wishlistButtons = document.querySelectorAll(".js-wishlist-btn");
  var clearButton = document.querySelector(".js-clear-filters");
  var priceRange = document.querySelector(".js-price-range");
  var priceValue = document.querySelector(".js-price-value");
  var checkboxes = document.querySelectorAll(".filters input[type='checkbox']");

  wishlistButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.toggle("is-active");
    });
  });

  if (priceRange && priceValue) {
    priceRange.addEventListener("input", function () {
      priceValue.textContent = priceRange.value;
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });

      if (priceRange && priceValue) {
        priceRange.value = 80;
        priceValue.textContent = "80";
      }
    });
  }
});
