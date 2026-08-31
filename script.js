/* ================= PRODUCT DATA ================= */
const products = [
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
        rating: "4.8 ★ (95+)"
    },
    {
        id: 7,
        name: "Chilled Pepsi (Can)",
        category: "drinks",
        price: 15,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=90",
        description: "Refreshing cold carbonated beverage to complement your snacks.",
        isVeg: true,
        rating: "4.6 ★ (40+)"
    },
    {
        id: 8,
        name: "Spiced Chicken Roll",
        category: "snacks",
        price: 25,
        image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=900&q=90",
        description: "Succulent spiced chicken wrapped in soft freshly baked roll.",
        isVeg: false,
        rating: "4.9 ★ (310+)"
    },
    {
        id: 9,
        name: "Hot Chilli Bread Snack",
        category: "snacks",
        price: 20,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
        description: "Crispy seasoned bread cubes tossed in tangy spicy chilli sauce.",
        isVeg: true,
        rating: "4.7 ★ (140+)"
    },
    {
        id: 10,
        name: "Royal Ice Cube Cake",
        category: "cakes",
        price: 500,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=90",
        description: "Premium cool ice-frosting gateau with layered cream and berries.",
        isVeg: true,
        rating: "5.0 ★ (180+)"
    }
];

/* ================= STATE ================= */
let cart = [];
let appliedCoupon = null; // { code: 'SWEET10', percent: 10 } or { code: 'FIRST50', flat: 50 }
let currentCategory = 'all';
let selectedPayment = 'upi';
let latestOrder = null;

// UPI Configuration
const UPI_CONFIG = {
    payeeName: "Muthukrishnan S",
    upiId: "muthukrishnans2002@okhdfcbank",
    bank: "Indian Bank (4189)",
    bakeryWhatsApp: "919876543210" // Bakery Owner WhatsApp Number
};

// Delivery constants
const DELIVERY_FEE = 30;
const FREE_DELIVERY_THRESHOLD = 499;

/* ================= INITIALIZATION ================= */
document.addEventListener("DOMContentLoaded", function () {
    // Restore cart if saved
    const savedCart = localStorage.getItem("smartbakes_cart");
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }

    // Check login form
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            localStorage.setItem("smartbakes_user", email);
            showToast("Welcome back to Smart Bakes!", "success", "👋");
            openShop();
        });
    }

    // Pre-fill customer details if saved
    const savedName = localStorage.getItem("smartbakes_cust_name");
    const savedPhone = localStorage.getItem("smartbakes_cust_phone");
    const savedAddress = localStorage.getItem("smartbakes_cust_address");
    if (savedName && document.getElementById("customerName")) document.getElementById("customerName").value = savedName;
    if (savedPhone && document.getElementById("customerPhone")) document.getElementById("customerPhone").value = savedPhone;
    if (savedAddress && document.getElementById("customerAddress")) document.getElementById("customerAddress").value = savedAddress;

    updateOrdersBadge();
});

/* ================= TOAST NOTIFICATION SYSTEM ================= */
function showToast(message, type = "info", icon = "🍞", duration = 3500) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-msg">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()" title="Close">✕</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(100%)";
            setTimeout(() => toast.remove(), 250);
        }
    }, duration);
}

/* ================= NAVIGATION & AUTH ================= */
function continueAsGuest() {
    localStorage.setItem("smartbakes_user", "Guest User");
    showToast("Continuing as Guest Shopper", "info", "🛍️");
    openShop();
}

function openShop() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("shopPage").style.display = "block";
    document.getElementById("checkoutPage").style.display = "none";
    document.getElementById("paymentPage").style.display = "none";
    document.getElementById("successPage").style.display = "none";

    displayProducts();
    updateCartUI();
    window.scrollTo(0, 0);
}

function logout() {
    localStorage.removeItem("smartbakes_user");
    document.getElementById("shopPage").style.display = "none";
    document.getElementById("loginPage").style.display = "grid";
    showToast("Signed out successfully", "info", "🚪");
}

function goToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

function goToMenu() {
    goToSection("menu");
}

/* ================= CATEGORY FILTERING & SEARCH ================= */
function filterCategory(category, btnElement) {
    currentCategory = category;

    // Update active button styling
    const pills = document.querySelectorAll(".filter-pill");
    pills.forEach(p => p.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");

    searchProducts();
}

function searchProducts() {
    const searchVal = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();

    const filtered = products.filter(product => {
        const matchesCategory = (currentCategory === 'all') || (product.category === currentCategory);
        const matchesSearch = product.name.toLowerCase().includes(searchVal) ||
                              product.description.toLowerCase().includes(searchVal);
        return matchesCategory && matchesSearch;
    });

    displayProducts(filtered);
}

/* ================= PRODUCT RENDERING ================= */
function displayProducts(list = products) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: white; border-radius: 16px; border: 1px solid var(--border-color);">
                <span style="font-size: 40px;">🔍</span>
                <h3 style="margin-top: 10px; color: var(--primary);">No items found</h3>
                <p style="color: var(--text-muted); font-size: 13px; margin-top: 4px;">Try searching for another keyword or browse our full menu!</p>
                <button class="filter-pill active" style="margin-top: 16px;" onclick="filterCategory('all', document.querySelector('.filter-pill'))">View All Menu</button>
            </div>
        `;
        return;
    }

    list.forEach(product => {
        const existing = cart.find(item => item.name === product.name);
        const quantity = existing ? existing.quantity : 0;

        let actionButton;
        if (quantity === 0) {
            actionButton = `
                <button class="add-btn" onclick="addToCart('${product.name}')">
                    + Add to Cart
                </button>
            `;
        } else {
            actionButton = `
                <div class="quantity-box">
                    <button onclick="decreaseQuantity('${product.name}')">−</button>
                    <span>${quantity}</span>
                    <button onclick="increaseQuantity('${product.name}')">+</button>
                </div>
            `;
        }

        const dietBadge = product.isVeg
            ? `<div class="diet-badge" title="Pure Vegetarian"><div class="diet-dot"></div></div>`
            : `<div class="diet-badge nonveg" title="Non-Vegetarian"><div class="diet-dot"></div></div>`;

        grid.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.src='https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=90'"
                    >
                    ${dietBadge}
                    <div class="price-tag">₹${product.price}</div>
                </div>

                <div class="product-info">
                    <div class="product-info-top">
                        <h3>${product.name}</h3>
                        <span class="rating-badge">${product.rating}</span>
                    </div>
                    <p>${product.description}</p>
                    ${actionButton}
                </div>
            </div>
        `;
    });
}

/* ================= CART ACTIONS ================= */
function addToCart(name) {
    const product = products.find(item => item.name === name);
    if (!product) return;

    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    displayProducts();
    showToast(`Added <strong>${product.name}</strong> to cart!`, "success", "🛒");
}

function increaseQuantity(name) {
    const item = cart.find(product => product.name === name);
    if (item) {
        item.quantity++;
        saveCart();
        updateCartUI();
        displayProducts();
    }
}

function decreaseQuantity(name) {
    const item = cart.find(product => product.name === name);
    if (!item) return;

    item.quantity--;
    if (item.quantity <= 0) {
        cart = cart.filter(product => product.name !== name);
        showToast(`Removed <strong>${name}</strong> from cart`, "info", "🗑️");
    }

    saveCart();
    updateCartUI();
    displayProducts();
}

function saveCart() {
    localStorage.setItem("smartbakes_cart", JSON.stringify(cart));
}

/* ================= CART UI & BILL CALCULATION ================= */
function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateDiscount(subtotal) {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.percent) {
        return Math.round((subtotal * appliedCoupon.percent) / 100);
    }
    if (appliedCoupon.flat) {
        return Math.min(appliedCoupon.flat, subtotal);
    }
    return 0;
}

