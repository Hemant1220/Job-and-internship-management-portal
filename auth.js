const toggle = document.getElementById("togglePassword");
if (toggle) toggle.addEventListener("click", () => {
 const field = document.getElementById("password");
 field.type = field.type === "password" ? "text" : "password";
 toggle.textContent = field.type === "password" ? "Show" : "Hide";
});
const signup = document.getElementById("signupForm");
if (signup) signup.addEventListener("submit", event => {
 event.preventDefault();
 const user = {
   name: document.getElementById("name").value.trim(),
   email: document.getElementById("email").value.trim(),
   role: document.getElementById("role").value
 };
 localStorage.setItem("careerNestUser", JSON.stringify(user));
 document.getElementById("message").textContent = "Demo account created! You can now log in.";
 signup.reset();
});
const login = document.getElementById("loginForm");
if (login) login.addEventListener("submit", event => {
 event.preventDefault();
 const saved = JSON.parse(localStorage.getItem("careerNestUser") || "null");
 const email = document.getElementById("email").value.trim();
 if (saved && saved.email === email) {
   document.getElementById("message").textContent = "Demo login successful. Open the dashboard branch page.";
 } else {
   document.getElementById("message").textContent = "No demo account found for this email. Please sign up first.";
 }
});
