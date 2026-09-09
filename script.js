/* ================================================================= */
/* ==================== ROYAL BAKES EXPANDED CATALOG =============== */
/* ================================================================= */
const defaultProducts = [
    {
        id: 1,
        name: "Signature Dutch Chocolate Cake",
        category: "cakes",
        price: 350,
        originalPrice: 420,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90",
        description: "Decadent layered Dutch chocolate sponge draped with rich Belgian dark chocolate ganache and chocolate curls.",
        isVeg: true,
        stock: 18,
        minStock: 4,
        prepTime: "25 mins",
        bestseller: true,
        rating: "5.0 ★ (350+)"
    },
    {
        id: 2,
        name: "Royal Red Velvet Cake",
        category: "cakes",
        price: 400,
        originalPrice: 480,
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=90",
        description: "Velvety crimson sponge layered with smooth Italian cream cheese frosting and sweet white chocolate shavings.",
        isVeg: true,
        stock: 14,
        minStock: 3,
        prepTime: "30 mins",
        bestseller: true,
        rating: "4.9 ★ (220+)"
    },
    {
        id: 3,
        name: "Classic Madagascar Vanilla Cake",
        category: "cakes",
        price: 250,
        originalPrice: 300,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=90",
        description: "Fluffy vanilla sponge infused with organic Madagascar vanilla beans and whipped buttercream.",
        isVeg: true,
        stock: 20,
        minStock: 5,
        prepTime: "20 mins",
        bestseller: false,
        rating: "4.7 ★ (65+)"
    },
    {
        id: 4,
        name: "Black Forest Gateau",
        category: "cakes",
        price: 380,
        originalPrice: 450,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?auto=format&fit=crop&w=900&q=90",
        description: "Classic German chocolate sponge soaked in cherry syrup, loaded with whipped cream and Maraschino cherries.",
        isVeg: false,
        stock: 12,
        minStock: 3,
        prepTime: "25 mins",
        bestseller: false,
        rating: "4.8 ★ (140+)"
    },
    {
        id: 5,
        name: "French Opera Pastry",
        category: "pastries",
        price: 90,
        originalPrice: 110,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=90",
        description: "Almond sponge cake soaked in coffee syrup, layered with ganache and French coffee buttercream.",
        isVeg: true,
        stock: 25,
        minStock: 5,
        prepTime: "10 mins",
        bestseller: true,
        rating: "4.9 ★ (88+)"
    },
    {
        id: 6,
        name: "Dark Chocolate Brownie Slice",
        category: "pastries",
        price: 70,
        originalPrice: 85,
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=900&q=90",
        description: "Fudgy walnut chocolate brownie baked with melted pure Belgian 70% dark chocolate.",
        isVeg: true,
        stock: 30,
        minStock: 6,
        prepTime: "5 mins",
        bestseller: true,
        rating: "4.9 ★ (310+)"
    },
    {
        id: 7,
        name: "Crispy Veg / Egg Puff",
        category: "snacks",
        price: 20,
        originalPrice: 25,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?auto=format&fit=crop&w=900&q=90",
        description: "Golden flaky puff pastry packed with spiced potato masala and aromatics, baked fresh every morning.",
        isVeg: true,
        stock: 45,
        minStock: 10,
        prepTime: "Fresh Batch 11 AM",
        bestseller: true,
        rating: "4.8 ★ (190+)"
    },
    {
        id: 8,
        name: "Crispy Paneer Tikka Puff",
        category: "snacks",
        price: 35,
        originalPrice: 40,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
        description: "Oven-baked puff stuffed with tandoori-marinated cottage cheese cubes and bell peppers.",
        isVeg: true,
        stock: 22,
        minStock: 5,
        prepTime: "Fresh Batch 11 AM",
        bestseller: false,
        rating: "4.9 ★ (75+)"
    },
    {
        id: 9,
        name: "Sweet Fruit Jam Bun",
        category: "buns",
        price: 20,
        originalPrice: 25,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=90",
        description: "Soft bakery bread bun baked with butter and filled with mixed fruit berry jam.",
        isVeg: true,
        stock: 40,
        minStock: 10,
        prepTime: "Fresh Daily",
        bestseller: true,
        rating: "4.9 ★ (210+)"
    },
    {
        id: 10,
        name: "Fresh Coconut Cardamom Bun",
        category: "buns",
        price: 25,
        originalPrice: 30,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=90",
        description: "Oven-fresh bun stuffed with fresh sweet grated coconut, ghee, and fragrant green cardamom.",
        isVeg: true,
        stock: 35,
        minStock: 8,
        prepTime: "Fresh Daily",
        bestseller: false,
        rating: "4.8 ★ (90+)"
    },
    {
        id: 11,
        name: "Butter Cashew Cookies (Box)",
        category: "cookies",
        price: 110,
        originalPrice: 130,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=90",
        description: "Melt-in-mouth bakery butter cookies loaded with roasted whole cashews.",
        isVeg: true,
        stock: 18,
        minStock: 4,
        prepTime: "Ready to Ship",
        bestseller: true,
        rating: "4.9 ★ (130+)"
    },
    {
        id: 12,
        name: "Royal Mango Cheesecake Cup",
        category: "desserts",
        price: 95,
        originalPrice: 120,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=90",
        description: "No-bake Alphonso mango cheesecake layered with crushed biscuit crumble and sweet mango glaze.",
        isVeg: true,
        stock: 15,
        minStock: 3,
        prepTime: "Chilled Ready",
        bestseller: false,
        rating: "4.9 ★ (65+)"
    },
    {
        id: 13,
        name: "Chilled Pepsi Can (330ml)",
        category: "drinks",
        price: 35,
        originalPrice: 40,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=90",
        description: "Ice-cold refreshing beverage to pair perfectly with savoury puffs and pastries.",
        isVeg: true,
        stock: 50,
        minStock: 12,
        prepTime: "Instant Chilled",
        bestseller: false,
        rating: "4.9 ★ (400+)"
    },
    {
        id: 14,
        name: "Cold Brew Iced Coffee",
        category: "drinks",
        price: 60,
        originalPrice: 75,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=90",
        description: "Slow-steeped Arabica coffee blended with cold milk and sweet caramel drizzle.",
        isVeg: true,
        stock: 25,
        minStock: 5,
        prepTime: "Instant Chilled",
        bestseller: true,
        rating: "4.8 ★ (110+)"
    }
];

let cart = [];
let appliedCoupon = null;
let currentPaymentMethod = "upi";
let currentFulfillmentMode = "delivery";
let currentOrder = null;
let currentStoreCategory = "all";
let currentDietFilter = "all";
let currentSortOption = "featured";
let currentKdsFilter = "all";
let activeStaffRole = localStorage.getItem("royalbakes_staff_role") || null;

// Cloud Realtime Channel URL for multi-device sync
const NTFY_CHANNEL_ORDERS = "https://ntfy.sh/royalbakes_orders_muthu_6374334421";
const NTFY_CHANNEL_STATUS = "https://ntfy.sh/royalbakes_status_muthu_6374334421";

// BroadcastChannel for instant same-device / multi-tab synchronization
let royalChannel = null;
try {
    royalChannel = new BroadcastChannel("royalbakes_realtime_sync");
    royalChannel.onmessage = (ev) => {
        handleRealTimeEvent(ev.data);
    };
} catch (e) {}

// Setup Cloud SSE Listener for Cross-Device Real-Time Sync
function initCloudRealtimeSync() {
    try {
        const orderSource = new EventSource(NTFY_CHANNEL_ORDERS + "/sse");
        orderSource.onmessage = function (event) {
            try {
                const data = JSON.parse(event.data);
                if (data.event === "message" && data.message) {
                    const payload = JSON.parse(data.message);
                    if (payload && payload.orderId) {
                        saveOrderLocally(payload, false);
                    }
                }
            } catch (e) {}
        };

        const statusSource = new EventSource(NTFY_CHANNEL_STATUS + "/sse");
        statusSource.onmessage = function (event) {
            try {
                const data = JSON.parse(event.data);
                if (data.event === "message" && data.message) {
                    const payload = JSON.parse(data.message);
                    if (payload && payload.orderId && payload.status) {
                        applyOrderStatusLocally(payload.orderId, payload.status, false);
                    }
                }
            } catch (e) {}
        };
    } catch (e) {
        console.log("SSE fallback active");
    }
}