function updateCartUI() {
    let count = 0;
    cart.forEach(item => count += item.quantity);

    const cartCountEl = document.getElementById("cartCount");
    if (cartCountEl) cartCountEl.textContent = count;

    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    const total = Math.max(0, subtotal - discount);

    // Update Cart Subtotal & Total
    const subtotalEl = document.getElementById("cartSubtotal");
    const totalEl = document.getElementById("cartTotal");
    if (subtotalEl) subtotalEl.textContent = "₹" + subtotal;
    if (totalEl) totalEl.textContent = "₹" + total;

    // Discount row
    const discountRow = document.getElementById("cartDiscountRow");
    const discountAmountEl = document.getElementById("cartDiscountAmount");
    const couponCodeBadge = document.getElementById("couponCodeBadge");
    if (discountRow) {
        if (discount > 0 && appliedCoupon) {
            discountRow.style.display = "flex";
            discountAmountEl.textContent = "-₹" + discount;
            couponCodeBadge.textContent = `(${appliedCoupon.code})`;
        } else {
            discountRow.style.display = "none";
        }
    }

    // Free delivery progress
    const progressFill = document.getElementById("freeDeliveryProgress");
    const progressText = document.getElementById("freeDeliveryText");
    if (progressFill && progressText) {
        if (subtotal >= FREE_DELIVERY_THRESHOLD) {
            progressFill.style.width = "100%";
            progressText.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked FREE Delivery!`;
        } else {
            const needed = FREE_DELIVERY_THRESHOLD - subtotal;
            const pct = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);
            progressFill.style.width = `${pct}%`;
            progressText.innerHTML = `Add ₹${needed} more for <strong>Free Delivery!</strong>`;
        }
    }

    // Cart Items rendering
    const cartItems = document.getElementById("cartItems");
    if (!cartItems) return;

    cartItems.innerHTML = "";
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align:center; padding: 45px 15px; color: var(--text-muted);">
                <span style="font-size: 48px; display:block; margin-bottom:10px;">🧺</span>
                <strong>Your cart is currently empty</strong>
                <p style="font-size: 12px; margin-top: 5px;">Add delicious treats from our menu to begin!</p>
            </div>
        `;
        return;
    }

    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <br>
                    <small>₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</small>
                </div>
                <div class="cart-quantity">
                    <button onclick="decreaseQuantity('${item.name}')">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity('${item.name}')">+</button>
                </div>
            </div>
        `;
    });
}

function openCart() {
    updateCartUI();
    document.getElementById("cartOverlay").style.display = "block";
}

function closeCart() {
    document.getElementById("cartOverlay").style.display = "none";
}

/* ================= COUPON CODES ================= */
function applyCoupon() {
    const input = document.getElementById("cartCouponInput");
    const message = document.getElementById("couponMessage");
    if (!input || !message) return;

    const code = input.value.trim().toUpperCase();

    if (!code) {
        message.className = "coupon-feedback error";
        message.textContent = "Please enter a valid coupon code.";
        return;
    }

    const subtotal = calculateSubtotal();
    if (subtotal === 0) {
        message.className = "coupon-feedback error";
        message.textContent = "Add items to your cart before applying a coupon.";
        return;
    }

    if (code === "SWEET10") {
        appliedCoupon = { code: "SWEET10", percent: 10 };
        message.className = "coupon-feedback success";
        message.textContent = "🎉 SWEET10 Applied! 10% Discount saved.";
        showToast("Coupon SWEET10 applied for 10% OFF!", "success", "🏷️");
    } else if (code === "FIRST50" || code === "BAKE50") {
        if (subtotal < 150) {
            message.className = "coupon-feedback error";
            message.textContent = "Coupon requires minimum cart order of ₹150.";
            return;
        }
        appliedCoupon = { code: code, flat: 50 };
        message.className = "coupon-feedback success";
        message.textContent = "🎉 ₹50 Flat Discount Applied!";
        showToast(`Coupon ${code} applied for ₹50 OFF!`, "success", "🏷️");
    } else {
        message.className = "coupon-feedback error";
        message.textContent = "Invalid coupon code. Try SWEET10 or FIRST50.";
        showToast("Invalid coupon code entered", "warning", "⚠️");
        return;
    }

    updateCartUI();
}

/* ================= CHECKOUT FLOW ================= */
function checkout() {
    if (cart.length === 0) {
        showToast("Your cart is empty! Add items before checkout.", "warning", "🛒");
        return;
    }

    closeCart();

    document.getElementById("shopPage").style.display = "none";
    document.getElementById("checkoutPage").style.display = "block";
    document.getElementById("paymentPage").style.display = "none";
    document.getElementById("successPage").style.display = "none";

    displayCheckout();
    window.scrollTo(0, 0);
}

function displayCheckout() {
    const box = document.getElementById("checkoutItems");
    if (!box) return;

    box.innerHTML = "";
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const finalTotal = Math.max(0, subtotal - discount + deliveryFee);

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        box.innerHTML += `
            <div class="checkout-item">
                <span>${item.name} <b>× ${item.quantity}</b></span>
                <strong>₹${itemTotal}</strong>
            </div>
        `;
    });

    document.getElementById("checkoutSubtotal").textContent = "₹" + subtotal;

    const discountRow = document.getElementById("checkoutDiscountRow");
    if (discountRow) {
        if (discount > 0) {
            discountRow.style.display = "flex";
            document.getElementById("checkoutDiscount").textContent = "-₹" + discount;
        } else {
            discountRow.style.display = "none";
        }
    }

    document.getElementById("checkoutDeliveryFee").textContent = deliveryFee === 0 ? "FREE" : "₹" + deliveryFee;
    document.getElementById("checkoutTotal").textContent = "₹" + finalTotal;
}

function goToPayment() {
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();

    if (name === "") {
        showToast("Please enter your full name for delivery.", "warning", "👤");
        document.getElementById("customerName").focus();
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        showToast("Please enter a valid 10-digit mobile number.", "warning", "📞");
        document.getElementById("customerPhone").focus();
        return;
    }

    if (address === "") {
        showToast("Please enter your delivery address.", "warning", "📍");
        document.getElementById("customerAddress").focus();
        return;
    }

    // Save details to localStorage for convenience
    localStorage.setItem("smartbakes_cust_name", name);
    localStorage.setItem("smartbakes_cust_phone", phone);
    localStorage.setItem("smartbakes_cust_address", address);

    document.getElementById("checkoutPage").style.display = "none";
    document.getElementById("paymentPage").style.display = "block";

    displayPayment();
    window.scrollTo(0, 0);
}

/* ================= PAYMENT OPTIONS & QR CODE ================= */
function selectPaymentMethod(method) {
    selectedPayment = method;

    const tabUpi = document.getElementById("tabUpi");
    const tabCod = document.getElementById("tabCod");
    const upiSection = document.getElementById("upiPaymentSection");
    const codSection = document.getElementById("codPaymentSection");
    const confirmBtn = document.getElementById("confirmPaymentBtn");

    if (method === "upi") {
        tabUpi.classList.add("active");
        tabCod.classList.remove("active");
        upiSection.style.display = "block";
        codSection.style.display = "none";
        confirmBtn.textContent = "✓ Confirm UPI Payment & Place Order";
    } else {
        tabCod.classList.add("active");
        tabUpi.classList.remove("active");
        upiSection.style.display = "none";
        codSection.style.display = "block";
        confirmBtn.textContent = "✓ Confirm Cash on Delivery Order";
    }
}

function displayPayment() {
    const box = document.getElementById("paymentItems");
    if (!box) return;

    box.innerHTML = "";
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const payable = Math.max(0, subtotal - discount + deliveryFee);

    cart.forEach(item => {
        box.innerHTML += `
            <div class="checkout-item">
                <span>${item.name} × ${item.quantity}</span>
                <strong>₹${item.price * item.quantity}</strong>
            </div>
        `;
    });

    document.getElementById("paymentSubtotal").textContent = "₹" + subtotal;

    const discountRow = document.getElementById("paymentDiscountRow");
    if (discountRow) {
        if (discount > 0) {
            discountRow.style.display = "flex";
            document.getElementById("paymentDiscount").textContent = "-₹" + discount;
        } else {
            discountRow.style.display = "none";
        }
    }

    document.getElementById("paymentDeliveryFee").textContent = deliveryFee === 0 ? "FREE" : "₹" + deliveryFee;
    document.getElementById("paymentTotal").textContent = "₹" + payable;

    // Update UPI Direct App Deep Link with dynamically calculated total
    const upiLink = document.getElementById("payViaUpiAppBtn");
    if (upiLink) {
        const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_CONFIG.upiId)}&pn=${encodeURIComponent(UPI_CONFIG.payeeName)}&am=${payable}&cu=INR&tn=SmartBakes_Bakery_Order`;
        upiLink.href = upiUrl;
    }
}

