/* ================================================================= */
/* ==================== ROYAL BAKES EXPANDED CATALOG =============== */
/* ================================================================= */
const defaultProducts = [
    // --- CAKES (6 Items) ---
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
        rating: "5.0 ★ (350+)",
        weights: [
            { label: "0.5 kg", multiplier: 1, price: 350 },
            { label: "1.0 kg", multiplier: 1.85, price: 650 },
            { label: "2.0 kg", multiplier: 3.42, price: 1200 }
        ],
        customizable: true,
        allergens: "Contains Dairy, Gluten"
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
        rating: "4.9 ★ (220+)",
        weights: [
            { label: "0.5 kg", multiplier: 1, price: 400 },
            { label: "1.0 kg", multiplier: 1.85, price: 740 },
            { label: "2.0 kg", multiplier: 3.5, price: 1400 }
        ],
        customizable: true,
        allergens: "Contains Dairy, Gluten"
    },
    {
        id: 3,
        name: "Classic Madagascar Vanilla Cake",
        category: "cakes",
        price: 250,
        originalPrice: 300,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=90",
        description: "Fluffy vanilla sponge infused with organic Madagascar vanilla beans and whipped fresh cream frosting.",
        isVeg: true,
        stock: 20,
        minStock: 5,
        prepTime: "20 mins",
        bestseller: false,
        rating: "4.7 ★ (65+)",
        weights: [
            { label: "0.5 kg", multiplier: 1, price: 250 },
            { label: "1.0 kg", multiplier: 1.84, price: 460 },
            { label: "2.0 kg", multiplier: 3.52, price: 880 }
        ],
        customizable: true,
        allergens: "Contains Dairy, Gluten"
    },
    {
        id: 4,
        name: "German Black Forest Gateau",
        category: "cakes",
        price: 380,
        originalPrice: 450,
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=90",
        description: "Classic German chocolate sponge soaked in cherry syrup, loaded with whipped cream and Maraschino cherries.",
        isVeg: false,
        stock: 12,
        minStock: 3,
        prepTime: "25 mins",
        bestseller: false,
        rating: "4.8 ★ (140+)",
        weights: [
            { label: "0.5 kg", multiplier: 1, price: 380 },
            { label: "1.0 kg", multiplier: 1.84, price: 700 },
            { label: "2.0 kg", multiplier: 3.55, price: 1350 }
        ],
        customizable: true,
        allergens: "Contains Egg, Dairy, Gluten"
    },
    {
        id: 15,
        name: "Fresh Tropical Pineapple Cake",
        category: "cakes",
        price: 320,
        originalPrice: 380,
        image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=90",
        description: "Soft vanilla sponge infused with real pineapple compote, topped with candied pineapple cherries and light cream.",
        isVeg: true,
        stock: 16,
        minStock: 4,
        prepTime: "20 mins",
        bestseller: false,
        rating: "4.8 ★ (110+)",
        weights: [
            { label: "0.5 kg", multiplier: 1, price: 320 },
            { label: "1.0 kg", multiplier: 1.84, price: 590 },
            { label: "2.0 kg", multiplier: 3.43, price: 1100 }
        ],
        customizable: true,
        allergens: "Contains Dairy, Gluten"
    },
    {
        id: 16,
        name: "Lotus Biscoff Caramel Cake",
        category: "cakes",
        price: 450,
        originalPrice: 520,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=90",
        description: "Layers of spiced Biscoff sponge layered with speculoos buttercream, salted caramel drip and crushed Lotus cookies.",
        isVeg: true,
        stock: 10,
        minStock: 3,
        prepTime: "30 mins",
        bestseller: true,
        rating: "5.0 ★ (180+)",
        weights: [
            { label: "0.5 kg", multiplier: 1, price: 450 },
            { label: "1.0 kg", multiplier: 1.84, price: 830 },
            { label: "2.0 kg", multiplier: 3.55, price: 1600 }
        ],
        customizable: true,
        allergens: "Contains Dairy, Gluten, Soy"
    },

    // --- PASTRIES & BROWNIES (4 Items) ---
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
        rating: "4.9 ★ (88+)",
        allergens: "Contains Nuts, Dairy, Gluten"
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
        rating: "4.9 ★ (310+)",
        allergens: "Contains Nuts, Dairy"
    },
    {
        id: 17,
        name: "Blueberry Glaze Cheesecake Slice",
        category: "pastries",
        price: 110,
        originalPrice: 130,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=90",
        description: "Velvety New York style baked cheesecake slice topped with wild blueberry compote on graham cracker crust.",
        isVeg: true,
        stock: 18,
        minStock: 4,
        prepTime: "Chilled Ready",
        bestseller: false,
        rating: "4.8 ★ (95+)",
        allergens: "Contains Dairy, Gluten"
    },
    {
        id: 18,
        name: "Classic Italian Tiramisu Slice",
        category: "pastries",
        price: 120,
        originalPrice: 140,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=90",
        description: "Espresso-dipped savoiardi ladyfingers layered with whipped mascarpone cream and dusted with raw cocoa.",
        isVeg: true,
        stock: 14,
        minStock: 3,
        prepTime: "Chilled Ready",
        bestseller: true,
        rating: "4.9 ★ (120+)",
        allergens: "Contains Dairy, Gluten"
    },

    // --- SNACKS & PUFFS (4 Items) ---
    {
        id: 7,
        name: "Crispy Golden Veg Puff",
        category: "snacks",
        price: 20,
        originalPrice: 25,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=90",
        description: "Golden flaky puff pastry packed with spiced potato, green pea masala and South Indian aromatics.",
        isVeg: true,
        stock: 45,
        minStock: 10,
        prepTime: "Fresh Batch 11 AM",
        bestseller: true,
        rating: "4.8 ★ (190+)",
        allergens: "Contains Gluten"
    },
    {
        id: 19,
        name: "Spicy Country Egg Puff",
        category: "snacks",
        price: 25,
        originalPrice: 30,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
        description: "Crisp flaky pastry enveloping roasted whole boiled farm egg with caramelized onion and pepper gravy.",
        isVeg: false,
        stock: 35,
        minStock: 8,
        prepTime: "Fresh Batch 11 AM",
        bestseller: true,
        rating: "4.9 ★ (240+)",
        allergens: "Contains Egg, Gluten"
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
        rating: "4.9 ★ (75+)",
        allergens: "Contains Dairy, Gluten"
    },
    {
        id: 20,
        name: "Flaky Chicken Kheema Puff",
        category: "snacks",
        price: 45,
        originalPrice: 55,
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=90",
        description: "Multi-layered puff pastry filled with minced tender chicken cooked with shallots, ginger, and chettinad spices.",
        isVeg: false,
        stock: 25,
        minStock: 5,
        prepTime: "Fresh Batch 12 PM",
        bestseller: true,
        rating: "4.9 ★ (160+)",
        allergens: "Contains Meat, Gluten"
    },

    // --- BUNS & BREADS (4 Items) ---
    {
        id: 9,
        name: "Sweet Fruit Jam Bun",
        category: "buns",
        price: 20,
        originalPrice: 25,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=90",
        description: "Soft bakery bread bun baked with pure butter and filled with mixed fruit berry jam.",
        isVeg: true,
        stock: 40,
        minStock: 10,
        prepTime: "Fresh Daily",
        bestseller: true,
        rating: "4.9 ★ (210+)",
        allergens: "Contains Gluten, Dairy"
    },
    {
        id: 10,
        name: "Fresh Coconut Cardamom Bun",
        category: "buns",
        price: 25,
        originalPrice: 30,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=90",
        description: "Oven-fresh bun stuffed with fresh sweet grated coconut, desi ghee, and fragrant green cardamom.",
        isVeg: true,
        stock: 35,
        minStock: 8,
        prepTime: "Fresh Daily",
        bestseller: false,
        rating: "4.8 ★ (90+)",
        allergens: "Contains Gluten, Dairy"
    },
    {
        id: 21,
        name: "Fresh Milk Bread Loaf (400g)",
        category: "buns",
        price: 40,
        originalPrice: 45,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=90",
        description: "Daily baked soft sandwich bread loaf made with pure whole milk and fine wheat flour. Preservative-free.",
        isVeg: true,
        stock: 30,
        minStock: 6,
        prepTime: "Morning Bake 7 AM",
        bestseller: true,
        rating: "4.8 ★ (175+)",
        allergens: "Contains Gluten, Dairy"
    },
    {
        id: 22,
        name: "Artisanal French Garlic Baguette",
        category: "buns",
        price: 65,
        originalPrice: 75,
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=900&q=90",
        description: "Crusty golden artisanal baguette infused with roasted garlic butter, parsley, and sea salt.",
        isVeg: true,
        stock: 18,
        minStock: 4,
        prepTime: "Fresh Batch",
        bestseller: false,
        rating: "4.7 ★ (80+)",
        allergens: "Contains Gluten, Dairy"
    },

    // --- COOKIES & BISCUITS (3 Items) ---
    {
        id: 11,
        name: "Butter Cashew Cookies (Box 250g)",
        category: "cookies",
        price: 110,
        originalPrice: 130,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=90",
        description: "Melt-in-mouth bakery butter cookies loaded with roasted whole cashews and real vanilla.",
        isVeg: true,
        stock: 22,
        minStock: 5,
        prepTime: "Ready to Ship",
        bestseller: true,
        rating: "4.9 ★ (130+)",
        allergens: "Contains Nuts, Dairy, Gluten"
    },
    {
        id: 23,
        name: "Double Chocochip Cookies (Box 250g)",
        category: "cookies",
        price: 120,
        originalPrice: 140,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=90",
        description: "Rich dark cocoa biscuits generously studded with Hershey's semi-sweet chocolate morsels.",
        isVeg: true,
        stock: 20,
        minStock: 4,
        prepTime: "Ready to Ship",
        bestseller: true,
        rating: "4.9 ★ (150+)",
        allergens: "Contains Dairy, Gluten"
    },
    {
        id: 24,
        name: "Traditional Osmania Chai Biscuits (Box 300g)",
        category: "cookies",
        price: 85,
        originalPrice: 100,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=90",
        description: "Signature sweet-and-salty golden biscuits baked with custard powder and cardamom. The ultimate tea-time companion.",
        isVeg: true,
        stock: 28,
        minStock: 6,
        prepTime: "Ready to Ship",
        bestseller: false,
        rating: "4.8 ★ (115+)",
        allergens: "Contains Dairy, Gluten"
    },

    // --- DESSERTS & CUPS (3 Items) ---
    {
        id: 12,
        name: "Royal Mango Cheesecake Cup",
        category: "desserts",
        price: 95,
        originalPrice: 120,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=90",
        description: "No-bake Alphonso mango cheesecake layered with crushed biscuit crumble and sweet mango glaze.",
        isVeg: true,
        stock: 16,
        minStock: 3,
        prepTime: "Chilled Ready",
        bestseller: false,
        rating: "4.9 ★ (65+)",
        allergens: "Contains Dairy, Gluten"
    },
    {
        id: 25,
        name: "Belgian Chocolate Mousse Cup",
        category: "desserts",
        price: 85,
        originalPrice: 100,
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=90",
        description: "Silky airy mousse prepared from 54% dark chocolate ganache, topped with whipped vanilla cream and gold dust.",
        isVeg: true,
        stock: 18,
        minStock: 4,
        prepTime: "Chilled Ready",
        bestseller: true,
        rating: "4.9 ★ (140+)",
        allergens: "Contains Dairy"
    },
    {
        id: 26,
        name: "Gulab Jamun Trifle Parfait Cup",
        category: "desserts",
        price: 75,
        originalPrice: 90,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=90",
        description: "Fusion dessert cup with layers of soft saffron-infused gulab jamun, rabdi cream, and roasted pistachio slivers.",
        isVeg: true,
        stock: 20,
        minStock: 4,
        prepTime: "Chilled Ready",
        bestseller: false,
        rating: "4.8 ★ (85+)",
        allergens: "Contains Dairy, Nuts"
    },

    // --- BEVERAGES (4 Items) ---
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
        rating: "4.9 ★ (400+)",
        allergens: "None"
    },
    {
        id: 14,
        name: "Cold Brew Caramel Iced Coffee",
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
        rating: "4.8 ★ (110+)",
        allergens: "Contains Dairy"
    },
    {
        id: 27,
        name: "Royal Rose Badam Milk (Chilled Glass)",
        category: "drinks",
        price: 50,
        originalPrice: 60,
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=900&q=90",
        description: "Chilled rich cow milk flavored with Damascus rose syrup, crushed almonds, saffron, and sweet basil seeds.",
        isVeg: true,
        stock: 30,
        minStock: 6,
        prepTime: "Instant Chilled",
        bestseller: true,
        rating: "4.9 ★ (195+)",
        allergens: "Contains Dairy, Nuts"
    },
    {
        id: 28,
        name: "Artisanal Masala Chai Flask (Serves 2)",
        category: "drinks",
        price: 55,
        originalPrice: 65,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=90",
        description: "Piping hot artisanal tea brewed with fresh crushed ginger, green cardamom, cloves, and full-cream milk.",
        isVeg: true,
        stock: 25,
        minStock: 5,
        prepTime: "Fresh Brewed",
        bestseller: false,
        rating: "4.9 ★ (220+)",
        allergens: "Contains Dairy"
    }
];

