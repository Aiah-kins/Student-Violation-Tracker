document.querySelector("#loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const splash = document.getElementById("splashScreen");
  splash.classList.add("show");

  setTimeout(() => {
    window.location.href = "homepage.html";
  }, 2000); // 2 second splash screen delay
});
