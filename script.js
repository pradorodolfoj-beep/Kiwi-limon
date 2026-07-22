// ==========================================================================
// 1. BASE DE DATOS LOCAL Y CATEGORÍAS CENTRALIZADAS
// ==========================================================================
const allowedCategories = [
    "Panquecas", "Sandwiches", "Omelette", "Snack y saludable", 
    "Acai bowl", "Michell parfait", "Bowl", "Ensaladas", 
    "Fresas con crema", "Tizanas", "Jugos Básicos", 
    "Jugos duplicados", "Limonadas", "Smoothies", 
    "Especiales", "Cafés", "Infusiones", "Detox", "Frutas"
];

let adminUsers = JSON.parse(localStorage.getItem('kiwi_admin_users')) || [
    { user: "kiwi", pass: "3008" }
];

const defaultProducts = [
    {
        "id": 1718100000001,
        "name": "Panquecas Premium",
        "category": "Panquecas",
        "desc": "Panquecas Premium, Fresa, kiwi cambur y Nutella",
        "price": 12,
        "isWeight": false,
        "image": "Image/panquecaspremium.jpg",
        "addons": [
            {
                "name": "Kiwi",
                "price": 1
            },
            {
                "name": "Fresa",
                "price": 0.5
            },
            {
                "name": "Cambur",
                "price": 0.5
            },
            {
                "name": "Nutella 2oz",
                "price": 4
            }
        ],
        "removals": [
            "Sin Kiwi",
            "Sin Fresa",
            "Sin Cambur",
            "Sin Nutella"
        ]
    },
    {
        "id": 1718100000002,
        "name": "Smoothie Frutos Rojos",
        "category": "Smoothies",
        "desc": "Refrescante batido granizado de Yogurt, Leche, Fresa, Cambur y mora",
        "price": 6,
        "isWeight": false,
        "image": "image/Smoothiesfr.jpg",
        "addons": [
            {
                "name": "Leche",
                "price": 1
            }
        ],
        "removals": [
            "Sin Leche",
            "Sin Yogurt"
        ]
    },
    {
        "id": 1784681886190,
        "name": "Sandwich Doble",
        "category": "Sandwiches",
        "desc": "Sandwich Doble con Jamón, Queso, Rúcula y tomate, con aguacate",
        "price": 7,
        "isWeight": false,
        "image": "image/sandwichdoble.jpg",
        "addons": [
            {
                "name": "Huevo",
                "price": 0.5
            },
            {
                "name": "Jamón",
                "price": 1
            },
            {
                "name": "Queso",
                "price": 1
            }
        ],
        "removals": [
            "Sin Jamón",
            "Sin Queso",
            "Sin Tomate",
            "Sin Rucula",
            "Sin aguacate"
        ]
    },
    {
        "id": 1784681999335,
        "name": "Snack de yogurt",
        "category": "Snack y saludable",
        "desc": "Delicioso snack de yogurt con granola y frutas",
        "price": 5,
        "isWeight": false,
        "image": "image/snackyogurt.jpg",
        "addons": [
            {
                "name": "Kiwi",
                "price": 1
            },
            {
                "name": "Piña",
                "price": 0.3
            },
            {
                "name": "Melocotón",
                "price": 0
            },
            {
                "name": "80",
                "price": 0
            }
        ],
        "removals": [
            "Sin fresa",
            "Sin azucar",
            "Sin kiwi",
            "Sin melocotón"
        ]
    },
    {
        "id": 1784682208167,
        "name": "Acai Amazonas",
        "category": "Acai bowl",
        "desc": "Delicioso Acai con topping de kiwi, melocotón, chia, cambur, mantequilla de maní, fresas y granola",
        "price": 14,
        "isWeight": false,
        "image": "image/acaiamazonas.jpg",
        "addons": [
            {
                "name": "Fresa",
                "price": 1
            },
            {
                "name": "Kiwi",
                "price": 1
            },
            {
                "name": "Fresa",
                "price": 0.5
            }
        ],
        "removals": [
            "Sin azúcar",
            "Sin mantequilla de maní",
            "Sin cambur",
            "Sin chia",
            "Sin melocotón",
            "Sin fresa",
            "Sin kiwi"
        ]
    },
    {
        "id": 1784682341789,
        "name": "Michell parfait 10oz",
        "category": "Michell parfait",
        "desc": "Delicioso Parfait con base de frutos rojos, crema orgánica de coco, yogurt, granola, piña, fresas, melocotón",
        "price": 10,
        "isWeight": false,
        "image": "image/parfait10oz.jpg",
        "addons": [],
        "removals": [
            "Sin azucar"
        ]
    },
    {
        "id": 1784682378819,
        "name": "Michel Parfait 14oz",
        "category": "Michell parfait",
        "desc": "Delicioso Parfait con base de frutos rojos, crema orgánica de coco, yogurt, granola, piña, fresas, melocotón",
        "price": 12,
        "isWeight": false,
        "image": "Image/parfait14oz.jpg",
        "addons": [],
        "removals": [
            "Sin azucar"
        ]
    },
    {
        "id": 1784682494518,
        "name": "Bowl de yogurt (Reducción de parchita)",
        "category": "Bowl",
        "desc": "Bowl de yogurt con reducción de parchita con topping de Fresas, Cambur, Kiwi y frutas de temporada",
        "price": 12,
        "isWeight": false,
        "image": "image/bowlyogurtredparchita.jpg",
        "addons": [],
        "removals": [
            "Sin azucar"
        ]
    },
    {
        "id": 1784682569515,
        "name": "Bowl de yogurt (Reducción de piña)",
        "category": "Bowl",
        "desc": "Bowl de yogurt con reducción de piña con topping de Fresas, Cambur, Kiwi y frutas de temporada",
        "price": 12,
        "isWeight": false,
        "image": "image/bowlyogurtredpiña.jpg",
        "addons": [],
        "removals": [
            "Sin azúcar"
        ]
    },
    {
        "id": 1784682815955,
        "name": "Ensalada de frutas pequeña",
        "category": "Ensaladas",
        "desc": "Ensalada de frutas con base de piña, patilla, papaya, melon y toping de fresa, kiwi, cambur, manzana",
        "price": 10,
        "isWeight": false,
        "image": "image/ensaladapeq.jpg",
        "addons": [],
        "removals": [
            "Sin piña",
            "Sin patilla",
            "Sin papaya",
            "Sin melón",
            "Sin fresa",
            "Sin kiwi",
            "Sin cambur",
            "Sin manzana"
        ]
    },
    {
        "id": 1784682895814,
        "name": "Fresas con crema 10oz",
        "category": "Fresas con crema",
        "desc": "Fresas con crema",
        "price": 10,
        "isWeight": false,
        "image": "image/fresascrema10oz.jpg",
        "addons": [
            {
                "name": "Nutella 2oz",
                "price": 4
            }
        ],
        "removals": [
            "Sin fresas",
            "Sin crema"
        ]
    },
    {
        "id": 1784682984166,
        "name": "Fresas con crema 14oz",
        "category": "Fresas con crema",
        "desc": "Fresas con crema",
        "price": 12,
        "isWeight": false,
        "image": "image/fresascrema14oz.jpg",
        "addons": [
            {
                "name": "Nutella 2oz",
                "price": 4
            }
        ],
        "removals": [
            "Sin fresas",
            "Sin crema"
        ]
    },
    {
        "id": 1784683086276,
        "name": "Tizanas 10oz",
        "category": "Tizanas",
        "desc": "Delicioso mix de frutas",
        "price": 6.5,
        "isWeight": false,
        "image": "image/tizana10oz.jpg",
        "addons": [],
        "removals": [
            "Sin azúcar"
        ]
    },
    {
        "id": 1784683161110,
        "name": "Tizanas 14oz",
        "category": "Tizanas",
        "desc": "Mix de frutas",
        "price": 7,
        "isWeight": false,
        "image": "image/tizanas14oz.jpg",
        "addons": [],
        "removals": [
            "Sin azucar"
        ]
    },
    {
        "id": 1784683246919,
        "name": "Jugo de fresas",
        "category": "Jugos Básicos",
        "desc": "Delicioso jugo de fresas",
        "price": 3,
        "isWeight": false,
        "image": "image/jugofresa.jpg",
        "addons": [
            {
                "name": "Leche",
                "price": 1
            },
            {
                "name": "Yogurt",
                "price": 1
            },
            {
                "name": "Vainilla",
                "price": 0.5
            }
        ],
        "removals": [
            "Sin azúcar"
        ]
    },
    {
        "id": 1784683317507,
        "name": "Duplicado Fresa Cambur",
        "category": "Jugos duplicados",
        "desc": "Delicioso duplicado de frutas de fresas cambur",
        "price": 4,
        "isWeight": false,
        "image": "image/duplicadofresacambur.jpg",
        "addons": [],
        "removals": []
    },
    {
        "id": 1784683587530,
        "name": "Limonada tradicional",
        "category": "Limonadas",
        "desc": "Limonadas tradicional",
        "price": 3,
        "isWeight": false,
        "image": "image/limonadast.jpg",
        "addons": [
            {
                "name": "Miel",
                "price": 0.5
            }
        ],
        "removals": [
            "Sin azúcar"
        ]
    },
    {
        "id": 1784683720936,
        "name": "Coquitos",
        "category": "Especiales",
        "desc": "Especial de merengada de coco",
        "price": 7,
        "isWeight": false,
        "image": "image/coquitas.jpg",
        "addons": [],
        "removals": [
            "Sin azucar"
        ]
    },
    {
        "id": 1784683795084,
        "name": "Café americano",
        "category": "Cafés",
        "desc": "Café americano",
        "price": 1.5,
        "isWeight": false,
        "image": "image/cafeamericano.jpg",
        "addons": [],
        "removals": [
            "Sin azúcar"
        ]
    },
    {
        "id": 1784683902851,
        "name": "Infusion Mia Fria",
        "category": "Infusiones",
        "desc": "Infusion de Jamaica, limon, frutos rojos",
        "price": 5,
        "isWeight": false,
        "image": "image/infusionmia.jpg",
        "addons": [
            {
                "name": "Miel",
                "price": 0.5
            }
        ],
        "removals": [
            "Sin azucar"
        ]
    },
    {
        "id": 1784684084010,
        "name": "Detox Don verde",
        "category": "Detox",
        "desc": "Delicioso detox de pepino, celery",
        "price": 3.5,
        "isWeight": false,
        "image": "image/don verde.jpg",
        "addons": [],
        "removals": [
            "Sin azucar"
        ]
    },
    {
        "id": 1784688801846,
        "name": "Fresa",
        "category": "Frutas",
        "desc": "Hermosas fresas",
        "price": 12,
        "isWeight": true,
        "image": "image/fresa.jgp",
        "addons": [],
        "removals": []
    },
    {
        "id": 1784688830393,
        "name": "Kiwi",
        "category": "Frutas",
        "desc": "Hermoso kiwi importado",
        "price": 9,
        "isWeight": true,
        "image": "image/kiwi.jpg",
        "addons": [],
        "removals": []
    }
];

