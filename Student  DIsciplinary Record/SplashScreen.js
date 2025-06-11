document.querySelector("#loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const splash = document.getElementById("splashScreen");
  splash.classList.add("show");

  setTimeout(() => {
    window.location.href = "homepage.html";
; // Redirects to homepage.html
  }, 2000); // Delay before redirection
});

