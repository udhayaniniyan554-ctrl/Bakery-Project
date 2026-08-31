/* ================================================================= */
/* ==================== INITIAL PRODUCTS CATALOG =================== */
/* ================================================================= */
const defaultProducts = [
    {
        id: 1,
        name: "Artisan Chocolates (Box)",
        category: "snacks",
        price: 10,
        image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=900&q=90",
        description: "Rich handcrafted dark & milk chocolate bites made with Belgian cocoa.",
        isVeg: true,
        rating: "4.9 ★ (120+)"
    },
    {
        id: 2,
        name: "Signature Chocolate Cake",
        category: "cakes",
        price: 300,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90",
        description: "Decadent Dutch chocolate sponge layered with smooth chocolate ganache.",
        isVeg: true,
        rating: "5.0 ★ (350+)"
    },
    {
        id: 3,
        name: "Crispy Veg / Egg Puffs",
        category: "snacks",
        price: 20,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?auto=format&fit=crop&w=900&q=90",
        description: "Golden flaky puff pastry stuffed with spiced vegetables and herbs.",
        isVeg: true,
        rating: "4.8 ★ (80+)"
    },
    {
        id: 4,
        name: "Classic Vanilla Delight",
        category: "cakes",
        price: 20,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=90",
        description: "Fluffy Madagascar vanilla sponge topped with light buttercream.",
        isVeg: true,
        rating: "4.7 ★ (65+)"
    },
    {
        id: 5,
        name: "Sweet Jam Bun",
        category: "buns",
        price: 15,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=90",
        description: "Soft bakery bread bun filled with mixed fruit berry jam.",
        isVeg: true,
        rating: "4.9 ★ (210+)"
    },
    {
        id: 6,
        name: "Fresh Coconut Bun",
        category: "buns",
        price: 15,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=90",
        description: "Oven-fresh bun stuffed with sweet grated coconut and cardamom.",
        isVeg: true,
        rating: "4.8 ★ (90+)"
    },
    {
        id: 7,
        name: "Chilled Pepsi (Can)",
        category: "drinks",
        price: 35,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=90",
        description: "Refreshing cold carbonated beverage to complement your snacks.",
        isVeg: true,
        rating: "4.9 ★ (400+)"
    },
    {
        id: 8,
        name: "Crispy Samosa (2 Pcs)",
        category: "snacks",
        price: 25,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
        description: "Crispy golden crust filled with spiced potatoes and green peas.",
        isVeg: true,
        rating: "4.9 ★ (150+)"
    }
];

let cart = [];
let appliedCoupon = null;
let currentPaymentMethod = "upi";
let currentOrder = null;
let currentStoreCategory = "all";
let currentKitchenFilter = "all";