let products = [];
try {
    products = JSON.parse(localStorage.getItem('kiwi_products')) || defaultProducts;
} catch (e) {
    products = defaultProducts;
}

products.forEach(p => {
    if (!p.category) p.category = "Especiales";
});

let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('kiwi_cart')) || [];
} catch (e) {
    cart = [];
}

let currentDeliveryOption = ''; 
let tempProductToCart = null;

document.addEventListener("DOMContentLoaded", () => {
    try {
        renderCustomerMenu();
        renderAdminTable();
        updateCartUI();
        setupEventListeners();
    } catch (err) {
        console.error("Error al arrancar la app:", err);
    }
});

// CONTROLADOR DEL SUBMENÚ LATERAL DE CATEGORÍAS
function toggleSidebar(isOpen) {
    const sidebar = document.getElementById('category-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar || !overlay) return;
    
    if (isOpen) {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    } else {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
        document.body.style.overflow = ''; 
    }
}

// ==========================================================================
// 2. DESPLIEGUE DEL MENÚ AGRUPADO POR SECCIONES
// ==========================================================================
function renderCustomerMenu() {
    const container = document.getElementById("menu-sections-container");
    if (!container) return;

    container.innerHTML = "";

    allowedCategories.forEach(cat => {
        const catProducts = products.filter(p => p.category === cat);
        if (catProducts.length === 0) return;

        const safetyId = `cat-${cat.replace(/\s+/g, '-')}`;

        const sectionBlock = document.createElement("section");
        sectionBlock.className = "menu-section-block";
        sectionBlock.id = safetyId;
        
        sectionBlock.innerHTML = `
            <h3 class="category-title">${cat}</h3>
            <div class="menu-grid" id="grid-${safetyId}"></div>
        `;
        container.appendChild(sectionBlock);

        const gridContainer = document.getElementById(`grid-${safetyId}`);

        catProducts.forEach(prod => {
            const card = document.createElement("div");
            card.className = "product-card";
            
            const imgUrl = prod.image || "https://images.unsplash.com/photo-1610832958506-ee5633619144?w=300&auto=format&fit=crop";
            const priceSuffix = prod.isWeight ? " <span style='font-size:0.75rem; color:#94a3b8; font-weight:normal;'>/ Kg</span>" : "";
            
            card.innerHTML = `
                <img src="${imgUrl}" alt="${prod.name}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1610832958506-ee5633619144?w=300&auto=format&fit=crop'">
                <div class="product-info">
                    <div>
                        <h3 class="product-title">${prod.name}</h3>
                        <p class="product-desc">${prod.desc}</p>
                    </div>
                    <div class="product-footer">
                        <span class="product-price">$${Number(prod.price).toFixed(2)}${priceSuffix}</span>
                        <button class="btn-success" id="btn-add-${prod.id}">Agregar ➕</button>
                    </div>
                </div>
            `;
            
            const btnAdd = card.querySelector(`#btn-add-${prod.id}`);
            if (btnAdd) {
                btnAdd.onclick = () => window.openCustomizationModal(prod.id);
            }

            gridContainer.appendChild(card);
        });
    });

    if (container.innerHTML === "") {
        container.innerHTML = `<p style="text-align:center;color:#94a3b8;padding:40px;">No hay productos cargados en el menú.</p>`;
    }
}

// ==========================================================================
// 3. VENTANA MODAL DE PERSONALIZACIÓN
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

    const modalTitle = document.getElementById("custom-modal-title");
    if (modalTitle) modalTitle.innerText = prod.name;
    
    const addonsContainer = document.getElementById("custom-addons-container");
    if (addonsContainer) {
        addonsContainer.innerHTML = prod.addons && prod.addons.length > 0 ? "<h5>¿Deseas agregar adicionales?</h5>" : "";
        if (prod.addons) {
            prod.addons.forEach((addon, idx) => {
                let name = addon.name;
                let price = addon.price;
                if (typeof addon === 'string') {
                    const parts = addon.split("+");
                    name = parts[0].trim();
                    price = parts[1] ? parseFloat(parts[1]) : 0;
                }
                const div = document.createElement("div");
                div.className = "option-item";
                div.innerHTML = `<label style="display:flex; gap:8px; align-items:center; cursor:pointer;"><input type="checkbox" id="addon-chk-${idx}"> ${name} (+$${price.toFixed(2)})</label>`;
                
                addonsContainer.appendChild(div);

                const chk = div.querySelector('input[type="checkbox"]');
                if (chk) {
                    chk.onchange = (e) => window.toggleAddon(idx, name, price, e.target.checked);
                }
            });
        }
    }

    const removalsContainer = document.getElementById("custom-removals-container");
    if (removalsContainer) {
        removalsContainer.innerHTML = prod.removals && prod.removals.length > 0 ? "<h5>¿Quitar algún ingrediente?</h5>" : "";
        if (prod.removals) {
            prod.removals.forEach((rem, idx) => {
                const name = rem.trim();
                const div = document.createElement("div");
                div.className = "option-item";
                div.innerHTML = `<label style="display:flex; gap:8px; align-items:center; cursor:pointer;"><input type="checkbox" id="removal-chk-${idx}"> ${name}</label>`;
                
                removalsContainer.appendChild(div);

                const chk = div.querySelector('input[type="checkbox"]');
                if (chk) {
                    chk.onchange = (e) => window.toggleRemoval(name, e.target.checked);
                }
            });
        }
    }

    updateModalLivePrice();

    const btnConfirmCustom = document.getElementById("btn-confirm-custom");
    if (btnConfirmCustom) btnConfirmCustom.onclick = confirmAddToCart;

    const btnCloseCustom = document.getElementById("btn-close-custom");
    if (btnCloseCustom) btnCloseCustom.onclick = () => closeModal('custom-modal');
    
    openModal('custom-modal');
};