/* ================================================================= */
/* ===================== VIEW MANAGEMENT =========================== */
/* ================================================================= */
function showView(viewName) {
    document.querySelectorAll(".app-view").forEach(v => v.classList.remove("active"));
    document.querySelectorAll(".nav-portal-btn").forEach(b => b.classList.remove("active"));

    sessionStorage.setItem("royalbakes_view", viewName);

    if (viewName === "landing") {
        document.getElementById("viewLanding")?.classList.add("active");
        document.getElementById("navBtnLanding")?.classList.add("active");
    } else if (viewName === "customer") {
        document.getElementById("viewCustomer")?.classList.add("active");
        document.getElementById("navBtnCustomer")?.classList.add("active");
        renderStoreProducts();
    } else if (viewName === "checkout") {
        document.getElementById("viewCheckout")?.classList.add("active");
        renderCheckoutSummary();
    } else if (viewName === "success") {
        document.getElementById("viewSuccess")?.classList.add("active");
    } else if (viewName === "kitchen") {
        if (!activeStaffRole) {
            openStaffAuthModal("kitchen");
            return;
        }
        document.getElementById("viewKitchen")?.classList.add("active");
        document.getElementById("navBtnKitchen")?.classList.add("active");
        renderKitchenQueue();
    } else if (viewName === "admin") {
        if (activeStaffRole !== "admin") {
            openStaffAuthModal("admin");
            return;
        }
        document.getElementById("viewAdmin")?.classList.add("active");
        document.getElementById("navBtnAdmin")?.classList.add("active");
        renderAdminDashboard();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ================================================================= */
/* ================= STAFF & CUSTOMER AUTHENTICATION =============== */
/* ================================================================= */
function openStaffAuthModal(targetRole) {
    if (activeStaffRole === "admin" || (activeStaffRole === "kitchen" && targetRole === "kitchen")) {
        showView(targetRole);
        return;
    }
    document.getElementById("staffTargetRole").value = targetRole;
    const subEl = document.getElementById("authModalSubTitle");
    const mainEl = document.getElementById("authModalMainTitle");
    if (targetRole === "admin") {
        subEl.textContent = "MANAGEMENT ACCESS";
        mainEl.textContent = "Administrator Login";
    } else {
        subEl.textContent = "KITCHEN ACCESS";
        mainEl.textContent = "Chef & Kitchen Login";
    }
    document.getElementById("staffAuthModalOverlay").style.display = "flex";
}

function closeStaffAuthModal() {
    document.getElementById("staffAuthModalOverlay").style.display = "none";
}

function handleStaffLogin(e) {
    e.preventDefault();
    const user = document.getElementById("staffLoginUser").value.trim();
    const pass = document.getElementById("staffLoginPass").value.trim();
    const target = document.getElementById("staffTargetRole").value;

    if (user === "muthu_royal" && pass === "royal123") {
        activeStaffRole = "kitchen";
        localStorage.setItem("royalbakes_staff_role", "kitchen");
        closeStaffAuthModal();
        showToast("Welcome Chef Muthu! Kitchen KDS Activated 👨‍🍳", "success");
        showView("kitchen");
    } else if (user === "admin_royal" && pass === "royaladmin123") {
        activeStaffRole = "admin";
        localStorage.setItem("royalbakes_staff_role", "admin");
        closeStaffAuthModal();
        showToast("Welcome Manager! Admin Portal Activated 📊", "success");
        showView(target === "kitchen" ? "kitchen" : "admin");
    } else {
        showToast("❌ Invalid Credentials! Check username & password.", "error");
    }
}

function logoutStaff() {
    activeStaffRole = null;
    localStorage.removeItem("royalbakes_staff_role");
    showToast("Logged out of Staff Portal 🚪", "info");
    showView("landing");
}

function openCustomerAuthModal() {
    document.getElementById("custAuthModalOverlay").style.display = "flex";
}

function closeCustomerAuthModal() {
    document.getElementById("custAuthModalOverlay").style.display = "none";
}

function handleCustomerLogin(e) {
    e.preventDefault();
    const name = document.getElementById("custLoginName").value.trim();
    const phone = document.getElementById("custLoginPhone").value.trim();

    if (name && phone.length === 10) {
        localStorage.setItem("royalbakes_customer", JSON.stringify({ name, phone }));
        closeCustomerAuthModal();
        applyCustomerProfile();
        showToast(`Welcome ${name}! Profile Saved.`, "success");
    } else {
        showToast("Please enter name and valid 10-digit mobile number.", "error");
    }
}

function applyCustomerProfile() {
    let cust = null;
    try {
        cust = JSON.parse(localStorage.getItem("royalbakes_customer"));
    } catch (e) {}

    if (cust) {
        const textEl = document.getElementById("custLoginNavText");
        const chkName = document.getElementById("chkName");
        const chkPhone = document.getElementById("chkPhone");
        if (textEl) textEl.textContent = `👤 ${cust.name}`;
        if (chkName && !chkName.value) chkName.value = cust.name;
        if (chkPhone && !chkPhone.value) chkPhone.value = cust.phone;
    }
}

/* ================================================================= */
/* ===================== STORE CATALOG ENGINE ====================== */
/* ================================================================= */
function getAllProducts() {
    let custom = [];
    try {
        custom = JSON.parse(localStorage.getItem("royalbakes_custom_products") || "[]");
    } catch (e) {}
    
    // Check inventory adjustments
    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (e) {}

    const list = [...defaultProducts, ...custom];
    return list.map(p => {
        if (invMap[p.id] !== undefined) {
            return { ...p, stock: invMap[p.id] };
        }
        return p;
    });
}

function renderStoreProducts() {
    const grid = document.getElementById("storeProductsGrid");
    if (!grid) return;

    const allProds = getAllProducts();
    updateCategoryBadges(allProds);

    let query = document.getElementById("storeSearchInput")?.value.toLowerCase().trim() || "";

    let filtered = allProds.filter(p => {
        const matchesCat = currentStoreCategory === "all" || p.category === currentStoreCategory;
        const matchesDiet = currentDietFilter === "all" || (currentDietFilter === "veg" ? p.isVeg : !p.isVeg);
        const matchesQuery = p.name.toLowerCase().includes(query) || (p.description && p.description.toLowerCase().includes(query));
        return matchesCat && matchesDiet && matchesQuery;
    });

    // Sort products
    if (currentSortOption === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSortOption === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSortOption === "rating") {
        filtered.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    }

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <span style="font-size: 40px; display: block; margin-bottom: 10px;">🔍</span>
                <h3>No bakery specialties found</h3>
                <p style="color: var(--text-muted); font-size: 13px;">Try searching for another keyword or clear category filters.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        const isOutOfStock = product.stock <= 0;
        const isLowStock = product.stock > 0 && product.stock <= (product.minStock || 5);
        const cartItem = cart.find(i => i.id === product.id);

        let buttonHtml = "";
        if (isOutOfStock) {
            buttonHtml = `<button class="add-cart-btn" disabled style="background:#cbd5e0; cursor:not-allowed;">Sold Out</button>`;
        } else if (cartItem) {
            buttonHtml = `
                <div class="quantity-stepper">
                    <button onclick="updateCartQuantity(${product.id}, -1)">−</button>
                    <span>${cartItem.quantity}</span>
                    <button onclick="updateCartQuantity(${product.id}, 1)">+</button>
                </div>
            `;
        } else {
            buttonHtml = `<button class="add-cart-btn" onclick="addToCart(${product.id})">+ Add to Basket</button>`;
        }

        grid.innerHTML += `
            <div class="product-card">
                <div class="product-image-container" onclick="openQuickView(${product.id})">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="diet-pill">${product.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</span>
                    ${product.bestseller ? `<span class="bestseller-pill">BESTSELLER</span>` : ""}
                    ${product.prepTime ? `<span class="prep-time-tag">⏱️ ${product.prepTime}</span>` : ""}
                    ${isOutOfStock ? `<div class="out-of-stock-overlay">OUT OF STOCK</div>` : ""}
                </div>
                <div class="product-body">
                    <div>
                        <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
                        <p class="product-desc">${product.description || ""}</p>
                    </div>
                    <div>
                        <div class="product-meta-row">
                            <span>${product.rating || "5.0 ★"}</span>
                            ${isLowStock ? `<span style="color:#c53030; font-weight:700;">Only ${product.stock} left!</span>` : `<span>In Stock (${product.stock})</span>`}
                        </div>
                        <div class="product-bottom-row">
                            <div class="price-wrapper">
                                <span class="product-price">₹${product.price}</span>
                                ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice}</span>` : ""}
                            </div>
                            ${buttonHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function updateCategoryBadges(allProds) {
    const categories = ["cakes", "pastries", "snacks", "buns", "cookies", "desserts", "drinks"];
    const allEl = document.getElementById("catCountAll");
    if (allEl) allEl.textContent = allProds.length;

    categories.forEach(cat => {
        const count = allProds.filter(p => p.category === cat).length;
        const el = document.getElementById("catCount" + cat.charAt(0).toUpperCase() + cat.slice(1));
        if (el) el.textContent = count;
    });
}

function filterStoreCategory(cat, btn) {
    currentStoreCategory = cat;
    document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderStoreProducts();
}

function handleDietFilter(val) {
    currentDietFilter = val;
    renderStoreProducts();
}

function handleSortOption(val) {
    currentSortOption = val;
    renderStoreProducts();
}

function handleStoreSearch() {
    renderStoreProducts();
}

function openQuickView(prodId) {
    const product = getAllProducts().find(p => p.id === prodId);
    if (!product) return;

    const modal = document.getElementById("productQuickViewModal");
    const body = document.getElementById("quickViewBody");
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="qv-img-box">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="qv-details-box">
            <span class="diet-pill" style="position:static; display:inline-block; margin-bottom:8px;">${product.isVeg ? "🟢 Pure Vegetarian" : "🔴 Non-Vegetarian"}</span>
            <h2>${product.name}</h2>
            <div class="qv-price">₹${product.price} ${product.originalPrice ? `<small class="original-price" style="font-size:14px;">₹${product.originalPrice}</small>` : ""}</div>
            <p class="qv-desc">${product.description || "Artisanal freshly baked product prepared in Rayarpalayam."}</p>
            <div style="font-size:13px; margin-bottom:15px; color:#614c40;">
                <div>⏱️ <b>Preparation Time:</b> ${product.prepTime || "20 mins"}</div>
                <div>📦 <b>Available Kitchen Stock:</b> ${product.stock} units</div>
                <div>⭐ <b>Customer Rating:</b> ${product.rating || "5.0 ★"}</div>
            </div>
            <button class="place-order-btn" onclick="addToCart(${product.id}); closeQuickViewModal();">
                🛒 Add ${product.name} to Basket
            </button>
        </div>
    `;
    modal.style.display = "flex";
}

function closeQuickViewModal() {
    const modal = document.getElementById("productQuickViewModal");
    if (modal) modal.style.display = "none";
}

/* ================================================================= */
/* ===================== CART DRAWER MANAGEMENT ==================== */
/* ================================================================= */
function addToCart(productId) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;

    if (product.stock <= 0) {
        showToast("Sorry, this item is currently out of stock in the kitchen!", "error");
        return;
    }

    const existing = cart.find(i => i.id === productId);
    if (existing) {
        if (existing.quantity >= product.stock) {
            showToast(`Only ${product.stock} units available in stock!`, "info");
            return;
        }
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`Added ${product.name} to Basket 🛍️`, "success");
}

function updateCartQuantity(productId, delta) {
    const product = getAllProducts().find(p => p.id === productId);
    const idx = cart.findIndex(i => i.id === productId);
    if (idx > -1) {
        if (delta > 0 && product && cart[idx].quantity >= product.stock) {
            showToast(`Max available kitchen stock reached (${product.stock})!`, "info");
            return;
        }
        cart[idx].quantity += delta;
        if (cart[idx].quantity <= 0) {
            cart.splice(idx, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

    const countBadge = document.getElementById("cartCountBadge");
    if (countBadge) countBadge.textContent = totalCount;

    // Free delivery tracker
    const threshold = 499;
    const progressEl = document.getElementById("drawerFreeDeliveryProgress");
    const progressText = document.getElementById("drawerFreeDeliveryText");
    if (progressEl && progressText) {
        if (subtotal >= threshold) {
            progressEl.style.width = "100%";
            progressText.innerHTML = "🎉 Congratulations! You unlocked <strong>FREE Delivery!</strong>";
        } else {
            const diff = threshold - subtotal;
            const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
            progressEl.style.width = `${pct}%`;
            progressText.innerHTML = `Add ₹${diff} more for <strong>FREE Delivery!</strong>`;
        }
    }

    // Render items list inside drawer
    const drawerList = document.getElementById("cartDrawerItems");
    if (drawerList) {
        if (cart.length === 0) {
            drawerList.innerHTML = `
                <div style="text-align:center; padding: 40px 10px; color: var(--text-muted);">
                    <span style="font-size: 40px; display: block; margin-bottom: 8px;">🛒</span>
                    <strong>Your basket is empty</strong>
                    <p style="font-size: 12px; margin-top: 4px;">Explore our bakery menu and add delicious treats!</p>
                </div>
            `;
        } else {
            drawerList.innerHTML = cart.map(item => `
                <div class="cart-item-row">
                    <img src="${item.image}" class="cart-item-img" alt="${item.name}">
                    <div class="cart-item-info">
                        <strong>${item.name}</strong>
                        <small>₹${item.price} each</small>
                    </div>
                    <div class="quantity-stepper">
                        <button onclick="updateCartQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                    <strong>₹${item.price * item.quantity}</strong>
                </div>
            `).join("");
        }
    }

    // Discount calculations
    let discount = 0;
    if (appliedCoupon === "SWEET10") {
        discount = Math.round(subtotal * 0.10);
    } else if (appliedCoupon === "ROYAL50" && subtotal >= 399) {
        discount = 50;
    }

    const grandTotal = Math.max(0, subtotal - discount);

    const subEl = document.getElementById("drawerSubtotal");
    const discRow = document.getElementById("drawerDiscountRow");
    const discEl = document.getElementById("drawerDiscount");
    const totEl = document.getElementById("drawerGrandTotal");

    if (subEl) subEl.textContent = `₹${subtotal}`;
    if (totEl) totEl.textContent = `₹${grandTotal}`;
    if (discRow && discEl) {
        if (discount > 0) {
            discRow.style.display = "flex";
            discEl.textContent = `-₹${discount}`;
        } else {
            discRow.style.display = "none";
        }
    }

    renderStoreProducts();
}

function openCartDrawer() {
    updateCartUI();
    const drawer = document.getElementById("cartDrawerOverlay");
    if (drawer) drawer.style.display = "flex";
}

function closeCartDrawer() {
    const drawer = document.getElementById("cartDrawerOverlay");
    if (drawer) drawer.style.display = "none";
}

function applyStoreCoupon() {
    const input = document.getElementById("drawerCouponInput");
    const msg = document.getElementById("drawerCouponMsg");
    if (!input || !msg) return;

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const code = input.value.trim().toUpperCase();

    if (code === "SWEET10") {
        appliedCoupon = "SWEET10";
        msg.style.color = "#2f855a";
        msg.textContent = "✓ 'SWEET10' applied: 10% Discount!";
        showToast("Coupon SWEET10 applied (10% OFF)!", "success");
    } else if (code === "ROYAL50") {
        if (subtotal >= 399) {
            appliedCoupon = "ROYAL50";
            msg.style.color = "#2f855a";
            msg.textContent = "✓ 'ROYAL50' applied: Flat ₹50 Discount!";
            showToast("Coupon ROYAL50 applied (₹50 OFF)!", "success");
        } else {
            msg.style.color = "#e53e3e";
            msg.textContent = "❌ 'ROYAL50' requires minimum order of ₹399";
        }
    } else {
        appliedCoupon = null;
        msg.style.color = "#e53e3e";
        msg.textContent = "❌ Invalid coupon code. Try SWEET10 or ROYAL50";
    }
    updateCartUI();
}

function proceedToCheckoutFromDrawer() {
    if (cart.length === 0) {
        showToast("Your cart is empty! Please add bakery items first.", "error");
        return;
    }
    closeCartDrawer();
    showView("checkout");
}

/* ================================================================= */
/* ===================== CHECKOUT & PAYMENT ======================== */
/* ================================================================= */
function setFulfillmentMode(mode) {
    currentFulfillmentMode = mode;
    const addrBlock = document.getElementById("deliveryAddressBlock");
    const pickBlock = document.getElementById("pickupLocationBlock");
    const delLabel = document.getElementById("chkDeliveryLabel");

    if (mode === "delivery") {
        if (addrBlock) addrBlock.style.display = "block";
        if (pickBlock) pickBlock.style.display = "none";
        if (delLabel) delLabel.textContent = "Delivery Fee";
    } else {
        if (addrBlock) addrBlock.style.display = "none";
        if (pickBlock) pickBlock.style.display = "block";
        if (delLabel) delLabel.textContent = "Store Pickup Fee";
    }
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    applyCustomerProfile();
    const itemsList = document.getElementById("chkItemsList");
    if (!itemsList) return;

    itemsList.innerHTML = cart.map(item => `
        <div class="summary-item-row">
            <span>${item.name} × ${item.quantity}</span>
            <strong>₹${item.price * item.quantity}</strong>
        </div>
    `).join("");

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    let discount = 0;
    if (appliedCoupon === "SWEET10") discount = Math.round(subtotal * 0.10);
    if (appliedCoupon === "ROYAL50" && subtotal >= 399) discount = 50;

    let deliveryFee = 30;
    if (currentFulfillmentMode === "pickup" || subtotal >= 499 || subtotal === 0) {
        deliveryFee = 0;
    }

    const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

    document.getElementById("chkSubtotal").textContent = `₹${subtotal}`;
    document.getElementById("chkDeliveryFee").textContent = deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
    document.getElementById("chkGrandTotal").textContent = `₹${grandTotal}`;

    const discRow = document.getElementById("chkDiscountRow");
    const discEl = document.getElementById("chkDiscount");
    const cName = document.getElementById("chkCouponName");
    if (discount > 0 && discRow && discEl) {
        discRow.style.display = "flex";
        discEl.textContent = `-₹${discount}`;
        if (cName) cName.textContent = `(${appliedCoupon})`;
    } else if (discRow) {
        discRow.style.display = "none";
    }
}

function setPaymentMethod(method) {
    currentPaymentMethod = method;
    const tabUpi = document.getElementById("payTabUpi");
    const tabCod = document.getElementById("payTabCod");
    const secUpi = document.getElementById("paySectionUpi");
    const secCod = document.getElementById("paySectionCod");

    if (method === "upi") {
        tabUpi.classList.add("active");
        tabCod.classList.remove("active");
        secUpi.style.display = "block";
        secCod.style.display = "none";
    } else {
        tabCod.classList.add("active");
        tabUpi.classList.remove("active");
        secCod.style.display = "block";
        secUpi.style.display = "none";
    }
}

function copyUpiVpa() {
    const upiId = document.getElementById("chkUpiId").textContent.trim();
    navigator.clipboard.writeText(upiId).then(() => {
        showToast("UPI ID Copied to Clipboard! 📋", "success");
    });
}

function submitFinalOrder() {
    const name = document.getElementById("chkName").value.trim();
    const phone = document.getElementById("chkPhone").value.trim();
    const address = currentFulfillmentMode === "delivery" ? document.getElementById("chkAddress").value.trim() : "Store Pickup (Rayarpalayam Counter)";
    const slot = document.getElementById("chkSlot").value;
    const note = document.getElementById("chkNote").value.trim();
    const utr = document.getElementById("chkUtr")?.value.trim() || "";

    if (!name || !phone) {
        showToast("Please enter customer name and phone number!", "error");
        return;
    }
    if (phone.length < 10) {
        showToast("Please enter a valid 10-digit mobile number!", "error");
        return;
    }
    if (currentFulfillmentMode === "delivery" && !address) {
        showToast("Please provide your delivery address!", "error");
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    let discount = 0;
    if (appliedCoupon === "SWEET10") discount = Math.round(subtotal * 0.10);
    if (appliedCoupon === "ROYAL50" && subtotal >= 399) discount = 50;
    
    let deliveryFee = 30;
    if (currentFulfillmentMode === "pickup" || subtotal >= 499) deliveryFee = 0;
    const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

    const newOrder = {
        orderId: "RB-" + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
        timestamp: Date.now(),
        customerName: name,
        customerPhone: phone,
        fulfillmentType: currentFulfillmentMode === "delivery" ? "Delivery" : "Pickup",
        address: address,
        slot: slot,
        note: note,
        utr: utr,
        paymentMethod: currentPaymentMethod === "upi" ? "UPI / QR Code" : "Cash on Delivery",
        items: [...cart],
        subtotal: subtotal,
        discount: discount,
        deliveryFee: deliveryFee,
        total: grandTotal,
        status: "Pending" // Initial State
    };

    currentOrder = newOrder;

    // Deduct stock in inventory
    deductInventoryStock(newOrder.items);

    // Save order locally
    saveOrderLocally(newOrder, true);

    // Broadcast across Cloud SSE (cross-device)
    try {
        fetch(NTFY_CHANNEL_ORDERS, {
            method: "POST",
            body: JSON.stringify(newOrder),
            headers: { "Title": "New Royal Bakes Order: " + newOrder.orderId }
        }).catch(() => {});
    } catch (e) {}

    // Broadcast on same-device multi-tab
    if (royalChannel) {
        royalChannel.postMessage({ type: "NEW_ORDER", order: newOrder });
    }

    // Reset cart
    cart = [];
    appliedCoupon = null;
    updateCartUI();

    // Render Success View
    renderSuccessReceipt();
    showView("success");
    updateCustomerBadges();
    showToast("Order transmitted to Royal Bakes Kitchen Queue! 🎂", "success");
}

function deductInventoryStock(orderItems) {
    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (e) {}

    const all = getAllProducts();
    orderItems.forEach(item => {
        const prod = all.find(p => p.id === item.id);
        if (prod) {
            const current = invMap[item.id] !== undefined ? invMap[item.id] : prod.stock;
            invMap[item.id] = Math.max(0, current - item.quantity);
        }
    });

    localStorage.setItem("royalbakes_inventory", JSON.stringify(invMap));
}

function saveOrderLocally(newOrder, isSelfPlaced = false) {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const exists = orders.some(o => String(o.orderId) === String(newOrder.orderId));
    if (!exists) {
        orders.unshift(newOrder);
        localStorage.setItem("royalbakes_orders", JSON.stringify(orders));

        // Play chime if logged into staff portal
        if (activeStaffRole && !isSelfPlaced) {
            playOrderChimeSound();
            showToast(`🔔 New Incoming Order #${newOrder.orderId} from ${newOrder.customerName}!`, "success");
        }

        renderKitchenQueue();
        updateCustomerBadges();
    }
}

/* ================================================================= */
/* ===================== SUCCESS & TICKET QR ======================= */
/* ================================================================= */
function renderSuccessReceipt() {
    if (!currentOrder) return;

    const body = document.getElementById("successInvoiceBody");
    if (!body) return;

    const itemsSummary = currentOrder.items.map(i => `
        <div style="display:flex; justify-content:space-between; padding:4px 0;">
            <span>${i.name} × ${i.quantity}</span>
            <strong>₹${i.price * i.quantity}</strong>
        </div>
    `).join("");

    body.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-weight:800; color:var(--primary); font-size:15px;">
            <span>Order ID: #${currentOrder.orderId}</span>
            <span>Type: ${currentOrder.fulfillmentType || "Delivery"}</span>
        </div>
        <div style="margin-bottom:12px; color:var(--text-muted); line-height:1.6;">
            <div>👤 <b>${currentOrder.customerName}</b> (${currentOrder.customerPhone})</div>
            <div>📍 ${currentOrder.address}</div>
            <div>🕒 Slot: <b>${currentOrder.slot}</b></div>
            ${currentOrder.note ? `<div>📝 Note: <i>${currentOrder.note}</i></div>` : ""}
            <div>💳 Mode: <b>${currentOrder.paymentMethod}</b> ${currentOrder.utr ? `(UTR: ${currentOrder.utr})` : ""}</div>
        </div>
        <div style="border-top:1px dashed #ecd8cb; padding-top:10px; margin-bottom:10px;">
            ${itemsSummary}
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:800; font-size:16px; color:var(--primary); border-top:1px solid #ecd8cb; padding-top:8px;">
            <span>Grand Total Paid:</span>
            <span>₹${currentOrder.total}</span>
        </div>

        <div class="ticket-qr-box">
            <small style="display:block; font-weight:700; color:var(--text-muted); margin-bottom:6px;">OFFICIAL ORDER COUNTER TICKET</small>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ROYALBAKES-ORDER-${currentOrder.orderId}-TOTAL-${currentOrder.total}" alt="Ticket QR">
            <small style="display:block; font-size:10.5px; color:#8c786c; margin-top:4px;">Scan at bakery counter or delivery for instant order verification</small>
        </div>
    `;

    updateTimelineState(currentOrder.status);
}

function updateTimelineState(status) {
    const s1 = document.getElementById("trackStep1");
    const s2 = document.getElementById("trackStep2");
    const s3 = document.getElementById("trackStep3");
    const s4 = document.getElementById("trackStep4");
    const s5 = document.getElementById("trackStep5");
    const l1 = document.getElementById("trackLine1");
    const l2 = document.getElementById("trackLine2");
    const l3 = document.getElementById("trackLine3");
    const l4 = document.getElementById("trackLine4");

    [s1, s2, s3, s4, s5].forEach(s => s?.classList.remove("completed", "active"));
    [l1, l2, l3, l4].forEach(l => l?.classList.remove("completed"));

    s1?.classList.add("completed");
    if (status === "Accepted") {
        l1?.classList.add("completed");
        s2?.classList.add("completed");
    } else if (status === "Baking") {
        l1?.classList.add("completed");
        s2?.classList.add("completed");
        l2?.classList.add("completed");
        s3?.classList.add("active");
    } else if (status === "Ready" || status === "Out for Delivery") {
        l1?.classList.add("completed");
        s2?.classList.add("completed");
        l2?.classList.add("completed");
        s3?.classList.add("completed");
        l3?.classList.add("completed");
        s4?.classList.add("active");
    } else if (status === "Delivered" || status === "Completed") {
        l1?.classList.add("completed");
        s2?.classList.add("completed");
        l2?.classList.add("completed");
        s3?.classList.add("completed");
        l3?.classList.add("completed");
        s4?.classList.add("completed");
        l4?.classList.add("completed");
        s5?.classList.add("completed");
    }
}

/* ================================================================= */
/* ===================== KITCHEN KDS CONTROLLER ==================== */
/* ================================================================= */
function renderKitchenQueue() {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    // Update KPI badges
    const newCount = orders.filter(o => o.status === "Pending").length;
    const bakingCount = orders.filter(o => o.status === "Baking" || o.status === "Accepted").length;
    const readyCount = orders.filter(o => o.status === "Ready" || o.status === "Out for Delivery").length;
    const completedCount = orders.filter(o => o.status === "Delivered" || o.status === "Completed").length;

    const kNew = document.getElementById("kdsKpiNew");
    const kBake = document.getElementById("kdsKpiBaking");
    const kReady = document.getElementById("kdsKpiReady");
    const kComp = document.getElementById("kdsKpiCompleted");

    if (kNew) kNew.textContent = newCount;
    if (kBake) kBake.textContent = bakingCount;
    if (kReady) kReady.textContent = readyCount;
    if (kComp) kComp.textContent = completedCount;

    // Update Tab Counts
    document.getElementById("kdsTabAllCount").textContent = orders.length;
    document.getElementById("kdsTabPendingCount").textContent = newCount;
    document.getElementById("kdsTabAcceptedCount").textContent = orders.filter(o => o.status === "Accepted").length;
    document.getElementById("kdsTabBakingCount").textContent = orders.filter(o => o.status === "Baking").length;
    document.getElementById("kdsTabReadyCount").textContent = orders.filter(o => o.status === "Ready").length;
    document.getElementById("kdsTabCompletedCount").textContent = completedCount;

    const grid = document.getElementById("kdsOrdersQueue");
    if (!grid) return;

    const typeFilter = document.getElementById("kdsTypeFilter")?.value || "all";

    let filtered = orders;
    if (currentKdsFilter !== "all") {
        filtered = filtered.filter(o => o.status === currentKdsFilter);
    }
    if (typeFilter !== "all") {
        filtered = filtered.filter(o => o.fulfillmentType === typeFilter);
    }

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px; background:white; border-radius:18px; border:1px solid var(--border-color);">
                <span style="font-size:40px; display:block; margin-bottom:8px;">👨‍🍳</span>
                <strong style="color:var(--primary); font-size:16px;">Kitchen queue is clear for '${currentKdsFilter}'</strong>
                <p style="color:var(--text-muted); font-size:13px; margin-top:4px;">Incoming customer orders will chime and appear automatically in real-time.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(order => {
        let stClass = "st-pending";
        if (order.status === "Accepted") stClass = "st-accepted";
        if (order.status === "Baking") stClass = "st-baking";
        if (order.status === "Ready" || order.status === "Out for Delivery") stClass = "st-ready";
        if (order.status === "Delivered" || order.status === "Completed") stClass = "st-delivered";

        const itemsList = (order.items || []).map(i => `
            <div class="kds-item-line">
                <label>
                    <input type="checkbox">
                    <strong>${i.name} (×${i.quantity})</strong>
                </label>
                <span>₹${i.price * i.quantity}</span>
            </div>
        `).join("");

        const minsAgo = order.timestamp ? Math.floor((Date.now() - order.timestamp) / 60000) : 0;

        grid.innerHTML += `
            <div class="kds-order-card ${order.status === "Pending" ? "priority-high" : ""}">
                <div>
                    <div class="kds-card-header">
                        <div>
                            <div class="kds-order-id">Order #${order.orderId}</div>
                            <div class="kds-time-elapsed">🕒 ${order.date} (${minsAgo}m ago)</div>
                        </div>
                        <span class="status-badge ${stClass}">${order.status || "Pending"}</span>
                    </div>

                    <div class="kds-cust-block">
                        <strong>👤 ${order.customerName} (${order.customerPhone})</strong>
                        <div>📍 ${order.address}</div>
                        <div>📦 Fulfillment: <b>${order.fulfillmentType || "Delivery"}</b> • Slot: <b>${order.slot}</b></div>
                        ${order.note ? `<div class="kds-note-badge">📝 Special Request: ${order.note}</div>` : ""}
                    </div>

                    <div class="kds-items-checklist">
                        <div style="font-weight:700; font-size:12px; color:var(--text-muted); margin-bottom:6px;">PREPARATION CHECKLIST:</div>
                        ${itemsList}
                        <div style="display:flex; justify-content:space-between; font-weight:800; font-size:14px; margin-top:8px; padding-top:6px; border-top:1px dashed #ecd8cb;">
                            <span>Total Bill</span>
                            <span>₹${order.total} (${order.paymentMethod})</span>
                        </div>
                    </div>
                </div>

                <div class="kds-actions-row">
                    <button class="kds-btn btn-accept" onclick="setOrderStatus('${order.orderId}', 'Accepted')">
                        👍 Accept
                    </button>
                    <button class="kds-btn btn-baking" onclick="setOrderStatus('${order.orderId}', 'Baking')">
                        🎂 Start Baking
                    </button>
                    <button class="kds-btn btn-ready" onclick="setOrderStatus('${order.orderId}', 'Ready')">
                        📦 Ready
                    </button>
                    <button class="kds-btn btn-complete" onclick="setOrderStatus('${order.orderId}', 'Delivered')">
                        ✅ Completed
                    </button>
                    <button class="kds-btn btn-kot" onclick="printKOT('${order.orderId}')" title="Print Kitchen Order Ticket">
                        🖨️ KOT
                    </button>
                </div>
            </div>
        `;
    });
}

function filterKdsStatus(status, btn) {
    currentKdsFilter = status;
    document.querySelectorAll(".kds-tab-pill").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderKitchenQueue();
}

function setOrderStatus(orderId, newStatus) {
    applyOrderStatusLocally(orderId, newStatus, true);

    // Broadcast across Cloud SSE
    try {
        fetch(NTFY_CHANNEL_STATUS, {
            method: "POST",
            body: JSON.stringify({ orderId, status: newStatus }),
            headers: { "Title": `Order ${orderId} Update: ${newStatus}` }
        }).catch(() => {});
    } catch (e) {}

    // Broadcast on same-device tabs
    if (royalChannel) {
        royalChannel.postMessage({ type: "STATUS_UPDATE", orderId, status: newStatus });
    }
}

function applyOrderStatusLocally(orderId, newStatus, showPrompt = true) {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const order = orders.find(o => String(o.orderId) === String(orderId));
    if (order) {
        order.status = newStatus;
        localStorage.setItem("royalbakes_orders", JSON.stringify(orders));

        if (showPrompt) {
            showToast(`Order #${orderId} status set to: ${newStatus} ⚡`, "success");
        }
        renderKitchenQueue();
        updateCustomerBadges();

        if (currentOrder && String(currentOrder.orderId) === String(orderId)) {
            currentOrder.status = newStatus;
            updateTimelineState(newStatus);
        }
    }
}