/* ================================================================= */
/* ===================== VIEW MANAGEMENT =========================== */
/* ================================================================= */
function showView(viewName) {
    document.querySelectorAll(".app-view").forEach(v => v.classList.remove("active"));
    document.getElementById("navBtnCustomer")?.classList.remove("active");
    document.getElementById("navBtnShopkeeper")?.classList.remove("active");

    if (viewName === "landing") {
        document.getElementById("viewLanding")?.classList.add("active");
    } else if (viewName === "customer") {
        document.getElementById("viewCustomer")?.classList.add("active");
        document.getElementById("navBtnCustomer")?.classList.add("active");
        renderStoreProducts();
    } else if (viewName === "checkout") {
        document.getElementById("viewCheckout")?.classList.add("active");
        renderCheckoutSummary();
    } else if (viewName === "success") {
        document.getElementById("viewSuccess")?.classList.add("active");
    } else if (viewName === "shopkeeper") {
        document.getElementById("viewShopkeeper")?.classList.add("active");
        document.getElementById("navBtnShopkeeper")?.classList.add("active");
        renderKitchenDashboard();
        showToast("Kitchen Dashboard Loaded 🏪", "info");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ================================================================= */
/* ===================== STORE CATALOG ENGINE ====================== */
/* ================================================================= */
function getAllProducts() {
    let custom = [];
    try {
        custom = JSON.parse(localStorage.getItem("smartbakes_custom_products") || "[]");
    } catch (e) {}
    return [...defaultProducts, ...custom];
}

function renderStoreProducts() {
    const grid = document.getElementById("storeProductsGrid");
    if (!grid) return;

    const allProds = getAllProducts();
    let stockStatus = {};
    try {
        stockStatus = JSON.parse(localStorage.getItem("smartbakes_stock_status") || "{}");
    } catch (e) {}

    let query = document.getElementById("storeSearchInput")?.value.toLowerCase().trim() || "";

    let filtered = allProds.filter(p => {
        const matchesCat = currentStoreCategory === "all" || p.category === currentStoreCategory;
        const matchesQuery = p.name.toLowerCase().includes(query) || (p.description && p.description.toLowerCase().includes(query));
        return matchesCat && matchesQuery;
    });

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <span style="font-size: 40px; display: block; margin-bottom: 10px;">🔍</span>
                <h3>No bakery items found</h3>
                <p style="color: var(--text-muted); font-size: 13px;">Try searching for another keyword or change category.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        const isOutOfStock = stockStatus[product.id] === false;
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
            buttonHtml = `<button class="add-cart-btn" onclick="addToCart(${product.id})">+ Add to Cart</button>`;
        }

        grid.innerHTML += `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="diet-pill">${product.isVeg ? "🟢 Pure Veg" : "🔴 Non-Veg"}</span>
                    ${isOutOfStock ? `<div class="out-of-stock-overlay">OUT OF STOCK</div>` : ""}
                </div>
                <div class="product-body">
                    <div>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-desc">${product.description || ""}</p>
                    </div>
                    <div class="product-bottom-row">
                        <span class="product-price">₹${product.price}</span>
                        ${buttonHtml}
                    </div>
                </div>
            </div>
        `;
    });
}

function filterStoreCategory(cat, btn) {
    currentStoreCategory = cat;
    document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderStoreProducts();
}

function handleStoreSearch() {
    renderStoreProducts();
}

/* ================================================================= */
/* ===================== CART DRAWER MANAGEMENT ==================== */
/* ================================================================= */
function addToCart(productId) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(i => i.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`Added ${product.name} to Basket 🛍️`, "success");
}