window.toggleAddon = function(idx, name, price, isChecked) {
    if (!tempProductToCart) return;
    if (isChecked) { 
        tempProductToCart.selectedAddons.push({ name, price }); 
    } else { 
        tempProductToCart.selectedAddons = tempProductToCart.selectedAddons.filter(a => a.name !== name); 
    }
    updateModalLivePrice();
};

window.toggleRemoval = function(name, isChecked) {
    if (!tempProductToCart) return;
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
    
    const modalPrice = document.getElementById("custom-modal-price");
    if (modalPrice) {
        modalPrice.innerHTML = `Precio estimado: <span style="color:#86efac; font-weight:bold;">$${totalModal.toFixed(2)}</span>`;
    }
}

function confirmAddToCart() {
    if (!tempProductToCart) return;
    if (tempProductToCart.isWeight) {
        const weightInput = document.getElementById("custom-weight-input");
        const weightVal = weightInput ? parseFloat(weightInput.value) : 1.000;
        if (isNaN(weightVal) || weightVal < 0.001) {
            alert("Por favor, ingresa una cantidad válida.");
            return;
        }
        tempProductToCart.chosenWeight = weightVal;
    }

    cart.push(tempProductToCart);
    localStorage.setItem('kiwi_cart', JSON.stringify(cart));
    
    closeModal('custom-modal');
    updateCartUI();
}

