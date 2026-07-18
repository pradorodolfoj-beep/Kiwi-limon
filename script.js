// 1. Catálogo inicial de productos
const defaultProducts = [
    {
        id: 1718100000001,
        name: "Ensalada de Frutas Suprema",
        desc: "Deliciosa mezcla de fresas, cambur, kiwi y melón, bañada con leche condensada y queso rallado.",
        price: 4.50,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop",
        addons: ["Helado Extra+1.50", "Chocolate+1.00"],
        removals: ["Sin Leche Condensada", "Sin Queso"]
    },
    {
        id: 1718100000002,
        name: "Smoothie de Kiwi y Limón",
        desc: "Refrescante batido granizado de kiwi natural con un toque cítrico de limón fresco.",
        price: 3.00,
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop",
        addons: ["Zumo Extra+0.50"],
        removals: ["Sin Azúcar"]
    }
];

// 2. Estado Global de la Aplicación
let products = JSON.parse(localStorage.getItem('kiwi_products')) || defaultProducts;
let cart = JSON.parse(localStorage.getItem('kiwi_cart')) || [];
let currentDeliveryOption = ''; 
let tempProductToCart = null;

if (!localStorage.getItem('kiwi_products')) {
    localStorage.setItem('kiwi_products', JSON.stringify(products));
}

// 3. Inicio automático al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderCustomerMenu();
    renderAdminTable();
    updateCartUI();
    setupEventListeners();
});