function copyUpiId() {
    const upiId = UPI_CONFIG.upiId;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(upiId).then(() => {
            showToast(`Copied UPI ID: <strong>${upiId}</strong>`, "success", "📋");
        }).catch(() => {
            fallbackCopy(upiId);
        });
    } else {
        fallbackCopy(upiId);
    }
}

function fallbackCopy(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast(`Copied UPI ID: <strong>${text}</strong>`, "success", "📋");
}

function backToShop() {
    document.getElementById("checkoutPage").style.display = "none";
    document.getElementById("paymentPage").style.display = "none";
    document.getElementById("successPage").style.display = "none";
    document.getElementById("shopPage").style.display = "block";

    displayProducts();
    window.scrollTo(0, 0);
}

function backToCheckout() {
    document.getElementById("paymentPage").style.display = "none";
    document.getElementById("checkoutPage").style.display = "block";

    displayCheckout();
    window.scrollTo(0, 0);
}

/* ================= ORDER COMPLETION & INVOICE ================= */
function paymentCompleted() {
    const name = document.getElementById("customerName")?.value.trim() || "Valued Customer";
    const phone = document.getElementById("customerPhone")?.value.trim() || "";
    const address = document.getElementById("customerAddress")?.value.trim() || "";
    const slot = document.getElementById("deliveryTimeSlot")?.value || "Standard";
    const note = document.getElementById("orderNote")?.value.trim() || "";
    const utr = document.getElementById("transactionUtr")?.value.trim() || "";

    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const finalTotal = Math.max(0, subtotal - discount + deliveryFee);

    const orderId = "SB" + Math.floor(100000 + Math.random() * 900000);
    const orderDate = new Date().toLocaleString("en-IN", {
        day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
    });

    const orderItemsCopy = [...cart];

    latestOrder = {
        orderId,
        date: orderDate,
        customerName: name,
        phone,
        address,
        slot,
        note,
        paymentMethod: selectedPayment === 'upi' ? 'UPI / QR Scan' : 'Cash on Delivery (COD)',
        utr: utr ? utr : (selectedPayment === 'upi' ? 'Self-Verified' : 'N/A'),
        items: orderItemsCopy,
        subtotal,
        discount,
        couponCode: appliedCoupon ? appliedCoupon.code : null,
        deliveryFee,
        total: finalTotal,
        status: "Order Confirmed 🎂"
    };

    // Save to order history in localStorage
    saveOrderToHistory(latestOrder);

    // Display Success Screen
    document.getElementById("paymentPage").style.display = "none";
    document.getElementById("successPage").style.display = "flex";

    let itemsListHtml = orderItemsCopy.map(i => `• ${i.name} (Qty: ${i.quantity}) - ₹${i.price * i.quantity}`).join("<br>");

    document.getElementById("successDetails").innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #ebdcd0; padding-bottom:8px;">
            <strong>Order ID: #${orderId}</strong>
            <span style="color:var(--text-muted); font-size:12px;">${orderDate}</span>
        </div>
        <strong>Customer:</strong> ${name} (${phone})<br>
        <strong>Delivery To:</strong> ${address}<br>
        <strong>Delivery Slot:</strong> ${slot}<br>
        ${note ? `<strong>Instructions:</strong> <em>"${note}"</em><br>` : ""}
        <div style="margin: 10px 0; padding: 8px; background: white; border-radius: 8px; border: 1px solid var(--border-color);">
            <strong>Items Ordered:</strong><br>
            ${itemsListHtml}
        </div>
        <strong>Payment Method:</strong> ${latestOrder.paymentMethod} ${utr ? `(Ref: ${utr})` : ""}<br>
        ${discount > 0 ? `<strong>Coupon Discount:</strong> -₹${discount}<br>` : ""}
        <strong style="font-size: 15px; color: var(--primary);">Total Paid / Payable: ₹${finalTotal}</strong>
    `;

    showToast(`Order #${orderId} confirmed successfully!`, "success", "🎉", 5000);

    // Clear cart
    cart = [];
    appliedCoupon = null;
    saveCart();
    updateCartUI();
    updateOrdersBadge();
    window.scrollTo(0, 0);
}