// ==========================================================================
// 4. MANEJO CENTRALIZADO DE EVENTOS DE INTERFAZ Y AUTENTICACIÓN
// ==========================================================================
function setupEventListeners() {
    const btnOpenCart = document.getElementById("btn-open-cart");
    if (btnOpenCart) btnOpenCart.onclick = openCartDrawer;

    const btnCloseCart = document.getElementById("btnCloseCart");
    if (btnCloseCart) btnCloseCart.onclick = closeCartDrawer;

    const btnCloseLogin = document.getElementById("btn-close-login");
    if (btnCloseLogin) btnCloseLogin.onclick = () => closeModal('login-modal');

    const btnCancelEdit = document.getElementById("btn-cancel-edit");
    if (btnCancelEdit) btnCancelEdit.onclick = resetProductForm;

    const btnOptPickup = document.getElementById("btn-opt-pickup");
    if (btnOptPickup) btnOptPickup.onclick = () => selectDeliveryOption('pickup');

    const btnOptDelivery = document.getElementById("btn-opt-delivery");
    if (btnOptDelivery) btnOptDelivery.onclick = () => selectDeliveryOption('delivery');

    const btnCheckout = document.getElementById("btn-checkout");
    if (btnCheckout) btnCheckout.onclick = sendOrderWhatsApp;

    const btnViewCart = document.querySelector(".btn-view-cart");
    if (btnViewCart) btnViewCart.onclick = openCartDrawer;

    const btnToggleView = document.getElementById("btn-toggle-view");
    if (btnToggleView) {
        btnToggleView.onclick = () => {
            const adminView = document.getElementById("admin-view");
            if (adminView && adminView.style.display === "block") {
                showView('customer-view');
                btnToggleView.innerText = "⚙️ Admin";
            } else {
                openModal('login-modal');
            }
        };
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.onsubmit = (e) => {
            e.preventDefault();
            const userEl = document.getElementById("login-username");
            const passEl = document.getElementById("login-password");
            if (!userEl || !passEl) return;

            const user = userEl.value.trim().toLowerCase();
            const pass = passEl.value.trim();
            
            const validUser = adminUsers.find(u => u.user.toLowerCase() === user && u.pass === pass);

            if (validUser) {
                closeModal('login-modal');
                showView('admin-view');
                if (btnToggleView) btnToggleView.innerText = "📱 Ver Menú";
            } else {
                alert("Acceso denegado. Credenciales incorrectas.");
            }
        };
    }

    const btnLogoutAdmin = document.getElementById("btn-logout-admin");
    if (btnLogoutAdmin) {
        btnLogoutAdmin.onclick = () => {
            showView('customer-view');
            if (btnToggleView) btnToggleView.innerText = "⚙️ Admin";
        };
    }

    const productForm = document.getElementById("product-form");
    if (productForm) {
        productForm.onsubmit = (e) => {
            e.preventDefault();
            saveProduct();
        };
    }

    const btnSaveDatabase = document.getElementById("btn-save-database");
    if (btnSaveDatabase) {
        btnSaveDatabase.onclick = () => {
            localStorage.setItem('kiwi_products', JSON.stringify(products));
            showExportModal();
        };
    }

    const weightInput = document.getElementById("custom-weight-input");
    if (weightInput) {
        weightInput.addEventListener("input", updateModalLivePrice);
    }
}

