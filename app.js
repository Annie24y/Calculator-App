function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let display = document.getElementById("display");

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  const allowedKeys = [
    "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9",
    "+", "-", "*", "/", "."
  ];

  if (allowedKeys.includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Load saved dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}
