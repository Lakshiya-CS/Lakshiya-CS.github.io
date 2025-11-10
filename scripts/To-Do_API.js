let tasks = [];

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function applyTheme(theme) {
  document.body.className = theme;
}

function toggleTheme() {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  applyTheme(newTheme);
  setCookie("theme", newTheme, 7);
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const stored = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = stored;
  return tasks;
}

function incrementSessionCount() {
  let count = parseInt(sessionStorage.getItem("sessionCount") || 0);
  count++;
  sessionStorage.setItem("sessionCount", count);
  updateCountDisplay();
}

function updateCountDisplay() {
  const count = sessionStorage.getItem("sessionCount") || 0;
  const el = document.getElementById("countDisplay");
  if (el) el.textContent = "Tasks added this session: " + count;
}

function updateTaskList() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((taskText, index) => {
    const li = document.createElement("li");
    li.textContent = taskText;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Remove";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      updateTaskList();
    });
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function initializeData() {
  return new Promise((resolve, reject) => {
    try {
      const theme = getCookie("theme") || "light";
      applyTheme(theme);
      tasks = loadTasks();
      updateTaskList();
      updateCountDisplay();
      resolve("Initialization successful");
    } catch {
      reject("Initialization failed");
    }
  });
}

function bindEvents() {
  const form = document.getElementById("todoForm");
  const input = document.getElementById("taskInput");
  const themeBtn = document.getElementById("themeToggle");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const task = input.value.trim();
      if (task) {
        tasks.push(task);
        saveTasks();
        updateTaskList();
        incrementSessionCount();
        input.value = "";
      }
    });
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }
}

function updateDisplay(message) {
  console.log(message);
}

window.onload = function () {
  const promise = new Promise((resolve, reject) => {
    initializeData()
      .then(() => resolve("Data loaded successfully"))
      .catch(() => reject("Failed to initialize"));
  });
  promise
    .then(
      (value) => {
        updateDisplay(value);
        bindEvents();
      },
      (error) => {
        updateDisplay(error);
      }
    )
    .finally(() => {
      console.log("Setup complete. Ready for user interaction.");
    });
};