function showView(viewId) {
    const customerView = document.getElementById("customer-view");
    const adminView = document.getElementById("admin-view");
    
    if (customerView) customerView.style.display = viewId === "customer-view" ? "block" : "none";
    if (adminView) adminView.style.display = viewId === "admin-view" ? "block" : "none";
    
    const bottomBar = document.getElementById("bottom-cart-bar");
    if (bottomBar) {
        bottomBar.style.display = (viewId === "customer-view" && cart.length > 0) ? "flex" : "none";
    }
}

// ==========================================================================
// 5. MÓDULO DEL CARRITO DE COMPRAS
// ==========================================================================
function updateCartUI() {
    const itemsContainer = document.getElementById("cart-items-container");
    const totalAmount = document.getElementById("cart-total-amount");
    const bottomBar = document.getElementById("bottom-cart-bar");
    const deliveryBox = document.getElementById("delivery-box");
    const dataForm = document.getElementById("customer-data-form");
    
    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl) cartCountEl.innerText = cart.length;

    if (cart.length === 0) {
        if (itemsContainer) itemsContainer.innerHTML = `<p style="text-align:center; color:#556582; margin-top:40px;">Tu carrito está vacío.</p>`;
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
                    addonsText += `<small style="display:block;color:#86efac;font-size:0.8rem;">+ ${a.name} ($${a.price.toFixed(2)})</small>`;
                });
            }
            
            let removalsText = "";
            if (item.selectedRemovals) {
                item.selectedRemovals.forEach(r => {
                    removalsText += `<small style="display:block;color:#ef4444;font-size:0.8rem;">❌ Quitar: ${r}</small>`;
                });
            }
            
            total += itemTotal;

            const div = document.createElement("div");
            div.className = "cart-item";
            div.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.05);";
            div.innerHTML = `
                <div style="flex-grow:1; padding-right:10px;">
                    <p style="margin:0;font-weight:bold;font-size:0.95rem;color:#fff;">${item.name} <span style="font-size:0.75rem; color:#94a3b8;">(${item.category})</span></p>
                    ${portionText}
                    <span style="color:#86efac;font-weight:800;font-size:0.9rem;display:inline-block;margin-top:4px;">$${itemTotal.toFixed(2)}</span>
                    ${addonsText} ${removalsText}
                </div>
                <button class="btn-danger" id="btn-del-cart-${index}" style="padding:6px 10px;font-size:12px;border-radius:6px;">🗑️</button>
            `;
            
            const btnDelCart = div.querySelector(`#btn-del-cart-${index}`);
            if (btnDelCart) {
                btnDelCart.onclick = () => window.removeCartItem(index);
            }

            itemsContainer.appendChild(div);
        });

        if (totalAmount) totalAmount.innerText = `$${total.toFixed(2)}`;
        
        const bottomCartTotalText = document.getElementById("bottom-cart-total-text");
        if (bottomCartTotalText) bottomCartTotalText.innerText = `$${total.toFixed(2)}`;
        
        const countText = cart.length === 1 ? "1 producto" : `${cart.length} productos`;
        const bottomCartItemsText = document.getElementById("bottom-cart-items-text");
        if (bottomCartItemsText) bottomCartItemsText.innerText = countText;
        
        const custView = document.getElementById("customer-view");
        if (bottomBar && custView && custView.style.display !== "none") bottomBar.style.display = "flex";
    }
}

