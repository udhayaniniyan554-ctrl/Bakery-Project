const products = [
    {
        name: "Chocolates",
        price: 10,
        image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Chocolate Cake",
        price: 300,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Pups",
        price: 20,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Vanilla",
        price: 20,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Jam Bun",
        price: 15,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Coconut Bun",
        price: 15,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Pepsi",
        price: 15,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Chicken Roll",
        price: 25,
        image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Bread Chilli",
        price: 20,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90"
    },
    {
        name: "Ice Cube Cake",
        price: 500,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=90"
    }
];


let cart = [];


/* ================= START ================= */

document.addEventListener("DOMContentLoaded", function () {

    document
        .getElementById("loginForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            openShop();

        });

});


/* ================= LOGIN ================= */

function continueAsGuest() {

    openShop();

}


function openShop() {

    document.getElementById("loginPage").style.display = "none";

    document.getElementById("shopPage").style.display = "block";

    document.getElementById("checkoutPage").style.display = "none";

    document.getElementById("paymentPage").style.display = "none";

    document.getElementById("successPage").style.display = "none";

    displayProducts();

    window.scrollTo(0, 0);

}


/* ================= PRODUCTS ================= */

function displayProducts(list = products) {

    const grid = document.getElementById("productsGrid");

    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <p style="grid-column:1/-1;text-align:center;padding:50px;">
                No products found.
            </p>
        `;

        return;

    }


    list.forEach(function (product) {

        const existing = cart.find(function (item) {

            return item.name === product.name;

        });


        const quantity =
            existing ? existing.quantity : 0;


        let actionButton;


        if (quantity === 0) {

            actionButton = `

                <button
                    class="add-btn"
                    onclick="addToCart('${product.name}')"
                >
                    + Add to Cart
                </button>

            `;

        } else {

            actionButton = `

                <div class="quantity-box">

                    <button
                        onclick="decreaseQuantity('${product.name}')"
                    >
                        −
                    </button>

                    <span>
                        ${quantity}
                    </span>

                    <button
                        onclick="increaseQuantity('${product.name}')"
                    >
                        +
                    </button>

                </div>

            `;

        }


        grid.innerHTML += `

            <div class="product-card">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.src='https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=90'"
                    >

                    <div class="price-tag">
                        ₹${product.price}
                    </div>

                </div>


                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        Fresh & delicious from Smart Bakes
                    </p>

                    ${actionButton}

                </div>

            </div>

        `;

    });

}


/* ================= ADD TO CART ================= */

function addToCart(name) {

    const product = products.find(function (item) {

        return item.name === name;

    });


    if (!product) return;


    const existing = cart.find(function (item) {

        return item.name === name;

    });


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


    updateCart();

    displayProducts();

}


/* ================= PLUS ================= */

function increaseQuantity(name) {

    const item = cart.find(function (product) {

        return product.name === name;

    });


    if (item) {

        item.quantity++;

    }


    updateCart();

    displayProducts();

}


/* ================= MINUS ================= */

function decreaseQuantity(name) {

    const item = cart.find(function (product) {

        return product.name === name;

    });


    if (!item) return;


    item.quantity--;


    if (item.quantity <= 0) {

        cart = cart.filter(function (product) {

            return product.name !== name;

        });

    }


    updateCart();

    displayProducts();

}


/* ================= CART ================= */

function updateCart() {

    let count = 0;

    let total = 0;


    cart.forEach(function (item) {

        count += item.quantity;

        total += item.price * item.quantity;

    });


    document.getElementById("cartCount").textContent = count;

    document.getElementById("cartTotal").textContent =
        "₹" + total;


    const cartItems =
        document.getElementById("cartItems");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p style="
                text-align:center;
                padding:50px 10px;
                color:#999;
            ">
                Your cart is empty 🛒
            </p>

        `;

        return;

    }


    cart.forEach(function (item) {

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <br>

                    <small>
                        ₹${item.price} × ${item.quantity}
                    </small>

                </div>


                <div class="cart-quantity">

                    <button
                        onclick="decreaseQuantity('${item.name}')"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity('${item.name}')"
                    >
                        +
                    </button>

                </div>

            </div>

        `;

    });

}


/* ================= OPEN CART ================= */

function openCart() {

    updateCart();

    document.getElementById("cartOverlay").style.display =
        "block";

}


function closeCart() {

    document.getElementById("cartOverlay").style.display =
        "none";

}


/* ================= MENU ================= */

function goToMenu() {

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= SEARCH ================= */

function searchProducts() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const filtered =
        products.filter(function (product) {

            return product.name
                .toLowerCase()
                .includes(search);

        });


    displayProducts(filtered);

}


/* ================= CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    closeCart();


    document.getElementById("shopPage").style.display =
        "none";

    document.getElementById("checkoutPage").style.display =
        "block";

    document.getElementById("paymentPage").style.display =
        "none";

    document.getElementById("successPage").style.display =
        "none";


    displayCheckout();

    window.scrollTo(0, 0);

}


/* ================= CHECKOUT SUMMARY ================= */

function displayCheckout() {

    const box =
        document.getElementById("checkoutItems");


    box.innerHTML = "";


    let subtotal = 0;


    cart.forEach(function (item) {

        const amount =
            item.price * item.quantity;


        subtotal += amount;


        box.innerHTML += `

            <div class="checkout-item">

                <span>
                    ${item.name} × ${item.quantity}
                </span>

                <strong>
                    ₹${amount}
                </strong>

            </div>

        `;

    });


    document.getElementById("checkoutSubtotal").textContent =
        "₹" + subtotal;


    document.getElementById("checkoutTotal").textContent =
        "₹" + (subtotal + 30);

}


/* ================= PAYMENT ================= */

function goToPayment() {

    const name =
        document.getElementById("customerName")
        .value
        .trim();


    const phone =
        document.getElementById("customerPhone")
        .value
        .trim();


    const address =
        document.getElementById("customerAddress")
        .value
        .trim();


    if (name === "") {

        alert("Please enter your name.");

        return;

    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10 digit mobile number.");

        return;

    }


    if (address === "") {

        alert("Please enter your delivery address.");

        return;

    }


    document.getElementById("checkoutPage").style.display =
        "none";

    document.getElementById("paymentPage").style.display =
        "block";


    displayPayment();

    window.scrollTo(0, 0);

}


/* ================= PAYMENT SUMMARY ================= */

function displayPayment() {

    const box =
        document.getElementById("paymentItems");


    box.innerHTML = "";


    let subtotal = 0;


    cart.forEach(function (item) {

        const amount =
            item.price * item.quantity;


        subtotal += amount;


        box.innerHTML += `

            <div class="checkout-item">

                <span>
                    ${item.name} × ${item.quantity}
                </span>

                <strong>
                    ₹${amount}
                </strong>

            </div>

        `;

    });


    document.getElementById("paymentTotal").textContent =
        "₹" + (subtotal + 30);

}


/* ================= BACK TO SHOP ================= */

function backToShop() {

    document.getElementById("checkoutPage").style.display =
        "none";

    document.getElementById("paymentPage").style.display =
        "none";

    document.getElementById("successPage").style.display =
        "none";

    document.getElementById("shopPage").style.display =
        "block";


    displayProducts();

    window.scrollTo(0, 0);

}


/* ================= BACK TO CHECKOUT ================= */

function backToCheckout() {

    document.getElementById("paymentPage").style.display =
        "none";

    document.getElementById("checkoutPage").style.display =
        "block";


    displayCheckout();

    window.scrollTo(0, 0);

}


/* ================= PAYMENT COMPLETE ================= */

function paymentCompleted() {

    const name =
        document.getElementById("customerName")
        .value;


    const phone =
        document.getElementById("customerPhone")
        .value;


    let total = 30;


    cart.forEach(function (item) {

        total += item.price * item.quantity;

    });


    const orderId =
        "SB" +
        Math.floor(
            100000 + Math.random() * 900000
        );


    document.getElementById("paymentPage").style.display =
        "none";

    document.getElementById("successPage").style.display =
        "flex";


    document.getElementById("successDetails").innerHTML = `

        <strong>Order ID:</strong>
        #${orderId}

        <br>

        <strong>Customer:</strong>
        ${name}

        <br>

        <strong>Mobile:</strong>
        ${phone}

        <br>

        <strong>Total:</strong>
        ₹${total}

        <br>

        <strong>Status:</strong>
        Order Confirmed ✓

    `;


    cart = [];

    updateCart();

    window.scrollTo(0, 0);

}