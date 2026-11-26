const user = JSON.parse(localStorage.getItem("careerNestUser") || "null");
const nameTarget = document.getElementById("welcomeName");
if (nameTarget && user) nameTarget.textContent = `Hello, ${user.name} 👋`;
const saved = JSON.parse(localStorage.getItem("savedJobs") || "[]");
const savedCount = document.getElementById("savedCount");
if (savedCount) savedCount.textContent = saved.length;
const savedList = document.getElementById("savedList");
if (savedList) {
 savedList.innerHTML = saved.length ? saved.map(title => `<li>${title}</li>`).join("") : "<li>No saved jobs yet. Browse jobs and click Save.</li>";
}
const postForm = document.getElementById("postForm");
if (postForm) postForm.addEventListener("submit", event => {
 event.preventDefault();
 const title = document.getElementById("jobTitle").value.trim();
 const company = document.getElementById("company").value.trim();
 const location = document.getElementById("jobLocation").value.trim();
 document.getElementById("postMessage").textContent = `Preview: ${title} at ${company} — ${location}. This is a frontend-only demo; nothing has been published.`;
 postForm.reset();
});