window.removeCartItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('kiwi_cart', JSON.stringify(cart));
    updateCartUI();
};

function selectDeliveryOption(option) {
    currentDeliveryOption = option;
    const customerDataForm = document.getElementById("customer-data-form");
    if (customerDataForm) customerDataForm.style.display = "block";
    
    const pckBtn = document.getElementById("btn-opt-pickup");
    const delBtn = document.getElementById("btn-opt-delivery");
    const addrInput = document.getElementById("cust-address");

    if (option === 'pickup') {
        if (pckBtn) pckBtn.style.borderColor = "var(--accent-kiwi)";
        if (delBtn) delBtn.style.borderColor = "transparent";
        if (addrInput) {
            addrInput.style.display = "none";
            addrInput.removeAttribute("required");
        }
    } else {
        if (delBtn) delBtn.style.borderColor = "var(--accent-kiwi)";
        if (pckBtn) pckBtn.style.borderColor = "transparent";
        if (addrInput) {
            addrInput.style.display = "block";
            addrInput.setAttribute("required", "true");
        }
    }
}

function openModal(modalId) {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById(modalId);
    if (overlay) overlay.style.display = "block";
    if (modal) modal.style.display = "block";
}

function closeModal(modalId) {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById(modalId);
    if (overlay) overlay.style.display = "none";
    if (modal) modal.style.display = "none";
}

function openCartDrawer() {
    const cartDrawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("overlay");
    if (cartDrawer) cartDrawer.classList.add("open");
    if (overlay) overlay.style.display = "block";
}

function closeCartDrawer() {
    const cartDrawer = document.getElementById("cart-drawer");
    if (cartDrawer) cartDrawer.classList.remove("open");
    
    const customVisible = document.getElementById("custom-modal") && document.getElementById("custom-modal").style.display === "block";
    const loginVisible = document.getElementById("login-modal") && document.getElementById("login-modal").style.display === "block";
    const exportVisible = document.getElementById("export-modal") && document.getElementById("export-modal").style.display === "block";
    
    if (!customVisible && !loginVisible && !exportVisible) {
        const overlay = document.getElementById("overlay");
        if (overlay) overlay.style.display = "none";
    }
}