function printKOT(orderId) {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const order = orders.find(o => String(o.orderId) === String(orderId));
    if (!order) return;

    const printBox = document.getElementById("printContainer");
    if (!printBox) return;

    const itemsRows = order.items.map(i => `<tr><td>[ ] ${i.name}</td><td>× ${i.quantity}</td></tr>`).join("");

    printBox.innerHTML = `
        <div style="max-width:320px; font-family:monospace; padding:15px; border:1px solid #000;">
            <div style="text-align:center; font-weight:bold; font-size:18px;">ROYAL BAKES — KOT</div>
            <div style="text-align:center; font-size:12px;">Rayarpalayam, Namakkal</div>
            <hr style="border-top:1px dashed #000; margin:8px 0;">
            <div><b>Order:</b> #${order.orderId}</div>
            <div><b>Time:</b> ${order.date}</div>
            <div><b>Customer:</b> ${order.customerName} (${order.customerPhone})</div>
            <div><b>Type:</b> ${order.fulfillmentType || "Delivery"} • ${order.slot}</div>
            ${order.note ? `<div><b>Special Note:</b> ${order.note}</div>` : ""}
            <hr style="border-top:1px dashed #000; margin:8px 0;">
            <table style="width:100%; text-align:left;">
                <thead><tr><th>Item</th><th>Qty</th></tr></thead>
                <tbody>${itemsRows}</tbody>
            </table>
            <hr style="border-top:1px dashed #000; margin:8px 0;">
            <div style="text-align:center; font-size:11px;">Royal Bakes Kitchen Display System</div>
        </div>
    `;
    window.print();
}

