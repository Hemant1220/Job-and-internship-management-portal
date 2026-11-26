document.getElementById("homeSearch").addEventListener("submit", function (event) {
  event.preventDefault();
  const keyword = document.getElementById("keyword").value.trim();
  const location = document.getElementById("location").value.trim();
  const params = new URLSearchParams({ q: keyword, location: location });
  window.location.href = "../job-listings/jobs.html?" + params.toString();
});
