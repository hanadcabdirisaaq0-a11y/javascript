// Load saved data when page loads
window.onload = function () {
  let savedName = localStorage.getItem("username");
  let savedTheme = localStorage.getItem("theme");

  if (savedName) {
    document.getElementById("greeting").textContent =
      "Welcome back, " + savedName + " 👋";
  }

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
};

// Save name to local storage
function saveName() {
  let name = document.getElementById("username").value;
  localStorage.setItem("username", name);

  document.getElementById("greeting").textContent = "Welcome, " + name + " 😊";
}

// Set theme in local storage
function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}

// Clear all stored data
function clearData() {
  localStorage.clear();
  location.reload();
}