/* ================================================================= */
/* ===================== ADMIN & ANALYTICS CONTROLLER ============== */
/* ================================================================= */
function renderAdminDashboard() {
    renderAdminStats();
    renderAdminCharts();
    renderAdminInventoryTable();
    renderAdminMasterOrders();
}

function renderAdminStats() {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const totalRev = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    const totalOrders = orders.length;
    const aov = totalOrders > 0 ? Math.round(totalRev / totalOrders) : 0;

    const allProds = getAllProducts();
    const lowStockCount = allProds.filter(p => p.stock <= (p.minStock || 5)).length;

    document.getElementById("admStatRevenue").textContent = `₹${totalRev}`;
    document.getElementById("admStatTotal").textContent = totalOrders;
    document.getElementById("admStatAov").textContent = `₹${aov}`;
    document.getElementById("admStatLowStock").textContent = lowStockCount;
    document.getElementById("invTotalCount").textContent = allProds.length;
}

function renderAdminCharts() {
    renderRevenueSvgChart();
    renderCategorySvgChart();
    renderTopProductsTable();
}

function renderRevenueSvgChart() {
    const container = document.getElementById("svgRevenueChartContainer");
    if (!container) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    // Build last 7 days data
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const baseRevenue = [3200, 4100, 3800, 5200, 6800, 8900, 9400];
    
    // Add today's live revenue to the last day
    const liveToday = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    baseRevenue[6] += liveToday;

    const maxRev = Math.max(...baseRevenue, 10000);
    const chartHeight = 160;
    const barWidth = 32;
    const gap = 20;

    let barsSvg = "";
    baseRevenue.forEach((rev, idx) => {
        const h = Math.round((rev / maxRev) * chartHeight);
        const x = 30 + idx * (barWidth + gap);
        const y = chartHeight - h + 20;

        barsSvg += `
            <g class="chart-bar-group">
                <rect x="${x}" y="${y}" width="${barWidth}" height="${h}" rx="6" fill="#d49a6a" />
                <text x="${x + barWidth / 2}" y="${y - 6}" text-anchor="middle" font-size="10" font-weight="700" fill="#23120b">₹${rev}</text>
                <text x="${x + barWidth / 2}" y="${chartHeight + 35}" text-anchor="middle" font-size="11" font-weight="600" fill="#735f54">${days[idx]}</text>
            </g>
        `;
    });

    container.innerHTML = `
        <svg viewBox="0 0 400 200" style="width:100%; height:200px;">
            <line x1="20" y1="${chartHeight + 20}" x2="380" y2="${chartHeight + 20}" stroke="#ecd8cb" stroke-width="1.5" />
            ${barsSvg}
        </svg>
    `;
}

