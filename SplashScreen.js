document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Splash activated"); 

  const splash = document.getElementById("splashScreen");
  splash.classList.add("show");

  setTimeout(() => {
    this.submit();
  }, 2000);
});
