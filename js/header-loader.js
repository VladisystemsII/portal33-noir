// header-loader.js — Carga el módulo header.html de forma dinámica.
// Responsabilidad exclusiva: inyectar el HTML del header en la página.
// Al finalizar emite el evento "headerListo" para que menu-mobile.js
// y header.js sepan que el DOM del header ya está disponible.
// Orden de carga requerido: header-loader.js → header.js → menu-mobile.js

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("header-container");
  if (!container) return;

  fetch("modules/header.html")
    .then(function (response) {
      if (!response.ok) throw new Error("No se pudo cargar header.html");
      return response.text();
    })
    .then(function (html) {
      container.innerHTML = html;

      // ✅ Notificar que el header ya está inyectado en el DOM
      document.dispatchEvent(new CustomEvent("headerListo"));
    })
    .catch(function (error) {
      console.error("❌ Error al cargar el header:", error);
    });
});