function renderCategorySvgChart() {
    const container = document.getElementById("svgCategoryChartContainer");
    if (!container) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    let catMap = { cakes: 45, pastries: 25, snacks: 20, buns: 10 };
    orders.forEach(o => {
        (o.items || []).forEach(i => {
            const cat = i.category || "cakes";
            catMap[cat] = (catMap[cat] || 0) + i.quantity;
        });
    });

    const total = Object.values(catMap).reduce((a, b) => a + b, 0) || 1;

    container.innerHTML = `
        <div style="display:flex; align-items:center; gap:25px; width:100%; justify-content:center;">
            <svg width="150" height="150" viewBox="0 0 42 42" style="border-radius:50%;">
                <circle class="donut-ring" cx="21" cy="21" r="15.915" fill="transparent" stroke="#ecd8cb" stroke-width="6"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke="#23120b" stroke-width="6" stroke-dasharray="45 55" stroke-dashoffset="25"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke="#d49a6a" stroke-width="6" stroke-dasharray="25 75" stroke-dashoffset="80"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke="#3182ce" stroke-width="6" stroke-dasharray="20 80" stroke-dashoffset="55"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke="#38a169" stroke-width="6" stroke-dasharray="10 90" stroke-dashoffset="35"></circle>
            </svg>
            <div style="font-size:12px; line-height:1.8;">
                <div><span style="color:#23120b;">■</span> Cakes (45%)</div>
                <div><span style="color:#d49a6a;">■</span> Pastries (25%)</div>
                <div><span style="color:#3182ce;">■</span> Snacks & Puffs (20%)</div>
                <div><span style="color:#38a169;">■</span> Buns & Breads (10%)</div>
            </div>
        </div>
    `;
}