/* ================= WHATSAPP ORDER DISPATCH ================= */
function sendOrderToWhatsApp() {
    if (!latestOrder) {
        showToast("No active order details found.", "warning", "⚠️");
        return;
    }

    const itemsText = latestOrder.items
        .map(i => `  • ${i.name} x ${i.quantity} = ₹${i.price * i.quantity}`)
        .join("\n");

    const message =
        `🍰 *NEW ORDER PLACED - SMART BAKES*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `🆔 *Order ID:* #${latestOrder.orderId}\n` +
        `📅 *Date:* ${latestOrder.date}\n\n` +
        `👤 *Customer Name:* ${latestOrder.customerName}\n` +
        `📞 *Phone:* ${latestOrder.phone}\n` +
        `📍 *Delivery Address:* ${latestOrder.address}\n` +
        `⏰ *Preferred Slot:* ${latestOrder.slot}\n` +
        (latestOrder.note ? `📝 *Note:* ${latestOrder.note}\n` : "") +
        `\n🛒 *ITEMS ORDERED:*\n${itemsText}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `💰 *Subtotal:* ₹${latestOrder.subtotal}\n` +
        (latestOrder.discount > 0 ? `🏷️ *Coupon Discount:* -₹${latestOrder.discount}\n` : "") +
        `🚚 *Delivery Fee:* ₹${latestOrder.deliveryFee}\n` +
        `💳 *Total Amount:* ₹${latestOrder.total}\n` +
        `💵 *Payment Mode:* ${latestOrder.paymentMethod}\n` +
        (latestOrder.utr && latestOrder.utr !== 'N/A' ? `🔢 *UPI Ref/UTR:* ${latestOrder.utr}\n` : "") +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `✅ _Please confirm order preparation and dispatch!_`;

    const whatsappUrl = `https://wa.me/${UPI_CONFIG.bakeryWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    showToast("Opening WhatsApp to send order dispatch...", "success", "💬");
}

