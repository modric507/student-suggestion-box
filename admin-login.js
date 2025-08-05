// Username and password fixed for demo (you can change later)
const correctUsername = "admin";
const correctPassword = "icps123";

document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("adminUsername").value.trim();
  const password = document.getElementById("adminPassword").value;

  if (username === correctUsername && password === correctPassword) {
    // Success - redirect to admin dashboard
    window.location.href = "admin-dashboard.html";
  } else {
    document.getElementById("loginMessage").textContent = "Invalid username or password!";
  }
});
