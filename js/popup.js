// js/popup.js - Cierre del popup (ordenador y móvil)

document.getElementById("close-btn").addEventListener("click", closePopup);
document.getElementById("popup").addEventListener("click", (e) => {
  if (e.target === document.getElementById("popup")) closePopup();
});

document.getElementById("subscribe-btn").addEventListener("click", () => {
  const country = document.getElementById("country-name").textContent;
  alert(`¡Perfecto! Ya estás suscrito a ${country} ✅\nPronto recibirás las alertas.`);
  closePopup();
});

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
