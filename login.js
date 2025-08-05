function studentLogin() {
  const name = document.getElementById('studentName').value.trim();
  if (name !== "") {
    // Hifadhi jina kwenye localStorage
    localStorage.setItem("currentStudent", name);

    // Nenda kwenye dashboard ya mwanafunzi
    window.location.href = "student-dashboard.html";
  } else {
    alert("Please enter your name to continue.");
  }
}
