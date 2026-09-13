// Helper selector
const $ = (id) => document.getElementById(id);

// Datos iniciales por defecto
const defaultProducts = [
  {
    id: 1,
    name: "Jugo Natural",
    category: "Bebidas",
    desc: "Refrescante jugo natural de fruta",
    price: 2.50,
    image: "image/jugo.jpg",
    isWeight: false,
    addons: [],
    removals: [],
    sizes: [{ name: "10oz", price: 0 }, { name: "14oz", price: 0.5 }]
  }
];

let products = [...defaultProducts];

// Muestra mensajes flotantes (Toast)
function showToast(message) {
  const toast = $('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hidden');
  }, 3000);
}

// Abrir y cerrar Modales/Capas
function openLayer(id) {
  const el = $(id);
  if (el) el.classList.remove('hidden');
}

function closeLayer(id) {
  const el = $(id);
  if (el) el.classList.add('hidden');
}

// Genera el código formateado y lo copia al portapapeles
function copyProductsCode() {
  const formattedCode = `const defaultProducts = ${JSON.stringify(products, null, 2)};`;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(formattedCode).then(() => {
      showToast('¡Guardado! Código copiado al portapapeles.');
    }).catch(() => {
      console.log('Código de productos actualizado:\n', formattedCode);
      showToast('Guardado. (Código impreso en la consola)');
    });
  } else {
    console.log('Código de productos actualizado:\n', formattedCode);
    showToast('Guardado. (Código impreso en la consola)');
  }
}

// Abre el formulario en modo Creación o Edición
function openProductForm(productId = 0) {
  const product = products.find((item) => item.id === productId);
  $('product-title').textContent = product ? 'Editar producto' : 'Nuevo producto';
  $('product-id').value = product?.id || '';
  $('product-name').value = product?.name || '';
  $('product-category').value = product?.category || 'General';
  $('product-price').value = product?.price ?? '';
  $('product-image').value = product?.image || '';
  $('product-description').value = product?.desc || '';
  $('product-weight').checked = Boolean(product?.isWeight);
  $('product-sizes').value = (product?.sizes || []).map((s) => `${s.name}: ${s.price}`).join(', ');
  
  openLayer('product-modal');
}

// Renderiza la tabla de administración
function renderAdminTable() {
  const tbody = $('admin-table-body');
  if (!tbody) return;

  tbody.innerHTML = products.map((item) => `
    <tr>
      <td>${item.image ? `<img src="${item.image}" alt="${item.name}" class="thumb-img">` : 'Sin foto'}</td>
      <td><strong>${item.name}</strong></td>
      <td>${item.category}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <button class="small-button" onclick="openProductForm(${item.id})">Editar</button>
        <button class="small-button danger" onclick="deleteProduct(${item.id})">Eliminar</button>
      </td>
    </tr>
  `).join('');
}

// Eliminar producto
function deleteProduct(id) {
  if (confirm('¿Deseas eliminar este producto?')) {
    products = products.filter((item) => item.id !== id);
    renderAdminTable();
    renderMenu();
    copyProductsCode();
  }
}

// Renderiza el menú público
function renderMenu() {
  const menu = $('menu-section');
  if (!menu) return;

  menu.innerHTML = products.map((item) => `
    <div class="card">
      ${item.image ? `<img src="${item.image}" alt="${item.name}" class="card-img">` : ''}
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.desc || ''}</p>
        <span class="price">$${item.price.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
}

// Carga las categorías en el selector dinámicamente
function populateCategories() {
  const categories = ['Especiales', 'Bebidas', 'Postres', 'Combos', 'General'];
  const select = $('product-category');
  if (!select) return;

  select.innerHTML = categories.map((cat) => `<option value="${cat}">${cat}</option>`).join('');
}

// Asignación de eventos
function bindEvents() {
  $('add-product-button')?.addEventListener('click', () => openProductForm(0));
  $('close-product')?.addEventListener('click', () => closeLayer('product-modal'));
  $('cancel-product')?.addEventListener('click', () => closeLayer('product-modal'));
  
  $('open-admin-button')?.addEventListener('click', () => {
    $('admin-section')?.classList.toggle('hidden');
  });

  $('product-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = Number($('product-id').value);
    
    const sizesRaw = $('product-sizes').value.trim();
    let parsedSizes = [];
    if (sizesRaw) {
      parsedSizes = sizesRaw.split(',').map((part) => {
        const [name, priceStr] = part.split(':').map((str) => str.trim());
        if (name) {
          return { name, price: Number(priceStr) || 0 };
        }
        return null;
      }).filter(Boolean);
    }

    const next = {
      id: id || Date.now(),
      name: $('product-name').value.trim(),
      category: $('product-category').value,
      desc: $('product-description').value.trim(),
      price: Number($('product-price').value),
      image: $('product-image').value.trim(),
      isWeight: $('product-weight').checked,
      addons: id ? products.find((item) => item.id === id)?.addons || [] : [],
      removals: id ? products.find((item) => item.id === id)?.removals || [] : [],
      sizes: parsedSizes
    };

    if (!next.name || !Number.isFinite(next.price) || next.price < 0) {
      showToast('Agrega un nombre y precio válidos.');
      return;
    }

    products = id ? products.map((item) => item.id === id ? next : item) : [...products, next];
    closeLayer('product-modal');
    renderAdminTable();
    renderMenu();
    
    copyProductsCode();
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  populateCategories();
  renderAdminTable();
  renderMenu();
  bindEvents();
});