function updateCartQuantity(productId, delta) {
    const idx = cart.findIndex(i => i.id === productId);
    if (idx > -1) {
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

    // Free delivery calculation
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

    // Coupon and grand total
    let discount = 0;
    if (appliedCoupon === "SWEET10") {
        discount = Math.round(subtotal * 0.10);
    } else if (appliedCoupon === "BAKE50") {
        discount = subtotal > 100 ? 50 : 0;
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

    const code = input.value.trim().toUpperCase();
    if (code === "SWEET10") {
        appliedCoupon = "SWEET10";
        msg.style.color = "#2f855a";
        msg.textContent = "✓ 'SWEET10' applied: 10% Discount!";
        showToast("Coupon SWEET10 applied!", "success");
    } else if (code === "BAKE50") {
        appliedCoupon = "BAKE50";
        msg.style.color = "#2f855a";
        msg.textContent = "✓ 'BAKE50' applied: ₹50 Discount!";
        showToast("Coupon BAKE50 applied!", "success");
    } else {
        appliedCoupon = null;
        msg.style.color = "#e53e3e";
        msg.textContent = "❌ Invalid coupon code. Try SWEET10";
    }
    updateCartUI();
}

function proceedToCheckoutFromDrawer() {
    if (cart.length === 0) {
        showToast("Your cart is empty! Please add items first.", "error");
        return;
    }
    closeCartDrawer();
    showView("checkout");
}

/* ================================================================= */
/* ===================== CHECKOUT & PAYMENT ======================== */
/* ================================================================= */
function renderCheckoutSummary() {
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
    if (appliedCoupon === "BAKE50") discount = subtotal > 100 ? 50 : 0;

    const deliveryFee = subtotal >= 499 || subtotal === 0 ? 0 : 30;
    const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

    document.getElementById("chkSubtotal").textContent = `₹${subtotal}`;
    document.getElementById("chkDeliveryFee").textContent = deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
    document.getElementById("chkGrandTotal").textContent = `₹${grandTotal}`;

    const discRow = document.getElementById("chkDiscountRow");
    const discEl = document.getElementById("chkDiscount");
    if (discount > 0 && discRow && discEl) {
        discRow.style.display = "flex";
        discEl.textContent = `-₹${discount}`;
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
    const address = document.getElementById("chkAddress").value.trim();
    const slot = document.getElementById("chkSlot").value;
    const note = document.getElementById("chkNote").value.trim();
    const utr = document.getElementById("chkUtr")?.value.trim() || "";

    if (!name || !phone || !address) {
        showToast("Please fill in Name, Phone & Delivery Address!", "error");
        return;
    }
    if (phone.length < 10) {
        showToast("Please enter a valid 10-digit mobile number!", "error");
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    let discount = 0;
    if (appliedCoupon === "SWEET10") discount = Math.round(subtotal * 0.10);
    const deliveryFee = subtotal >= 499 ? 0 : 30;
    const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

    const newOrder = {
        orderId: "SB-" + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
        customerName: name,
        customerPhone: phone,
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
        status: "Pending"
    };

    currentOrder = newOrder;

    // Save order
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
    } catch (e) {}
    orders.unshift(newOrder);
    localStorage.setItem("smartbakes_orders", JSON.stringify(orders));

    // Reset cart
    cart = [];
    appliedCoupon = null;
    updateCartUI();

    // Render Success View
    renderSuccessReceipt();
    showView("success");
    playOrderChimeSound();
    updateCustomerBadges();
    showToast("Order transmitted to Kitchen Dashboard! 🎂", "success");
}

/* ================================================================= */
/* ===================== SUCCESS & TICKET QR ======================= */
/* ================================================================= */
function renderSuccessReceipt() {
    if (!currentOrder) return;

    const body = document.getElementById("successInvoiceBody");
    if (!body) return;

    const itemsSummary = currentOrder.items.map(i => `
        <div style="display:flex; justify-content:space-between; padding:3px 0;">
            <span>${i.name} × ${i.quantity}</span>
            <strong>₹${i.price * i.quantity}</strong>
        </div>
    `).join("");

    body.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-weight:800; color:var(--primary); font-size:15px;">
            <span>Order ID: #${currentOrder.orderId}</span>
            <span>Mode: ${currentOrder.paymentMethod}</span>
        </div>
        <div style="margin-bottom:12px; color:var(--text-muted);">
            <div>👤 <b>${currentOrder.customerName}</b> (${currentOrder.customerPhone})</div>
            <div>📍 ${currentOrder.address}</div>
            <div>🕒 Slot: ${currentOrder.slot}</div>
            ${currentOrder.note ? `<div>📝 Note: <i>${currentOrder.note}</i></div>` : ""}
            ${currentOrder.utr ? `<div>🔢 UTR Ref: <b>${currentOrder.utr}</b></div>` : ""}
        </div>
        <div style="border-top:1px dashed #ecd8cb; padding-top:10px; margin-bottom:10px;">
            ${itemsSummary}
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:800; font-size:16px; color:var(--primary); border-top:1px solid #ecd8cb; padding-top:8px;">
            <span>Total Paid Amount:</span>
            <span>₹${currentOrder.total}</span>
        </div>

        <div class="ticket-qr-box">
            <small style="display:block; font-weight:700; color:var(--text-muted); margin-bottom:6px;">OFFICIAL ORDER TICKET QR</small>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SMARTBAKES-ORDER-${currentOrder.orderId}-TOTAL-INR-${currentOrder.total}" alt="Ticket QR">
            <small style="display:block; font-size:10px; color:#8c786c; margin-top:4px;">Scan at counter or delivery for instant order verification</small>
        </div>
    `;

    updateTimelineState(currentOrder.status);
}

function updateTimelineState(status) {
    const s1 = document.getElementById("trackStep1");
    const s2 = document.getElementById("trackStep2");
    const s3 = document.getElementById("trackStep3");
    const s4 = document.getElementById("trackStep4");
    const l1 = document.getElementById("trackLine1");
    const l2 = document.getElementById("trackLine2");
    const l3 = document.getElementById("trackLine3");

    [s1, s2, s3, s4].forEach(s => s?.classList.remove("completed", "active"));
    [l1, l2, l3].forEach(l => l?.classList.remove("completed"));

    s1?.classList.add("completed");
    if (status === "Pending") {
        s1?.classList.add("completed");
    } else if (status === "Baking") {
        s1?.classList.add("completed");
        l1?.classList.add("completed");
        s2?.classList.add("active");
    } else if (status === "Out for Delivery") {
        s1?.classList.add("completed");
        l1?.classList.add("completed");
        s2?.classList.add("completed");
        l2?.classList.add("completed");
        s3?.classList.add("active");
    } else if (status === "Delivered") {
        s1?.classList.add("completed");
        l1?.classList.add("completed");
        s2?.classList.add("completed");
        l2?.classList.add("completed");
        s3?.classList.add("completed");
        l3?.classList.add("completed");
        s4?.classList.add("completed");
    }
}

function dispatchOrderToWhatsApp() {
    if (!currentOrder) return;
    const bakeryPhone = "919876543210";
    const itemsText = currentOrder.items.map(i => `• ${i.name} (x${i.quantity}) - ₹${i.price * i.quantity}`).join("%0A");

    const message = `*🍰 SMART BAKES NEW ORDER — ${currentOrder.orderId}*%0A%0A` +
        `*👤 Customer:* ${encodeURIComponent(currentOrder.customerName)}%0A` +
        `*📞 Phone:* ${encodeURIComponent(currentOrder.customerPhone)}%0A` +
        `*📍 Address:* ${encodeURIComponent(currentOrder.address)}%0A` +
        `*🕒 Slot:* ${encodeURIComponent(currentOrder.slot)}%0A` +
        (currentOrder.note ? `*📝 Note:* ${encodeURIComponent(currentOrder.note)}%0A` : ``) +
        `*💳 Payment:* ${encodeURIComponent(currentOrder.paymentMethod)}` +
        (currentOrder.utr ? ` (UTR: ${encodeURIComponent(currentOrder.utr)})` : ``) + `%0A%0A` +
        `*🛒 Items Ordered:*%0A${itemsText}%0A%0A` +
        `*💵 Grand Total:* ₹${currentOrder.total}%0A%0A` +
        `_Please confirm delivery schedule!_`;

    window.open(`https://wa.me/${bakeryPhone}?text=${message}`, "_blank");
}

function printReceiptTicket() {
    window.print();
}

/* ================================================================= */
/* ===================== SHOPKEEPER KITCHEN PORTAL ================= */
/* ================================================================= */
function renderKitchenDashboard() {
    renderKitchenStats();
    renderKitchenOrders();
    renderKitchenMenuTable();
}

function renderKitchenStats() {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
    } catch (e) {}

    const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    const pendingCount = orders.filter(o => o.status === "Pending" || o.status === "Baking").length;
    const completedCount = orders.filter(o => o.status === "Delivered").length;

    document.getElementById("skStatRevenue").textContent = `₹${totalRevenue}`;
    document.getElementById("skStatTotal").textContent = orders.length;
    document.getElementById("skStatPending").textContent = pendingCount;
    document.getElementById("skStatCompleted").textContent = completedCount;
    document.getElementById("skOrdersTabCount").textContent = orders.length;
}

function switchAdminTab(tab) {
    const tabs = ["orders", "menu", "analytics", "settings"];
    tabs.forEach(t => {
        const btn = document.getElementById("tabSk" + t.charAt(0).toUpperCase() + t.slice(1));
        const panel = document.getElementById("skTabPanel" + t.charAt(0).toUpperCase() + t.slice(1));
        if (btn) btn.classList.remove("active");
        if (panel) panel.classList.remove("active");
    });

    const activeBtn = document.getElementById("tabSk" + tab.charAt(0).toUpperCase() + tab.slice(1));
    const activePanel = document.getElementById("skTabPanel" + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (activeBtn) activeBtn.classList.add("active");
    if (activePanel) activePanel.classList.add("active");

    if (tab === "orders") renderKitchenOrders();
    if (tab === "menu") renderKitchenMenuTable();
    if (tab === "analytics") renderKitchenAnalytics();
}

function filterKitchenOrders(filter, btn) {
    currentKitchenFilter = filter;
    document.querySelectorAll(".sk-filter-btn").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderKitchenOrders();
}

function renderKitchenOrders() {
    const grid = document.getElementById("skKitchenOrdersGrid");
    if (!grid) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
    } catch (e) {}

    let filtered = orders;
    if (currentKitchenFilter !== "all") {
        filtered = orders.filter(o => o.status === currentKitchenFilter);
    }

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:50px 20px; background:white; border-radius:18px; border:1px solid var(--border-color);">
                <span style="font-size:40px; display:block; margin-bottom:8px;">📭</span>
                <strong style="color:var(--primary); font-size:16px;">No kitchen orders for '${currentKitchenFilter}'</strong>
                <p style="color:var(--text-muted); font-size:13px; margin-top:4px;">New incoming orders will appear automatically in real-time.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(order => {
        let stClass = "st-pending";
        if (order.status === "Baking") stClass = "st-baking";
        if (order.status === "Out for Delivery") stClass = "st-delivery";
        if (order.status === "Delivered") stClass = "st-delivered";

        const itemsLines = order.items.map(i => `
            <div class="koc-item-line">
                <span>${i.name} × ${i.quantity}</span>
                <strong>₹${i.price * i.quantity}</strong>
            </div>
        `).join("");

        grid.innerHTML += `
            <div class="kitchen-order-card">
                <div>
                    <div class="koc-header">
                        <div>
                            <div class="koc-id">Order #${order.orderId}</div>
                            <div class="koc-time">🕒 ${order.date}</div>
                        </div>
                        <span class="status-badge ${stClass}">${order.status || "Pending"}</span>
                    </div>

                    <div class="koc-cust-info">
                        <strong>👤 ${order.customerName} (${order.customerPhone})</strong>
                        <div>📍 ${order.address}</div>
                        <div>🕒 Slot: <b>${order.slot}</b></div>
                        ${order.note ? `<div>📝 <i>${order.note}</i></div>` : ""}
                        <div>💳 <b>${order.paymentMethod}</b> ${order.utr ? `(UTR: ${order.utr})` : ""}</div>
                    </div>

                    <div class="koc-items">
                        ${itemsLines}
                        <div class="koc-total-line">
                            <span>Total Bill</span>
                            <span>₹${order.total}</span>
                        </div>
                    </div>
                </div>

                <div class="koc-actions">
                    <button class="koc-btn btn-baking" onclick="setOrderStatus('${order.orderId}', 'Baking')">
                        🎂 Start Baking
                    </button>
                    <button class="koc-btn btn-delivery" onclick="setOrderStatus('${order.orderId}', 'Out for Delivery')">
                        🚚 Out for Delivery
                    </button>
                    <button class="koc-btn btn-delivered" onclick="setOrderStatus('${order.orderId}', 'Delivered')">
                        ✅ Mark Delivered
                    </button>
                </div>
            </div>
        `;
    });
}

function setOrderStatus(orderId, newStatus) {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
    } catch (e) {}

    const order = orders.find(o => String(o.orderId) === String(orderId));
    if (order) {
        order.status = newStatus;
        localStorage.setItem("smartbakes_orders", JSON.stringify(orders));
        showToast(`Order #${orderId} set to: ${newStatus} ⚡`, "success");
        renderKitchenStats();
        renderKitchenOrders();
        updateCustomerBadges();
        if (currentOrder && String(currentOrder.orderId) === String(orderId)) {
            updateTimelineState(newStatus);
        }
    }
}

function renderKitchenMenuTable() {
    const tbody = document.getElementById("skMenuTableBody");
    const countEl = document.getElementById("skMenuCount");
    if (!tbody) return;

    const all = getAllProducts();
    if (countEl) countEl.textContent = all.length;

    let stockMap = {};
    try {
        stockMap = JSON.parse(localStorage.getItem("smartbakes_stock_status") || "{}");
    } catch (e) {}

    tbody.innerHTML = all.map(prod => {
        const isOutOfStock = stockMap[prod.id] === false;
        return `
            <tr>
                <td>
                    <strong>${prod.name}</strong>
                    <div style="font-size:11px; color:#8c786c;">${prod.description || ""}</div>
                </td>
                <td style="text-transform:capitalize;">${prod.category}</td>
                <td><strong>₹${prod.price}</strong></td>
                <td>${prod.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</td>
                <td>
                    <button class="stock-toggle-btn ${isOutOfStock ? "stock-out" : "stock-in"}" onclick="toggleKitchenStock(${prod.id})">
                        ${isOutOfStock ? "❌ Out of Stock" : "🟢 In Stock"}
                    </button>
                </td>
                <td>
                    <button class="stock-toggle-btn stock-out" onclick="deleteKitchenProduct(${prod.id})" style="font-size:11px;">
                        🗑️ Delete
                    </button>
                </td>
            </tr>
        `;
    }).join("");
}

function toggleKitchenStock(prodId) {
    let stockMap = {};
    try {
        stockMap = JSON.parse(localStorage.getItem("smartbakes_stock_status") || "{}");
    } catch (e) {}

    stockMap[prodId] = stockMap[prodId] === false ? true : false;
    localStorage.setItem("smartbakes_stock_status", JSON.stringify(stockMap));
    showToast(`Stock updated for item #${prodId} 🔄`, "info");
    renderKitchenMenuTable();
    renderStoreProducts();
}

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
    const img = document.getElementById("addProdImg").value.trim() || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90";
    const desc = document.getElementById("addProdDesc").value.trim() || "Delicious bakery specialty.";
    const isVeg = document.getElementById("addProdDiet").value === "true";

    const newProd = {
        id: Date.now(),
        name,
        category: cat,
        price,
        image: img,
        description: desc,
        isVeg,
        rating: "5.0 ★ (New)"
    };

    let custom = [];
    try {
        custom = JSON.parse(localStorage.getItem("smartbakes_custom_products") || "[]");
    } catch (err) {}
    custom.push(newProd);
    localStorage.setItem("smartbakes_custom_products", JSON.stringify(custom));

    showToast(`Added '${name}' to Bakery Menu! 🎂`, "success");
    closeAddProductModal();
    renderKitchenMenuTable();
    renderStoreProducts();
}