function renderTopProductsTable() {
    const container = document.getElementById("skTopProductsTableContainer");
    if (!container) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    let map = {};
    orders.forEach(o => {
        (o.items || []).forEach(i => {
            if (!map[i.name]) map[i.name] = { qty: 0, rev: 0, price: i.price, cat: i.category };
            map[i.name].qty += i.quantity;
            map[i.name].rev += i.price * i.quantity;
        });
    });

    const rows = Object.keys(map).map(name => `
        <tr>
            <td><strong>${name}</strong></td>
            <td style="text-transform:capitalize;">${map[name].cat || "Bakery"}</td>
            <td>${map[name].qty} units</td>
            <td>₹${map[name].price}</td>
            <td><strong>₹${map[name].rev}</strong></td>
        </tr>
    `).join("");

    container.innerHTML = `
        <table class="sk-data-table">
            <thead>
                <tr>
                    <th>Product Specialty</th>
                    <th>Category</th>
                    <th>Units Sold</th>
                    <th>Unit Price</th>
                    <th>Total Revenue</th>
                </tr>
            </thead>
            <tbody>${rows || '<tr><td colspan="5" style="text-align:center; padding:20px;">No sales logged yet.</td></tr>'}</tbody>
        </table>
    `;
}

function renderAdminInventoryTable() {
    const tbody = document.getElementById("admInventoryTableBody");
    if (!tbody) return;

    const all = getAllProducts();
    tbody.innerHTML = all.map(p => {
        const isLow = p.stock > 0 && p.stock <= (p.minStock || 5);
        const isOut = p.stock <= 0;
        let pillClass = "stock-in";
        let label = `🟢 In Stock (${p.stock})`;
        if (isLow) { pillClass = "stock-low"; label = `🟡 Low Stock (${p.stock})`; }
        if (isOut) { pillClass = "stock-out"; label = "🔴 Out of Stock"; }

        return `
            <tr>
                <td><strong>${p.name}</strong></td>
                <td style="text-transform:capitalize;">${p.category}</td>
                <td>₹${p.price}</td>
                <td><strong>${p.stock} units</strong></td>
                <td><span class="stock-pill ${pillClass}">${label}</span></td>
                <td>
                    <button class="quick-restock-btn" onclick="quickRestockItem(${p.id}, 10)">+10</button>
                    <button class="quick-restock-btn" onclick="quickRestockItem(${p.id}, 25)">+25</button>
                    <button class="quick-restock-btn" onclick="quickRestockItem(${p.id}, 50)">+50</button>
                </td>
                <td>
                    <button class="quick-restock-btn" onclick="deleteProductItem(${p.id})" style="color:#c53030;">🗑️ Delete</button>
                </td>
            </tr>
        `;
    }).join("");
}

