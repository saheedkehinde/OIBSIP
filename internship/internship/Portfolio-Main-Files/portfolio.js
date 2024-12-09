

// Array of text to display
    var texts = ["WEB DEVELOPER", "WORDPRESS WEB DESIGNER", "CANVA DESIGNER"];
    var currentText = 0; // Tracks the current text
    var sliderText = document.getElementById("slider-text");

    function updateText() {
      // Update the text content
      sliderText.textContent = texts[currentText];

      // Move to the next text, loop back if at the end
      currentText++;
      if (currentText >= texts.length) {
        currentText = 0;
      }
    }

    // Initialize with the first text
    updateText();

    // Change text every 3 seconds to match animation duration
setInterval(updateText, 4000);


    // Progress Bar Section 

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const targetWidth = bar.style.width;
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 200); // Delay animation
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const testimonials = carousel.children;
  const totalTestimonials = testimonials.length;

  let index = 0;

  function moveCarousel() {
    index++;
    if (index >= totalTestimonials) index = 0;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  // Auto-scroll every 5 seconds
  setInterval(moveCarousel, 5000);
});