// 4. Pintar Menú Principal (Cliente)
function renderCustomerMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;
    container.innerHTML = "";

    products.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        const imgUrl = prod.image || "https://images.unsplash.com/photo-1610832958506-ee5633619144?w=400&auto=format&fit=crop";
        
        card.innerHTML = `
            <img src="${imgUrl}" alt="${prod.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${prod.name}</h3>
                <p class="product-desc">${prod.desc}</p>
                <div class="product-footer">
                    <span class="product-price">$${Number(prod.price).toFixed(2)}</span>
                    <button class="btn-add-to-cart" onclick="openCustomizationModal(${prod.id})">Agregar ➕</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 5. Configurar Eventos (Listeners)
function setupEventListeners() {
    const btnToggleView = document.getElementById("btn-toggle-view");
    const btnOpenCart = document.getElementById("btn-open-cart");
    const btnCloseCart = document.getElementById("btnCloseCart");
    const btnCloseLogin = document.getElementById("btn-close-login");
    const loginForm = document.getElementById("login-form");
    const btnLogoutAdmin = document.getElementById("btn-logout-admin");
    const productForm = document.getElementById("product-form");
    const btnCancelEdit = document.getElementById("btn-cancel-edit");
    const optPickup = document.getElementById("btn-opt-pickup");
    const optDelivery = document.getElementById("btn-opt-delivery");
    const btnCheckout = document.getElementById("btn-checkout");
    const btnViewCart = document.querySelector(".btn-view-cart");
    const btnSaveDatabase = document.getElementById("btn-save-database");
    
    if (btnOpenCart) btnOpenCart.onclick = openCartDrawer;
    if (btnViewCart) btnViewCart.onclick = openCartDrawer;
    if (btnCloseCart) btnCloseCart.onclick = closeCartDrawer;

    if (btnToggleView) {
        btnToggleView.onclick = () => {
            const adminView = document.getElementById("admin-view");
            if (adminView && adminView.style.display === "block") {
                showView('customer-view');
            } else {
                openModal('login-modal');
            }
        };
    }

    if (btnCloseLogin) btnCloseLogin.onclick = () => closeModal('login-modal');
    
    if (loginForm) {
        loginForm.onsubmit = (e) => {
            e.preventDefault();
            const user = document.getElementById("login-username").value.trim();
            const pass = document.getElementById("login-password").value.trim();
            
            if (user.toLowerCase() === "kiwi limón val" && pass === "3008") {
                closeModal('login-modal');
                showView('admin-view');
                if (btnToggleView) btnToggleView.innerText = "📱 Ver Menú";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        };
    }

    if (btnLogoutAdmin) {
        btnLogoutAdmin.onclick = () => {
            showView('customer-view');
            if (btnToggleView) btnToggleView.innerText = "⚙️ Admin";
        };
    }

    if (productForm) {
        productForm.onsubmit = (e) => {
            e.preventDefault();
            saveProduct();
        };
    }

    if (btnCancelEdit) btnCancelEdit.onclick = resetProductForm;
    if (optPickup) optPickup.onclick = () => selectDeliveryOption('pickup');
    if (optDelivery) optDelivery.onclick = () => selectDeliveryOption('delivery');
    if (btnCheckout) btnCheckout.onclick = sendOrderWhatsApp;
    
    // Acción explícita para guardar de forma definitiva el estado de los productos
    if (btnSaveDatabase) {
        btnSaveDatabase.onclick = () => {
            localStorage.setItem('kiwi_products', JSON.stringify(products));
            alert("🔒 ¡Catálogo guardado definitivamente con éxito en el dispositivo!");
        };
    }
}

// 6. Vistas y Modales
function showView(viewId) {
    document.getElementById("customer-view").style.display = viewId === "customer-view" ? "block" : "none";
    document.getElementById("admin-view").style.display = viewId === "admin-view" ? "block" : "none";
    
    const bottomBar = document.getElementById("bottom-cart-bar");
    if (bottomBar) {
        bottomBar.style.display = (viewId === "customer-view" && cart.length > 0) ? "flex" : "none";
    }
}

function openModal(modalId) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById(modalId).style.display = "none";
}

function openCartDrawer() {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("overlay").style.display = "block";
}

function closeCartDrawer() {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
}

// 7. Modales de Selección Personalizada
window.openCustomizationModal = function(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    tempProductToCart = JSON.parse(JSON.stringify(prod));
    tempProductToCart.selectedAddons = [];
    tempProductToCart.selectedRemovals = [];

    document.getElementById("custom-modal-title").innerText = prod.name;
    document.getElementById("custom-modal-price").innerText = `Precio base: $${Number(prod.price).toFixed(2)}`;

    const addonsContainer = document.getElementById("custom-addons-container");
    addonsContainer.innerHTML = prod.addons && prod.addons.length > 0 ? "<h5>¿Deseas agregar adicionales?</h5>" : "";
    if (prod.addons) {
        prod.addons.forEach((addon, idx) => {
            const parts = addon.split("+");
            const name = parts[0].trim();
            const price = parts[1] ? parseFloat(parts[1]) : 0;

            const div = document.createElement("div");
            div.className = "option-item";
            div.innerHTML = `
                <label><input type="checkbox" onchange="toggleAddon(${idx}, '${name}', ${price}, this.checked)"> ${name} (+$${price.toFixed(2)})</label>
            `;
            addonsContainer.appendChild(div);
        });
    }

    const removalsContainer = document.getElementById("custom-removals-container");
    removalsContainer.innerHTML = prod.removals && prod.removals.length > 0 ? "<h5>¿Quitar algún ingrediente?</h5>" : "";
    if (prod.removals) {
        prod.removals.forEach(rem => {
            const name = rem.trim();
            const div = document.createElement("div");
            div.className = "option-item";
            div.innerHTML = `
                <label><input type="checkbox" onchange="toggleRemoval('${name}', this.checked)"> ${name}</label>
            `;
            removalsContainer.appendChild(div);
        });
    }

    document.getElementById("btn-confirm-custom").onclick = confirmAddToCart;
    document.getElementById("btn-close-custom").onclick = () => closeModal('custom-modal');
    openModal('custom-modal');
};

window.toggleAddon = function(idx, name, price, isChecked) {
    if (isChecked) { tempProductToCart.selectedAddons.push({ name, price }); } 
    else { tempProductToCart.selectedAddons = tempProductToCart.selectedAddons.filter(a => a.name !== name); }
};

window.toggleRemoval = function(name, isChecked) {
    if (isChecked) { tempProductToCart.selectedRemovals.push(name); } 
    else { tempProductToCart.selectedRemovals = tempProductToCart.selectedRemovals.filter(r => r !== name); }
};

function confirmAddToCart() {
    cart.push(tempProductToCart);
    localStorage.setItem('kiwi_cart', JSON.stringify(cart));
    
    closeModal('custom-modal');
    updateCartUI();
    
    const bottomBar = document.getElementById("bottom-cart-bar");
    if (bottomBar) {
        bottomBar.style.display = "flex";
    }
}

// 8. Actualizar la Interfaz del Carrito
function updateCartUI() {
    const itemsContainer = document.getElementById("cart-items-container");
    const totalAmount = document.getElementById("cart-total-amount");
    const bottomBar = document.getElementById("bottom-cart-bar");
    const deliveryBox = document.getElementById("delivery-box");
    const dataForm = document.getElementById("customer-data-form");
    
    document.getElementById("cart-count").innerText = cart.length;

    if (cart.length === 0) {
        if (itemsContainer) itemsContainer.innerHTML = `<p style="text-align:center; color:#999; margin-top:30px;">Tu carrito está vacío.</p>`;
        if (totalAmount) totalAmount.innerText = "$0.00";
        if (bottomBar) bottomBar.style.display = "none";
        if (deliveryBox) deliveryBox.style.display = "none";
        if (dataForm) dataForm.style.display = "none";
        
        currentDeliveryOption = '';
        document.getElementById("btn-opt-pickup").classList.remove("active");
        document.getElementById("btn-opt-delivery").classList.remove("active");
        return;
    }

    if (deliveryBox) deliveryBox.style.display = "block";

    if (itemsContainer) {
        itemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let itemTotal = parseFloat(item.price);
            let addonsText = "";
            if (item.selectedAddons) {
                item.selectedAddons.forEach(a => {
                    itemTotal += parseFloat(a.price);
                    addonsText += `<small style="display:block;color:#85bb65;">+ ${a.name} ($${a.price.toFixed(2)})</small>`;
                });
            }
            let removalsText = "";
            if (item.selectedRemovals) {
                item.selectedRemovals.forEach(r => {
                    removalsText += `<small style="display:block;color:#ef4444;">❌ ${r}</small>`;
                });
            }
            total += itemTotal;

            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                <div>
                    <p style="margin:0;font-weight:bold;">${item.name}</p>
                    <span style="color:#a3e635;font-weight:bold;">$${itemTotal.toFixed(2)}</span>
                    ${addonsText} ${removalsText}
                </div>
                <button class="btn-danger" style="padding:4px 8px;font-size:12px;" onclick="removeCartItem(${index})">🗑️</button>
            `;
            itemsContainer.appendChild(div);
        });

        if (totalAmount) totalAmount.innerText = `$${total.toFixed(2)}`;
        
        if (document.getElementById("bottom-cart-total-text")) {
            document.getElementById("bottom-cart-total-text").innerText = `$${total.toFixed(2)}`;
        }
        if (document.getElementById("bottom-cart-items-text")) {
            const qty = cart.length;
            document.getElementById("bottom-cart-items-text").innerText = `${qty} ${qty === 1 ? 'producto añadido' : 'productos añadidos'}`;
        }
    }
}

