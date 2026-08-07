/* eslint-disable */
// @ts-nocheck

const allowedCategories = [
    "Panquecas", "Sandwiches", "Omelette", "Snack y saludable", 
    "Acai bowl", "Michell parfait", "Bowl", "Ensaladas", 
    "Fresas con crema", "Tizanas", "Jugos Básicos", 
    "Jugos duplicados", "Limonadas", "Smoothies", 
    "Especiales", "Cafés", "Infusiones", "Detox", "Frutas"
];

let adminUsers = [
    { user: "kiwi", pass: "3008" }
];

const fallbackImg = "https://images.unsplash.com/photo-1610832958506-ee5633619144?w=300&auto=format&fit=crop";

const defaultProducts = [
    {
        id: 1718100000001,
        name: "Panquecas Premium",
        category: "Panquecas",
        desc: "Panquecas Premium, Fresa, kiwi cambur y Nutella",
        price: 12,
        isWeight: false,
        image: "image/panquecaspremium.jpg",
        sizes: [],
        addons: [
            { name: "Kiwi", price: 1 },
            { name: "Fresa", price: 0.5 },
            { name: "Cambur", price: 0.5 },
            { name: "Nutella 2oz", price: 4 }
        ],
        removals: ["Sin Kiwi", "Sin Fresa", "Sin Cambur", "Sin Nutella"]
    },
    {
        id: 1718100000002,
        name: "Smoothie Frutos Rojos",
        category: "Smoothies",
        desc: "Refrescante batido granizado de Yogurt, Leche, Fresa, Cambur y mora",
        price: 6,
        isWeight: false,
        image: "image/Smoothiesfr.jpg",
        sizes: [],
        addons: [
            { name: "Leche", price: 1 }
        ],
        removals: ["Sin Leche", "Sin Yogurt"]
    },
    {
        id: 1784681886190,
        name: "Sandwich Doble",
        category: "Sandwiches",
        desc: "Sandwich Doble con Jamón, Queso, Rúcula y tomate, con aguacate",
        price: 7,
        isWeight: false,
        image: "image/sandwichdoble.jpg",
        sizes: [],
        addons: [
            { name: "Huevo", price: 0.5 },
            { name: "Jamón", price: 1 },
            { name: "Queso", price: 1 }
        ],
        removals: ["Sin Jamón", "Sin Queso", "Sin Tomate", "Sin Rucula", "Sin aguacate"]
    },
    {
        id: 1784681999335,
        name: "Snack de yogurt",
        category: "Snack y saludable",
        desc: "Delicioso snack de yogurt con granola y frutas",
        price: 5,
        isWeight: false,
        image: "image/snackyogurt.jpg",
        sizes: [],
        addons: [
            { name: "Kiwi", price: 1 },
            { name: "Piña", price: 0.3 },
            { name: "Melocotón", price: 0 }
        ],
        removals: ["Sin fresa", "Sin azucar", "Sin kiwi", "Sin melocotón"]
    },
    {
        id: 1784682208167,
        name: "Acai Amazonas",
        category: "Acai bowl",
        desc: "Delicioso Acai con topping de kiwi, melocotón, chia, cambur, mantequilla de maní, fresas y granola",
        price: 14,
        isWeight: false,
        image: "image/acaiamazonas.jpg",
        sizes: [],
        addons: [
            { name: "Fresa", price: 1 },
            { name: "Kiwi", price: 1 }
        ],
        removals: ["Sin azúcar", "Sin mantequilla de maní", "Sin cambur", "Sin chia", "Sin melocotón", "Sin fresa", "Sin kiwi"]
    },
    {
        id: 1784682341789,
        name: "Michell parfait 10oz",
        category: "Michell parfait",
        desc: "Delicioso Parfait con base de frutos rojos, crema orgánica de coco, yogurt, granola, piña, fresas, melocotón",
        price: 10,
        isWeight: false,
        image: "image/parfait10oz.jpg",
        sizes: [
            { name: "10oz", price: 0 },
            { name: "14oz", price: 2 }
        ],
        addons: [],
        removals: ["Sin azucar"]
    },
    {
        id: 1784682378819,
        name: "Michel Parfait 14oz",
        category: "Michell parfait",
        desc: "Delicioso Parfait con base de frutos rojos, crema orgánica de coco, yogurt, granola, piña, fresas, melocotón",
        price: 12,
        isWeight: false,
        image: "image/parfait14oz.jpg",
        sizes: [],
        addons: [],
        removals: ["Sin azucar"]
    },
    {
        id: 1784682494518,
        name: "Bowl de yogurt (Reducción de parchita)",
        category: "Bowl",
        desc: "Bowl de yogurt con reducción de parchita con topping de Fresas, Cambur, Kiwi y frutas de temporada",
        price: 12,
        isWeight: false,
        image: "image/bowlyogurtredparchita.jpg",
        sizes: [],
        addons: [],
        removals: ["Sin azucar"]
    },
    {
        id: 1784682569515,
        name: "Bowl de yogurt (Reducción de piña)",
        category: "Bowl",
        desc: "Bowl de yogurt con reducción de piña con topping de Fresas, Cambur, Kiwi y frutas de temporada",
        price: 12,
        isWeight: false,
        image: "image/bowlyogurtredpiña.jpg",
        sizes: [],
        addons: [],
        removals: ["Sin azúcar"]
    },
    {
        id: 1784682815955,
        name: "Ensalada de frutas pequeña",
        category: "Ensaladas",
        desc: "Ensalada de frutas con base de piña, patilla, papaya, melon y toping de fresa, kiwi, cambur, manzana",
        price: 10,
        isWeight: false,
        image: "image/ensaladapeq.jpg",
        sizes: [],
        addons: [],
        removals: ["Sin piña", "Sin patilla", "Sin papaya", "Sin melón", "Sin fresa", "Sin kiwi", "Sin cambur", "Sin manzana"]
    },
    {
        id: 1784682895814,
        name: "Fresas con crema 10oz",
        category: "Fresas con crema",
        desc: "Fresas con crema",
        price: 10,
        isWeight: false,
        image: "image/fresascrema10oz.jpg",
        sizes: [
            { name: "10oz", price: 0 },
            { name: "14oz", price: 2 }
        ],
        addons: [
            { name: "Nutella 2oz", price: 4 }
        ],
        removals: ["Sin fresas", "Sin crema"]
    },
    {
        id: 1784682984166,
        name: "Fresas con crema 14oz",
        category: "Fresas con crema",
        desc: "Fresas con crema",
        price: 12,
        isWeight: false,
        image: "image/fresascrema14oz.jpg",
        sizes: [],
        addons: [
            { name: "Nutella 2oz", price: 4 }
        ],
        removals: ["Sin fresas", "Sin crema"]
    },
    {
        id: 1784683086276,
        name: "Tizanas 10oz",
        category: "Tizanas",
        desc: "Delicioso mix de frutas",
        price: 6.5,
        isWeight: false,
        image: "image/tizana10oz.jpg",
        sizes: [
            { name: "10oz", price: 0 },
            { name: "14oz", price: 0.5 }
        ],
        addons: [],
        removals: ["Sin azúcar"]
    },
    {
        id: 1784683161110,
        name: "Tizanas 14oz",
        category: "Tizanas",
        desc: "Mix de frutas",
        price: 7,
        isWeight: false,
        image: "image/tizanas14oz.jpg",
        sizes: [],
        addons: [],
        removals: ["Sin azucar"]
    },
    {
        id: 1784683246919,
        name: "Jugo de fresas",
        category: "Jugos Básicos",
        desc: "Delicioso jugo de fresas",
        price: 3,
        isWeight: false,
        image: "image/jugofresa.jpg",
        sizes: [],
        addons: [
            { name: "Leche", price: 1 },
            { name: "Yogurt", price: 1 },
            { name: "Vainilla", price: 0.5 }
        ],
        removals: ["Sin azúcar"]
    },
    {
        id: 1784683317507,
        name: "Duplicado Fresa Cambur",
        category: "Jugos duplicados",
        desc: "Delicioso duplicado de frutas de fresas cambur",
        price: 4,
        isWeight: false,
        image: "image/duplicadofresacambur.jpg",
        sizes: [],
        addons: [],
        removals: []
    },
    {
        id: 1784683587530,
        name: "Limonada tradicional",
        category: "Limonadas",
        desc: "Limonadas tradicional",
        price: 3,
        isWeight: false,
        image: "image/limonadast.jpg",
        sizes: [],
        addons: [
            { name: "Miel", price: 0.5 }
        ],
        removals: ["Sin azúcar"]
    },
    {
        id: 1784683720936,
        name: "Coquitos",
        category: "Especiales",
        desc: "Especial de merengada de coco",
        price: 7,
        isWeight: false,
        image: "image/coquitas.jpg",
        sizes: [],
        addons: [],
        removals: ["Sin azucar"]
    },
    {
        id: 1784683795084,
        name: "Café americano",
        category: "Cafés",
        desc: "Café americano",
        price: 1.5,
        isWeight: false,
        image: "image/cafeamericano.jpg",
        sizes: [],
        addons: [],
        removals: ["Sin azúcar"]
    },
    {
        id: 1784683902851,
        name: "Infusion Mia Fria",
        category: "Infusiones",
        desc: "Infusion de Jamaica, limon, frutos rojos",
        price: 5,
        isWeight: false,
        image: "image/infusionmia.jpg",
        sizes: [],
        addons: [
            { name: "Miel", price: 0.5 }
        ],
        removals: ["Sin azucar"]
    },
    {
        id: 1784684084010,
        name: "Detox Don verde",
        category: "Detox",
        desc: "Delicioso detox de pepino, celery",
        price: 3.5,
        isWeight: false,
        image: "image/don verde.jpg",
        sizes: [],
        addons: [],
        removals: ["Sin azucar"]
    },
    {
        id: 1784688801846,
        name: "Fresa",
        category: "Frutas",
        desc: "Hermosas fresas",
        price: 12,
        isWeight: true,
        image: "image/fresa.jpg",
        sizes: [],
        addons: [],
        removals: []
    },
    {
        id: 1784688830393,
        name: "Kiwi",
        category: "Frutas",
        desc: "Hermoso kiwi importado",
        price: 9,
        isWeight: true,
        image: "image/kiwi.jpg",
        sizes: [],
        addons: [],
        removals: []
    }
];

