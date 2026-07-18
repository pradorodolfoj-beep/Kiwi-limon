const ADMIN_USER = "kiwilimonval";
const ADMIN_PASS = "2026";
const WHATSAPP_NUMBER = "584128731016";

// Cargar productos del inventario o los iniciales de prueba
let products = JSON.parse(localStorage.getItem("kiwi_products")) || [
    { id: 1, name: "Ensalada de Frutas Especial", desc: "Mix de cambur, fresa, piña, melón con leche condensada y helado.", price: 6.50, emoji: "🍓" },
    { id: 2, name: "Smoothie Kiwi-Limón Original", desc: "Batido frozen ultra-refrescante con trozos de kiwi natural.", price: 4.00, emoji: "🥝" }
];

let cart = [];
let selectedDeliveryMethod = "";

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
    const adminView = document.getElementById("admin-view");
    const customerView = document.getElementById("customer-view");
    const cartDrawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("overlay");
    const loginModal = document.getElementById("login-modal");
    
    const btnToggleView = document.getElementById("btn-toggle-view");
    const btnOpenCart = document.getElementById("btn-open-cart");
    const btnCloseCart = document.getElementById("btn-close-cart");
    const btnCloseLogin = document.getElementById("btn-close-login");
    const btnLogoutAdmin = document.getElementById("btn-logout-admin");
    const btnCancelEdit = document.getElementById("btn-cancel-edit");
    const productForm = document.getElementById("product-form");
    
    const btnPickup = document.getElementById("btn-opt-pickup");
    const btnDelivery = document.getElementById("btn-opt-delivery");
    const deliveryBox = document.getElementById("delivery-box");
    const customerDataForm = document.getElementById("customer-data-form");

    // --- MANEJO DE VISTAS Y NAVEGACIÓN ---
    btnOpenCart.addEventListener("click", () => {
        cartDrawer.classList.add("open");
        overlay.style.display = "block";
        updateCartUI();
    });

    const closeCart = () => {
        cartDrawer.classList.remove("open");
        if (loginModal.style.display !== "block") overlay.style.display = "none";
    };
    btnCloseCart.addEventListener("click", closeCart);
    
    overlay.addEventListener("click", () => {
        closeCart();
        loginModal.style.display = "none";
    });

    btnToggleView.addEventListener("click", () => {
        if (adminView.style.display === "block") {
            adminView.style.display = "none";
            customerView.style.display = "block";
            btnToggleView.innerHTML = "⚙️ Admin";
        } else {
            if (sessionStorage.getItem("kiwi_logged") === "true") {
                showAdminPanel();
            } else {
                loginModal.style.display = "block";
                overlay.style.display = "block";
            }
        }
    });

    btnCloseLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
        overlay.style.display = "none";
    });

    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (document.getElementById("login-username").value === ADMIN_USER && document.getElementById("login-password").value === ADMIN_PASS) {
            sessionStorage.setItem("kiwi_logged", "true");
            loginModal.style.display = "none";
            overlay.style.display = "none";
            showAdminPanel();
        } else {
            alert("Credenciales incorrectas.");
        }
    });

    btnLogoutAdmin.addEventListener("click", () => {
        sessionStorage.removeItem("kiwi_logged");
        adminView.style.display = "none";
        customerView.style.display = "block";
        btnToggleView.innerHTML = "⚙️ Admin";
    });

    function showAdminPanel() {
        customerView.style.display = "none";
        adminView.style.display = "block";
        btnToggleView.innerHTML = "👁️ Menú";
        renderAdminTable();
    }

    // --- PROCESO DE GUARDADO/AÑADIDO DEL INVENTARIO ---
    productForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("edit-id").value;
        const name = document.getElementById("prod-name").value;
        const desc = document.getElementById("prod-desc").value;
        const price = parseFloat(document.getElementById("prod-price").value);
        const emoji = document.getElementById("prod-emoji").value;

        if (id) {
            const index = products.findIndex(p => p.id == id);
            if (index !== -1) {
                products[index] = { id: parseInt(id), name, desc, price, emoji };
            }
        } else {
            products.push({ id: Date.now(), name, desc, price, emoji });
        }

        localStorage.setItem("kiwi_products", JSON.stringify(products));
        productForm.reset();
        document.getElementById("edit-id").value = "";
        btnCancelEdit.style.display = "none";
        
        renderAdminTable();
        renderCustomerMenu();
    });

    window.editProduct = (id) => {
        const p = products.find(prod => prod.id == id);
        if (!p) return;
        document.getElementById("edit-id").value = p.id;
        document.getElementById("prod-name").value = p.name;
        document.getElementById("prod-desc").value = p.desc;
        document.getElementById("prod-price").value = p.price;
        document.getElementById("prod-emoji").value = p.emoji;
        btnCancelEdit.style.display = "block";
    };

    btnCancelEdit.addEventListener("click", () => {
        productForm.reset();
        document.getElementById("edit-id").value = "";
        btnCancelEdit.style.display = "none";
    });

    window.deleteProduct = (id) => {
        if (confirm("¿Eliminar este producto?")) {
            products = products.filter(p => p.id != id);
            localStorage.setItem("kiwi_products", JSON.stringify(products));
            renderAdminTable();
            renderCustomerMenu();
        }
    };

    function renderAdminTable() {
        const tbody = document.getElementById("admin-table-body");
        tbody.innerHTML = "";
        products.forEach(p => {
            tbody.innerHTML += `
                <tr style="border-bottom: 1px solid #2a2a2a;">
                    <td>style="padding:10px;"${p.emoji}</td>
                    <td style="font-weight:bold;">${p.name}</td>
                    <td style="color:#8BC34A;">$${p.price.toFixed(2)}</td>
                    <td>
                        <button onclick="editProduct(${p.id})" style="background:#5c6bc0; color:white; border:none; padding:5px 8px; border-radius:4px; cursor:pointer; margin-right:4px;">✏️</button>
                        <button onclick="deleteProduct(${p.id})" style="background:#ff4d4d; color:white; border:none; padding:5px 8px; border-radius:4px; cursor:pointer;">🗑️</button>
                    </td>
                </tr>`;
        });
    }

    // --- INTERFAZ DEL CLIENTE ---
    function renderCustomerMenu() {
        menuContainer.innerHTML = "";
        products.forEach(p => {
            menuContainer.innerHTML += `
                <div class="product-card">
                    <div class="product-card-top">${p.emoji}</div>
                    <div class="product-card-bottom">
                        <h4 class="product-title">${p.name}</h4>
                        <p class="product-description">${p.desc}</p>
                        <div class="product-footer">
                            <span class="product-price">$${p.price.toFixed(2)}</span>
                            <button class="btn-order" onclick="addToCart(${p.id})">Añadir</button>
                        </div>
                    </div>
                </div>`;
        });
    }

    // --- MÉTODOS DE ENTREGA ---
    const setDelivery = (method) => {
        selectedDeliveryMethod = method;
        btnPickup.style.background = method === "Pick Up" ? "#4CAF50" : "#333";
        btnDelivery.style.background = method === "Delivery" ? "#4CAF50" : "#333";
        customerDataForm.style.display = "flex";
    };
    btnPickup.addEventListener("click", () => setDelivery("Pick Up"));
    btnDelivery.addEventListener("click", () => setDelivery("Delivery"));

    // --- GESTIÓN DE CARRITO ---
    window.addToCart = (id) => {
        const prod = products.find(p => p.id === id);
        const existing = cart.find(item => item.id === id);
        existing ? existing.qty++ : cart.push({ ...prod, qty: 1 });
        updateCartCount();
    };

    window.changeQty = (id, change) => {
        const item = cart.find(i => i.id === id);
        if (!item) return;
        item.qty += change;
        if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
        updateCartUI();
        updateCartCount();
    };

    function updateCartCount() {
        document.getElementById("cart-count").innerText = cart.reduce((acc, item) => acc + item.qty, 0);
    }

    function updateCartUI() {
        const container = document.getElementById("cart-items-container");
        container.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:#b3b3b3;">Tu carrito está vacío.</p>`;
            deliveryBox.style.display = "none";
            document.getElementById("cart-total-amount").innerText = "$0.00";
            return;
        }

        deliveryBox.style.display = "block";
        cart.forEach(item => {
            const subtotal = item.price * item.qty;
            total += subtotal;
            container.innerHTML += `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; background:#252525; padding:8px; border-radius:8px;">
                    <div>
                        <div style="font-weight:bold; font-size:0.85rem;">${item.name}</div>
                        <div style="color:#8BC34A; font-size:0.8rem;">$${item.price.toFixed(2)} x ${item.qty}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:6px;">
                        <button onclick="changeQty(${item.id}, -1)" style="background:#444; color:white; border:none; width:24px; height:24px; border-radius:4px; font-weight:bold; cursor:pointer;">-</button>
                        <span style="font-size:0.85rem; font-weight:bold;">${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)" style="background:#4CAF50; color:white; border:none; width:24px; height:24px; border-radius:4px; font-weight:bold; cursor:pointer;">+</button>
                    </div>
                </div>`;
        });
        document.getElementById("cart-total-amount").innerText = `$${total.toFixed(2)}`;
    }

    // --- CHECKOUT WHATSAPP ---
    document.getElementById("btn-checkout").addEventListener("click", () => {
        if (cart.length === 0) return alert("El carrito está vacío");
        if (!selectedDeliveryMethod) return alert("Por favor, selecciona Pick Up o Delivery");

        const name = document.getElementById("cust-fullname").value.trim();
        const ced = document.getElementById("cust-cedula").value.trim();
        const phone = document.getElementById("cust-phone").value.trim();
        const addr = document.getElementById("cust-address").value.trim();

        if (!name || !ced || !phone) return alert("Por favor rellene todos los campos obligatorios (*)");

        let msg = `* Kiwi Limón - NUEVO PEDIDO *\n`;
        msg += `------------------------------------------\n`;
        msg += `👤 *Cliente:* ${name}\n`;
        msg += `🪪 *Cédula:* ${ced}\n`;
        msg += `📞 *Teléfono:* ${phone}\n`;
        if (addr) msg += `📍 *Dirección:* ${addr}\n`;
        msg += `------------------------------------------\n`;
        msg += `📦 *Detalle:*\n`;
        
        let total = 0;
        cart.forEach(i => {
            total += i.price * i.qty;
            msg += `• ${i.emoji || '✨'} ${i.name} (x${i.qty}) -> $${(i.price * i.qty).toFixed(2)}\n`;
        });
        
        msg += `------------------------------------------\n`;
        msg += `*Método:* ${selectedDeliveryMethod === 'Pick Up' ? '🛍️ Pick Up' : '🛵 Delivery'}\n`;
        msg += `*Total Neto:* $${total.toFixed(2)}`;

        window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`, "_blank");
        
        // Limpiar el carrito después de enviar
        cart = [];
        updateCartCount();
        closeCart();
        document.getElementById("cust-fullname").value = "";
        document.getElementById("cust-cedula").value = "";
        document.getElementById("cust-phone").value = "";
        document.getElementById("cust-address").value = "";
        selectedDeliveryMethod = "";
        btnPickup.style.background = "#333";
        btnDelivery.style.background = "#333";
        customerDataForm.style.display = "none";
    });

    renderCustomerMenu();
});
