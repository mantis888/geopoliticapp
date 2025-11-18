// js/map.js - Detecta el país clicado y abre el popup

document.addEventListener("DOMContentLoaded", function () {
  const mapObject = document.getElementById("world-map");

  mapObject.addEventListener("load", function () {
    const svgDoc = mapObject.contentDocument;
    if (!svgDoc) return;

    // Añade evento a todos los <path> del SVG
    const paths = svgDoc.querySelectorAll("path");
    paths.forEach(path => {
      path.style.cursor = "pointer";

      path.addEventListener("click", function () {
        const countryName = this.getAttribute("data-name") || "este país";
        document.getElementById("country-name").textContent = countryName;
        document.getElementById("popup").classList.remove("hidden");
      });

      // Hover bonito
      path.addEventListener("mouseenter", function () {
        this.style.fill = "#60a5fa";
      });
      path.addEventListener("mouseleave", function () {
        this.style.fill = "#1e293b";
      });
    });
  });
});