window.removeCartItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('kiwi_cart', JSON.stringify(cart));
    updateCartUI();
};

function selectDeliveryOption(option) {
    const addressInput = document.getElementById("cust-address");
    const dataForm = document.getElementById("customer-data-form");
    currentDeliveryOption = option;

    if (dataForm) dataForm.style.display = "block";

    if (option === 'pickup') {
        document.getElementById("btn-opt-pickup").classList.add("active");
        document.getElementById("btn-opt-delivery").classList.remove("active");
        if (addressInput) { addressInput.style.display = "none"; addressInput.required = false; }
    } else {
        document.getElementById("btn-opt-delivery").classList.add("active");
        document.getElementById("btn-opt-pickup").classList.remove("active");
        if (addressInput) { addressInput.style.display = "block"; addressInput.required = true; }
    }
}

// 9. Envío a WhatsApp
function sendOrderWhatsApp() {
    if (cart.length === 0) return;

    if (!currentDeliveryOption) {
        alert("Por favor, selecciona si deseas tu pedido por Pick Up o Delivery.");
        return;
    }

    const name = document.getElementById("cust-fullname").value.trim();
    const idCard = document.getElementById("cust-cedula").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address") ? document.getElementById("cust-address").value.trim() : "";

    if (!name || !idCard || !phone || (currentDeliveryOption === 'delivery' && !address)) {
        alert("Por favor complete todos los campos obligatorios del formulario");
        return;
    }

    let text = `*🍉 NUEVO PEDIDO - KIWI LIMÓN 🍋*\n\n`;
    text += `*Cliente:* ${name}\n`;
    text += `*Cédula:* ${idCard}\n`;
    text += `*Teléfono:* ${phone}\n`;
    text += `*Modalidad:* ${currentDeliveryOption === 'pickup' ? '🛍️ Pick Up' : '🛵 Delivery'}\n`;
    if (currentDeliveryOption === 'delivery') text += `*Dirección:* ${address}\n`;
    
    text += `\n*📦 DETALLE:*\n`;
    let total = 0;
    cart.forEach((item, i) => {
        let itemTotal = parseFloat(item.price);
        text += `\n${i+1}. *${item.name}*\n`;
        if (item.selectedAddons) {
            item.selectedAddons.forEach(a => { itemTotal += parseFloat(a.price); text += `   + ${a.name}\n`; });
        }
        if (item.selectedRemovals) {
            text += `   - ${item.selectedRemovals.join(', ')}\n`;
        }
        text += `   _Precio: $${itemTotal.toFixed(2)}_\n`;
        total += itemTotal;
    });

    text += `\n*💰 TOTAL A PAGAR: $${total.toFixed(2)}*`;

    const storePhone = "584128731016"; 
    window.open(`https://api.whatsapp.com/send?phone=${storePhone}&text=${encodeURIComponent(text)}`, '_blank');
    
    currentDeliveryOption = '';
    document.getElementById("btn-opt-pickup").classList.remove("active");
    document.getElementById("btn-opt-delivery").classList.remove("active");
    
    cart = [];
    localStorage.setItem('kiwi_cart', JSON.stringify(cart));
    updateCartUI();
    closeCartDrawer();
}