let cart = [];
try {
    cart = JSON.parse(localStorage.getItem("royalbakes_cart") || "[]");
} catch (e) {
    cart = [];
}
let appliedCoupon = null;
let currentPaymentMethod = "upi";
let currentFulfillmentMode = "delivery";
let currentOrder = null;
let currentStoreCategory = "all";
let currentDietFilter = "all";
let currentPriceTier = "all";
let currentBestsellerOnly = false;
let currentInStockOnly = false;
let currentSortOption = "featured";
let currentKdsFilter = "all";
let activeStaffRole = localStorage.getItem("royalbakes_staff_role") || null;
let isChimeMuted = localStorage.getItem("royalbakes_chime_muted") === "true";

// Quick view modal dynamic state
let qvActiveProduct = null;
let qvSelectedWeight = null;
let qvSelectedEggless = true;

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

// Setup Cloud SSE Listener for Cross-Device Real-Time Sync (streaming only genuine new events with since=now)
function initCloudRealtimeSync() {
    try {
        const orderSource = new EventSource(NTFY_CHANNEL_ORDERS + "/sse?since=now");
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

        const statusSource = new EventSource(NTFY_CHANNEL_STATUS + "/sse?since=now");
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
        updateCartUI();
    } else if (viewName === "checkout") {
        if (cart.length === 0) {
            showToast("Your shopping basket is empty! Add treats to proceed.", "info");
            showView("customer");
            return;
        }
        document.getElementById("viewCheckout")?.classList.add("active");
        renderCheckoutSummary();
    } else if (viewName === "success") {
        if (!currentOrder) {
            const lastActiveId = localStorage.getItem("royalbakes_active_order_id");
            if (lastActiveId) {
                let orders = [];
                try { orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]"); } catch (e) {}
                currentOrder = orders.find(o => String(o.orderId) === String(lastActiveId)) || null;
            }
        }
        if (currentOrder) {
            document.getElementById("viewSuccess")?.classList.add("active");
            renderSuccessReceipt();
        } else {
            showToast("No active order receipt to display. Showing store menu.", "info");
            showView("customer");
            return;
        }
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
    let cust = null;
    try { cust = JSON.parse(localStorage.getItem("royalbakes_customer")); } catch (e) {}

    const card = document.getElementById("custProfileCard");
    const form = document.getElementById("custLoginForm");
    const sub = document.getElementById("custModalSub");
    const title = document.getElementById("custModalTitle");

    if (cust) {
        if (card) card.style.display = "block";
        if (form) form.style.display = "none";
        if (sub) sub.textContent = "CUSTOMER ACCOUNT";
        if (title) title.textContent = `Hello, ${cust.name}!`;

        const dName = document.getElementById("custProfileDisplayName");
        const dPhone = document.getElementById("custProfileDisplayPhone");
        const dAddr = document.getElementById("custProfileDisplayAddress");
        const dOrders = document.getElementById("custProfileOrdersCount");

        if (dName) dName.textContent = cust.name;
        if (dPhone) dPhone.textContent = `📞 +91 ${cust.phone}`;
        if (dAddr) dAddr.textContent = cust.address || "No default address saved yet.";

        let orders = [];
        try { orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]"); } catch (e) {}
        const count = orders.filter(o => o.customerPhone === cust.phone || (o.customerName && o.customerName.toLowerCase() === cust.name.toLowerCase())).length;
        if (dOrders) dOrders.textContent = count;
    } else {
        if (card) card.style.display = "none";
        if (form) form.style.display = "block";
        if (sub) sub.textContent = "CUSTOMER SIGN IN";
        if (title) title.textContent = "Welcome to Royal Bakes";
        const submitBtn = document.getElementById("custLoginSubmitBtn");
        if (submitBtn) submitBtn.textContent = "Save Profile & Continue 🛍️";
    }

    const modal = document.getElementById("custAuthModalOverlay");
    if (modal) modal.style.display = "flex";
}

function closeCustomerAuthModal() {
    const modal = document.getElementById("custAuthModalOverlay");
    if (modal) modal.style.display = "none";
}

function toggleEditCustomerProfile(isEdit) {
    const card = document.getElementById("custProfileCard");
    const form = document.getElementById("custLoginForm");
    const sub = document.getElementById("custModalSub");
    const title = document.getElementById("custModalTitle");
    const submitBtn = document.getElementById("custLoginSubmitBtn");

    if (isEdit) {
        if (card) card.style.display = "none";
        if (form) form.style.display = "block";
        if (sub) sub.textContent = "EDIT PROFILE";
        if (title) title.textContent = "Update Customer Details";
        if (submitBtn) submitBtn.textContent = "💾 Update Profile";

        let cust = null;
        try { cust = JSON.parse(localStorage.getItem("royalbakes_customer")); } catch (e) {}
        if (cust) {
            const n = document.getElementById("custLoginName");
            const p = document.getElementById("custLoginPhone");
            const a = document.getElementById("custLoginAddress");
            if (n) n.value = cust.name || "";
            if (p) p.value = cust.phone || "";
            if (a) a.value = cust.address || "";
        }
    } else {
        openCustomerAuthModal();
    }
}

function handleCustomerLogin(e) {
    e.preventDefault();
    const name = document.getElementById("custLoginName").value.trim();
    const phone = document.getElementById("custLoginPhone").value.trim();
    const address = document.getElementById("custLoginAddress")?.value.trim() || "";

    if (name.length >= 2 && phone.length === 10 && /^[6-9]\d{9}$/.test(phone)) {
        localStorage.setItem("royalbakes_customer", JSON.stringify({ name, phone, address }));
        closeCustomerAuthModal();
        applyCustomerProfile();
        showToast(`Welcome ${name}! Profile Saved.`, "success");
    } else {
        showToast("Please enter full name and valid 10-digit Indian mobile number.", "error");
    }
}

function handleCustomerLogout() {
    localStorage.removeItem("royalbakes_customer");
    const textEl = document.getElementById("custLoginNavText");
    if (textEl) textEl.textContent = "👤 Customer Login";
    closeCustomerAuthModal();
    showToast("Signed out of Customer Account 🚪", "info");
    updateCustomerBadges();
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
        const chkAddress = document.getElementById("chkAddress");

        if (textEl) textEl.textContent = `👤 ${cust.name}`;
        if (chkName && !chkName.value) chkName.value = cust.name;
        if (chkPhone && !chkPhone.value) chkPhone.value = cust.phone;
        if (chkAddress && !chkAddress.value && cust.address) chkAddress.value = cust.address;
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
    
    let overrides = {};
    try {
        overrides = JSON.parse(localStorage.getItem("royalbakes_product_overrides") || "{}");
    } catch (e) {}

    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (e) {}

    const list = [...defaultProducts, ...custom];
    return list.map(p => {
        let merged = { ...p };
        if (overrides[p.id]) {
            merged = { ...merged, ...overrides[p.id] };
        }
        if (invMap[p.id] !== undefined) {
            merged.stock = invMap[p.id];
        }
        return merged;
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
        
        let matchesPrice = true;
        if (currentPriceTier === "under50") matchesPrice = p.price < 50;
        else if (currentPriceTier === "50-150") matchesPrice = p.price >= 50 && p.price <= 150;
        else if (currentPriceTier === "150-350") matchesPrice = p.price > 150 && p.price <= 350;
        else if (currentPriceTier === "above350") matchesPrice = p.price > 350;

        const matchesBestseller = !currentBestsellerOnly || p.bestseller;
        const matchesInStock = !currentInStockOnly || p.stock > 0;

        return matchesCat && matchesDiet && matchesQuery && matchesPrice && matchesBestseller && matchesInStock;
    });

    if (currentSortOption === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSortOption === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSortOption === "rating") {
        filtered.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    } else {
        // Featured: Bestsellers first
        filtered.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <span style="font-size: 40px; display: block; margin-bottom: 10px;">🔍</span>
                <h3>No bakery specialties found</h3>
                <p style="color: var(--text-muted); font-size: 13px;">Try adjusting your keyword or reset filters to see all fresh treats.</p>
                <button class="choice-btn primary" onclick="resetStoreFilters()" style="margin-top:15px; display:inline-block; width:auto; padding:10px 24px;">Reset All Filters</button>
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        const isOutOfStock = product.stock <= 0;
        const isLowStock = product.stock > 0 && product.stock <= (product.minStock || 5);
        const hasWeights = product.weights && product.weights.length > 0;
        
        // Find existing standard cart items
        const cartItemsForProd = cart.filter(i => i.id === product.id);
        const totalCartQty = cartItemsForProd.reduce((sum, i) => sum + i.quantity, 0);

        let buttonHtml = "";
        if (isOutOfStock) {
            buttonHtml = `<button class="add-cart-btn" disabled style="background:#cbd5e0; cursor:not-allowed;">Sold Out</button>`;
        } else if (hasWeights) {
            buttonHtml = `
                <button class="add-cart-btn customize-btn" onclick="openQuickView(${product.id})">
                    🎂 Select Size & Add
                </button>
            `;
        } else if (totalCartQty > 0) {
            const firstItem = cartItemsForProd[0];
            buttonHtml = `
                <div class="quantity-stepper">
                    <button onclick="updateCartQuantity('${firstItem.cartItemId}', -1)">−</button>
                    <span>${totalCartQty}</span>
                    <button onclick="updateCartQuantity('${firstItem.cartItemId}', 1)">+</button>
                </div>
            `;
        } else {
            buttonHtml = `<button class="add-cart-btn" onclick="addToCart(${product.id})">+ Add to Basket</button>`;
        }

        grid.innerHTML += `
            <div class="product-card">
                <div class="product-image-container" onclick="openQuickView(${product.id})">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="diet-pill">${product.isVeg ? "🟢 Pure Veg" : "🔴 Non-Veg"}</span>
                    ${product.bestseller ? `<span class="bestseller-pill">BESTSELLER</span>` : ""}
                    ${product.prepTime ? `<span class="prep-time-tag">⏱️ ${product.prepTime}</span>` : ""}
                    ${isOutOfStock ? `<div class="out-of-stock-overlay">OUT OF STOCK</div>` : ""}
                </div>
                <div class="product-body">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                            <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
                        </div>
                        <p class="product-desc">${product.description || ""}</p>
                        ${hasWeights ? `<div class="product-weight-hint">⚖️ Sizes: 0.5 kg, 1 kg, 2 kg</div>` : ""}
                        ${product.allergens ? `<div class="product-allergen-badge">⚠️ ${product.allergens}</div>` : ""}
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

function handlePriceTierFilter(val) {
    currentPriceTier = val;
    renderStoreProducts();
}

function toggleBestsellerFilter(btn) {
    currentBestsellerOnly = !currentBestsellerOnly;
    if (btn) btn.classList.toggle("active", currentBestsellerOnly);
    renderStoreProducts();
}

function toggleInStockFilter(btn) {
    currentInStockOnly = !currentInStockOnly;
    if (btn) btn.classList.toggle("active", currentInStockOnly);
    renderStoreProducts();
}

function handleSortOption(val) {
    currentSortOption = val;
    renderStoreProducts();
}

function handleStoreSearch() {
    renderStoreProducts();
}

function resetStoreFilters() {
    currentStoreCategory = "all";
    currentDietFilter = "all";
    currentPriceTier = "all";
    currentBestsellerOnly = false;
    currentInStockOnly = false;
    currentSortOption = "featured";
    
    const searchInput = document.getElementById("storeSearchInput");
    if (searchInput) searchInput.value = "";
    
    const dietSelect = document.getElementById("dietFilterSelect");
    if (dietSelect) dietSelect.value = "all";
    
    const priceSelect = document.getElementById("priceTierSelect");
    if (priceSelect) priceSelect.value = "all";
    
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) sortSelect.value = "featured";

    document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
    const allPill = document.querySelector(".category-pill");
    if (allPill) allPill.classList.add("active");

    const bestBtn = document.getElementById("bestsellerFilterBtn");
    if (bestBtn) bestBtn.classList.remove("active");

    const stockBtn = document.getElementById("inStockFilterBtn");
    if (stockBtn) stockBtn.classList.remove("active");

    renderStoreProducts();
}

function openQuickView(prodId) {
    const product = getAllProducts().find(p => p.id === prodId);
    if (!product) return;

    qvActiveProduct = product;
    qvSelectedWeight = product.weights ? product.weights[0].label : null;
    qvSelectedEggless = product.isVeg;

    const modal = document.getElementById("productQuickViewModal");
    const body = document.getElementById("quickViewBody");
    if (!modal || !body) return;

    let initialPrice = product.price;
    if (qvSelectedWeight && product.weights) {
        const wObj = product.weights.find(w => w.label === qvSelectedWeight);
        if (wObj) initialPrice = wObj.price;
    }

    let weightsSelectorHtml = "";
    if (product.weights && product.weights.length > 0) {
        const weightButtons = product.weights.map((w, idx) => `
            <button
                type="button"
                class="weight-pill ${idx === 0 ? 'active' : ''}"
                onclick="handleQvWeightSelect('${w.label}', ${w.price}, this)"
            >
                <b>${w.label}</b> • ₹${w.price}
            </button>
        `).join("");

        weightsSelectorHtml = `
            <div class="qv-custom-block">
                <label style="font-weight:700; font-size:13px; display:block; margin-bottom:6px; color:var(--primary);">
                    Select Cake Size / Weight:
                </label>
                <div class="qv-weights-row">
                    ${weightButtons}
                </div>
            </div>
        `;
    }

    let customizationHtml = "";
    if (product.customizable) {
        customizationHtml = `
            <div class="qv-custom-block">
                <label for="qvCustomMsg" style="font-weight:700; font-size:13px; display:block; margin-bottom:6px; color:var(--primary);">
                    🎂 Message on Cake (Optional):
                </label>
                <input
                    type="text"
                    id="qvCustomMsg"
                    class="qv-msg-input"
                    maxlength="40"
                    placeholder="e.g. Happy 25th Birthday Priya!"
                >
                <small style="color:var(--text-muted); font-size:11px;">Complimentary message piped in fresh chocolate/cream.</small>
            </div>
            <div class="qv-custom-block" style="margin-top:10px;">
                <label style="font-weight:700; font-size:13px; display:flex; align-items:center; gap:8px; cursor:pointer;">
                    <input type="checkbox" id="qvEgglessToggle" ${product.isVeg ? 'checked' : ''} onchange="qvSelectedEggless = this.checked">
                    <span>🟢 100% Eggless Preparation</span>
                </label>
            </div>
        `;
    }

    body.innerHTML = `
        <div class="qv-img-box">
            <img src="${product.image}" alt="${product.name}">
            ${product.bestseller ? `<span class="bestseller-pill" style="top:14px; left:14px;">BESTSELLER</span>` : ""}
        </div>
        <div class="qv-details-box">
            <span class="diet-pill" style="position:static; display:inline-block; margin-bottom:8px;">${product.isVeg ? "🟢 Pure Vegetarian" : "🔴 Non-Vegetarian"}</span>
            <h2>${product.name}</h2>
            <div class="qv-price" id="qvDisplayPrice">₹${initialPrice} ${product.originalPrice ? `<small class="original-price" style="font-size:14px;">₹${product.originalPrice}</small>` : ""}</div>
            <p class="qv-desc">${product.description || "Artisanal freshly baked product prepared in Rayarpalayam."}</p>
            
            <div class="qv-meta-box">
                <div>⏱️ <b>Bake / Prep:</b> ${product.prepTime || "20 mins"}</div>
                <div>📦 <b>Available Stock:</b> ${product.stock} units</div>
                <div>⭐ <b>Customer Rating:</b> ${product.rating || "5.0 ★"}</div>
                ${product.allergens ? `<div>⚠️ <b>Allergens:</b> ${product.allergens}</div>` : ""}
            </div>

            ${weightsSelectorHtml}
            ${customizationHtml}

            <div style="margin-top:20px;">
                <button
                    class="place-order-btn"
                    onclick="submitQvAddToCart(${product.id})"
                    ${product.stock <= 0 ? 'disabled style="background:#cbd5e0; cursor:not-allowed;"' : ''}
                >
                    ${product.stock <= 0 ? 'Sold Out' : `🛒 Add to Basket • <span id="qvBtnPrice">₹${initialPrice}</span>`}
                </button>
            </div>
        </div>
    `;
    modal.style.display = "flex";
}

function handleQvWeightSelect(weightLabel, price, btn) {
    qvSelectedWeight = weightLabel;
    document.querySelectorAll(".weight-pill").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    const priceEl = document.getElementById("qvDisplayPrice");
    const btnPriceEl = document.getElementById("qvBtnPrice");
    if (priceEl) priceEl.innerHTML = `₹${price}`;
    if (btnPriceEl) btnPriceEl.textContent = `₹${price}`;
}

function submitQvAddToCart(productId) {
    const msgInput = document.getElementById("qvCustomMsg");
    const customMsg = msgInput ? msgInput.value.trim() : "";
    const eggless = qvSelectedEggless;

    addToCart(productId, qvSelectedWeight, customMsg, eggless);
    closeQuickViewModal();
}

function closeQuickViewModal() {
    const modal = document.getElementById("productQuickViewModal");
    if (modal) modal.style.display = "none";
}

/* ================================================================= */
/* ===================== CART DRAWER MANAGEMENT ==================== */
/* ================================================================= */
function addToCart(productId, selectedWeight = null, customMessage = "", isEggless = true) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;

    if (product.stock <= 0) {
        showToast("Sorry, this item is currently out of stock in the kitchen!", "error");
        return;
    }

    let itemPrice = product.price;
    if (selectedWeight && product.weights) {
        const wObj = product.weights.find(w => w.label === selectedWeight);
        if (wObj) itemPrice = wObj.price;
    }

    const trimmedMsg = (customMessage || "").trim();
    const cartItemId = `${product.id}_${selectedWeight || 'std'}_${encodeURIComponent(trimmedMsg)}`;

    const existing = cart.find(i => i.cartItemId === cartItemId);
    if (existing) {
        if (existing.quantity >= product.stock) {
            showToast(`Max available kitchen stock reached (${product.stock})!`, "info");
            return;
        }
        existing.quantity += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            name: product.name,
            category: product.category,
            price: itemPrice,
            basePrice: product.price,
            selectedWeight: selectedWeight,
            customMessage: trimmedMsg,
            isEggless: isEggless,
            image: product.image,
            quantity: 1,
            stock: product.stock,
            isVeg: isEggless !== undefined ? isEggless : product.isVeg
        });
    }

    localStorage.setItem("royalbakes_cart", JSON.stringify(cart));
    updateCartUI();
    const weightText = selectedWeight ? ` (${selectedWeight})` : "";
    showToast(`Added ${product.name}${weightText} to Basket 🛍️`, "success");
}

function updateCartQuantity(cartItemId, delta) {
    const idx = cart.findIndex(i => i.cartItemId === String(cartItemId));
    if (idx > -1) {
        const item = cart[idx];
        const product = getAllProducts().find(p => p.id === item.id);
        const maxStock = product ? product.stock : 99;
        if (delta > 0 && item.quantity >= maxStock) {
            showToast(`Max available kitchen stock reached (${maxStock})!`, "info");
            return;
        }
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart.splice(idx, 1);
        }
        localStorage.setItem("royalbakes_cart", JSON.stringify(cart));
    }
    updateCartUI();
}

function removeCartItem(cartItemId) {
    const idx = cart.findIndex(i => i.cartItemId === String(cartItemId));
    if (idx > -1) {
        const removed = cart.splice(idx, 1)[0];
        localStorage.setItem("royalbakes_cart", JSON.stringify(cart));
        updateCartUI();
        showToast(`Removed '${removed.name}' from basket 🗑️`, "info");
    }
}

function clearCart() {
    if (cart.length === 0) return;
    if (confirm("Are you sure you want to clear your shopping basket?")) {
        cart = [];
        appliedCoupon = null;
        localStorage.removeItem("royalbakes_cart");
        updateCartUI();
        showToast("Basket cleared 🗑️", "info");
    }
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const settings = getStoreSettings();

    const countBadge = document.getElementById("cartCountBadge");
    if (countBadge) countBadge.textContent = totalCount;

    // Free delivery tracker with dynamic threshold
    const threshold = settings.freeThreshold;
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
            progressText.innerHTML = `Add ₹${diff} more for <strong>FREE Delivery!</strong> (Min. ₹${threshold})`;
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
                    <p style="font-size: 12px; margin-top: 4px;">Explore our 28 fresh bakery specialties and add delicious treats!</p>
                </div>
            `;
        } else {
            drawerList.innerHTML = cart.map(item => `
                <div class="cart-item-row">
                    <img src="${item.image}" class="cart-item-img" alt="${item.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90';">
                    <div class="cart-item-info">
                        <strong>${item.name}</strong>
                        ${item.selectedWeight ? `<div class="cart-variant-badge">⚖️ ${item.selectedWeight} ${item.isEggless ? '• 🟢 Eggless' : ''}</div>` : ''}
                        ${item.customMessage ? `<div class="cart-msg-badge">📝 "${item.customMessage}"</div>` : ''}
                        <small>₹${item.price} each</small>
                    </div>
                    <div class="quantity-stepper">
                        <button onclick="updateCartQuantity('${item.cartItemId}', -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity('${item.cartItemId}', 1)">+</button>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <strong>₹${item.price * item.quantity}</strong>
                        <button class="cart-item-delete-btn" onclick="removeCartItem('${item.cartItemId}')" title="Remove item from basket">✕</button>
                    </div>
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
    } else if (appliedCoupon === "FLAT100" && subtotal >= 799) {
        discount = 100;
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

    // Update Mobile Floating Cart Bar
    const mobileBar = document.getElementById("mobileFloatingCartBar");
    const mCount = document.getElementById("mCartItemCount");
    const mSub = document.getElementById("mCartSubtotal");
    if (mobileBar && mCount && mSub) {
        const currentView = sessionStorage.getItem("royalbakes_view") || "landing";
        if (totalCount > 0 && currentView === "customer") {
            mobileBar.style.display = "flex";
            mCount.textContent = `${totalCount} ITEM${totalCount > 1 ? 'S' : ''}`;
            mSub.textContent = `₹${grandTotal}`;
        } else {
            mobileBar.style.display = "none";
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

function applyQuickCoupon(code) {
    const input = document.getElementById("drawerCouponInput");
    if (input) input.value = code;
    applyStoreCoupon();
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
        showToast("Coupon SWEET10 applied (10% OFF)! 🏷️", "success");
    } else if (code === "ROYAL50") {
        if (subtotal >= 399) {
            appliedCoupon = "ROYAL50";
            msg.style.color = "#2f855a";
            msg.textContent = "✓ 'ROYAL50' applied: Flat ₹50 Discount!";
            showToast("Coupon ROYAL50 applied (₹50 OFF)! 🏷️", "success");
        } else {
            appliedCoupon = null;
            msg.style.color = "#e53e3e";
            msg.textContent = `❌ 'ROYAL50' requires minimum order of ₹399 (Add ₹${399 - subtotal} more)`;
        }
    } else if (code === "FLAT100") {
        if (subtotal >= 799) {
            appliedCoupon = "FLAT100";
            msg.style.color = "#2f855a";
            msg.textContent = "✓ 'FLAT100' applied: Flat ₹100 Discount!";
            showToast("Coupon FLAT100 applied (₹100 OFF)! 🏷️", "success");
        } else {
            appliedCoupon = null;
            msg.style.color = "#e53e3e";
            msg.textContent = `❌ 'FLAT100' requires minimum order of ₹799 (Add ₹${799 - subtotal} more)`;
        }
    } else {
        appliedCoupon = null;
        msg.style.color = "#e53e3e";
        msg.textContent = "❌ Invalid coupon code. Try SWEET10, ROYAL50, or FLAT100";
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
            <div>
                <strong>${item.name} × ${item.quantity}</strong>
                ${item.selectedWeight ? `<div style="font-size:11.5px; color:var(--text-muted);">⚖️ Size: ${item.selectedWeight} ${item.isEggless ? '• 🟢 Eggless' : ''}</div>` : ''}
                ${item.customMessage ? `<div style="font-size:11.5px; color:var(--accent);">📝 Note: "${item.customMessage}"</div>` : ''}
            </div>
            <strong>₹${item.price * item.quantity}</strong>
        </div>
    `).join("");

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    let discount = 0;
    if (appliedCoupon === "SWEET10") discount = Math.round(subtotal * 0.10);
    else if (appliedCoupon === "ROYAL50" && subtotal >= 399) discount = 50;
    else if (appliedCoupon === "FLAT100" && subtotal >= 799) discount = 100;

    const settings = getStoreSettings();
    let deliveryFee = settings.deliveryFee;
    if (currentFulfillmentMode === "pickup" || subtotal >= settings.freeThreshold || subtotal === 0) {
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

    // Dynamic UPI Link & QR Code generation
    const payee = settings.payeeName || "Muthukrishnan S";
    const upiVpa = settings.upiId || "muthukrishnans2002@okhdfcbank";
    const tempOrderId = "RB" + Math.floor(100000 + Math.random() * 900000);
    const dynamicUpiUrl = `upi://pay?pa=${upiVpa}&pn=${encodeURIComponent(payee)}&am=${grandTotal}&cu=INR&tn=${encodeURIComponent("Order " + tempOrderId)}`;
    
    const directBtn = document.getElementById("chkDirectPayBtn");
    if (directBtn) directBtn.href = dynamicUpiUrl;

    const qrImg = document.getElementById("cleanQrImg");
    if (qrImg) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(dynamicUpiUrl)}`;
        qrImg.onerror = () => {
            // Safe fallback to local clean QR asset
            qrImg.src = "qr-only.jpg";
        };
    }
}

function setPaymentMethod(method) {
    currentPaymentMethod = method;
    const tabUpi = document.getElementById("payTabUpi");
    const tabCod = document.getElementById("payTabCod");
    const secUpi = document.getElementById("paySectionUpi");
    const secCod = document.getElementById("paySectionCod");

    if (method === "upi") {
        tabUpi?.classList.add("active");
        tabCod?.classList.remove("active");
        if (secUpi) secUpi.style.display = "block";
        if (secCod) secCod.style.display = "none";
    } else {
        tabCod?.classList.add("active");
        tabUpi?.classList.remove("active");
        if (secCod) secCod.style.display = "block";
        if (secUpi) secUpi.style.display = "none";
    }
}

function copyUpiVpa() {
    const settings = getStoreSettings();
    const upiId = settings.upiId || "muthukrishnans2002@okhdfcbank";
    navigator.clipboard.writeText(upiId).then(() => {
        showToast("UPI ID Copied to Clipboard! 📋", "success");
    }).catch(() => {
        showToast(`UPI ID: ${upiId}`, "info");
    });
}

function fillDemoTestUtr() {
    const sampleUtr = "42" + Math.floor(1000000000 + Math.random() * 9000000000);
    const utrInput = document.getElementById("chkUtr");
    if (utrInput) {
        utrInput.value = sampleUtr;
        handleUtrInputChange(sampleUtr);
    }
    showToast(`Populated 12-Digit Demo Test UTR: ${sampleUtr} ⚡`, "info");
}

function handleUtrInputChange(val) {
    const clean = val.trim();
    const badge = document.getElementById("utrValidationBadge");
    if (!badge) return;

    if (clean.length === 12 && /^[a-zA-Z0-9]{12}$/.test(clean)) {
        badge.innerHTML = `<span style="color:#2f855a; font-weight:700;">✓ Valid 12-digit UTR format</span>`;
    } else if (clean.length > 0) {
        badge.innerHTML = `<span style="color:#c53030; font-weight:600;">${12 - clean.length} digits needed</span>`;
    } else {
        badge.innerHTML = "";
    }
}

function submitFinalOrder() {
    const name = document.getElementById("chkName").value.trim();
    const phone = document.getElementById("chkPhone").value.trim();
    const address = currentFulfillmentMode === "delivery" ? document.getElementById("chkAddress").value.trim() : "Store Pickup (Rayarpalayam Counter)";
    const slot = document.getElementById("chkSlot").value;
    const note = document.getElementById("chkNote").value.trim();
    const utr = document.getElementById("chkUtr")?.value.trim() || "";

    if (!name || name.length < 2) {
        showToast("Please enter customer full name!", "error");
        document.getElementById("chkName")?.focus();
        return;
    }
    if (!phone || phone.length !== 10 || !/^[6-9]\d{9}$/.test(phone)) {
        showToast("Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)!", "error");
        document.getElementById("chkPhone")?.focus();
        return;
    }
    if (currentFulfillmentMode === "delivery" && (!address || address.length < 5)) {
        showToast("Please provide your complete delivery address with landmark!", "error");
        document.getElementById("chkAddress")?.focus();
        return;
    }
    if (currentPaymentMethod === "upi" && (!utr || utr.length < 6)) {
        showToast("Please enter your 12-digit UPI transaction UTR reference (or click 'Use Demo Test UTR')!", "error");
        document.getElementById("chkUtr")?.focus();
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    let discount = 0;
    if (appliedCoupon === "SWEET10") discount = Math.round(subtotal * 0.10);
    else if (appliedCoupon === "ROYAL50" && subtotal >= 399) discount = 50;
    else if (appliedCoupon === "FLAT100" && subtotal >= 799) discount = 100;
    
    const settings = getStoreSettings();
    let deliveryFee = settings.deliveryFee;
    if (currentFulfillmentMode === "pickup" || subtotal >= settings.freeThreshold) deliveryFee = 0;
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
        status: "Pending",
        checklist: {}
    };

    currentOrder = newOrder;

    // Persist active order id for reload
    localStorage.setItem("royalbakes_active_order_id", newOrder.orderId);

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

    // Play chime sound
    if (!isChimeMuted) {
        playOrderChimeSound();
    }

    // Reset cart and clear persisted cart
    cart = [];
    localStorage.removeItem("royalbakes_cart");
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

function restoreInventoryStock(orderItems) {
    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (e) {}

    const all = getAllProducts();
    orderItems.forEach(item => {
        const prod = all.find(p => p.id === item.id);
        if (prod) {
            const current = invMap[item.id] !== undefined ? invMap[item.id] : prod.stock;
            invMap[item.id] = current + item.quantity;
        }
    });

    localStorage.setItem("royalbakes_inventory", JSON.stringify(invMap));
    renderStoreProducts();
    renderAdminInventoryTable();
}

function saveOrderLocally(newOrder, isSelfPlaced = false) {
    if (!newOrder || !newOrder.orderId) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const existingIndex = orders.findIndex(o => String(o.orderId) === String(newOrder.orderId));
    if (existingIndex === -1) {
        orders.unshift(newOrder);
        localStorage.setItem("royalbakes_orders", JSON.stringify(orders));

        // Play chime only if recent (< 15 mins), Pending, not muted, and staff logged in
        const isRecent = newOrder.timestamp ? (Date.now() - newOrder.timestamp < 15 * 60 * 1000) : true;
        if (activeStaffRole && !isSelfPlaced && !isChimeMuted && isRecent && newOrder.status === "Pending") {
            playOrderChimeSound();
            showToast(`🔔 New Incoming Order #${newOrder.orderId} from ${newOrder.customerName}!`, "success");
        }

        renderKitchenQueue();
        updateCustomerBadges();
    } else {
        // If it exists but status was updated externally, sync it
        if (orders[existingIndex].status !== newOrder.status) {
            orders[existingIndex].status = newOrder.status;
            localStorage.setItem("royalbakes_orders", JSON.stringify(orders));
            renderKitchenQueue();
            updateCustomerBadges();
        }
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
        <div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dotted #f2e4db;">
            <div>
                <strong>${i.name} × ${i.quantity}</strong>
                ${i.selectedWeight ? `<div style="font-size:11.5px; color:var(--text-muted);">⚖️ ${i.selectedWeight} ${i.isEggless ? '• 🟢 Eggless' : ''}</div>` : ''}
                ${i.customMessage ? `<div style="font-size:11.5px; color:var(--accent);">📝 "${i.customMessage}"</div>` : ''}
            </div>
            <strong>₹${i.price * i.quantity}</strong>
        </div>
    `).join("");

    const verificationPayload = `ROYALBAKES|ORD:${currentOrder.orderId}|TOTAL:${currentOrder.total}|CUST:${currentOrder.customerName}|PHONE:${currentOrder.customerPhone}`;

    body.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-weight:800; color:var(--primary); font-size:15px;">
            <span>Order ID: #${currentOrder.orderId}</span>
            <span>Type: ${currentOrder.fulfillmentType || "Delivery"}</span>
        </div>
        <div style="margin-bottom:12px; color:var(--text-muted); line-height:1.6; font-size:13px;">
            <div>👤 <b>${currentOrder.customerName}</b> (${currentOrder.customerPhone})</div>
            <div>📍 ${currentOrder.address}</div>
            <div>🕒 Slot: <b>${currentOrder.slot}</b></div>
            ${currentOrder.note ? `<div>📝 General Note: <i>${currentOrder.note}</i></div>` : ""}
            <div>💳 Payment: <b>${currentOrder.paymentMethod}</b> ${currentOrder.utr ? `(UTR: ${currentOrder.utr})` : ""}</div>
        </div>
        <div style="border-top:1px dashed #ecd8cb; padding-top:10px; margin-bottom:10px;">
            ${itemsSummary}
        </div>
        <div style="font-size:13px; line-height:1.8; color:var(--text-muted);">
            <div style="display:flex; justify-content:space-between;">
                <span>Subtotal:</span>
                <span>₹${currentOrder.subtotal}</span>
            </div>
            ${currentOrder.discount > 0 ? `
                <div style="display:flex; justify-content:space-between; color:#2f855a; font-weight:700;">
                    <span>Coupon Savings:</span>
                    <span>-₹${currentOrder.discount}</span>
                </div>
            ` : ''}
            <div style="display:flex; justify-content:space-between;">
                <span>Delivery Charge:</span>
                <span>${currentOrder.deliveryFee === 0 ? 'FREE' : `₹${currentOrder.deliveryFee}`}</span>
            </div>
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:800; font-size:17px; color:var(--primary); border-top:1.5px solid #ecd8cb; padding-top:8px; margin-top:6px;">
            <span>Grand Total:</span>
            <span>₹${currentOrder.total}</span>
        </div>

        <div class="ticket-qr-box">
            <small style="display:block; font-weight:700; color:var(--text-muted); margin-bottom:6px;">OFFICIAL ORDER COUNTER TICKET</small>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(verificationPayload)}" alt="Ticket QR">
            <small style="display:block; font-size:11px; color:#8c786c; margin-top:4px;">Scan at bakery counter or delivery for instant order verification</small>
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

    const tabAll = document.getElementById("kdsTabAllCount");
    const tabPen = document.getElementById("kdsTabPendingCount");
    const tabAcc = document.getElementById("kdsTabAcceptedCount");
    const tabBak = document.getElementById("kdsTabBakingCount");
    const tabRea = document.getElementById("kdsTabReadyCount");
    const tabCom = document.getElementById("kdsTabCompletedCount");

    if (tabAll) tabAll.textContent = orders.length;
    if (tabPen) tabPen.textContent = newCount;
    if (tabAcc) tabAcc.textContent = orders.filter(o => o.status === "Accepted").length;
    if (tabBak) tabBak.textContent = orders.filter(o => o.status === "Baking").length;
    if (tabRea) tabRea.textContent = orders.filter(o => o.status === "Ready").length;
    if (tabCom) tabCom.textContent = completedCount;

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
        if (order.status === "Cancelled") stClass = "st-cancelled";

        const minsAgo = order.timestamp ? Math.floor((Date.now() - order.timestamp) / 60000) : 0;
        let urgencyClass = "urgency-normal";
        let urgencyBadge = `<span class="kds-urgency-tag normal">🟢 On Time</span>`;
        if (order.status === "Ready" || order.status === "Out for Delivery") {
            urgencyBadge = `<span class="kds-urgency-tag normal" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">🚀 Ready for Dispatch</span>`;
        } else if (order.status === "Delivered" || order.status === "Completed") {
            urgencyBadge = `<span class="kds-urgency-tag normal" style="background:#dcfce7; color:#15803d; border-color:#bbf7d0;">✅ Handed Over</span>`;
        } else if (order.status === "Cancelled") {
            urgencyBadge = `<span class="kds-urgency-tag normal" style="background:#fee2e2; color:#b91c1c; border-color:#fecaca;">✕ Cancelled</span>`;
        } else {
            // In preparation (Pending, Accepted, Baking)
            if (minsAgo >= 30) {
                urgencyClass = "urgency-rush";
                urgencyBadge = `<span class="kds-urgency-tag rush">🔥 30+ Mins Alert!</span>`;
            } else if (minsAgo >= 15) {
                urgencyClass = "urgency-caution";
                urgencyBadge = `<span class="kds-urgency-tag caution">⚠️ 15+ Mins Prep</span>`;
            }
        }

        const itemsList = (order.items || []).map((i, itemIdx) => {
            const isChecked = order.checklist && order.checklist[itemIdx];
            return `
                <div class="kds-item-line ${isChecked ? 'item-done' : ''}">
                    <label>
                        <input
                            type="checkbox"
                            ${isChecked ? 'checked' : ''}
                            onchange="toggleKdsItemCheck('${order.orderId}', ${itemIdx}, this.checked)"
                        >
                        <div>
                            <strong>${i.name} (×${i.quantity})</strong>
                            ${i.selectedWeight ? `<div class="kds-item-weight">⚖️ Size: ${i.selectedWeight} ${i.isEggless ? '• 🟢 Eggless' : ''}</div>` : ''}
                            ${i.customMessage ? `<div class="kds-item-msg">🎂 Inscription: "${i.customMessage}"</div>` : ''}
                        </div>
                    </label>
                    <span>₹${i.price * i.quantity}</span>
                </div>
            `;
        }).join("");

        grid.innerHTML += `
            <div class="kds-order-card ${urgencyClass} ${order.status === "Pending" ? "priority-high" : ""}">
                <div>
                    <div class="kds-card-header">
                        <div>
                            <div class="kds-order-id">Order #${order.orderId}</div>
                            <div class="kds-time-elapsed">🕒 ${order.date} (${minsAgo}m ago)</div>
                        </div>
                        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px;">
                            <span class="status-badge ${stClass}">${order.status || "Pending"}</span>
                            ${urgencyBadge}
                        </div>
                    </div>

                    <div class="kds-cust-block">
                        <strong>👤 ${order.customerName} (${order.customerPhone})</strong>
                        <div>📍 ${order.address}</div>
                        <div>📦 Fulfillment: <b>${order.fulfillmentType || "Delivery"}</b> • Slot: <b>${order.slot}</b></div>
                        ${order.note ? `<div class="kds-note-badge">📝 General Request: ${order.note}</div>` : ""}
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
                    <button class="kds-btn btn-accept" onclick="setOrderStatus('${order.orderId}', 'Accepted')" title="Acknowledge Order">
                        👍 Accept
                    </button>
                    <button class="kds-btn btn-baking" onclick="setOrderStatus('${order.orderId}', 'Baking')" title="Move to Oven">
                        🎂 Start Baking
                    </button>
                    <button class="kds-btn btn-ready" onclick="setOrderStatus('${order.orderId}', 'Ready')" title="Packaging Complete">
                        📦 Ready
                    </button>
                    <button class="kds-btn btn-complete" onclick="setOrderStatus('${order.orderId}', 'Delivered')" title="Order Handed Over">
                        ✅ Completed
                    </button>
                    <button class="kds-btn btn-kot" onclick="printKOT('${order.orderId}')" title="Print Kitchen Order Ticket">
                        🖨️ KOT
                    </button>
                    <button class="kds-btn btn-cancel" onclick="handleCancelOrder('${order.orderId}')" title="Cancel & Restock">
                        ❌ Reject
                    </button>
                </div>
            </div>
        `;
    });
}