function quickRestockItem(prodId, amount) {
    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (e) {}

    const all = getAllProducts();
    const prod = all.find(p => p.id === prodId);
    if (!prod) return;

    const current = invMap[prodId] !== undefined ? invMap[prodId] : prod.stock;
    invMap[prodId] = current + amount;
    localStorage.setItem("royalbakes_inventory", JSON.stringify(invMap));

    showToast(`Restocked +${amount} units for ${prod.name}! 📦`, "success");
    renderAdminInventoryTable();
    renderStoreProducts();
}

function deleteProductItem(prodId) {
    if (!confirm("Are you sure you want to delete this bakery item?")) return;
    let custom = [];
    try {
        custom = JSON.parse(localStorage.getItem("royalbakes_custom_products") || "[]");
    } catch (e) {}
    custom = custom.filter(p => p.id !== prodId);
    localStorage.setItem("royalbakes_custom_products", JSON.stringify(custom));
    showToast("Product deleted 🗑️", "info");
    renderAdminInventoryTable();
    renderStoreProducts();
}

function renderAdminMasterOrders() {
    const tbody = document.getElementById("admMasterOrdersTableBody");
    if (!tbody) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    tbody.innerHTML = orders.map(o => `
        <tr>
            <td><strong>#${o.orderId}</strong></td>
            <td>${o.date}</td>
            <td><b>${o.customerName}</b> (${o.customerPhone})</td>
            <td>${o.fulfillmentType || "Delivery"}</td>
            <td>${(o.items || []).map(i => `${i.name} (${i.quantity})`).join(", ")}</td>
            <td><strong>₹${o.total}</strong></td>
            <td>${o.paymentMethod}</td>
            <td><span class="status-badge st-delivered">${o.status}</span></td>
        </tr>
    `).join("");
}

