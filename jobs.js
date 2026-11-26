const jobs = [
  {
    title: "Frontend Developer",
    company: "BrightTech",
    location: "Noida",
    type: "Full-time",
    salary: "₹4–6 LPA",
    desc: "Build clean and responsive web pages using HTML, CSS and JavaScript.",
  },
  {
    title: "Junior Web Designer",
    company: "Pixel Studio",
    location: "Remote",
    type: "Full-time",
    salary: "₹3–4 LPA",
    desc: "Work with the design team to create simple website layouts.",
  },
  {
    title: "Data Analyst",
    company: "Insight Labs",
    location: "Bengaluru",
    type: "Full-time",
    salary: "₹5–7 LPA",
    desc: "Help teams understand data and prepare useful reports.",
  },
  {
    title: "Customer Support Associate",
    company: "HelpDesk Co.",
    location: "Delhi",
    type: "Part-time",
    salary: "₹15,000/month",
    desc: "Support customers and help solve basic product questions.",
  },
];
const internships = [
  {
    title: "Web Development Intern",
    company: "CodeBridge",
    location: "Remote",
    type: "Internship",
    salary: "₹8,000/month",
    desc: "Learn frontend development by working on small website tasks.",
  },
  {
    title: "UI/UX Design Intern",
    company: "Pixel Studio",
    location: "Noida",
    type: "Internship",
    salary: "₹10,000/month",
    desc: "Create wireframes and improve simple user journeys.",
  },
  {
    title: "Data Analytics Intern",
    company: "Insight Labs",
    location: "Bengaluru",
    type: "Internship",
    salary: "₹12,000/month",
    desc: "Assist with spreadsheets, charts and basic data analysis.",
  },
];
function makeCard(item) {
  return `<article class="job-card"><h3>${item.title}</h3><div class="company">${item.company}</div><div class="details"><span>📍 ${item.location}</span><span>◷ ${item.type}</span><span>₹ ${item.salary.replace(/^₹\s*/, "")}</span></div><p>${item.desc}</p><a class="apply" href="login.html">Apply now</a><button class="saved" data-title="${item.title}">Save</button></article>`;
}
const jobList = document.getElementById("jobList");
if (jobList) {
  const params = new URLSearchParams(location.search);
  document.getElementById("searchInput").value = params.get("q") || "";
  document.getElementById("locationFilter").value =
    params.get("location") || "";
  function render() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    const loc = document.getElementById("locationFilter").value.toLowerCase();
    const type = document.getElementById("typeFilter").value.toLowerCase();
    const result = jobs.filter(
      (j) =>
        (j.title + j.company).toLowerCase().includes(q) &&
        (!loc || j.location.toLowerCase() === loc) &&
        (!type || j.type.toLowerCase() === type),
    );
    jobList.innerHTML = result.map(makeCard).join("");
    document.getElementById("emptyMessage").hidden = result.length > 0;
  }
  ["searchInput", "locationFilter", "typeFilter"].forEach((id) =>
    document.getElementById(id).addEventListener("input", render),
  );
  render();
}
const internshipList = document.getElementById("internshipList");
if (internshipList)
  internshipList.innerHTML = internships.map(makeCard).join("");
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("saved")) {
    const saved = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    const title = event.target.dataset.title;
    if (!saved.includes(title)) saved.push(title);
    localStorage.setItem("savedJobs", JSON.stringify(saved));
    event.target.textContent = "Saved ✓";
  }
});