function toggleKdsItemCheck(orderId, itemIdx, checked) {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const order = orders.find(o => String(o.orderId) === String(orderId));
    if (order) {
        if (!order.checklist) order.checklist = {};
        order.checklist[itemIdx] = checked;
        localStorage.setItem("royalbakes_orders", JSON.stringify(orders));
        renderKitchenQueue();
    }
}

function handleCancelOrder(orderId) {
    const reason = prompt("Enter cancellation reason (Stock will be auto-restored):", "Customer request / Kitchen delay");
    if (!reason) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const order = orders.find(o => String(o.orderId) === String(orderId));
    if (order) {
        order.status = "Cancelled";
        order.cancelReason = reason;
        localStorage.setItem("royalbakes_orders", JSON.stringify(orders));

        // Restore stock
        if (order.items && order.items.length > 0) {
            restoreInventoryStock(order.items);
        }

        showToast(`Order #${orderId} marked Cancelled & Stock Restored! ⚠️`, "info");
        renderKitchenQueue();
        updateCustomerBadges();

        if (royalChannel) {
            royalChannel.postMessage({ type: "STATUS_UPDATE", orderId, status: "Cancelled" });
        }
    }
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

    const itemsRows = order.items.map(i => `
        <tr>
            <td style="padding:4px 0;">
                [ ] <b>${i.name}</b>
                ${i.selectedWeight ? `<div style="font-size:11px;">Size: ${i.selectedWeight} ${i.isEggless ? '• Eggless' : ''}</div>` : ''}
                ${i.customMessage ? `<div style="font-size:11px;">Message: "${i.customMessage}"</div>` : ''}
            </td>
            <td style="text-align:right; font-weight:bold;">× ${i.quantity}</td>
        </tr>
    `).join("");

    printBox.innerHTML = `
        <div style="max-width:320px; font-family:'Courier New', monospace; padding:15px; border:1px solid #000; margin:auto;">
            <div style="text-align:center; font-weight:bold; font-size:18px;">ROYAL BAKES — KOT</div>
            <div style="text-align:center; font-size:12px;">Rayarpalayam, Namakkal</div>
            <hr style="border-top:1px dashed #000; margin:8px 0;">
            <div><b>KOT No:</b> #${order.orderId}</div>
            <div><b>Time:</b> ${order.date}</div>
            <div><b>Customer:</b> ${order.customerName} (${order.customerPhone})</div>
            <div><b>Fulfillment:</b> ${order.fulfillmentType || "Delivery"} • ${order.slot}</div>
            ${order.note ? `<div><b>Special Note:</b> ${order.note}</div>` : ""}
            <hr style="border-top:1px dashed #000; margin:8px 0;">
            <table style="width:100%; text-align:left; font-size:12px;">
                <thead><tr><th>Item / Customization</th><th style="text-align:right;">Qty</th></tr></thead>
                <tbody>${itemsRows}</tbody>
            </table>
            <hr style="border-top:1px dashed #000; margin:8px 0;">
            <div style="text-align:center; font-size:11px;">Royal Bakes Kitchen Display System</div>
        </div>
    `;
    window.print();
}

