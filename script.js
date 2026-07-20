// ==========================================================================
// 1. CATÁLOGO INICIAL Y ESTADO GLOBAL
// ==========================================================================
const defaultProducts = [
    {
        id: 1718100000001,
        name: "Frutillas Enteras Seleccionadas",
        desc: "Fresas frescas ideales para jugos o postres. Precio publicado por Kilogramo.",
        price: 5.00,
        isWeight: true, 
        image: "imagenes/image.jpg",
        addons: ["Crema Batida+1.00"],
        removals: []
    },
    {
        id: 1718100000002,
        name: "Smoothie de Kiwi y Limón",
        desc: "Refrescante batido granizado por unidad estándar.",
        price: 3.00,
        isWeight: false, 
        image: "imagenes/smoothie.jpg",
        addons: ["Zumo Extra+0.50"],
        removals: ["Sin Azúcar"]
    }
];

let products = JSON.parse(localStorage.getItem('kiwi_products')) || defaultProducts;
let cart = JSON.parse(localStorage.getItem('kiwi_cart')) || [];
let currentDeliveryOption = ''; 
let tempProductToCart = null;

if (!localStorage.getItem('kiwi_products')) {
    localStorage.setItem('kiwi_products', JSON.stringify(products));
}

// Inicialización de la aplicación al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderCustomerMenu();
    renderAdminTable();
    updateCartUI();
    setupEventListeners();
});