function switchAdminTab(tab) {
    const tabs = ["analytics", "inventory", "orders", "settings"];
    tabs.forEach(t => {
        const btn = document.getElementById("tabAdm" + t.charAt(0).toUpperCase() + t.slice(1));
        const panel = document.getElementById("admTabPanel" + t.charAt(0).toUpperCase() + t.slice(1));
        if (btn) btn.classList.remove("active");
        if (panel) panel.classList.remove("active");
    });

    const activeBtn = document.getElementById("tabAdm" + tab.charAt(0).toUpperCase() + tab.slice(1));
    const activePanel = document.getElementById("admTabPanel" + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (activeBtn) activeBtn.classList.add("active");
    if (activePanel) activePanel.classList.add("active");

    if (tab === "analytics") renderAdminCharts();
    if (tab === "inventory") renderAdminInventoryTable();
    if (tab === "orders") renderAdminMasterOrders();
}

function exportOrdersCSV() {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    if (orders.length === 0) {
        showToast("No orders available to export!", "info");
        return;
    }

    let csv = "Order ID,Date,Customer Name,Phone,Fulfillment,Total Amount,Payment Mode,Status\n";
    orders.forEach(o => {
        csv += `"${o.orderId}","${o.date}","${o.customerName}","${o.customerPhone}","${o.fulfillmentType || 'Delivery'}","${o.total}","${o.paymentMethod}","${o.status}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `RoyalBakes_Orders_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast("Downloaded Master Orders CSV 📥", "success");
}

/* ================================================================= */
/* ===================== ADD PRODUCT MODAL ========================= */
/* ================================================================= */
function openAddProductModal() {
    document.getElementById("addProductModalOverlay").style.display = "flex";
}

function closeAddProductModal() {
    document.getElementById("addProductModalOverlay").style.display = "none";
}

function handleAddNewProduct(e) {
    e.preventDefault();
    const name = document.getElementById("addProdName").value.trim();
    const cat = document.getElementById("addProdCat").value;
    const price = Number(document.getElementById("addProdPrice").value);
    const stock = Number(document.getElementById("addProdStock").value) || 20;
    const prep = document.getElementById("addProdPrepTime").value.trim() || "20 mins";
    const img = document.getElementById("addProdImg").value.trim() || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90";
    const desc = document.getElementById("addProdDesc").value.trim() || "Delicious artisanal specialty.";
    const isVeg = document.getElementById("addProdDiet").value === "true";

    const newProd = {
        id: Date.now(),
        name,
        category: cat,
        price,
        stock,
        minStock: 4,
        prepTime: prep,
        image: img,
        description: desc,
        isVeg,
        rating: "5.0 ★ (New)"
    };

    let custom = [];
    try {
        custom = JSON.parse(localStorage.getItem("royalbakes_custom_products") || "[]");
    } catch (err) {}
    custom.push(newProd);
    localStorage.setItem("royalbakes_custom_products", JSON.stringify(custom));

    if (royalChannel) {
        royalChannel.postMessage({ type: "PRODUCT_ADDED", product: newProd });
    }

    showToast(`Added '${name}' to Bakery Menu! 🎂`, "success");
    closeAddProductModal();
    renderStoreProducts();
    renderAdminInventoryTable();
}

function saveKitchenSettings() {
    const store = document.getElementById("cfgStoreName").value.trim();
    const loc = document.getElementById("cfgStoreLoc").value.trim();
    const name = document.getElementById("cfgPayeeName").value.trim();
    const upi = document.getElementById("cfgUpiId").value.trim();
    const bank = document.getElementById("cfgBankTag").value.trim();
    const phone = document.getElementById("cfgPhone").value.trim();

    const settings = {
        storeName: store || "Royal Bakes",
        storeLoc: loc || "Namakkal - Tiruchengode Highways, Rayarpalayam",
        payeeName: name || "Muthukrishnan S",
        upiId: upi || "muthukrishnans2002@okhdfcbank",
        bankTag: bank || "Indian Bank • 4189",
        phone: phone || "916374334421"
    };

    localStorage.setItem("royalbakes_settings", JSON.stringify(settings));
    showToast("Royal Bakes Settings Saved! 💾", "success");
    applySettingsToUI();
}

function applySettingsToUI() {
    let s = null;
    try {
        s = JSON.parse(localStorage.getItem("royalbakes_settings"));
    } catch (e) {}

    if (s) {
        const pEl = document.getElementById("chkPayeeName");
        const uEl = document.getElementById("chkUpiId");
        const bEl = document.getElementById("chkBankTag");
        const btn = document.getElementById("chkDirectPayBtn");
        const fU = document.getElementById("footerContactUpi");
        const fP = document.getElementById("footerContactPhone");

        if (pEl) pEl.textContent = s.payeeName;
        if (uEl) uEl.textContent = s.upiId;
        if (bEl) bEl.textContent = `🏦 ${s.bankTag}`;
        if (btn) btn.href = `upi://pay?pa=${s.upiId}&pn=${encodeURIComponent(s.payeeName)}&cu=INR`;
        if (fU) fU.textContent = `💳 UPI: ${s.upiId}`;
        if (fP) fP.textContent = `📞 +${s.phone}`;
    }
}

/* ================================================================= */
/* ===================== MY ORDERS MODAL =========================== */
/* ================================================================= */
function openOrdersModal() {
    const modal = document.getElementById("ordersModalOverlay");
    const list = document.getElementById("ordersModalList");
    if (!modal || !list) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    list.innerHTML = "";
    if (orders.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding:40px 10px; color:var(--text-muted);">
                <span style="font-size:40px; display:block; margin-bottom:8px;">📦</span>
                <strong>No past orders placed yet</strong>
                <p style="font-size:12px; margin-top:4px;">Your bakery orders will appear here for easy live tracking!</p>
            </div>
        `;
    } else {
        orders.forEach(order => {
            const itemsText = order.items.map(i => `${i.name} (×${i.quantity})`).join(", ");
            let stClass = "st-pending";
            if (order.status === "Accepted") stClass = "st-accepted";
            if (order.status === "Baking") stClass = "st-baking";
            if (order.status === "Ready" || order.status === "Out for Delivery") stClass = "st-ready";
            if (order.status === "Delivered" || order.status === "Completed") stClass = "st-delivered";

            list.innerHTML += `
                <div style="background:#fbf7f4; border-radius:14px; padding:16px; margin-bottom:12px; border:1px solid #ecd8cb;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <strong>Order #${order.orderId}</strong>
                        <span class="status-badge ${stClass}">${order.status || "Pending"}</span>
                    </div>
                    <small style="color:var(--text-muted);">${order.date} • ${order.fulfillmentType || 'Delivery'}</small>
                    <div style="margin:8px 0; font-size:13px;">🛒 ${itemsText}</div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:700;">
                        <span>Mode: ${order.paymentMethod}</span>
                        <span style="color:var(--primary);">₹${order.total}</span>
                    </div>
                </div>
            `;
        });
    }

    modal.style.display = "flex";
}

function closeOrdersModal() {
    document.getElementById("ordersModalOverlay").style.display = "none";
}

function updateCustomerBadges() {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const countBadge = document.getElementById("customerOrdersCountBadge");
    const kBadge = document.getElementById("kitchenPendingBadge");

    if (countBadge) {
        if (orders.length > 0) {
            countBadge.style.display = "inline-block";
            countBadge.textContent = orders.length;
        } else {
            countBadge.style.display = "none";
        }
    }

    const pending = orders.filter(o => o.status === "Pending" || o.status === "Baking").length;
    if (kBadge) {
        if (pending > 0) {
            kBadge.style.display = "inline-block";
            kBadge.textContent = pending;
        } else {
            kBadge.style.display = "none";
        }
    }
}

/* ================================================================= */
/* ===================== DISPATCH & PRINT ========================== */
/* ================================================================= */
function dispatchOrderToSMS() {
    if (!currentOrder) return;
    const phone = "+916374334421";
    const itemsText = currentOrder.items.map(i => `${i.name}(x${i.quantity})`).join(", ");
    const smsBody = `ROYAL BAKES ORDER: #${currentOrder.orderId} | Cust: ${currentOrder.customerName} (${currentOrder.customerPhone}) | Loc: ${currentOrder.address} | Items: ${itemsText} | Total: Rs.${currentOrder.total} | Pay: ${currentOrder.paymentMethod}`;

    window.location.href = `sms:${phone}?&body=${encodeURIComponent(smsBody)}`;
    showToast("Opening SMS to send order to +91 6374334421 📲", "info");
}

function dispatchOrderToWhatsApp() {
    if (!currentOrder) return;
    const bakeryPhone = "916374334421";
    const itemsText = currentOrder.items.map(i => `• ${i.name} (x${i.quantity}) - ₹${i.price * i.quantity}`).join("%0A");

    const message = `*👑 ROYAL BAKES NEW ORDER — ${currentOrder.orderId}*%0A%0A` +
        `*👤 Customer:* ${encodeURIComponent(currentOrder.customerName)}%0A` +
        `*📞 Phone:* ${encodeURIComponent(currentOrder.customerPhone)}%0A` +
        `*📍 Address:* ${encodeURIComponent(currentOrder.address)}%0A` +
        `*🕒 Slot:* ${encodeURIComponent(currentOrder.slot)}%0A` +
        (currentOrder.note ? `*📝 Note:* ${encodeURIComponent(currentOrder.note)}%0A` : ``) +
        `*💳 Payment:* ${encodeURIComponent(currentOrder.paymentMethod)}` +
        (currentOrder.utr ? ` (UTR: ${encodeURIComponent(currentOrder.utr)})` : ``) + `%0A%0A` +
        `*🛒 Items Ordered:*%0A${itemsText}%0A%0A` +
        `*💵 Grand Total:* ₹${currentOrder.total}%0A%0A` +
        `_Rayarpalayam, Namakkal - Tiruchengode Hwy_`;

    window.open(`https://wa.me/${bakeryPhone}?text=${message}`, "_blank");
}

function printReceiptTicket() {
    window.print();
}

function testAudioChime() {
    playOrderChimeSound();
    showToast("🔊 Kitchen Chime Speaker Test Successful!", "info");
}

function showToast(text, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = text;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

function playOrderChimeSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
    } catch (e) {}
}

/* ================================================================= */
/* ================= REAL-TIME BROADCAST & STORAGE SYNC ============ */
/* ================================================================= */
function handleRealTimeEvent(data) {
    if (!data) return;
    if (data.type === "NEW_ORDER") {
        saveOrderLocally(data.order, false);
    } else if (data.type === "STATUS_UPDATE") {
        applyOrderStatusLocally(data.orderId, data.status, false);
    } else if (data.type === "STOCK_UPDATE" || data.type === "PRODUCT_ADDED" || data.type === "PRODUCT_DELETED") {
        renderStoreProducts();
        renderAdminInventoryTable();
    }
}

window.addEventListener("storage", (e) => {
    if (e.key === "royalbakes_orders") {
        renderKitchenQueue();
        renderAdminStats();
        updateCustomerBadges();
    }
    if (e.key === "royalbakes_inventory" || e.key === "royalbakes_custom_products") {
        renderStoreProducts();
        renderAdminInventoryTable();
    }
    if (e.key === "royalbakes_settings") {
        applySettingsToUI();
    }
});

// INITIALIZE ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    const lastView = sessionStorage.getItem("royalbakes_view");
    if (lastView === "kitchen" && activeStaffRole) {
        showView("kitchen");
    } else if (lastView === "admin" && activeStaffRole === "admin") {
        showView("admin");
    } else if (lastView === "customer") {
        showView("customer");
    } else {
        showView("landing");
    }

    renderStoreProducts();
    applySettingsToUI();
    applyCustomerProfile();
    updateCustomerBadges();
    initCloudRealtimeSync();
});
