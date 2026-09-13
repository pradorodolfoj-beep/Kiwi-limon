/**
 * auth.js - Módulo de automatización y comportamientos autónomos para Kiwi Limón.
 * Gestiona el desplazamiento suave de categorías, auto-scroll, autenticación y utilidades adicionales.
 */

(function () {
  'use strict';

  // Credenciales de acceso
  const AUTH_CONFIG = {
    user: 'RP',
    pass: '3008'
  };

  // Función de verificación de credenciales con limpieza de espacios
  function login(username, password) {
    if (!username || !password) return false;
    const cleanUser = String(username).trim().toUpperCase();
    const cleanPass = String(password).trim();
    return cleanUser === AUTH_CONFIG.user.toUpperCase() && cleanPass === AUTH_CONFIG.pass;
  }

  // Configuración de scroll automático para la barra de categorías
  function setupCategoryRailAutoScroll() {
    const rail = document.getElementById('category-rail');
    if (!rail) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    rail.addEventListener('mousedown', (e) => {
      isDown = true;
      rail.classList.add('active');
      startX = e.pageX - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
    });

    rail.addEventListener('mouseleave', () => {
      isDown = false;
      rail.classList.remove('active');
    });

    rail.addEventListener('mouseup', () => {
      isDown = false;
      rail.classList.remove('active');
    });

    rail.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 2; // Velocidad de desplazamiento
      rail.scrollLeft = scrollLeft - walk;
    });
  }

  // Centra automáticamente la categoría activa en pantalla
  function autoCenterActiveCategory() {
    const rail = document.getElementById('category-rail');
    if (!rail) return;

    const observer = new MutationObserver(() => {
      const activeChip = rail.querySelector('.category-chip.active');
      if (activeChip) {
        activeChip.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    });

    observer.observe(rail, { childList: true, subtree: true, attributes: true });
  }

  // Inicializador del script
  document.addEventListener('DOMContentLoaded', () => {
    setupCategoryRailAutoScroll();
    autoCenterActiveCategory();
  });

  // Exposición pública del módulo en el ámbito global
  window.AuthModule = {
    AUTH_CONFIG,
    login
  };
})();
