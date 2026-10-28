# Royal Bakes — Unified Digital Ordering, UPI Payment & Real-Time Kitchen Management Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://royalbakes2026.netlify.app/)
[![GitHub Pages](https://img.shields.io/badge/Mirror-GitHub_Pages-222222?style=for-the-badge&logo=github)](https://udhayaniniyan554-ctrl.github.io/Bakery-Project/)
[![Architecture](https://img.shields.io/badge/Architecture-Single_Page_App_(SPA)-orange?style=for-the-badge)](https://github.com/udhayaniniyan554-ctrl/Bakery-Project)

**Royal Bakes** is a comprehensive, production-grade digital bakery platform designed for local bakeries, patisseries, and cafes. It bridges customer self-service ordering, direct peer-to-merchant UPI payments, real-time Kitchen Display Systems (KDS), and executive management analytics into a unified, zero-commission web platform.

---

## 🚀 Review 3 Milestone Status: Complete

**Project Progress: Review 3 Fully Implemented & Verified**
This repository reflects the complete, verified Review 3 deliverables for Royal Bakes:
- **100% Verified Asset Parity**: All 30 bakery catalog items verified with HTTP 200 OK high-resolution artisanal photography.
- **Persistent Cart & Custom Orders**: Multi-tab synced shopping cart with weight options, eggless toggles, and cake message inscriptions.
- **Old Orders Bug Resolved**: Parameterized SSE EventStream with `?since=now` and a 15-minute age threshold to permanently prevent old orders from replaying as new incoming orders.
- **Customer Authentication & Profiles**: 10-digit phone verification, saved delivery addresses, and automatic checkout autofill.
- **Scoped Order Tracking**: My Orders modal scopes orders to the active customer and separates *Active Orders in Progress* from *Past & Completed Orders*.
- **Dynamic Store Settings**: Standard delivery fees and free delivery thresholds configured dynamically from the Admin Settings tab.
- **Admin Inventory & Menu Management**: One-click low stock restock (+20 units), product detail editing, and Master Orders CSV export.
- **Printable Thermal KOT & Ticket QR**: 80mm monospaced Kitchen Order Tickets and scannable digital counter receipt QR codes.
- **Comprehensive Documentation**: Complete academic viva report and demonstration guide in [Review3_Comprehensive_Documentation.md](Review3_Comprehensive_Documentation.md).

---

1. [Project Overview](#-project-overview)
2. [Problem Statement](#-problem-statement)
3. [Proposed Solution](#-proposed-solution)
4. [Complete System Architecture](#-complete-system-architecture)
5. [End-to-End Data Flow](#-end-to-end-data-flow)
6. [Key Modules & Features](#-key-modules--features)
   - [🛍️ Customer Store & Ordering Portal](#1-customer-store--ordering-portal)
   - [👨‍🍳 Kitchen Display System (KDS)](#2-kitchen-display-system-kds)
   - [📊 Executive Management & Analytics](#3-executive-management--analytics)
   - [📦 Real-Time Inventory Engine](#4-real-time-inventory-engine)
   - [📱 UPI Payment & Digital QR Receipts](#5-upi-payment--digital-qr-receipts)
7. [Technology Stack](#-technology-stack)
8. [Installation & Local Setup](#-installation--local-setup)
9. [Project Directory Structure](#-project-directory-structure)
10. [Testing & Quality Assurance](#-testing--quality-assurance)
11. [Deployment & Production Links](#-deployment--production-links)
12. [Milestone Roadmap](#-milestone-roadmap)

---

## 📌 Project Overview

Traditional local bakeries face significant friction during daily operations: counter congestion during peak hours, order transcription errors, high commissions on commercial aggregator apps (20-30%), and lack of real-time visibility into perishable inventory.

**Royal Bakes** provides a complete software ecosystem that runs directly in standard web browsers across mobile devices, tablets, and POS screens without requiring heavy native application downloads or paid cloud backend infrastructure.

---

## 🛑 Problem Statement

1. **High Commission Losses**: Third-party food delivery aggregators charge up to 30% per order, severely eroding small bakery profit margins.
2. **Counter Bottlenecks**: Peak morning and evening customer rushes lead to long waiting lines, delayed order taking, and billing delays.
3. **Manual Order Confusion**: Verbal orders for custom cakes and inscriptions frequently result in mistakes during kitchen baking.
4. **Perishable Inventory Mismatch**: Customers often order items that have sold out earlier in the day due to lack of synchronized stock tracking.

---

## 💡 Proposed Solution

* **Direct Merchant Ordering**: Customers browse interactive digital menus, customize items, and pay directly via zero-commission UPI.
* **Synchronized Kitchen Display (KDS)**: Real-time order queue with dual-tone audio alerts and preparation checklists for bakers.
* **Automated Stock Deduction**: Inventory counts update in real-time as orders are confirmed, preventing out-of-stock orders.
* **Instant Digital Verification**: Counter-verifiable QR receipts and automated SMS/WhatsApp dispatch bridges.

---

## 🏗️ Complete System Architecture

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                          ROYAL BAKES WEB PORTAL                         │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
          ┌──────────────────────────┼──────────────────────────┐
          ▼                          ▼                          ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│  CUSTOMER STORE  │       │   KITCHEN KDS    │       │ ADMIN MANAGEMENT │
│  - Menu & Search │       │ - Live Queue     │       │ - Sales Analytics│
│  - Dynamic Cart  │       │ - Prep Checklist │       │ - Inventory Ctrl │
│  - UPI QR Pay    │       │ - Audio Chime    │       │ - Master Logs    │
│  - Live Tracker  │       │ - KOT Printing   │       │ - Store Settings │
└─────────┬────────┘       └─────────▲────────┘       └─────────▲────────┘
          │                          │                          │
          └──────────────────────────┼──────────────────────────┘
                                     │
                        ┌────────────┴────────────┐
                        │   REAL-TIME DATA LAYER  │
                        ├─────────────────────────┤
                        │ • BroadcastChannel API  │
                        │ • Server-Sent Events    │
                        │ • Browser LocalStorage  │
                        │ • Web Audio API Chime   │
                        └─────────────────────────┘
```

---

## 🔄 End-to-End Data Flow

```text
[Customer Browses Catalog] 
       ↓
[Adds to Basket & Customizes Note] 
       ↓
[Selects Delivery / Store Pickup] 
       ↓
[Scans Merchant UPI QR / Enters UTR] 
       ↓
[Order Transmitted (Real-Time SSE + Broadcast)] 
       ↓
[Kitchen KDS Rings Audio Chime 🔔] ➔ [Inventory Stock Auto-Deducted]
       ↓
[Chef Accepts Order ➔ Starts Baking ➔ Marks Ready]
       ↓
[Customer Tracker Updates Live in Real-Time] 
       ↓
[Handover / Delivery Complete with Scannable QR Ticket]
```

---

## 🚀 Key Modules & Features

### 1. 🛍️ Customer Store & Ordering Portal
- **Rich Menu Catalog**: Filter by 7 distinct categories (Cakes, Pastries, Snacks & Puffs, Buns & Breads, Cookies, Desserts, Beverages).
- **Search & Advanced Sort**: Live search by keyword/ingredient, filter by Pure Veg / Non-Veg, and sort by Price or Rating.
- **Fulfillment Selector**: 1-click toggle between **Home Delivery** (with delivery slot selector) and **Store Pickup** at Rayarpalayam counter.
- **Interactive Cart Drawer**: Real-time quantity steppers, item notes, free delivery threshold progress bar (₹499), and coupon engine (`SWEET10` for 10% off, `ROYAL50` for ₹50 off over ₹399).
- **Live 5-Stage Order Tracker**: Visual progress bar (`Received` ➔ `Accepted` ➔ `Baking 🎂` ➔ `Ready 📦` ➔ `Completed ✅`).

### 2. 👨‍🍳 Kitchen Display System (KDS)
- **Live Incoming Queue**: Real-time order cards showing elapsed time, customer phone, delivery slot, and special baking notes.
- **Preparation Checklist**: Interactive checkboxes for bakery staff to verify items as they are baked and packaged.
- **Audio Chime Synthesizer**: Web Audio API dual-tone chime triggered automatically on incoming orders.
- **Kitchen Order Ticket (KOT)**: 1-click KOT thermal printer layout generator for kitchen records.

### 3. 📊 Executive Management & Analytics
- **Live Financial KPI Tiles**: Real-time tracking of Today's Gross Revenue, Total Orders Count, Average Order Value (AOV), and Low-Stock items.
- **Interactive SVG Charts**:
  - 7-Day Revenue Trend (interactive bar chart).
  - Category Sales Volume Breakdown (interactive donut chart).
- **Top Selling Leaderboard**: Ranking of bakery specialties by units sold and revenue generated.
- **Master Orders Log & CSV Export**: Complete historical audit trail with 1-click CSV data export.

### 4. 📦 Real-Time Inventory Engine
- **Per-Item Stock Tracking**: Tracks current stock, minimum warning threshold, and units sold.
- **Automatic Stock Deduction**: Inventory counts decrement immediately upon order placement.
- **Visual Stock Badges**: `🟢 In Stock`, `🟡 Low Stock`, `🔴 Out of Stock`.
- **Quick Restock Controls**: 1-click restock buttons (`+10`, `+25`, `+50`) and dynamic product creation modal.

### 5. 📱 UPI Payment & Digital QR Receipts
- **Merchant Direct UPI**: Zero-commission direct settlement to Indian Bank (`muthukrishnans2002@okhdfcbank`, Payee: Muthukrishnan S).
- **Dynamic Payment Links**: Mobile UPI deep-linking (`upi://pay?pa=...`) for instant 1-tap app launch.
- **Scannable Counter Ticket QR**: Dynamic QR code generated on confirmation for instant verification during pickup/delivery.

---

## 💻 Technology Stack

| Layer | Technologies Used |
|---|---|
| **Frontend Framework** | Semantic HTML5, Vanilla JavaScript (ES6+), Modern CSS3 |
| **Styling & Layout** | CSS Grid, Flexbox, Custom Properties (Tokens), Keyframe Animations |
| **Typography** | Google Fonts (*Plus Jakarta Sans*, *Playfair Display*) |
| **Real-Time Pipeline** | Browser BroadcastChannel API, Window Storage Events, Server-Sent Events (SSE via ntfy protocol) |
| **Audio Feedback** | Web Audio API (Synthesized dual-tone sine wave) |
| **QR Code Engine** | QRServer REST API & Base64 Data URI Matrix |
| **Hosting & CI/CD** | Netlify Edge CDN & GitHub Pages Static Hosting |

---

## 🛠️ Installation & Local Setup

To run Royal Bakes locally on your machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/udhayaniniyan554-ctrl/Bakery-Project.git
   cd Bakery-Project
   ```

2. **Serve the Application**:
   Since Royal Bakes is built on modern web standards, you can open `index.html` directly in any browser, or serve it using Python or Node.js:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Or using Node.js npx
   npx serve .
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:8000` in your web browser.

---

## 📂 Project Directory Structure

```text
Bakery-Project/
├── index.html                           # Core Single Page Application structure & view templates
├── style.css                            # Design tokens, responsive layouts, KDS cards & print styles
├── script.js                            # Catalog engine, cart, real-time KDS controller & SVG analytics
├── Review3_Comprehensive_Documentation.md# Comprehensive Review 3 academic report & viva guide
├── order.html                           # Standalone quick ordering template
├── qr-only.jpg                          # Clean cropped UPI QR code matrix image
├── qr-code.jpg                          # Original QR source asset
├── qr-base64.txt                        # Base64 data string for embedded offline QR rendering
├── .gitignore                           # Git exclusion rules for node_modules and secrets
└── README.md                            # Comprehensive platform documentation
```

---

## 🧪 Testing & Quality Assurance

The platform has undergone rigorous functional verification:
- **Customer Ordering Flow**: Verified product filtering, search, quantity stepper, coupon deductions (`SWEET10`, `ROYAL50`), and address validation.
- **Payment Verification**: Verified UPI QR matrix rendering, UPI intent deep link creation, and Cash on Delivery toggle.
- **Real-Time KDS Sync**: Verified Server-Sent Events stream connectivity (`200 OK` on `ntfy.sh`), BroadcastChannel local tab sync, and Web Audio API chime.
- **Inventory Deductions**: Verified that placing orders correctly decrements stock counts and triggers low-stock warnings when inventory reaches threshold.
- **Responsive Layout**: Tested across mobile (320px-480px), tablet (768px-1024px), and desktop (1200px+) screen sizes.

---

## 🌐 Deployment & Production Links

- **Primary Production URL (Netlify)**: [https://royalbakes2026.netlify.app/](https://royalbakes2026.netlify.app/)
- **Mirror Deployment (GitHub Pages)**: [https://udhayaniniyan554-ctrl.github.io/Bakery-Project/](https://udhayaniniyan554-ctrl.github.io/Bakery-Project/)
- **GitHub Repository**: [https://github.com/udhayaniniyan554-ctrl/Bakery-Project](https://github.com/udhayaniniyan554-ctrl/Bakery-Project)

---

## 📊 Milestone Roadmap

- **Review 1 (35% Milestone - Completed)**: Initial functional prototype, catalog display, static layout.
- **Review 2 (70% Milestone - Completed)**: Core cart flow, UPI checkout, kitchen display system, analytics.
- **Review 3 (Pre-Final Review - Completed)**: Full bug resolution (old order loop fix, broken image replacements), customer profiles, scoped order tracking, dynamic store fees, admin product edit modal, mobile responsiveness, and comprehensive documentation.
- **Final Viva (100% Milestone - Upcoming)**: Final evaluation panel demonstration, live counter validation at Rayarpalayam, and deployment sign-off.
