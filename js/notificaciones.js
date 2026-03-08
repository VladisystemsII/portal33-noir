// notificaciones.js — Lógica del módulo Notificaciones / Búsqueda
// Responsabilidad: scroll del botón CTA hacia el formulario embebido.

document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("scrollToForm");
  const formulario = document.getElementById("googleForm");

  if (!boton || !formulario) return;

  boton.addEventListener("click", function () {
    formulario.scrollIntoView({ behavior: "smooth" });
  });
});
