/**
 * auth.js - Módulo de autenticación y automatizaciones para Kiwi Limón.
 */

(function () {
  'use strict';

  // Configuración de credenciales válidas
  const VALID_USERS = ['RP', 'ADMIN'];
  const VALID_PASS = '3008';

  // Función de verificación directa
  function login(username, password) {
    if (!username || !password) return false;
    const cleanUser = String(username).trim().toUpperCase();
    const cleanPass = String(password).trim();
    return VALID_USERS.includes(cleanUser) && cleanPass === VALID_PASS;
  }

  // Scroll de la barra de categorías
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
      const walk = (x - startX) * 2;
      rail.scrollLeft = scrollLeft - walk;
    });
  }

  // Centra automáticamente la categoría activa
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

  document.addEventListener('DOMContentLoaded', () => {
    setupCategoryRailAutoScroll();
    autoCenterActiveCategory();
  });

  // Exportación al ámbito global
  window.AuthModule = {
    login: login
  };
})();