function printReceiptTicket() {
    if (!currentOrder) {
        window.print();
        return;
    }

    const printBox = document.getElementById("printContainer");
    if (!printBox) {
        window.print();
        return;
    }

    const settings = getStoreSettings();
    const itemsRows = currentOrder.items.map(i => `
        <tr>
            <td style="padding:4px 0;">
                <b>${i.name}</b>
                ${i.selectedWeight ? `<div style="font-size:11px;">${i.selectedWeight} ${i.isEggless ? '• Eggless' : ''}</div>` : ''}
                ${i.customMessage ? `<div style="font-size:11px;">Msg: "${i.customMessage}"</div>` : ''}
            </td>
            <td style="text-align:center;">${i.quantity}</td>
            <td style="text-align:right;">₹${i.price}</td>
            <td style="text-align:right; font-weight:bold;">₹${i.price * i.quantity}</td>
        </tr>
    `).join("");

    printBox.innerHTML = `
        <div style="max-width:380px; font-family:'Courier New', monospace; padding:18px; border:1px solid #333; margin:auto; background:white;">
            <div style="text-align:center;">
                <div style="font-size:22px; font-weight:900;">👑 ROYAL BAKES</div>
                <div style="font-size:11px;">Artisanal Bakery, Patisserie & Gourmet Cafe</div>
                <div style="font-size:11px;">${settings.storeLoc}</div>
                <div style="font-size:11px;">FSSAI Lic No: 22424567000189 • Phone: +${settings.phone}</div>
            </div>
            <hr style="border-top:1px dashed #000; margin:10px 0;">
            <div style="font-size:12px; line-height:1.5;">
                <div><b>Tax Invoice #:</b> ${currentOrder.orderId}</div>
                <div><b>Date:</b> ${currentOrder.date}</div>
                <div><b>Customer:</b> ${currentOrder.customerName}</div>
                <div><b>Phone:</b> ${currentOrder.customerPhone}</div>
                <div><b>Type:</b> ${currentOrder.fulfillmentType} • ${currentOrder.slot}</div>
                <div><b>Payment:</b> ${currentOrder.paymentMethod} ${currentOrder.utr ? `(Ref: ${currentOrder.utr})` : ''}</div>
            </div>
            <hr style="border-top:1px dashed #000; margin:10px 0;">
            <table style="width:100%; text-align:left; font-size:11.5px; border-collapse:collapse;">
                <thead>
                    <tr style="border-bottom:1px solid #000;">
                        <th>Item</th>
                        <th style="text-align:center;">Qty</th>
                        <th style="text-align:right;">Rate</th>
                        <th style="text-align:right;">Amount</th>
                    </tr>
                </thead>
                <tbody>${itemsRows}</tbody>
            </table>
            <hr style="border-top:1px dashed #000; margin:10px 0;">
            <div style="font-size:12px; line-height:1.6;">
                <div style="display:flex; justify-content:space-between;">
                    <span>Items Subtotal:</span>
                    <span>₹${currentOrder.subtotal}</span>
                </div>
                ${currentOrder.discount > 0 ? `
                    <div style="display:flex; justify-content:space-between;">
                        <span>Coupon Savings:</span>
                        <span>-₹${currentOrder.discount}</span>
                    </div>
                ` : ''}
                <div style="display:flex; justify-content:space-between;">
                    <span>Delivery Charges:</span>
                    <span>${currentOrder.deliveryFee === 0 ? 'FREE' : `₹${currentOrder.deliveryFee}`}</span>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:14px; font-weight:bold; border-top:1px solid #000; padding-top:4px; margin-top:4px;">
                    <span>NET AMOUNT PAYABLE:</span>
                    <span>₹${currentOrder.total}</span>
                </div>
            </div>
            <hr style="border-top:1px dashed #000; margin:10px 0;">
            <div style="text-align:center; font-size:10.5px;">
                <div>Thank you for choosing Royal Bakes!</div>
                <div>100% Fresh Daily • Baked with Love</div>
                <div>Consume within 24 hours. Keep cakes refrigerated (2°C - 5°C).</div>
            </div>
        </div>
    `;
    window.print();
}