// 10. CRUD Admin
function renderAdminTable() {
    const tbody = document.getElementById("admin-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    products.forEach(prod => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${prod.image || 'https://images.unsplash.com/photo-1610832958506-ee5633619144?w=100'}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;"></td>
            <td>${prod.name}</td>
            <td>$${Number(prod.price).toFixed(2)}</td>
            <td>
                <button class="btn-nav" style="padding:4px 8px;" onclick="editProduct(${prod.id})">✏️</button>
                <button class="btn-danger" style="padding:4px 8px;" onclick="deleteProduct(${prod.id})">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function saveProduct() {
    const id = document.getElementById("edit-id").value;
    const name = document.getElementById("prod-name").value.trim();
    const desc = document.getElementById("prod-desc").value.trim();
    const price = parseFloat(document.getElementById("prod-price").value);
    const image = document.getElementById("prod-image-url").value.trim();
    
    const addonsRaw = document.getElementById("prod-addons").value;
    const addons = addonsRaw ? addonsRaw.split(",").map(s => s.trim()).filter(s => s.length > 0) : [];
    const removalsRaw = document.getElementById("prod-removals").value;
    const removals = removalsRaw ? removalsRaw.split(",").map(s => s.trim()).filter(s => s.length > 0) : [];

    if (id) {
        products = products.map(p => p.id == id ? { ...p, name, desc, price, image, addons, removals } : p);
    } else {
        products.push({ id: Date.now(), name, desc, price, image, addons, removals });
    }

    // Auto-guarda en la lista temporal en caché de sesión
    localStorage.setItem('kiwi_products', JSON.stringify(products));
    renderCustomerMenu();
    renderAdminTable();
    resetProductForm();
}

window.editProduct = function(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    document.getElementById("edit-id").value = prod.id;
    document.getElementById("prod-name").value = prod.name;
    document.getElementById("prod-desc").value = prod.desc;
    document.getElementById("prod-price").value = prod.price;
    document.getElementById("prod-image-url").value = prod.image || "";
    document.getElementById("prod-addons").value = prod.addons ? prod.addons.join(", ") : "";
    document.getElementById("prod-removals").value = prod.removals ? prod.removals.join(", ") : "";
    document.getElementById("btn-cancel-edit").style.display = "inline-block";
};

window.deleteProduct = function(id) {
    if (confirm("¿Eliminar este producto de la lista temporal?")) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('kiwi_products', JSON.stringify(products));
        renderCustomerMenu();
        renderAdminTable();
    }
};

function resetProductForm() {
    document.getElementById("product-form").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("btn-cancel-edit").style.display = "none";
}