function deleteKitchenProduct(prodId) {
    if (!confirm("Are you sure you want to delete this product?")) return;
    let custom = [];
    try {
        custom = JSON.parse(localStorage.getItem("smartbakes_custom_products") || "[]");
    } catch (e) {}
    custom = custom.filter(p => p.id !== prodId);
    localStorage.setItem("smartbakes_custom_products", JSON.stringify(custom));
    showToast("Product deleted 🗑️", "info");
    renderKitchenMenuTable();
    renderStoreProducts();
}

function renderKitchenAnalytics() {
    const container = document.getElementById("skAnalyticsTableContainer");
    if (!container) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
    } catch (e) {}

    let salesMap = {};
    orders.forEach(order => {
        (order.items || []).forEach(item => {
            if (!salesMap[item.name]) {
                salesMap[item.name] = { qty: 0, revenue: 0, price: item.price };
            }
            salesMap[item.name].qty += item.quantity;
            salesMap[item.name].revenue += item.price * item.quantity;
        });
    });

    const keys = Object.keys(salesMap);
    if (keys.length === 0) {
        container.innerHTML = `<p style="padding:20px; text-align:center; color:var(--text-muted);">No sales data recorded yet.</p>`;
        return;
    }

    const rows = keys.map(k => `
        <tr>
            <td><strong>${k}</strong></td>
            <td>${salesMap[k].qty} units</td>
            <td>₹${salesMap[k].price}</td>
            <td><strong>₹${salesMap[k].revenue}</strong></td>
        </tr>
    `).join("");

    container.innerHTML = `
        <table class="sk-data-table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Units Sold</th>
                    <th>Unit Price</th>
                    <th>Total Revenue</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

function saveKitchenSettings() {
    const name = document.getElementById("cfgPayeeName").value.trim();
    const upi = document.getElementById("cfgUpiId").value.trim();
    const bank = document.getElementById("cfgBankTag").value.trim();
    const phone = document.getElementById("cfgPhone").value.trim();

    const settings = {
        payeeName: name || "Muthukrishnan S",
        upiId: upi || "muthukrishnans2002@okhdfcbank",
        bankTag: bank || "Indian Bank • 4189",
        phone: phone || "919876543210"
    };

    localStorage.setItem("smartbakes_settings", JSON.stringify(settings));
    showToast("Kitchen & UPI Settings Saved! 💾", "success");
    applySettingsToUI();
}

function applySettingsToUI() {
    let s = null;
    try {
        s = JSON.parse(localStorage.getItem("smartbakes_settings"));
    } catch (e) {}

    if (s) {
        document.getElementById("chkPayeeName").textContent = s.payeeName;
        document.getElementById("chkUpiId").textContent = s.upiId;
        document.getElementById("chkBankTag").textContent = `🏦 ${s.bankTag}`;
        document.getElementById("chkDirectPayBtn").href = `upi://pay?pa=${s.upiId}&pn=${encodeURIComponent(s.payeeName)}&cu=INR`;
        document.getElementById("footerContactUpi").textContent = `💳 UPI: ${s.upiId}`;
        document.getElementById("footerContactPhone").textContent = `📞 +${s.phone}`;
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
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
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
            const itemsText = order.items.map(i => `${i.name} (x${i.quantity})`).join(", ");
            let stClass = "st-pending";
            if (order.status === "Baking") stClass = "st-baking";
            if (order.status === "Out for Delivery") stClass = "st-delivery";
            if (order.status === "Delivered") stClass = "st-delivered";

            list.innerHTML += `
                <div style="background:#fbf7f4; border-radius:14px; padding:16px; margin-bottom:12px; border:1px solid #ecd8cb;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <strong>Order #${order.orderId}</strong>
                        <span class="status-badge ${stClass}">${order.status || "Pending"}</span>
                    </div>
                    <small style="color:var(--text-muted);">${order.date}</small>
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
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
    } catch (e) {}

    const countBadge = document.getElementById("customerOrdersCountBadge");
    const skBadge = document.getElementById("skPendingBadge");

    if (countBadge) {
        if (orders.length > 0) {
            countBadge.style.display = "inline-block";
            countBadge.textContent = orders.length;
        } else {
            countBadge.style.display = "none";
        }
    }

    const pending = orders.filter(o => o.status === "Pending" || o.status === "Baking").length;
    if (skBadge) {
        if (pending > 0) {
            skBadge.style.display = "inline-block";
            skBadge.textContent = pending;
        } else {
            skBadge.style.display = "none";
        }
    }
}

/* ================================================================= */
/* ===================== TOAST & AUDIO HELPERS ===================== */
/* ================================================================= */
function showToast(text, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = text;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
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
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
    } catch (e) {}
}

/* ================================================================= */
/* ================= MULTI-TAB STORAGE EVENT SYNC ================== */
/* ================================================================= */
window.addEventListener("storage", (e) => {
    if (e.key === "smartbakes_orders") {
        renderKitchenStats();
        renderKitchenOrders();
        updateCustomerBadges();
        playOrderChimeSound();
    }
    if (e.key === "smartbakes_stock_status" || e.key === "smartbakes_custom_products") {
        renderStoreProducts();
        renderKitchenMenuTable();
    }
    if (e.key === "smartbakes_settings") {
        applySettingsToUI();
    }
});

// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
    renderStoreProducts();
    applySettingsToUI();
    updateCustomerBadges();
});