function toggleChimeMute() {
    isChimeMuted = !isChimeMuted;
    localStorage.setItem("royalbakes_chime_muted", isChimeMuted);
    const btn = document.getElementById("kdsChimeToggleBtn");
    if (btn) {
        btn.textContent = isChimeMuted ? "🔇 Unmute Chime" : "🔊 Chime Sound ON";
    }
    showToast(isChimeMuted ? "Kitchen Audio Chime Muted 🔇" : "Kitchen Audio Chime Enabled 🔊", "info");
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

    const todayDateStr = new Date().toLocaleDateString("en-IN", { dateStyle: "medium" });
    const todayOrders = orders.filter(o => o.date && o.date.includes(todayDateStr));
    const totalRev = orders.filter(o => o.status !== "Cancelled").reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    const totalOrders = orders.length;
    const aov = totalOrders > 0 ? Math.round(totalRev / totalOrders) : 0;

    const allProds = getAllProducts();
    const lowStockItems = allProds.filter(p => p.stock <= (p.minStock || 5));

    const statRev = document.getElementById("admStatRevenue");
    const statTot = document.getElementById("admStatTotal");
    const statAov = document.getElementById("admStatAov");
    const statLow = document.getElementById("admStatLowStock");
    const invCount = document.getElementById("invTotalCount");

    if (statRev) statRev.textContent = `₹${totalRev}`;
    if (statTot) statTot.textContent = totalOrders;
    if (statAov) statAov.textContent = `₹${aov}`;
    if (statLow) statLow.textContent = lowStockItems.length;
    if (invCount) invCount.textContent = allProds.length;

    // Render low stock alert banner
    const banner = document.getElementById("admLowStockAlertBanner");
    if (banner) {
        if (lowStockItems.length > 0) {
            banner.style.display = "flex";
            banner.innerHTML = `
                <div>
                    <strong>⚠️ Low Stock Alert:</strong> ${lowStockItems.length} product(s) below reorder threshold (${lowStockItems.slice(0, 3).map(i => `${i.name} [${i.stock} left]`).join(", ")}${lowStockItems.length > 3 ? '...' : ''})
                </div>
                <div style="display:flex; gap:8px;">
                    <button class="quick-restock-btn" onclick="restockAllLowStockItems(20)" style="background:#2f855a; color:white; border:none; font-weight:700;">
                        +20 To All Low Items
                    </button>
                    <button class="quick-restock-btn" onclick="switchAdminTab('inventory')" style="background:#dd6b20; color:white; border:none; font-weight:800;">
                        Manage Stock →
                    </button>
                </div>
            `;
        } else {
            banner.style.display = "none";
        }
    }
}

