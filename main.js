fetch("navbar.html")
  .then((r) => r.text())
  .then((d) => {
    document.getElementById("navbar").innerHTML = d;
  });
fetch("hero.html")
  .then((r) => r.text())
  .then((d) => {
    document.getElementById("hero").innerHTML = d;
  });
fetch("footer.html")
  .then((r) => r.text())
  .then((d) => {
    document.getElementById("footer").innerHTML = d;
  });
document.addEventListener("click", function (e) {
  if (!e.target.closest(".navbar2")) {
    document
      .querySelectorAll(".navbar2-item")
      .forEach((item) => item.classList.remove("open"));
  }

  if (!e.target.closest(".nav-item")) {
    document.getElementById("langDrop").style.display = "none";
    document.getElementById("cityDrop").style.display = "none";
  }
});
