function loadReports() {
  const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]");
  const filter = document.getElementById("statusFilter").value;
  const container = document.getElementById("reportContainer");

  container.innerHTML = "";

  const filtered = suggestions.map((s, index) => ({ ...s, index }))
                              .filter(s => filter === "All" || s.status === filter);

  if (filtered.length === 0) {
    container.innerHTML = "<p>No suggestions found.</p>";
    return;
  }

  filtered.forEach(s => {
    const div = document.createElement("div");
    div.className = "suggestion-card";
    div.innerHTML = `
      <strong>From:</strong> ${s.name}<br>
      <strong>Suggestion:</strong> ${s.suggestion}<br>
      <strong>Status:</strong> <span id="status-${s.index}">${s.status}</span><br>
      <button class="status-btn ${s.status === 'Pending' ? 'pending' : ''}" onclick="toggleStatus(${s.index})">
        Mark as ${s.status === 'Pending' ? 'Resolved' : 'Pending'}
      </button>
    `;
    container.appendChild(div);
  });
}

function toggleStatus(index) {
  const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]");

  if (suggestions[index]) {
    suggestions[index].status = suggestions[index].status === "Pending" ? "Resolved" : "Pending";
    localStorage.setItem("suggestions", JSON.stringify(suggestions));
    loadReports();
  }
}

document.getElementById("statusFilter").addEventListener("change", loadReports);
loadReports();
