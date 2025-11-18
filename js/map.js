// js/map.js - Zoom + clic en países reales del SVG de SimpleMaps

document.addEventListener("DOMContentLoaded", () => {
  const mapObject = document.getElementById("world-map");

  mapObject.addEventListener("load", () => {
    const svgDoc = mapObject.contentDocument;
    const svg = svgDoc.querySelector("svg");

    // Activar zoom y pan
    svgPanZoom(svg, {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
      minZoom: 1,
      maxZoom: 20
    });

    // Clic en país
    svgDoc.addEventListener("click", (e) => {
      const path = e.target.closest("path");
      if (path && path.getAttribute("data-name")) {
        const country = path.getAttribute("data-name");
        document.getElementById("country-name").textContent = country;
        document.getElementById("popup").classList.remove("hidden");
      }
    });

    // Hover bonito
    svgDoc.querySelectorAll("path").forEach(p => {
      p.style.transition = "fill 0.3s";
      p.addEventListener("mouseenter", () => p.style.fill = "#60a5fa");
      p.addEventListener("mouseleave", () => p.style.fill = "#1e293b");
    });
  });
});
