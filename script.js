// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseenter", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#ffeb3b";
});

document.addEventListener("keydown", (e) => {
  document.getElementById("keyPressMsg").textContent = `You pressed: ${e.key}`;
});

// Secret double click
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("Secret unlocked! 🕵️‍♂️");
});

// Interactive Elements
const colorBtn = document.getElementById("colorToggleBtn");
let toggled = false;
colorBtn.addEventListener("click", () => {
  colorBtn.style.backgroundColor = toggled ? "#6200ee" : "#03dac6";
  toggled = !toggled;
});

// Gallery
const galleryImages = [
  "https://via.placeholder.com/200?text=Image+1",
  "https://via.placeholder.com/200?text=Image+2",
  "https://via.placeholder.com/200?text=Image+3",
];
let currentImageIndex = 0;
document.getElementById("nextImageBtn").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  document.getElementById("galleryImage").src =
    galleryImages[currentImageIndex];
});

// Tabs
const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((tab) => {
      tab.style.display = "none";
    });
    document.getElementById(btn.dataset.tab).style.display = "block";
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passValid = pass.length >= 8;

  if (!emailValid) {
    feedback.textContent = "Invalid email format.";
  } else if (!passValid) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
    alert("Form submitted successfully!");
  }
});

// Real-time feedback
document.getElementById("password").addEventListener("input", (e) => {
  const feedback = document.getElementById("feedback");
  if (e.target.value.length < 8) {
    feedback.textContent = "Password too short!";
  } else {
    feedback.textContent = "";
  }
});
