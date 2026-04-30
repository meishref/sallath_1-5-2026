document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelector(".js-featured-slider");
  var nextBtn = document.querySelector(".js-next");
  var prevBtn = document.querySelector(".js-prev");
  var reminderBtn = document.querySelector(".js-reminder-btn");
  var reminderStatus = document.querySelector(".js-reminder-status");
  var plantNameInput = document.querySelector(".js-plant-name");
  var slideIndex = 0;

  function moveSlider(direction) {
    if (!slider) return;
    var cards = slider.children.length || 1;
    var max = Math.max(cards - 1, 0);
    slideIndex += direction;
    if (slideIndex < 0) slideIndex = max;
    if (slideIndex > max) slideIndex = 0;
    slider.style.transform = "translateX(" + slideIndex * -8 + "px)";
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      moveSlider(1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      moveSlider(-1);
    });
  }

  if (reminderBtn && reminderStatus && plantNameInput) {
    reminderBtn.addEventListener("click", function () {
      var plant = plantNameInput.value.trim() || "your plant";
      reminderStatus.textContent = "Reminder is set for " + plant + " every 3 days.";
    });
  }
});
