// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery-container");

  // List of image filenames
  const images = ["spa2.jpg", "spa3.jpg"]; // Add more filenames as needed

  // Dynamically create and append images to the gallery container
  images.forEach((imageName) => {
    const img = document.createElement("img");
    img.src = `images/${imageName}`; // Path to the image
    img.alt = "Spa Image"; // Alt text for accessibility
    img.classList.add("gallery-img"); // Add a CSS class for styling
    galleryContainer.appendChild(img); // Append the image to the container
  });

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Check for saved user preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
  }

  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      darkModeToggle.textContent = '🌙 Dark Mode';
      localStorage.setItem('dark-mode', 'disabled');
    } else {
      body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️ Light Mode';
      localStorage.setItem('dark-mode', 'enabled');
    }
  });

  // Apply the typing effect
  const typingElement = document.getElementById("typing-effect");
  const text = "Experience luxury spa and salon services at your fingertips.";
  const typingSpeed = 50; // Adjust typing speed (milliseconds per character)
  typeEffect(typingElement, text, typingSpeed);
});

// Typing effect function
function typeEffect(element, text, speed) {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}