// ==========================================================================
// 2. RENDERIZADO DEL MENÚ DEL CLIENTE (CON BOTÓN LLAMATIVO OPTIMIZADO)
// ==========================================================================
function renderCustomerMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;
    
    // Inyección automática del diseño premium del botón "Pedir"
    if (!document.getElementById("premium-btn-styles")) {
        const styles = document.createElement("style");
        styles.id = "premium-btn-styles";
        styles.innerHTML = `
            .btn-pedir-premium {
                background: linear-gradient(135deg, #ff9f43, #ff5252);
                color: #ffffff;
                border: none;
                padding: 10px 20px;
                font-size: 14px;
                font-weight: bold;
                border-radius: 25px;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(255, 82, 82, 0.4);
                transition: all 0.2s ease-in-out;
                -webkit-tap-highlight-color: transparent;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            .btn-pedir-premium:active {
                transform: scale(0.93);
                box-shadow: 0 2px 6px rgba(255, 82, 82, 0.2);
                background: linear-gradient(135deg, #e68a30, #e64545);
            }
        `;
        document.head.appendChild(styles);
    }

    container.innerHTML = "";

    products.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        const imgUrl = prod.image || "imagenes/image.jpg";
        const priceSuffix = prod.isWeight ? " <span style='font-size:0.75rem; color:#aaa;'>/ Kg</span>" : "";
        
        card.innerHTML = `
            <img src="${imgUrl}" alt="${prod.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${prod.name}</h3>
                <p class="product-desc">${prod.desc}</p>
                <div class="product-footer">
                    <span class="product-price">$${Number(prod.price).toFixed(2)}${priceSuffix}</span>
                    <button class="btn-pedir-premium" onclick="window.openCustomizationModal(${prod.id})">Pedir ➕</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ==========================================================================
// 3. LOGICA E INTERACTIVIDAD DEL MODAL DE PERSONALIZACIÓN
// ==========================================================================
window.openCustomizationModal = function(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    tempProductToCart = JSON.parse(JSON.stringify(prod));
    tempProductToCart.selectedAddons = [];
    tempProductToCart.selectedRemovals = [];
    
    tempProductToCart.chosenWeight = 1.000;
    const weightContainer = document.getElementById("custom-weight-container");
    if (prod.isWeight) {
        if (weightContainer) weightContainer.style.display = "block";
        const wInput = document.getElementById("custom-weight-input");
        if (wInput) wInput.value = "1.000";
    } else {
        if (weightContainer) weightContainer.style.display = "none";
    }

    document.getElementById("custom-modal-title").innerText = prod.name;
    
    const addonsContainer = document.getElementById("custom-addons-container");
    if (addonsContainer) {
        addonsContainer.innerHTML = prod.addons && prod.addons.length > 0 ? "<h5>¿Deseas agregar adicionales?</h5>" : "";
        if (prod.addons) {
            prod.addons.forEach((addon, idx) => {
                const parts = addon.split("+");
                const name = parts[0].trim();
                const price = parts[1] ? parseFloat(parts[1]) : 0;
                const div = document.createElement("div");
                div.className = "option-item";
                div.innerHTML = `<label><input type="checkbox" onchange="window.toggleAddon(${idx}, '${name}', ${price}, this.checked)"> ${name} (+$${price.toFixed(2)})</label>`;
                addonsContainer.appendChild(div);
            });
        }
    }

    const removalsContainer = document.getElementById("custom-removals-container");
    if (removalsContainer) {
        removalsContainer.innerHTML = prod.removals && prod.removals.length > 0 ? "<h5>¿Quitar algún ingrediente?</h5>" : "";
        if (prod.removals) {
            prod.removals.forEach(rem => {
                const name = rem.trim();
                const div = document.createElement("div");
                div.className = "option-item";
                div.innerHTML = `<label><input type="checkbox" onchange="window.toggleRemoval('${name}', this.checked)"> ${name}</label>`;
                removalsContainer.appendChild(div);
            });
        }
    }

    updateModalLivePrice();

    document.getElementById("btn-confirm-custom").onclick = confirmAddToCart;
    document.getElementById("btn-close-custom").onclick = () => closeModal('custom-modal');
    openModal('custom-modal');
};

window.toggleAddon = function(idx, name, price, isChecked) {
    if (isChecked) { 
        tempProductToCart.selectedAddons.push({ name, price }); 
    } else { 
        tempProductToCart.selectedAddons = tempProductToCart.selectedAddons.filter(a => a.name !== name); 
    }
    updateModalLivePrice();
};

window.toggleRemoval = function(name, isChecked) {
    if (isChecked) { 
        tempProductToCart.selectedRemovals.push(name); 
    } else { 
        tempProductToCart.selectedRemovals = tempProductToCart.selectedRemovals.filter(r => r !== name); 
    }
};

function updateModalLivePrice() {
    if (!tempProductToCart) return;
    const weightInput = document.getElementById("custom-weight-input");
    let currentW = weightInput ? (parseFloat(weightInput.value) || 0) : 1.000;
    
    let baseCalculated = tempProductToCart.isWeight ? (parseFloat(tempProductToCart.price) * currentW) : parseFloat(tempProductToCart.price);
    let totalModal = baseCalculated;
    
    tempProductToCart.selectedAddons.forEach(a => {
        totalModal += parseFloat(a.price);
    });
    
    document.getElementById("custom-modal-price").innerHTML = `Precio estimado: <span style="color:#a3e635; font-weight:bold;">$${totalModal.toFixed(2)}</span>`;
}

function confirmAddToCart() {
    if (tempProductToCart.isWeight) {
        const weightInput = parseFloat(document.getElementById("custom-weight-input").value);
        if (isNaN(weightInput) || weightInput < 0.001) {
            alert("Por favor, ingresa una cantidad de kilogramos válida (mínimo 0.001 kg).");
            return;
        }
        tempProductToCart.chosenWeight = weightInput;
    }

    cart.push(tempProductToCart);
    localStorage.setItem('kiwi_cart', JSON.stringify(cart));
    
    closeModal('custom-modal');
    updateCartUI();
}

// ==========================================================================
// 4. MANEJO GENERAL DE EVENTOS DE LA INTERFAZ
// ==========================================================================
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
    const btnCopyCode = document.getElementById("btn-copy-code");
    
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
                alert("Datos incorrectos");
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
    
    if (btnSaveDatabase) {
        btnSaveDatabase.onclick = () => {
            localStorage.setItem('kiwi_products', JSON.stringify(products));
            alert("¡Cambios persistidos en el almacenamiento local con éxito!");
        };
    }

    // ACCIÓN CORREGIDA: Copiar código generado al portapapeles
    if (btnCopyCode) {
        btnCopyCode.onclick = () => {
            const codeOutput = document.getElementById("admin-code-output");
            if (codeOutput && codeOutput.value.trim() !== "") {
                codeOutput.select();
                codeOutput.setSelectionRange(0, 99999); // Para móviles
                
                navigator.clipboard.writeText(codeOutput.value)
                    .then(() => {
                        alert("📋 ¡Código copiado con éxito para tu GitHub!");
                    })
                    .catch(err => {
                        // Alternativa por si falla el portapapeles nativo en navegadores antiguos de celular
                        document.execCommand("copy");
                        alert("📋 ¡Código copiado con éxito!");
                    });
            } else {
                alert("No hay ningún código generado para copiar todavía.");
            }
        };
    }

    const weightInput = document.getElementById("custom-weight-input");
    if (weightInput) {
        weightInput.addEventListener("input", updateModalLivePrice);
    }
}

function showView(viewId) {
    document.getElementById("customer-view").style.display = viewId === "customer-view" ? "block" : "none";
    document.getElementById("admin-view").style.display = viewId === "admin-view" ? "block" : "none";
    const bottomBar = document.getElementById("bottom-cart-bar");
    if (bottomBar) {
        bottomBar.style.display = (viewId === "customer-view" && cart.length > 0) ? "flex" : "none";
    }
}

// ==========================================================================
// 5. ACTUALIZACIÓN E INTERFAZ DEL CARRITO DE COMPRAS
// ==========================================================================
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
        return;
    }

    if (deliveryBox) deliveryBox.style.display = "block";

    if (itemsContainer) {
        itemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let baseCalculated = item.isWeight ? (parseFloat(item.price) * item.chosenWeight) : parseFloat(item.price);
            let itemTotal = baseCalculated;
            let portionText = item.isWeight ? `<small style="display:block;color:#94a3b8;margin-top:2px;">Cantidad: ${item.chosenWeight.toFixed(3)} Kg</small>` : '';

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
                <div style="flex-grow:1; padding-right:10px;">
                    <p style="margin:0;font-weight:bold;font-size:0.95rem;">${item.name}</p>
                    ${portionText}
                    <span style="color:#a3e635;font-weight:bold;font-size:0.9rem;display:inline-block;margin-top:4px;">$${itemTotal.toFixed(2)}</span>
                    ${addonsText} ${removalsText}
                </div>
                <button class="btn-danger" style="padding:6px 10px;font-size:12px;border-radius:6px;cursor:pointer;" onclick="window.removeCartItem(${index})">🗑️</button>
            `;
            itemsContainer.appendChild(div);
        });

        if (totalAmount) totalAmount.innerText = `$${total.toFixed(2)}`;
        if (document.getElementById("bottom-cart-total-text")) document.getElementById("bottom-cart-total-text").innerText = `$${total.toFixed(2)}`;
        if (document.getElementById("bottom-cart-items-text")) document.getElementById("bottom-cart-items-text").innerText = `${cart.length} ítems en pedido`;
        if (bottomBar && document.getElementById("customer-view").style.display !== "none") bottomBar.style.display = "flex";
    }
}

