window.onload = function () {
  const studentName = localStorage.getItem("currentStudent");
  if (studentName) {
    document.getElementById("studentNameDisplay").textContent = studentName;
    loadStudentSuggestions(studentName);
  } else {
    alert("No student name found. Redirecting to login...");
    window.location.href = "login.html";
  }
};

document.getElementById("suggestionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const suggestion = document.getElementById("suggestionText").value.trim();
  const name = localStorage.getItem("currentStudent");

  if (suggestion !== "") {
    const existingSuggestions = JSON.parse(localStorage.getItem("suggestions") || "[]");
    existingSuggestions.push({ name, suggestion, status: "Pending" });
    localStorage.setItem("suggestions", JSON.stringify(existingSuggestions));

    document.getElementById("confirmationMessage").textContent = "Your suggestion has been submitted!";
    document.getElementById("suggestionForm").reset();

    loadStudentSuggestions(name);
  } else {
    document.getElementById("confirmationMessage").textContent = "Please enter a suggestion before submitting.";
  }
});

function loadStudentSuggestions(name) {
  const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]");
  const studentSuggestions = suggestions.filter(s => s.name === name);
  const container = document.getElementById("studentSuggestions");

  if (studentSuggestions.length === 0) {
    container.innerHTML = "<p>You have not submitted any suggestions yet.</p>";
    return;
  }

  container.innerHTML = studentSuggestions.map(s => `
    <p><strong>Suggestion:</strong> ${s.suggestion}<br>
    <strong>Status:</strong> ${s.status}</p>
    <hr>
  `).join("");
}