function restockAllLowStockItems(amount = 20) {
    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (e) {}

    const allProds = getAllProducts();
    const lowStockItems = allProds.filter(p => p.stock <= (p.minStock || 5));

    lowStockItems.forEach(p => {
        const cur = invMap[p.id] !== undefined ? invMap[p.id] : p.stock;
        invMap[p.id] = cur + amount;
    });

    localStorage.setItem("royalbakes_inventory", JSON.stringify(invMap));
    showToast(`Restocked +${amount} units across all ${lowStockItems.length} low-stock items! 📦`, "success");
    renderAdminStats();
    renderAdminInventoryTable();
    renderStoreProducts();
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

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const baseRevenue = [3500, 4200, 3900, 5400, 6900, 9200, 9800];
    
    // Add real stored orders to today's Sunday bar
    const liveRevenue = orders.filter(o => o.status !== "Cancelled").reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    baseRevenue[6] += liveRevenue;

    const maxRev = Math.max(...baseRevenue, 12000);
    const chartHeight = 150;
    const barWidth = 32;
    const gap = 18;

    let barsSvg = "";
    baseRevenue.forEach((rev, idx) => {
        const h = Math.round((rev / maxRev) * chartHeight);
        const x = 32 + idx * (barWidth + gap);
        const y = chartHeight - h + 25;

        barsSvg += `
            <g class="chart-bar-group">
                <rect x="${x}" y="${y}" width="${barWidth}" height="${h}" rx="6" fill="#d49a6a" />
                <text x="${x + barWidth / 2}" y="${y - 6}" text-anchor="middle" font-size="10.5" font-weight="700" fill="#23120b">₹${rev}</text>
                <text x="${x + barWidth / 2}" y="${chartHeight + 42}" text-anchor="middle" font-size="11.5" font-weight="600" fill="#735f54">${days[idx]}</text>
            </g>
        `;
    });

    container.innerHTML = `
        <svg viewBox="0 0 400 200" style="width:100%; height:200px;">
            <line x1="20" y1="${chartHeight + 25}" x2="380" y2="${chartHeight + 25}" stroke="#ecd8cb" stroke-width="1.5" />
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

    let catMap = { cakes: 35, pastries: 25, snacks: 20, buns: 15, cookies: 10, desserts: 8, drinks: 12 };
    orders.forEach(o => {
        if (o.status !== "Cancelled") {
            (o.items || []).forEach(i => {
                const cat = i.category || "cakes";
                catMap[cat] = (catMap[cat] || 0) + i.quantity;
            });
        }
    });

    const total = Object.values(catMap).reduce((a, b) => a + b, 0) || 1;
    const pCakes = Math.round((catMap.cakes / total) * 100);
    const pPastries = Math.round((catMap.pastries / total) * 100);
    const pSnacks = Math.round((catMap.snacks / total) * 100);
    const pBuns = Math.round((catMap.buns / total) * 100);
    const pOther = Math.max(0, 100 - (pCakes + pPastries + pSnacks + pBuns));

    container.innerHTML = `
        <div style="display:flex; align-items:center; gap:25px; width:100%; justify-content:center; flex-wrap:wrap;">
            <svg width="150" height="150" viewBox="0 0 42 42" style="border-radius:50%;">
                <circle class="donut-ring" cx="21" cy="21" r="15.915" fill="transparent" stroke="#ecd8cb" stroke-width="6"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke="#23120b" stroke-width="6" stroke-dasharray="${pCakes} ${100 - pCakes}" stroke-dashoffset="25"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke="#d49a6a" stroke-width="6" stroke-dasharray="${pPastries} ${100 - pPastries}" stroke-dashoffset="${125 - pCakes}"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke="#3182ce" stroke-width="6" stroke-dasharray="${pSnacks} ${100 - pSnacks}" stroke-dashoffset="${125 - pCakes - pPastries}"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.915" fill="transparent" stroke="#38a169" stroke-width="6" stroke-dasharray="${pBuns + pOther} ${100 - pBuns - pOther}" stroke-dashoffset="${125 - pCakes - pPastries - pSnacks}"></circle>
            </svg>
            <div style="font-size:12px; line-height:2.0;">
                <div><span style="color:#23120b; font-weight:bold;">■</span> Cakes (${pCakes}%)</div>
                <div><span style="color:#d49a6a; font-weight:bold;">■</span> Pastries (${pPastries}%)</div>
                <div><span style="color:#3182ce; font-weight:bold;">■</span> Snacks & Puffs (${pSnacks}%)</div>
                <div><span style="color:#38a169; font-weight:bold;">■</span> Buns & Breads (${pBuns}%)</div>
                <div><span style="color:#805ad5; font-weight:bold;">■</span> Cookies & Drinks (${pOther}%)</div>
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
        if (o.status !== "Cancelled") {
            (o.items || []).forEach(i => {
                if (!map[i.name]) map[i.name] = { qty: 0, rev: 0, price: i.price, cat: i.category };
                map[i.name].qty += i.quantity;
                map[i.name].rev += i.price * i.quantity;
            });
        }
    });

    const sortedNames = Object.keys(map).sort((a, b) => map[b].rev - map[a].rev);
    const rows = sortedNames.map((name, idx) => `
        <tr>
            <td><strong>${idx + 1}. ${name}</strong></td>
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
            <tbody>${rows || '<tr><td colspan="5" style="text-align:center; padding:20px;">No sales logged yet. Place orders in Customer Store to view live rankings.</td></tr>'}</tbody>
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
                <td>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="${p.image}" style="width:38px; height:38px; border-radius:8px; object-fit:cover;">
                        <div>
                            <strong>${p.name}</strong>
                            <div style="font-size:11px; color:var(--text-muted);">${p.isVeg ? '🟢 Veg' : '🔴 Non-Veg'} • Min: ${p.minStock || 5}</div>
                        </div>
                    </div>
                </td>
                <td style="text-transform:capitalize;">${p.category}</td>
                <td>₹${p.price}</td>
                <td>
                    <div class="inline-stock-editor">
                        <button class="stock-adj-btn" onclick="adjustProductStock(${p.id}, -1)">−</button>
                        <input
                            type="number"
                            class="stock-number-input"
                            value="${p.stock}"
                            onchange="setProductStockDirect(${p.id}, this.value)"
                        >
                        <button class="stock-adj-btn" onclick="adjustProductStock(${p.id}, 1)">+</button>
                    </div>
                </td>
                <td><span class="stock-pill ${pillClass}">${label}</span></td>
                <td>
                    <button class="quick-restock-btn" onclick="quickRestockItem(${p.id}, 10)">+10</button>
                    <button class="quick-restock-btn" onclick="quickRestockItem(${p.id}, 25)">+25</button>
                    <button class="quick-restock-btn" onclick="quickRestockItem(${p.id}, 50)">+50</button>
                </td>
                <td>
                    <button class="quick-restock-btn" onclick="openEditProductModal(${p.id})" style="color:var(--primary); font-weight:700;">✏️ Edit</button>
                    <button class="quick-restock-btn" onclick="deleteProductItem(${p.id})" style="color:#c53030;">🗑️</button>
                </td>
            </tr>
        `;
    }).join("");
}