let products = defaultProducts.slice();
for (let i = 0; i < products.length; i++) {
    if (!products[i].category) products[i].category = "Especiales";
    if (!products[i].sizes) products[i].sizes = [];
}

let cart = [];
let currentDeliveryOption = ''; 
let tempProductToCart = null;

function showNotification(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.classList.add('toast-message');
    toast.innerText = message;
    
    container.appendChild(toast);
    
    setTimeout(function() {
        toast.classList.add('fade-out');
        setTimeout(function() {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
    }, 3500);
}

function initApp() {
    try {
        const logoImg = document.getElementById('main-logo');
        if (logoImg) {
            logoImg.onerror = function() {
                this.onerror = null;
                this.src = fallbackImg;
            };
        }
        renderCustomerMenu();
        renderAdminTable();
        updateCartUI();
        setupEventListeners();
    } catch (err) {
        console.error("Error al arrancar la app:", err);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

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

function renderCustomerMenu() {
    const container = document.getElementById("menu-sections-container");
    if (!container) return;

    container.innerHTML = "";

    allowedCategories.forEach(function(cat) {
        const catProducts = products.filter(function(p) { return p.category === cat; });
        if (catProducts.length === 0) return;

        const safetyId = "cat-" + cat.replace(/\s+/g, '-');

        const sectionBlock = document.createElement("section");
        sectionBlock.className = "menu-section-block";
        sectionBlock.id = safetyId;
        
        sectionBlock.innerHTML = 
            '<h3 class="category-title">' + cat + '</h3>' +
            '<div class="menu-grid" id="grid-' + safetyId + '"></div>';
        container.appendChild(sectionBlock);

        const gridContainer = document.getElementById("grid-" + safetyId);

        catProducts.forEach(function(prod) {
            const card = document.createElement("div");
            card.className = "product-card";
            
            const imgUrl = prod.image || fallbackImg;
            const priceSuffix = prod.isWeight ? " <span style='font-size:0.75rem; color:var(--text-dim); font-weight:normal;'>/ Kg</span>" : "";
            
            card.innerHTML = 
                '<img src="' + imgUrl + '" alt="' + prod.name + '" class="product-img" onerror="this.onerror=null; this.src=\'' + fallbackImg + '\'">' +
                '<div class="product-info">' +
                    '<div>' +
                        '<h3 class="product-title">' + prod.name + '</h3>' +
                        '<p class="product-desc">' + prod.desc + '</p>' +
                    '</div>' +
                    '<div class="product-footer">' +
                        '<span class="product-price">$' + Number(prod.price).toFixed(2) + priceSuffix + '</span>' +
                        '<button class="btn-success" id="btn-add-' + prod.id + '">Agregar ➕</button>' +
                    '</div>' +
                '</div>';
            
            const btnAdd = card.querySelector("#btn-add-" + prod.id);
            if (btnAdd) {
                btnAdd.onclick = function(e) {
                    e.preventDefault();
                    window.openCustomizationModal(prod.id);
                };
            }

            gridContainer.appendChild(card);
        });
    });

    if (container.innerHTML === "") {
        container.innerHTML = '<p style="text-align:center;color:var(--text-dim);padding:40px;">No hay productos cargados en el menú.</p>';
    }
}

window.openCustomizationModal = function(productId) {
    const prod = products.find(function(p) { return p.id === productId; });
    if (!prod) return;

    tempProductToCart = JSON.parse(JSON.stringify(prod));
    tempProductToCart.selectedSize = null;
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

    const modalDesc = document.getElementById("custom-modal-desc");
    if (modalDesc) modalDesc.value = prod.desc || "";
    
    const sizesContainer = document.getElementById("custom-sizes-container");
    if (sizesContainer) {
        sizesContainer.innerHTML = prod.sizes && prod.sizes.length > 0 ? "<h5>Selecciona el tamaño (Obligatorio):</h5>" : "";
        if (prod.sizes && prod.sizes.length > 0) {
            prod.sizes.forEach(function(sz, idx) {
                let name = sz.name;
                let price = Number(sz.price) || 0;
                let priceTxt = price > 0 ? " (+$" + price.toFixed(2) + ")" : "";
                const div = document.createElement("div");
                div.className = "option-item";
                div.innerHTML = '<label><input type="radio" name="modal-size-radio" value="' + idx + '"> ' + name + priceTxt + '</label>';
                
                sizesContainer.appendChild(div);

                const rad = div.querySelector('input[type="radio"]');
                if (rad) {
                    rad.onchange = function(e) {
                        e.preventDefault();
                        window.selectSizeOption(sz);
                    };
                }
            });
        }
    }

    const addonsContainer = document.getElementById("custom-addons-container");
    if (addonsContainer) {
        addonsContainer.innerHTML = prod.addons && prod.addons.length > 0 ? "<h5>¿Deseas agregar adicionales?</h5>" : "";
        if (prod.addons) {
            prod.addons.forEach(function(addon, idx) {
                let name = addon.name;
                let price = Number(addon.price) || 0;
                const div = document.createElement("div");
                div.className = "option-item";
                div.innerHTML = '<label><input type="checkbox" id="addon-chk-' + idx + '"> ' + name + ' (+$' + price.toFixed(2) + ')</label>';
                
                addonsContainer.appendChild(div);

                const chk = div.querySelector('input[type="checkbox"]');
                if (chk) {
                    chk.onchange = function(e) {
                        const target = e.target;
                        window.toggleAddon(name, price, target.checked);
                    };
                }
            });
        }
    }

    const removalsContainer = document.getElementById("custom-removals-container");
    if (removalsContainer) {
        removalsContainer.innerHTML = prod.removals && prod.removals.length > 0 ? "<h5>¿Quitar algún ingrediente?</h5>" : "";
        if (prod.removals) {
            prod.removals.forEach(function(rem, idx) {
                const name = rem.trim();
                const div = document.createElement("div");
                div.className = "option-item";
                div.innerHTML = '<label><input type="checkbox" id="removal-chk-' + idx + '"> ' + name + '</label>';
                
                removalsContainer.appendChild(div);

                const chk = div.querySelector('input[type="checkbox"]');
                if (chk) {
                    chk.onchange = function(e) {
                        const target = e.target;
                        window.toggleRemoval(name, target.checked);
                    };
                }
            });
        }
    }

    updateModalLivePrice();

    const btnConfirmCustom = document.getElementById("btn-confirm-custom");
    if (btnConfirmCustom) btnConfirmCustom.onclick = confirmAddToCart;

    const btnCloseCustom = document.getElementById("btn-close-custom");
    if (btnCloseCustom) btnCloseCustom.onclick = function() { closeModal('custom-modal'); };
    
    openModal('custom-modal');
};

window.selectSizeOption = function(sizeObj) {
    if (!tempProductToCart) return;
    tempProductToCart.selectedSize = sizeObj;
    updateModalLivePrice();
};

window.toggleAddon = function(name, price, isChecked) {
    if (!tempProductToCart) return;
    if (isChecked) { 
        tempProductToCart.selectedAddons.push({ name: name, price: price }); 
    } else { 
        tempProductToCart.selectedAddons = tempProductToCart.selectedAddons.filter(function(a) { return a.name !== name; }); 
    }
    updateModalLivePrice();
};

window.toggleRemoval = function(name, isChecked) {
    if (!tempProductToCart) return;
    if (isChecked) { 
        tempProductToCart.selectedRemovals.push(name); 
    } else { 
        tempProductToCart.selectedRemovals = tempProductToCart.selectedRemovals.filter(function(r) { return r !== name; }); 
    }
};

function updateModalLivePrice() {
    if (!tempProductToCart) return;
    const weightInput = document.getElementById("custom-weight-input");
    let currentW = weightInput ? (parseFloat(weightInput.value) || 0) : 1.000;
    
    let baseCalculated = tempProductToCart.isWeight ? (parseFloat(tempProductToCart.price) * currentW) : parseFloat(tempProductToCart.price);
    let totalModal = baseCalculated;
    
    if (tempProductToCart.selectedSize && tempProductToCart.selectedSize.price) {
        totalModal += parseFloat(String(tempProductToCart.selectedSize.price));
    }

    tempProductToCart.selectedAddons.forEach(function(a) {
        totalModal += parseFloat(String(a.price));
    });
    
    const modalPrice = document.getElementById("custom-modal-price");
    if (modalPrice) {
        modalPrice.innerHTML = 'Precio estimado: <span style="color:var(--accent-price); font-weight:bold;">$' + totalModal.toFixed(2) + '</span>';
    }
}

function confirmAddToCart() {
    if (!tempProductToCart) return;

    if (tempProductToCart.sizes && tempProductToCart.sizes.length > 0 && !tempProductToCart.selectedSize) {
        showNotification("⚠️ Por favor, selecciona un tamaño obligatoriamente.");
        return;
    }

    if (tempProductToCart.isWeight) {
        const weightInput = document.getElementById("custom-weight-input");
        const weightVal = weightInput ? parseFloat(weightInput.value) : 1.000;
        if (isNaN(weightVal) || weightVal < 0.001) {
            showNotification("⚠️ Por favor, ingresa una cantidad válida en kilogramos.");
            return;
        }
        tempProductToCart.chosenWeight = weightVal;
    }

    cart.push(tempProductToCart);
    closeModal('custom-modal');
    updateCartUI();
}

function setupEventListeners() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.onclick = function() {
            closeModal('custom-modal');
            closeModal('login-modal');
            closeModal('export-modal');
            closeModal('payment-modal');
            closeCartDrawer();
        };
    }

    const logoButton = document.getElementById("logo-button");
    if (logoButton) {
        logoButton.onclick = function() { toggleSidebar(true); };
    }

    const sidebarOverlay = document.getElementById("sidebar-overlay");
    if (sidebarOverlay) {
        sidebarOverlay.onclick = function() { toggleSidebar(false); };
    }

    const btnCloseSidebarX = document.getElementById("btn-close-sidebar-x");
    if (btnCloseSidebarX) {
        btnCloseSidebarX.onclick = function() { toggleSidebar(false); };
    }

    const sidebarLinks = document.querySelectorAll("#sidebar-categories-links a");
    for (let i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].onclick = function() { toggleSidebar(false); };
    }

    const hasSizesCheckbox = document.getElementById("prod-has-sizes");
    const groupProdSizes = document.getElementById("group-prod-sizes");
    if (hasSizesCheckbox && groupProdSizes) {
        hasSizesCheckbox.onchange = function(e) {
            const target = e.target;
            groupProdSizes.style.display = target.checked ? "flex" : "none";
            if (!target.checked) {
                const sizesInput = document.getElementById("prod-sizes");
                if (sizesInput) sizesInput.value = "";
            }
        };
    }

    const btnOpenCart = document.getElementById("btn-open-cart");
    if (btnOpenCart) btnOpenCart.onclick = openCartDrawer;

    const btnCloseCart = document.getElementById("btnCloseCart");
    if (btnCloseCart) btnCloseCart.onclick = closeCartDrawer;

    const btnCloseLogin = document.getElementById("btn-close-login");
    if (btnCloseLogin) btnCloseLogin.onclick = function() { closeModal('login-modal'); };

    const btnCancelEdit = document.getElementById("btn-cancel-edit");
    if (btnCancelEdit) btnCancelEdit.onclick = resetProductForm;

    const btnCloseExport = document.getElementById("btn-close-export");
    if (btnCloseExport) btnCloseExport.onclick = function() { closeModal('export-modal'); };

    const btnOptPickup = document.getElementById("btn-opt-pickup");
    if (btnOptPickup) {
        btnOptPickup.onclick = function(e) {
            e.preventDefault();
            selectDeliveryOption('pickup');
        };
    }

    const btnOptDelivery = document.getElementById("btn-opt-delivery");
    if (btnOptDelivery) {
        btnOptDelivery.onclick = function(e) {
            e.preventDefault();
            selectDeliveryOption('delivery');
        };
    }

    // MANEJO DEL SELECTOR PERSONALIZADO DE MÉTODO DE PAGO
    const paymentTrigger = document.getElementById("payment-select-trigger");
    if (paymentTrigger) {
        paymentTrigger.onclick = function() {
            openModal('payment-modal');
        };
    }

    const btnClosePayment = document.getElementById("btn-close-payment");
    if (btnClosePayment) {
        btnClosePayment.onclick = function() {
            closeModal('payment-modal');
        };
    }

    const paymentOptions = document.querySelectorAll(".payment-option-card");
    paymentOptions.forEach(function(card) {
        card.onclick = function() {
            const val = card.getAttribute("data-value");
            const hiddenInput = document.getElementById("cust-payment-method");
            const triggerText = document.getElementById("payment-trigger-text");

            if (hiddenInput) hiddenInput.value = val;
            if (triggerText) {
                triggerText.innerText = val;
                triggerText.style.color = "#ffffff";
            }

            paymentOptions.forEach(function(c) { c.classList.remove("selected"); });
            card.classList.add("selected");

            closeModal('payment-modal');
        };
    });

    const btnCheckout = document.getElementById("btn-checkout");
    if (btnCheckout) btnCheckout.onclick = sendOrderWhatsApp;

    const btnViewCart = document.querySelector(".btn-view-cart");
    if (btnViewCart) btnViewCart.onclick = openCartDrawer;

    const btnToggleView = document.getElementById("btn-toggle-view");
    if (btnToggleView) {
        btnToggleView.onclick = function() {
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
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            const userEl = document.getElementById("login-username");
            const passEl = document.getElementById("login-password");
            if (!userEl || !passEl) return;

            const user = userEl.value.trim().toLowerCase();
            const pass = passEl.value.trim();
            
            const validUser = adminUsers.find(function(u) { return u.user.toLowerCase() === user && u.pass === pass; });

            if (validUser) {
                closeModal('login-modal');
                showView('admin-view');
                if (btnToggleView) btnToggleView.innerText = "📱 Ver Menú";
            } else {
                showNotification("⚠️ Acceso denegado. Credenciales incorrectas.");
            }
        };
    }

    const btnLogoutAdmin = document.getElementById("btn-logout-admin");
    if (btnLogoutAdmin) {
        btnLogoutAdmin.onclick = function() {
            showView('customer-view');
            if (btnToggleView) btnToggleView.innerText = "⚙️ Admin";
        };
    }

    const productForm = document.getElementById("product-form");
    if (productForm) {
        productForm.onsubmit = function(e) {
            e.preventDefault();
            saveProduct();
        };
    }

    const btnSaveDatabase = document.getElementById("btn-save-database");
    if (btnSaveDatabase) {
        btnSaveDatabase.onclick = function() {
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

function updateCartUI() {
    const itemsContainer = document.getElementById("cart-items-container");
    const totalAmount = document.getElementById("cart-total-amount");
    const bottomBar = document.getElementById("bottom-cart-bar");
    const deliveryBox = document.getElementById("delivery-box");
    const dataForm = document.getElementById("customer-data-form");
    
    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl) cartCountEl.innerText = String(cart.length);

    if (cart.length === 0) {
        if (itemsContainer) itemsContainer.innerHTML = '<p style="text-align:center; color:var(--text-dim); margin-top:40px;">Tu carrito está vacío.</p>';
        if (totalAmount) totalAmount.innerText = "$0.00";
        if (bottomBar) bottomBar.style.display = "none";
        if (deliveryBox) deliveryBox.style.display = "none";
        if (dataForm) dataForm.style.setProperty("display", "none", "important");
        
        currentDeliveryOption = ''; 
        const pckBtn = document.getElementById("btn-opt-pickup");
        const delBtn = document.getElementById("btn-opt-delivery");
        if (pckBtn) pckBtn.classList.remove("btn-delivery-selected");
        if (delBtn) delBtn.classList.remove("btn-delivery-selected");
        
        // REINICIAR SELECTOR DE PAGO
        const hiddenInput = document.getElementById("cust-payment-method");
        const triggerText = document.getElementById("payment-trigger-text");
        if (hiddenInput) hiddenInput.value = "";
        if (triggerText) {
            triggerText.innerText = "Selecciona método de pago... *";
            triggerText.style.color = "var(--text-dim)";
        }
        document.querySelectorAll(".payment-option-card").forEach(function(c) { c.classList.remove("selected"); });

        return;
    }

    if (deliveryBox) deliveryBox.style.display = "block";
    
    if (!currentDeliveryOption && dataForm) {
        dataForm.style.setProperty("display", "none", "important");
    }

    if (itemsContainer) {
        itemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(function(item, index) {
            let baseCalculated = item.isWeight ? (parseFloat(item.price) * item.chosenWeight) : parseFloat(item.price);
            let itemTotal = baseCalculated;
            let portionText = item.isWeight ? '<small style="display:block;color:var(--text-dim);margin-top:2px;">Cantidad: ' + item.chosenWeight.toFixed(3) + ' Kg</small>' : '';

            let sizeText = "";
            if (item.selectedSize) {
                let szPrice = parseFloat(item.selectedSize.price) || 0;
                itemTotal += szPrice;
                sizeText = '<small style="display:block;color:var(--accent-berry);font-size:0.8rem;font-weight:600;">📐 Tamaño: ' + item.selectedSize.name + (szPrice > 0 ? " (+$" + szPrice.toFixed(2) + ")" : '') + '</small>';
            }

            let addonsText = "";
            if (item.selectedAddons) {
                item.selectedAddons.forEach(function(a) {
                    itemTotal += parseFloat(String(a.price));
                    addonsText += '<small style="display:block;color:var(--accent-kiwi);font-size:0.8rem;font-weight:600;">+ ' + a.name + ' ($' + parseFloat(String(a.price)).toFixed(2) + ')</small>';
                });
            }
            
            let removalsText = "";
            if (item.selectedRemovals) {
                item.selectedRemovals.forEach(function(r) {
                    removalsText += '<small style="display:block;color:var(--accent-strawberry);font-size:0.8rem;font-weight:600;">❌ Quitar: ' + r + '</small>';
                });
            }
            
            total += itemTotal;

            const div = document.createElement("div");
            div.className = "cart-item";
            div.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.08);";
            div.innerHTML = 
                '<div style="flex-grow:1; padding-right:10px;">' +
                    '<p style="margin:0;font-weight:bold;font-size:0.95rem;color:#ffffff;">' + item.name + ' <span style="font-size:0.75rem; color:var(--text-dim);">(' + item.category + ')</span></p>' +
                    portionText + sizeText +
                    '<span style="color:var(--accent-price);font-weight:800;font-size:0.9rem;display:inline-block;margin-top:4px;">$' + itemTotal.toFixed(2) + '</span>' +
                    addonsText + removalsText +
                '</div>' +
                '<button class="btn-danger" id="btn-del-cart-' + index + '">🗑️</button>';
            
            const btnDelCart = div.querySelector("#btn-del-cart-" + index);
            if (btnDelCart) {
                btnDelCart.onclick = function() { window.removeCartItem(index); };
            }

            itemsContainer.appendChild(div);
        });

        if (totalAmount) totalAmount.innerText = "$" + total.toFixed(2);
        
        const bottomCartTotalText = document.getElementById("bottom-cart-total-text");
        if (bottomCartTotalText) bottomCartTotalText.innerText = "$" + total.toFixed(2);
        
        const countText = cart.length === 1 ? "1 producto" : cart.length + " productos";
        const bottomCartItemsText = document.getElementById("bottom-cart-items-text");
        if (bottomCartItemsText) bottomCartItemsText.innerText = countText;
        
        const custView = document.getElementById("customer-view");
        if (bottomBar && custView && custView.style.display !== "none") bottomBar.style.display = "flex";
    }
}

window.removeCartItem = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};

function selectDeliveryOption(option) {
    currentDeliveryOption = option;
    
    const customerDataForm = document.getElementById("customer-data-form");
    const pckBtn = document.getElementById("btn-opt-pickup");
    const delBtn = document.getElementById("btn-opt-delivery");
    const addrInput = document.getElementById("cust-address");

    if (customerDataForm) {
        customerDataForm.style.setProperty("display", "flex", "important");
    }

    if (option === 'pickup') {
        if (pckBtn) pckBtn.classList.add("btn-delivery-selected");
        if (delBtn) delBtn.classList.remove("btn-delivery-selected");
        
        if (addrInput) {
            addrInput.style.setProperty("display", "none", "important");
            addrInput.removeAttribute("required");
            addrInput.value = "";
        }
    } else if (option === 'delivery') {
        if (delBtn) delBtn.classList.add("btn-delivery-selected");
        if (pckBtn) pckBtn.classList.remove("btn-delivery-selected");
        
        if (addrInput) {
            addrInput.style.setProperty("display", "block", "important");
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
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
    
    const customVisible = document.getElementById("custom-modal") && document.getElementById("custom-modal").style.display === "block";
    const loginVisible = document.getElementById("login-modal") && document.getElementById("login-modal").style.display === "block";
    const exportVisible = document.getElementById("export-modal") && document.getElementById("export-modal").style.display === "block";
    const paymentVisible = document.getElementById("payment-modal") && document.getElementById("payment-modal").style.display === "block";
    const drawerOpen = document.getElementById("cart-drawer") && document.getElementById("cart-drawer").classList.contains("open");
    
    if (!customVisible && !loginVisible && !exportVisible && !paymentVisible && !drawerOpen) {
        const overlay = document.getElementById("overlay");
        if (overlay) overlay.style.display = "none";
    }
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
    const paymentVisible = document.getElementById("payment-modal") && document.getElementById("payment-modal").style.display === "block";

    if (!customVisible && !loginVisible && !exportVisible && !paymentVisible) {
        const overlay = document.getElementById("overlay");
        if (overlay) overlay.style.display = "none";
    }
}

function sendOrderWhatsApp() {
    if (cart.length === 0) return;
    if (!currentDeliveryOption) { showNotification("⚠️ Por favor, selecciona Pick Up o Delivery."); return; }

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
        showNotification("⚠️ Por favor rellena todos los datos de contacto y el método de pago obligatorios.");
        return;
    }

    if (phone.length !== 11 || isNaN(Number(phone))) {
        showNotification("⚠️ El número de teléfono debe contener exactamente 11 dígitos numéricos.");
        return;
    }

    let text = "*FC NUEVO PEDIDO - KIWI LIMÓN 🍉*\n\n";
    text += "*Cliente:* " + name + "\n*Cédula:* " + idCard + "\n*Teléfono:* " + phone + "\n*Modalidad:* " + (currentDeliveryOption === 'pickup' ? '🛍️ Pick Up' : '🛵 Delivery') + "\n";
    if (currentDeliveryOption === 'delivery') text += "*Dirección:* " + address + "\n";
    text += "*Método de Pago:* " + payment + "\n";
    
    text += "\n*📦 DETALLE DEL PEDIDO:*\n";
    let total = 0;
    
    cart.forEach(function(item, i) {
        let baseCalculated = item.isWeight ? (parseFloat(item.price) * item.chosenWeight) : parseFloat(item.price);
        let itemTotal = baseCalculated;
        
        text += "\n" + (i+1) + ". *" + item.name + "* _(" + item.category + ")_\n";
        if (item.isWeight) {
            text += "   _Cantidad solicitada: " + item.chosenWeight.toFixed(3) + " Kg_\n";
        }
        if (item.selectedSize) {
            let szPrice = parseFloat(item.selectedSize.price) || 0;
            itemTotal += szPrice;
            text += "   📐 Tamaño: " + item.selectedSize.name + (szPrice > 0 ? " (+$" + szPrice.toFixed(2) + ")" : '') + "\n";
        }
        if (item.selectedAddons && item.selectedAddons.length > 0) {
            text += "   + Adicionales:\n";
            item.selectedAddons.forEach(function(a) { 
                itemTotal += parseFloat(String(a.price)); 
                text += "     • " + a.name + " ($" + parseFloat(String(a.price)).toFixed(2) + ")\n"; 
            });
        }
        if (item.selectedRemovals && item.selectedRemovals.length > 0) {
            text += "   - Sin: " + item.selectedRemovals.join(', ') + "\n";
        }
        text += "   _Subtotal: $" + itemTotal.toFixed(2) + "_\n";
        total += itemTotal;
    });

    text += "\n*💰 TOTAL NETO A PAGAR: $" + total.toFixed(2) + "*";

    const targetPhone = "584128731016";
    const waUrl = "https://api.whatsapp.com/send?phone=" + targetPhone + "&text=" + encodeURIComponent(text);
    
    window.open(waUrl, '_blank');
}

function renderAdminTable() {
    const tbody = document.getElementById("admin-table-body");
    if (!tbody) return;
    
    tbody.innerHTML = "";

    products.forEach(function(prod) {
        const tr = document.createElement("tr");
        const imgUrl = prod.image || fallbackImg;
        tr.innerHTML = 
            '<td style="padding: 10px 8px;"><img src="' + imgUrl + '" style="width:40px;height:40px;object-fit:cover;border-radius:6px;" onerror="this.onerror=null; this.src=\'' + fallbackImg + '\'"></td>' +
            '<td style="padding: 10px 8px; font-weight:bold; color:#ffffff;">' + prod.name + '</td>' +
            '<td style="padding: 10px 8px; color:var(--text-dim);"><span style="background:rgba(255,255,255,0.05); padding:3px 6px; border-radius:4px; font-size:10px;">' + prod.category + '</span></td>' +
            '<td style="padding: 10px 8px; color:var(--accent-price); font-weight:bold;">$' + Number(prod.price).toFixed(2) + '</td>' +
            '<td style="padding: 10px 8px; white-space: nowrap;">' +
                '<button class="btn-nav" id="btn-edit-' + prod.id + '" style="padding:4px 8px; font-size:12px; margin-right:4px;">✏️</button>' +
                '<button class="btn-danger" id="btn-delete-' + prod.id + '">🗑️</button>' +
            '</td>';

        const btnEdit = tr.querySelector("#btn-edit-" + prod.id);
        if (btnEdit) {
            btnEdit.onclick = function() { window.editProduct(prod.id); };
        }

        const btnDelete = tr.querySelector("#btn-delete-" + prod.id);
        if (btnDelete) {
            btnDelete.onclick = function() { window.deleteProduct(prod.id); };
        }

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
    const hasSizesEl = document.getElementById("prod-has-sizes");
    const imgEl = document.getElementById("prod-image-url");
    const sizesEl = document.getElementById("prod-sizes");
    const addonsEl = document.getElementById("prod-addons");
    const removalsEl = document.getElementById("prod-removals");

    const idVal = editIdEl ? editIdEl.value : "";
    const name = nameEl ? nameEl.value.trim() : "";
    const category = catEl ? catEl.value : "";
    const desc = descEl ? descEl.value.trim() : "";
    const price = priceEl ? parseFloat(priceEl.value || "0") : 0;
    const isWeight = isWeightEl ? isWeightEl.checked : false;
    const hasSizes = hasSizesEl ? hasSizesEl.checked : false;
    const image = imgEl ? (imgEl.value.trim() || "") : "";
    
    const sizesInput = sizesEl ? sizesEl.value.trim() : "";
    const addonsInput = addonsEl ? addonsEl.value.trim() : "";
    const removalsInput = removalsEl ? removalsEl.value.trim() : "";

    if (!name || !category || isNaN(price)) {
        showNotification("⚠️ Por favor, rellena los campos obligatorios: Nombre, Categoría y Precio.");
        return;
    }

    let parsedSizes = [];
    if (hasSizes && sizesInput) {
        parsedSizes = sizesInput.split(',').map(function(item) {
            const parts = item.split('+');
            return { 
                name: parts[0] ? parts[0].trim() : '', 
                price: parts[1] ? (parseFloat(parts[1]) || 0) : 0 
            };
        }).filter(function(s) { return s.name !== ''; });
    }

    let parsedAddons = [];
    if (addonsInput) {
        parsedAddons = addonsInput.split(',').map(function(item) {
            const parts = item.split('+');
            return { 
                name: parts[0] ? parts[0].trim() : '', 
                price: parts[1] ? (parseFloat(parts[1]) || 0) : 0 
            };
        }).filter(function(a) { return a.name !== ''; });
    }

    let parsedRemovals = [];
    if (removalsInput) {
        parsedRemovals = removalsInput.split(',').map(function(item) { return item.trim(); }).filter(function(r) { return r !== ''; });
    }

    if (idVal) {
        products = products.map(function(p) {
            return p.id == Number(idVal) 
                ? Object.assign({}, p, { id: Number(idVal), name: name, category: category, desc: desc, price: price, isWeight: isWeight, image: image, sizes: parsedSizes, addons: parsedAddons, removals: parsedRemovals }) 
                : p;
        });
    } else {
        products.push({ 
            id: Date.now(), 
            name: name, 
            category: category, 
            desc: desc, 
            price: price, 
            isWeight: isWeight, 
            image: image, 
            sizes: parsedSizes,
            addons: parsedAddons, 
            removals: parsedRemovals 
        });
    }

    renderCustomerMenu();
    renderAdminTable();
    resetProductForm();
    showExportModal();
}

function showExportModal() {
    const codeArea = document.getElementById("export-code-area");
    if (!codeArea) return;

    const formattedCode = "const defaultProducts = " + JSON.stringify(products, null, 4) + ";";
    codeArea.value = formattedCode;

    openModal('export-modal');

    const copyBtn = document.getElementById("btn-copy-code");
    if (copyBtn) {
        copyBtn.onclick = function() {
            codeArea.focus();
            codeArea.select();
            try {
                navigator.clipboard.writeText(codeArea.value);
                showNotification("✅ ¡Código copiado al portapapeles!");
            } catch (err) {
                const range = document.createRange();
                range.selectNodeContents(codeArea);
                const selection = window.getSelection();
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                showNotification("✅ ¡Código seleccionado! Presiona copiar en tu dispositivo.");
            }
        };
    }
}

window.editProduct = function(id) {
    const prod = products.find(function(p) { return p.id === id; });
    if (!prod) return;
    
    const editIdEl = document.getElementById("edit-id");
    const nameEl = document.getElementById("prod-name");
    const catEl = document.getElementById("prod-category");
    const descEl = document.getElementById("prod-desc");
    const priceEl = document.getElementById("prod-price");
    const isWeightEl = document.getElementById("prod-is-weight");
    const hasSizesEl = document.getElementById("prod-has-sizes");
    const groupSizesEl = document.getElementById("group-prod-sizes");
    const imgEl = document.getElementById("prod-image-url");
    const sizesEl = document.getElementById("prod-sizes");
    const addonsEl = document.getElementById("prod-addons");
    const removalsEl = document.getElementById("prod-removals");

    if (editIdEl) editIdEl.value = String(prod.id);
    if (nameEl) nameEl.value = prod.name;
    if (catEl) catEl.value = prod.category || "Especiales";
    if (descEl) descEl.value = prod.desc || "";
    if (priceEl) priceEl.value = String(prod.price);
    if (isWeightEl) isWeightEl.checked = prod.isWeight || false;
    if (imgEl) imgEl.value = prod.image || "";

    if (sizesEl && groupSizesEl && hasSizesEl) {
        if (prod.sizes && prod.sizes.length > 0) {
            hasSizesEl.checked = true;
            groupSizesEl.style.display = "flex";
            sizesEl.value = prod.sizes.map(function(s) { return s.name + "+" + s.price; }).join(', ');
        } else {
            hasSizesEl.checked = false;
            groupSizesEl.style.display = "none";
            sizesEl.value = "";
        }
    }
    
    if (addonsEl) {
        addonsEl.value = (prod.addons && prod.addons.length > 0) ? prod.addons.map(function(a) { return a.name + "+" + a.price; }).join(', ') : "";
    }

    if (removalsEl) {
        removalsEl.value = (prod.removals && prod.removals.length > 0) ? prod.removals.join(', ') : "";
    }
    
    const cancelBtn = document.getElementById("btn-cancel-edit");
    if (cancelBtn) cancelBtn.style.display = "inline-block";
};

window.deleteProduct = function(id) {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
        products = products.filter(function(p) { return p.id !== id; });
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

    const groupSizesEl = document.getElementById("group-prod-sizes");
    if (groupSizesEl) groupSizesEl.style.display = "none";
    
    const cancelBtn = document.getElementById("btn-cancel-edit");
    if (cancelBtn) cancelBtn.style.display = "none";
}
