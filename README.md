# Royal Bakes — Unified Digital Ordering & Kitchen Management Portal

**Project Better Tomorrow — Project Review-1 Milestone (35% Functional Prototype)**

Royal Bakes is a dedicated, zero-commission digital ordering portal and real-time kitchen dashboard designed for local artisanal bakeries and cafes.

---

## Key Features

### Customer Store & Ordering Portal
- **Interactive Menu Catalog**: Categorized into Cakes, Snacks & Puffs, Buns & Breads, and Beverages with live search and dietary indicators (Veg / Non-Veg).
- **Cart & Dynamic Pricing**: Slideout cart drawer with real-time subtotal calculations, coupon deductions (SWEET10), and free delivery threshold tracking.
- **2-Step Minimal Checkout**: Streamlined address input, delivery time slot selection, and special baking instructions.
- **Payment & Verification**: Direct UPI QR presentation, UPI intent links, and counter-scannable Digital Ticket QR code receipts.
- **Communication Bridges**: Native pre-filled mobile SMS and WhatsApp instant order dispatch triggers.

### Shopkeeper & Kitchen Dashboard
- **Protected Staff Access**: Secure staff verification gating kitchen operations.
- **Real-Time Live Order Stream**: Live incoming order feed with Web Audio API sound alerts upon order placement.
- **Lifecycle Status Controller**: 4-stage order status progression (Pending -> Baking -> Out for Delivery -> Delivered).
- **1-Click Stock Management**: Instant in-stock / out-of-stock toggling for all catalog items.
- **Menu & Sales Analytics**: Dynamic item addition modal, sales volume tracking, and revenue calculation.

---

## Architecture & Technology Stack

- **Frontend**: Semantic HTML5, Vanilla JavaScript (ES6+), Modern Responsive CSS3 (CSS Grid & Flexbox).
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Playfair Display*).
- **Data & State Management**: Browser Web Storage (localStorage & sessionStorage).
- **Real-Time Communication**: BroadcastChannel API (local multi-tab) & Server-Sent Events (SSE pub/sub relay).
- **Audio Feedback**: Web Audio API synthetic dual-tone synthesizer.
- **QR Code Engine**: QRServer REST API & Base64 Data URI Matrix.
- **Deployment**: Static Edge Hosting (GitHub Pages / Netlify).

---

## Live Deployment

- **Production URL (Netlify)**: https://royalbakes2026.netlify.app/
- **Mirror Deployment (GitHub Pages)**: https://udhayaniniyan554-ctrl.github.io/Bakery-Project/

---

## Project Structure

`	ext
├── index.html       # Single Page Application core structure & view routing
├── style.css        # Responsive styling, design tokens & UI components
├── script.js        # Catalog engine, cart, real-time sync, and kitchen controller
├── order.html       # Standalone quick order template
├── qr-only.jpg      # Base QR image asset
├── .gitignore       # Git exclusion rules
└── README.md        # Project documentation & review summary
`

---

## Milestone Progression

- **35% Milestone (Current)**: Architecture Design, Responsive UI, Functional Ordering Prototype, UPI Integration, and Real-Time Kitchen Sync.
- **60% Milestone (Upcoming)**: Field Validation, Usability Feedback, Cloud Database Integration.
- **80% Milestone (Planned)**: Performance Optimization, Automated Reporting & Exporting.
- **100% Milestone (Final)**: Final Production Delivery, Comprehensive Evaluation, and Documentation.