// ==========================================================================
// 6. CONTROLADOR DE WHATSAPP API
// ==========================================================================
function sendOrderWhatsApp() {
    if (cart.length === 0) return;
    if (!currentDeliveryOption) { alert("Por favor, selecciona Pick Up o Delivery."); return; }

    const nameEl = document.getElementById("cust-fullname");
    const idCardEl = document.getElementById("cust-cedula");
    const phoneEl = document.getElementById("cust-phone");
    const addressEl = document.getElementById("cust-address");
    const paymentEl = document.getElementById("cust-payment-method");

    const name = nameEl ? nameEl.value.trim() : "";
    const idCard = idCardEl ? idCardEl.value.trim() : "";
    const phone = phoneEl ? phoneEl.value.trim() : "";
    const address = addressEl ? addressEl.value.trim() : "";
    const payment = paymentEl ? paymentEl.value : "";

    if(!name || !idCard || !phone || !payment || (currentDeliveryOption === 'delivery' && !address)) {
        alert("Por favor rellena todos los datos de contacto y el método de pago obligatorios.");
        return;
    }

    let text = `*🍉 NUEVO PEDIDO - KIWI LIMÓN 🍋*\n\n`;
    text += `*Cliente:* ${name}\n*Cédula:* ${idCard}\n*Teléfono:* ${phone}\n*Modalidad:* ${currentDeliveryOption === 'pickup' ? '🛍️ Pick Up' : '🛵 Delivery'}\n`;
    if (currentDeliveryOption === 'delivery') text += `*Dirección:* ${address}\n`;
    text += `*Método de Pago:* ${payment}\n`;
    
    text += `\n*📦 DETALLE DEL PEDIDO:*\n`;
    let total = 0;
    
    cart.forEach((item, i) => {
        let baseCalculated = item.isWeight ? (parseFloat(item.price) * item.chosenWeight) : parseFloat(item.price);
        let itemTotal = baseCalculated;
        
        text += `\n${i+1}. *${item.name}* _(${item.category})_\n`;
        if (item.isWeight) {
            text += `   _Cantidad solicitada: ${item.chosenWeight.toFixed(3)} Kg_\n`;
        }
        if (item.selectedAddons && item.selectedAddons.length > 0) {
            text += `   + Adicionales:\n`;
            item.selectedAddons.forEach(a => { 
                itemTotal += parseFloat(a.price); 
                text += `     • ${a.name} ($${a.price.toFixed(2)})\n`; 
            });
        }
        if (item.selectedRemovals && item.selectedRemovals.length > 0) {
            text += `   - Sin: ${item.selectedRemovals.join(', ')}\n`;
        }
        text += `   _Subtotal: $${itemTotal.toFixed(2)}_\n`;
        total += itemTotal;
    });

    text += `\n*💰 TOTAL NETO A PAGAR: $${total.toFixed(2)}*`;

    const targetPhone = "584128731016";
    const waUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(text)}`;
    
    window.open(waUrl, '_blank');
}

// ==========================================================================
// 7. PANEL ADMINISTRATIVO (CRUD) Y GENERADOR DE CÓDIGO EXPORTABLE
// ==========================================================================
function renderAdminTable() {
    const tbody = document.getElementById("admin-table-body");
    if (!tbody) return;
    
    tbody.innerHTML = "";

    products.forEach(prod => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="padding: 10px 8px;"><img src="${prod.image || 'https://images.unsplash.com/photo-1610832958506-ee5633619144?w=100&auto=format&fit=crop'}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;" onerror="this.src='https://images.unsplash.com/photo-1610832958506-ee5633619144?w=100&auto=format&fit=crop'"></td>
            <td style="padding: 10px 8px; font-weight:bold;">${prod.name}</td>
            <td style="padding: 10px 8px; color:#94a3b8;"><span style="background:rgba(255,255,255,0.05); padding:3px 6px; border-radius:4px; font-size:10px;">${prod.category}</span></td>
            <td style="padding: 10px 8px; color:#86efac; font-weight:bold;">$${Number(prod.price).toFixed(2)}</td>
            <td style="padding: 10px 8px; white-space: nowrap;">
                <button class="btn-nav" id="btn-edit-${prod.id}" style="padding:4px 6px; font-size:12px; margin-right:4px;">✏️</button>
                <button class="btn-danger" id="btn-delete-${prod.id}" style="padding:4px 6px; font-size:12px;">🗑️</button>
            </td>
        `;

        const btnEdit = tr.querySelector(`#btn-edit-${prod.id}`);
        if (btnEdit) btnEdit.onclick = () => window.editProduct(prod.id);

        const btnDelete = tr.querySelector(`#btn-delete-${prod.id}`);
        if (btnDelete) btnDelete.onclick = () => window.deleteProduct(prod.id);

        tbody.appendChild(tr);
    });
}