function adjustProductStock(prodId, delta) {
    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (e) {}

    const all = getAllProducts();
    const prod = all.find(p => p.id === prodId);
    if (!prod) return;

    const current = invMap[prodId] !== undefined ? invMap[prodId] : prod.stock;
    const updated = Math.max(0, current + delta);
    invMap[prodId] = updated;
    localStorage.setItem("royalbakes_inventory", JSON.stringify(invMap));

    renderAdminInventoryTable();
    renderAdminStats();
    renderStoreProducts();
}

function setProductStockDirect(prodId, newStockVal) {
    const val = parseInt(newStockVal);
    if (isNaN(val) || val < 0) return;

    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (e) {}

    invMap[prodId] = val;
    localStorage.setItem("royalbakes_inventory", JSON.stringify(invMap));

    showToast(`Updated stock to ${val} units! 📦`, "success");
    renderAdminInventoryTable();
    renderAdminStats();
    renderStoreProducts();
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
    renderAdminStats();
    renderStoreProducts();
}

function deleteProductItem(prodId) {
    if (!confirm("Are you sure you want to delete this bakery item from catalog?")) return;
    let custom = [];
    try {
        custom = JSON.parse(localStorage.getItem("royalbakes_custom_products") || "[]");
    } catch (e) {}
    custom = custom.filter(p => p.id !== prodId);
    localStorage.setItem("royalbakes_custom_products", JSON.stringify(custom));
    showToast("Product deleted from catalog 🗑️", "info");
    renderAdminInventoryTable();
    renderStoreProducts();
}

// EDIT PRODUCT MODAL LOGIC
function openEditProductModal(prodId) {
    const all = getAllProducts();
    const prod = all.find(p => p.id === prodId);
    if (!prod) return;

    const modal = document.getElementById("editProductModalOverlay");
    if (!modal) return;

    document.getElementById("editProdId").value = prod.id;
    document.getElementById("editProdName").value = prod.name;
    document.getElementById("editProdCat").value = prod.category;
    document.getElementById("editProdPrice").value = prod.price;
    document.getElementById("editProdStock").value = prod.stock;
    document.getElementById("editProdMinStock").value = prod.minStock || 5;
    document.getElementById("editProdPrepTime").value = prod.prepTime || "20 mins";
    document.getElementById("editProdDesc").value = prod.description || "";
    document.getElementById("editProdDiet").value = prod.isVeg ? "true" : "false";

    modal.style.display = "flex";
}

function closeEditProductModal() {
    const modal = document.getElementById("editProductModalOverlay");
    if (modal) modal.style.display = "none";
}