/* ================= PRINT INVOICE / RECEIPT ================= */
function printOrderReceipt() {
    if (!latestOrder) {
        showToast("No active order to print.", "warning", "🖨️");
        return;
    }

    const printWindow = window.open("", "_blank", "width=600,height=750");
    const itemsRows = latestOrder.items
        .map(i => `<tr><td>${i.name}</td><td>${i.quantity}</td><td>₹${i.price}</td><td>₹${i.price * i.quantity}</td></tr>`)
        .join("");

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Receipt - Order #${latestOrder.orderId}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 25px; color: #333; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 12px; margin-bottom: 16px; }
                .header h1 { margin: 0; color: #392218; font-size: 22px; }
                .header p { margin: 4px 0; font-size: 12px; }
                table { width: 100%; border-collapse: collapse; margin: 15px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; font-size: 12px; text-align: left; }
                th { background: #f5eee8; }
                .total-section { text-align: right; margin-top: 15px; font-size: 13px; line-height: 1.6; }
                .footer { text-align: center; margin-top: 30px; font-size: 11px; color: #777; border-top: 1px dashed #ccc; padding-top: 10px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>✦ SMART BAKES ✦</h1>
                <p>Premium Bakery & Cafe</p>
                <p>Order #${latestOrder.orderId} | Date: ${latestOrder.date}</p>
            </div>
            <div>
                <strong>Customer:</strong> ${latestOrder.customerName} (${latestOrder.phone})<br>
                <strong>Delivery Address:</strong> ${latestOrder.address}<br>
                <strong>Slot:</strong> ${latestOrder.slot}<br>
                <strong>Payment:</strong> ${latestOrder.paymentMethod}
            </div>
            <table>
                <thead>
                    <tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>
                </thead>
                <tbody>
                    ${itemsRows}
                </tbody>
            </table>
            <div class="total-section">
                Subtotal: ₹${latestOrder.subtotal}<br>
                ${latestOrder.discount > 0 ? `Discount: -₹${latestOrder.discount}<br>` : ""}
                Delivery Fee: ₹${latestOrder.deliveryFee}<br>
                <strong>Grand Total: ₹${latestOrder.total}</strong>
            </div>
            <div class="footer">
                Thank you for choosing Smart Bakes! Handcrafted with love.
            </div>
            <script>
                window.onload = function() { window.print(); }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

/* ================= MY ORDERS TRACKING MODAL ================= */
function saveOrderToHistory(order) {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
    } catch (e) {
        orders = [];
    }
    orders.unshift(order);
    localStorage.setItem("smartbakes_orders", JSON.stringify(orders));
}

function updateOrdersBadge() {
    try {
        const orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
        const badge = document.getElementById("ordersBadge");
        if (badge) {
            if (orders.length > 0) {
                badge.style.display = "inline-block";
                badge.textContent = orders.length;
            } else {
                badge.style.display = "none";
            }
        }
    } catch (e) {}
}

function openOrdersModal() {
    const modal = document.getElementById("ordersModal");
    const container = document.getElementById("ordersList");
    if (!modal || !container) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("smartbakes_orders") || "[]");
    } catch (e) {
        orders = [];
    }

    container.innerHTML = "";
    if (orders.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
                <span style="font-size: 40px; display: block; margin-bottom: 8px;">📦</span>
                <strong>No past orders placed yet</strong>
                <p style="font-size: 12px; margin-top: 4px;">Your placed orders will appear here for easy live tracking!</p>
            </div>
        `;
    } else {
        orders.forEach(order => {
            const itemsSummary = order.items.map(i => `${i.name} (x${i.quantity})`).join(", ");
            container.innerHTML += `
                <div class="order-history-card">
                    <div class="order-card-header">
                        <strong>Order #${order.orderId}</strong>
                        <span class="order-status-tag">${order.status || "Confirmed"}</span>
                    </div>
                    <div style="font-size: 11px; color: var(--text-muted);">${order.date}</div>
                    <div class="order-card-items">
                        🛒 ${itemsSummary}
                    </div>
                    <div class="order-card-footer">
                        <span>Mode: <b>${order.paymentMethod}</b></span>
                        <strong style="color: var(--primary); font-size: 14px;">₹${order.total}</strong>
                    </div>
                </div>
            `;
        });
    }

    modal.style.display = "flex";
}

function closeOrdersModal() {
    const modal = document.getElementById("ordersModal");
    if (modal) modal.style.display = "none";
}