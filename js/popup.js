// js/popup.js - Control del popup de suscripción

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
});

document.getElementById("subscribe-btn").addEventListener("click", function () {
  const country = document.getElementById("country-name").textContent;
  alert(`¡Genial! Ya estás suscrito a ${country} ✅\nPronto recibirás alertas en tiempo real.`);
  document.getElementById("popup").classList.add("hidden");
});

// Cerrar popup clicando fuera
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.add("hidden");
  }
});