function handleSaveProductEdit(e) {
    e.preventDefault();
    const id = Number(document.getElementById("editProdId").value);
    const name = document.getElementById("editProdName").value.trim();
    const cat = document.getElementById("editProdCat").value;
    const price = Number(document.getElementById("editProdPrice").value);
    const stock = Number(document.getElementById("editProdStock").value);
    const minStock = Number(document.getElementById("editProdMinStock").value);
    const prep = document.getElementById("editProdPrepTime").value.trim();
    const desc = document.getElementById("editProdDesc").value.trim();
    const isVeg = document.getElementById("editProdDiet").value === "true";

    // Update inventory map
    let invMap = {};
    try {
        invMap = JSON.parse(localStorage.getItem("royalbakes_inventory") || "{}");
    } catch (err) {}
    invMap[id] = stock;
    localStorage.setItem("royalbakes_inventory", JSON.stringify(invMap));

    // Update custom products if custom
    let custom = [];
    try {
        custom = JSON.parse(localStorage.getItem("royalbakes_custom_products") || "[]");
    } catch (err) {}

    const cIdx = custom.findIndex(p => p.id === id);
    if (cIdx > -1) {
        custom[cIdx] = {
            ...custom[cIdx],
            name,
            category: cat,
            price,
            stock,
            minStock,
            prepTime: prep,
            description: desc,
            isVeg
        };
        localStorage.setItem("royalbakes_custom_products", JSON.stringify(custom));
    } else {
        // Also allow editing default product overrides
        let overrides = {};
        try {
            overrides = JSON.parse(localStorage.getItem("royalbakes_product_overrides") || "{}");
        } catch (err) {}
        overrides[id] = { name, price, minStock, prepTime: prep, description: desc, isVeg };
        localStorage.setItem("royalbakes_product_overrides", JSON.stringify(overrides));
    }

    showToast(`Updated product details for '${name}'! 💾`, "success");
    closeEditProductModal();
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

    const statusFilter = document.getElementById("admOrdersFilterStatus")?.value || "all";
    let filtered = orders;
    if (statusFilter !== "all") {
        filtered = filtered.filter(o => o.status === statusFilter);
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:30px; color:var(--text-muted);">No orders matching status '${statusFilter}'.</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(o => {
        let stClass = "st-delivered";
        if (o.status === "Pending") stClass = "st-pending";
        else if (o.status === "Accepted") stClass = "st-accepted";
        else if (o.status === "Baking") stClass = "st-baking";
        else if (o.status === "Cancelled") stClass = "st-cancelled";

        return `
            <tr>
                <td><strong>#${o.orderId}</strong></td>
                <td>${o.date}</td>
                <td>
                    <b>${o.customerName}</b>
                    <div style="font-size:11px; color:var(--text-muted);">${o.customerPhone}</div>
                </td>
                <td>${o.fulfillmentType || "Delivery"}</td>
                <td>${(o.items || []).map(i => `${i.name} (×${i.quantity}${i.selectedWeight ? ` • ${i.selectedWeight}` : ''})`).join(", ")}</td>
                <td><strong>₹${o.total}</strong></td>
                <td>
                    <div>${o.paymentMethod}</div>
                    ${o.utr ? `<small style="font-size:10.5px; color:var(--text-muted);">UTR: ${o.utr}</small>` : ''}
                </td>
                <td><span class="status-badge ${stClass}">${o.status}</span></td>
            </tr>
        `;
    }).join("");
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

    let csv = "Order ID,Date,Customer Name,Phone,Fulfillment,Items Detail,Total Amount,Payment Mode,UTR,Status\n";
    orders.forEach(o => {
        const itemsStr = (o.items || []).map(i => `${i.name} x${i.quantity}${i.selectedWeight ? ` (${i.selectedWeight})` : ''}`).join("; ");
        csv += `"${o.orderId}","${o.date}","${o.customerName}","${o.customerPhone}","${o.fulfillmentType || 'Delivery'}","${itemsStr}","${o.total}","${o.paymentMethod}","${o.utr || ''}","${o.status}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
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

function getStoreSettings() {
    let s = null;
    try {
        s = JSON.parse(localStorage.getItem("royalbakes_settings"));
    } catch (e) {}

    return {
        storeName: s?.storeName || "Royal Bakes",
        storeLoc: s?.storeLoc || "Namakkal - Tiruchengode Highways, Rayarpalayam",
        payeeName: s?.payeeName || "Muthukrishnan S",
        upiId: s?.upiId || "muthukrishnans2002@okhdfcbank",
        bankTag: s?.bankTag || "Indian Bank • 4189",
        phone: s?.phone || "916374334421",
        deliveryFee: s?.deliveryFee !== undefined ? Number(s.deliveryFee) : 30,
        freeThreshold: s?.freeThreshold !== undefined ? Number(s.freeThreshold) : 499
    };
}

function saveKitchenSettings() {
    const store = document.getElementById("cfgStoreName")?.value.trim() || "";
    const loc = document.getElementById("cfgStoreLoc")?.value.trim() || "";
    const name = document.getElementById("cfgPayeeName")?.value.trim() || "";
    const upi = document.getElementById("cfgUpiId")?.value.trim() || "";
    const bank = document.getElementById("cfgBankTag")?.value.trim() || "";
    const phone = document.getElementById("cfgPhone")?.value.trim() || "";
    const delFeeInput = document.getElementById("cfgDeliveryFee");
    const freeThrInput = document.getElementById("cfgFreeThreshold");

    const deliveryFee = delFeeInput && !isNaN(Number(delFeeInput.value)) ? Number(delFeeInput.value) : 30;
    const freeThreshold = freeThrInput && !isNaN(Number(freeThrInput.value)) ? Number(freeThrInput.value) : 499;

    const settings = {
        storeName: store || "Royal Bakes",
        storeLoc: loc || "Namakkal - Tiruchengode Highways, Rayarpalayam",
        payeeName: name || "Muthukrishnan S",
        upiId: upi || "muthukrishnans2002@okhdfcbank",
        bankTag: bank || "Indian Bank • 4189",
        phone: phone || "916374334421",
        deliveryFee: deliveryFee,
        freeThreshold: freeThreshold
    };

    localStorage.setItem("royalbakes_settings", JSON.stringify(settings));
    showToast("Royal Bakes Settings Saved! 💾", "success");
    applySettingsToUI();
}

function applySettingsToUI() {
    const s = getStoreSettings();

    const pEl = document.getElementById("chkPayeeName");
    const uEl = document.getElementById("chkUpiId");
    const bEl = document.getElementById("chkBankTag");
    const btn = document.getElementById("chkDirectPayBtn");
    const fU = document.getElementById("footerContactUpi");
    const fP = document.getElementById("footerContactPhone");

    const inStore = document.getElementById("cfgStoreName");
    const inLoc = document.getElementById("cfgStoreLoc");
    const inName = document.getElementById("cfgPayeeName");
    const inUpi = document.getElementById("cfgUpiId");
    const inBank = document.getElementById("cfgBankTag");
    const inPhone = document.getElementById("cfgPhone");
    const inDelFee = document.getElementById("cfgDeliveryFee");
    const inFreeThr = document.getElementById("cfgFreeThreshold");

    if (inStore) inStore.value = s.storeName;
    if (inLoc) inLoc.value = s.storeLoc;
    if (inName) inName.value = s.payeeName;
    if (inUpi) inUpi.value = s.upiId;
    if (inBank) inBank.value = s.bankTag;
    if (inPhone) inPhone.value = s.phone;
    if (inDelFee) inDelFee.value = s.deliveryFee;
    if (inFreeThr) inFreeThr.value = s.freeThreshold;

    if (pEl) pEl.textContent = s.payeeName;
    if (uEl) uEl.textContent = s.upiId;
    if (bEl) bEl.textContent = `🏦 ${s.bankTag}`;
    if (btn) btn.href = `upi://pay?pa=${s.upiId}&pn=${encodeURIComponent(s.payeeName)}&cu=INR`;
    if (fU) fU.textContent = `💳 UPI: ${s.upiId}`;
    if (fP) fP.textContent = `📞 +${s.phone}`;
}

function resetDemoData() {
    if (!confirm("Are you sure you want to reset demo orders and stock to clean defaults?")) return;

    localStorage.removeItem("royalbakes_orders");
    localStorage.removeItem("royalbakes_inventory");
    localStorage.removeItem("royalbakes_custom_products");
    localStorage.removeItem("royalbakes_product_overrides");

    // Seed 2 realistic sample orders for showcase
    const sampleOrders = [
        {
            orderId: "RB-784210",
            date: new Date(Date.now() - 15 * 60000).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
            timestamp: Date.now() - 15 * 60000,
            customerName: "Kavitha R",
            customerPhone: "9842105521",
            fulfillmentType: "Delivery",
            address: "42, Kamaraj Nagar, Near Rayarpalayam Arch, Namakkal",
            slot: "⚡ Immediate (Within 45 Mins)",
            note: "Please deliver carefully. Ring doorbell.",
            utr: "429182740192",
            paymentMethod: "UPI / QR Code",
            items: [
                {
                    cartItemId: "1_1.0 kg_Happy Birthday Kavitha",
                    id: 1,
                    name: "Signature Dutch Chocolate Cake",
                    price: 650,
                    quantity: 1,
                    selectedWeight: "1.0 kg",
                    customMessage: "Happy Birthday Kavitha",
                    isEggless: true,
                    category: "cakes",
                    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90"
                },
                {
                    cartItemId: "7_std_",
                    id: 7,
                    name: "Crispy Golden Veg Puff",
                    price: 20,
                    quantity: 4,
                    selectedWeight: null,
                    customMessage: "",
                    category: "snacks",
                    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=90"
                }
            ],
            subtotal: 730,
            discount: 50,
            deliveryFee: 0,
            total: 680,
            status: "Baking",
            checklist: { 1: true }
        }
    ];

    localStorage.setItem("royalbakes_orders", JSON.stringify(sampleOrders));
    showToast("Demo orders and stock re-initialized successfully! ✨", "success");
    renderStoreProducts();
    renderKitchenQueue();
    renderAdminDashboard();
    updateCustomerBadges();
}

/* ================================================================= */
/* ===================== MY ORDERS MODAL & REORDER ================= */
/* ================================================================= */
let currentOrdersModalFilter = "customer";

function switchOrdersModalFilter(mode) {
    currentOrdersModalFilter = mode;
    openOrdersModal(mode);
}

function openOrdersModal(forcedFilter = null) {
    const modal = document.getElementById("ordersModalOverlay");
    const list = document.getElementById("ordersModalList");
    if (!modal || !list) return;

    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    let cust = null;
    try {
        cust = JSON.parse(localStorage.getItem("royalbakes_customer") || "null");
    } catch (e) {}

    if (forcedFilter) {
        currentOrdersModalFilter = forcedFilter;
    } else if (!cust || !cust.phone) {
        currentOrdersModalFilter = "all";
    }

    let filterControlsHtml = "";
    if (cust && cust.phone) {
        filterControlsHtml = `
            <div style="display:flex; gap:8px; margin-bottom:14px; background:#f5ece5; padding:4px; border-radius:10px;">
                <button
                    onclick="switchOrdersModalFilter('customer')"
                    style="flex:1; padding:7px 10px; border:none; border-radius:8px; font-weight:700; font-size:12px; cursor:pointer; background:${currentOrdersModalFilter === 'customer' ? 'var(--primary)' : 'transparent'}; color:${currentOrdersModalFilter === 'customer' ? '#fff' : 'var(--text-muted)'};"
                >
                    👤 My Orders (${cust.phone})
                </button>
                <button
                    onclick="switchOrdersModalFilter('all')"
                    style="flex:1; padding:7px 10px; border:none; border-radius:8px; font-weight:700; font-size:12px; cursor:pointer; background:${currentOrdersModalFilter === 'all' ? 'var(--primary)' : 'transparent'}; color:${currentOrdersModalFilter === 'all' ? '#fff' : 'var(--text-muted)'};"
                >
                    📱 All Device Orders (${orders.length})
                </button>
            </div>
        `;
    }

    let displayOrders = orders;
    if (currentOrdersModalFilter === "customer" && cust && cust.phone) {
        displayOrders = orders.filter(o => o.customerPhone === cust.phone || (o.customerName && cust.name && o.customerName.toLowerCase() === cust.name.toLowerCase()));
    }

    if (displayOrders.length === 0) {
        list.innerHTML = `
            ${filterControlsHtml}
            <div style="text-align:center; padding:40px 10px; color:var(--text-muted);">
                <span style="font-size:40px; display:block; margin-bottom:8px;">📦</span>
                <strong style="color:var(--primary); font-size:15px;">No orders found</strong>
                <p style="font-size:12px; margin-top:4px;">${currentOrdersModalFilter === 'customer' ? 'No orders associated with your profile yet.' : 'No orders recorded on this browser yet.'}</p>
                <button class="sk-primary-btn" onclick="closeOrdersModal(); showView('customer');" style="margin-top:14px; font-size:12.5px; padding:8px 16px;">
                    Explore Bakery Menu →
                </button>
            </div>
        `;
        modal.style.display = "flex";
        return;
    }

    const activeOrders = displayOrders.filter(o => o.status !== "Delivered" && o.status !== "Completed" && o.status !== "Cancelled");
    const completedOrders = displayOrders.filter(o => o.status === "Delivered" || o.status === "Completed" || o.status === "Cancelled");

    function renderOrderCard(order, isActive = false) {
        const itemsText = (order.items || []).map(i => `${i.name} (×${i.quantity}${i.selectedWeight ? ` • ${i.selectedWeight}` : ''})`).join(", ");
        let stClass = "st-pending";
        if (order.status === "Accepted") stClass = "st-accepted";
        if (order.status === "Baking") stClass = "st-baking";
        if (order.status === "Ready" || order.status === "Out for Delivery") stClass = "st-ready";
        if (order.status === "Delivered" || order.status === "Completed") stClass = "st-delivered";
        if (order.status === "Cancelled") stClass = "st-cancelled";

        return `
            <div style="background:${isActive ? '#fff9f4' : '#fbf7f4'}; border-radius:14px; padding:16px; margin-bottom:12px; border:1px solid ${isActive ? '#e2a97b' : '#ecd8cb'}; box-shadow:${isActive ? '0 4px 12px rgba(212,154,106,0.12)' : 'none'};">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <div>
                        <strong style="color:var(--primary); font-size:14.5px;">Order #${order.orderId}</strong>
                        ${isActive ? '<span style="margin-left:6px; font-size:11px; background:#fef3c7; color:#92400e; padding:2px 6px; border-radius:4px; font-weight:700;">LIVE</span>' : ''}
                    </div>
                    <span class="status-badge ${stClass}">${order.status || "Pending"}</span>
                </div>
                <div style="font-size:11.5px; color:var(--text-muted); margin-bottom:6px;">
                    <span>🕒 ${order.date}</span> • <span>📍 ${order.fulfillmentType || 'Delivery'}</span> • <span>👤 ${order.customerName}</span>
                </div>
                <div style="margin:8px 0; font-size:13px; color:var(--text-main); line-height:1.4;">
                    🛒 <strong>Items:</strong> ${itemsText}
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px; font-weight:700; margin-top:8px; padding-top:8px; border-top:1px dashed #eedacf;">
                    <span style="color:var(--primary);">₹${order.total} <small style="font-weight:400; color:var(--text-muted);">(${order.paymentMethod})</small></span>
                    <div style="display:flex; gap:8px;">
                        <button class="reorder-btn" onclick="viewExistingOrderTrack('${order.orderId}')" style="background:var(--primary); color:#fff; border:none; padding:6px 12px; border-radius:8px; font-size:12px; cursor:pointer;">
                            📦 Track Live
                        </button>
                        <button class="reorder-btn" onclick="reorderPreviousItems('${order.orderId}')" style="background:#fff; color:var(--primary); border:1px solid var(--border-color); padding:6px 12px; border-radius:8px; font-size:12px; cursor:pointer;">
                            🔄 Reorder
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    let contentHtml = filterControlsHtml;

    if (activeOrders.length > 0) {
        contentHtml += `
            <div style="margin-bottom:14px;">
                <div style="font-size:12px; font-weight:800; color:#b45309; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                    <span>⏳ Active Orders in Progress (${activeOrders.length})</span>
                </div>
                ${activeOrders.map(o => renderOrderCard(o, true)).join("")}
            </div>
        `;
    }

    if (completedOrders.length > 0) {
        contentHtml += `
            <div>
                <div style="font-size:12px; font-weight:800; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px; margin-top:${activeOrders.length > 0 ? '16px' : '0'}; display:flex; align-items:center; gap:6px;">
                    <span>✅ Past & Completed Orders (${completedOrders.length})</span>
                </div>
                ${completedOrders.map(o => renderOrderCard(o, false)).join("")}
            </div>
        `;
    }

    list.innerHTML = contentHtml;
    modal.style.display = "flex";
}

function viewExistingOrderTrack(orderId) {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const order = orders.find(o => String(o.orderId) === String(orderId));
    if (!order) return;

    currentOrder = order;
    closeOrdersModal();
    renderSuccessReceipt();
    showView("success");
}

function closeOrdersModal() {
    document.getElementById("ordersModalOverlay").style.display = "none";
}

function reorderPreviousItems(orderId) {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    const order = orders.find(o => String(o.orderId) === String(orderId));
    if (!order) return;

    cart = [];
    order.items.forEach(i => {
        cart.push({ ...i });
    });

    closeOrdersModal();
    updateCartUI();
    openCartDrawer();
    showToast("Items from previous order loaded into cart! 🛍️", "success");
}

function updateCustomerBadges() {
    let orders = [];
    try {
        orders = JSON.parse(localStorage.getItem("royalbakes_orders") || "[]");
    } catch (e) {}

    let cust = null;
    try {
        cust = JSON.parse(localStorage.getItem("royalbakes_customer") || "null");
    } catch (e) {}

    let relevantOrders = orders;
    if (cust && cust.phone) {
        relevantOrders = orders.filter(o => o.customerPhone === cust.phone || (o.customerName && cust.name && o.customerName.toLowerCase() === cust.name.toLowerCase()));
    }

    const countBadge = document.getElementById("customerOrdersCountBadge");
    const kBadge = document.getElementById("kitchenPendingBadge");

    if (countBadge) {
        if (relevantOrders.length > 0) {
            countBadge.style.display = "inline-block";
            countBadge.textContent = relevantOrders.length;
        } else {
            countBadge.style.display = "none";
        }
    }

    const pending = orders.filter(o => o.status === "Pending" || o.status === "Accepted" || o.status === "Baking").length;
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
    const settings = getStoreSettings();
    const phone = "+" + settings.phone;
    const itemsText = currentOrder.items.map(i => `${i.name}${i.selectedWeight ? `(${i.selectedWeight})` : ''}(x${i.quantity})`).join(", ");
    const smsBody = `ROYAL BAKES ORDER: #${currentOrder.orderId} | Cust: ${currentOrder.customerName} (${currentOrder.customerPhone}) | Loc: ${currentOrder.address} | Items: ${itemsText} | Total: Rs.${currentOrder.total} | Pay: ${currentOrder.paymentMethod}`;

    window.location.href = `sms:${phone}?&body=${encodeURIComponent(smsBody)}`;
    showToast(`Opening SMS to send order to +${settings.phone} 📲`, "info");
}

function dispatchOrderToWhatsApp() {
    if (!currentOrder) return;
    const settings = getStoreSettings();
    const bakeryPhone = settings.phone;
    const itemsText = currentOrder.items.map(i => `• ${i.name}${i.selectedWeight ? ` [${i.selectedWeight}]` : ''}${i.customMessage ? ` (Note: "${i.customMessage}")` : ''} × ${i.quantity} — ₹${i.price * i.quantity}`).join("%0A");

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
    if (e.key === "royalbakes_inventory" || e.key === "royalbakes_custom_products" || e.key === "royalbakes_product_overrides") {
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

    const chimeBtn = document.getElementById("kdsChimeToggleBtn");
    if (chimeBtn) {
        chimeBtn.textContent = isChimeMuted ? "🔇 Unmute Chime" : "🔊 Chime Sound ON";
    }
});