function saveProduct() {
    const editIdEl = document.getElementById("edit-id");
    const nameEl = document.getElementById("prod-name");
    const catEl = document.getElementById("prod-category");
    const descEl = document.getElementById("prod-desc");
    const priceEl = document.getElementById("prod-price");
    const isWeightEl = document.getElementById("prod-is-weight");
    const imgEl = document.getElementById("prod-image-url");
    const addonsEl = document.getElementById("prod-addons");
    const removalsEl = document.getElementById("prod-removals");

    const idVal = editIdEl ? editIdEl.value : "";
    const name = nameEl ? nameEl.value.trim() : "";
    const category = catEl ? catEl.value : "";
    const desc = descEl ? descEl.value.trim() : "";
    const price = priceEl ? parseFloat(priceEl.value || 0) : 0;
    const isWeight = isWeightEl ? isWeightEl.checked : false;
    const image = imgEl ? (imgEl.value.trim() || "") : "";
    
    const addonsInput = addonsEl ? addonsEl.value.trim() : "";
    const removalsInput = removalsEl ? removalsEl.value.trim() : "";

    if (!name || !category || isNaN(price)) {
        alert("Por favor, rellena los campos obligatorios: Nombre, Categoría y Precio.");
        return;
    }

    let parsedAddons = [];
    if (addonsInput) {
        parsedAddons = addonsInput.split(',').map(item => {
            const parts = item.split('+');
            return { 
                name: parts[0] ? parts[0].trim() : '', 
                price: parts[1] ? parseFloat(parts[1]) : 0 
            };
        }).filter(a => a.name !== '');
    }

    let parsedRemovals = [];
    if (removalsInput) {
        parsedRemovals = removalsInput.split(',').map(item => item.trim()).filter(r => r !== '');
    }

    if (idVal) {
        products = products.map(p => p.id == idVal 
            ? { ...p, name, category, desc, price, isWeight, image, addons: parsedAddons, removals: parsedRemovals } 
            : p
        );
    } else {
        products.push({ 
            id: Date.now(), 
            name, 
            category, 
            desc, 
            price, 
            isWeight, 
            image, 
            addons: parsedAddons, 
            removals: parsedRemovals 
        });
    }

    localStorage.setItem('kiwi_products', JSON.stringify(products));
    renderCustomerMenu();
    renderAdminTable();
    resetProductForm();
    
    showExportModal();
}

function showExportModal() {
    const codeArea = document.getElementById("export-code-area");
    if (!codeArea) return;

    const formattedCode = `const defaultProducts = ${JSON.stringify(products, null, 4)};`;
    codeArea.value = formattedCode;

    openModal('export-modal');

    const copyBtn = document.getElementById("btn-copy-code");
    if (copyBtn) {
        copyBtn.onclick = () => {
            codeArea.select();
            document.execCommand("copy");
            alert("¡Código copiado al portapapeles! Reemplaza la constante defaultProducts al inicio de tu script.js.");
        };
    }
}

window.editProduct = function(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    
    const editIdEl = document.getElementById("edit-id");
    const nameEl = document.getElementById("prod-name");
    const catEl = document.getElementById("prod-category");
    const descEl = document.getElementById("prod-desc");
    const priceEl = document.getElementById("prod-price");
    const isWeightEl = document.getElementById("prod-is-weight");
    const imgEl = document.getElementById("prod-image-url");
    const addonsEl = document.getElementById("prod-addons");
    const removalsEl = document.getElementById("prod-removals");

    if (editIdEl) editIdEl.value = prod.id;
    if (nameEl) nameEl.value = prod.name;
    if (catEl) catEl.value = prod.category || "Especiales";
    if (descEl) descEl.value = prod.desc || "";
    if (priceEl) priceEl.value = prod.price;
    if (isWeightEl) isWeightEl.checked = prod.isWeight || false;
    if (imgEl) imgEl.value = prod.image || "";
    
    if (addonsEl) {
        if (prod.addons && prod.addons.length > 0) {
            addonsEl.value = prod.addons.map(a => `${a.name}+${a.price}`).join(', ');
        } else {
            addonsEl.value = "";
        }
    }

    if (removalsEl) {
        if (prod.removals && prod.removals.length > 0) {
            removalsEl.value = prod.removals.join(', ');
        } else {
            removalsEl.value = "";
        }
    }
    
    const cancelBtn = document.getElementById("btn-cancel-edit");
    if (cancelBtn) cancelBtn.style.display = "inline-block";
};

window.deleteProduct = function(id) {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('kiwi_products', JSON.stringify(products));
        renderCustomerMenu();
        renderAdminTable();
        showExportModal();
    }
};

function resetProductForm() {
    const form = document.getElementById("product-form");
    if (form) form.reset();
    
    const editId = document.getElementById("edit-id");
    if (editId) editId.value = "";
    
    const cancelBtn = document.getElementById("btn-cancel-edit");
    if (cancelBtn) cancelBtn.style.display = "none";
}