window.removeCartItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('kiwi_cart', JSON.stringify(cart));
    updateCartUI();
};

function selectDeliveryOption(option) {
    currentDeliveryOption = option;
    document.getElementById("customer-data-form").style.display = "block";
    if (option === 'pickup') {
        document.getElementById("btn-opt-pickup").classList.add("active");
        document.getElementById("btn-opt-delivery").classList.remove("active");
        document.getElementById("cust-address").style.display = "none";
        document.getElementById("cust-address").removeAttribute("required");
    } else {
        document.getElementById("btn-opt-delivery").classList.add("active");
        document.getElementById("btn-opt-pickup").classList.remove("active");
        document.getElementById("cust-address").style.display = "block";
        document.getElementById("cust-address").setAttribute("required", "true");
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

// ==========================================================================
// 6. PROCESAMIENTO Y ENVÍO DEL PEDIDO A WHATSAPP
// ==========================================================================
function closeCartDrawer() {
    document.getElementById("cart-drawer").classList.remove("open");
    if(document.getElementById("custom-modal").style.display !== "block" && document.getElementById("login-modal").style.display !== "block") {
        document.getElementById("overlay").style.display = "none";
    }
}

function sendOrderWhatsApp() {
    if (cart.length === 0) return;
    if (!currentDeliveryOption) { alert("Selecciona Pick Up o Delivery."); return; }

    const name = document.getElementById("cust-fullname").value.trim();
    const idCard = document.getElementById("cust-cedula").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();

    if(!name || !idCard || !phone || (currentDeliveryOption === 'delivery' && !address)) {
        alert("Por favor rellena todos los campos obligatorios del formulario.");
        return;
    }

let text = `*🍉 NUEVO PEDIDO - KIWI LIMÓN 🍋*\n\n`;
    text += `*Cliente:* ${name}\n*Cédula:* ${idCard}\n*Modalidad:* ${currentDeliveryOption === 'pickup' ? '🛍️ Pick Up' : '🛵 Delivery'}\n`;
    if (currentDeliveryOption === 'delivery') text += `*Dirección:* ${address}\n`;
    
    text += `\n*📦 DETALLE:*\n`;
    let total = 0;
    
    cart.forEach((item, i) => {
        let baseCalculated = item.isWeight ? (parseFloat(item.price) * item.chosenWeight) : parseFloat(item.price);
        let itemTotal = baseCalculated;
        
        text += `\n${i+1}. *${item.name}*\n`;
        if (item.isWeight) {
            text += `   _Peso solicitado: ${item.chosenWeight.toFixed(3)} Kg_\n`;
        }
        if (item.selectedAddons && item.selectedAddons.length > 0) {
            text += `   + Adicionales:\n`;
            item.selectedAddons.forEach(a => { itemTotal += parseFloat(a.price); text += `     • ${a.name}\n`; });
        }
        if (item.selectedRemovals && item.selectedRemovals.length > 0) {
            text += `   - Quitar: ${item.selectedRemovals.join(', ')}\n`;
        }
        text += `   _Subtotal ítem: $${itemTotal.toFixed(2)}_\n`;
        total += itemTotal;
    });

    text += `\n*💰 TOTAL A PAGAR: $${total.toFixed(2)}*`;
    window.open(`https://api.whatsapp.com/send?phone=584128731016&text=${encodeURIComponent(text)}`, '_blank');
}

// ==========================================================================
// 7. PANEL DEL ADMINISTRADOR (CRUD Y PERSISTENCIA)
// ==========================================================================
function renderAdminTable() {
    const tbody = document.getElementById("admin-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    products.forEach(prod => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${prod.image || 'imagenes/image.jpg'}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;"></td>
            <td>${prod.name} ${prod.isWeight ? '🟢 (Por Peso)' : ''}</td>
            <td>$${Number(prod.price).toFixed(2)}${prod.isWeight ? '/Kg' : ''}</td>
            <td>
                <button class="btn-nav" style="padding:4px 8px;" onclick="window.editProduct(${prod.id})">✏️</button>
                <button class="btn-danger" style="padding:4px 8px;" onclick="window.deleteProduct(${prod.id})">🗑️</button>
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
    
    const isWeight = document.getElementById("prod-is-weight").checked;
    const image = document.getElementById("prod-image-url").value.trim() || "imagenes/image.jpg";
    
    const addonsRaw = document.getElementById("prod-addons").value;
    const addons = addonsRaw ? addonsRaw.split(",").map(s => s.trim()).filter(s => s.length > 0) : [];
    const removalsRaw = document.getElementById("prod-removals").value;
    const removals = removalsRaw ? removalsRaw.split(",").map(s => s.trim()).filter(s => s.length > 0) : [];

    let finalId = id ? parseInt(id) : Date.now();

    if (id) {
        products = products.map(p => p.id == id ? { ...p, name, desc, price, isWeight, image, addons, removals } : p);
    } else {
        products.push({ id: finalId, name, desc, price, isWeight, image, addons, removals });
    }

    localStorage.setItem('kiwi_products', JSON.stringify(products));
    renderCustomerMenu();
    renderAdminTable();
    resetProductForm();

    const newProductCode = `    {
        id: ${finalId},
        name: "${name}",
        desc: "${desc}",
        price: ${price.toFixed(2)},
        isWeight: ${isWeight},
        image: "${image}",
        addons: ${JSON.stringify(addons)},
        removals: ${JSON.stringify(removals)}
    },`;

    document.getElementById("admin-status-text").innerText = "✨ ¡Producto procesado en la lista! Copia el bloque inferior para tu GitHub:";
    document.getElementById("admin-code-output").value = newProductCode;
    document.getElementById("admin-status-message").style.display = "block";
}

window.editProduct = function(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    document.getElementById("edit-id").value = prod.id;
    document.getElementById("prod-name").value = prod.name;
    document.getElementById("prod-desc").value = prod.desc;
    document.getElementById("prod-price").value = prod.price;
    
    document.getElementById("prod-is-weight").checked = prod.isWeight || false;
    document.getElementById("prod-image-url").value = prod.image || "";
    document.getElementById("prod-addons").value = prod.addons ? prod.addons.join(", ") : "";
    document.getElementById("prod-removals").value = prod.removals ? prod.removals.join(", ") : "";
    document.getElementById("btn-cancel-edit").style.display = "inline-block";
};

window.deleteProduct = function(id) {
    if (confirm("¿Eliminar este producto?")) {
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