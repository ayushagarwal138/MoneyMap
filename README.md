# 💸 MoneyMap - SaaS Banking Platform

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)
![Plaid](https://img.shields.io/badge/Plaid-Integration-black?style=for-the-badge&logo=plaid&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> A secure, full-stack financial management platform that allows users to link multiple bank accounts, view real-time transactions, and transfer funds. Built with **Next.js 14**, **Appwrite**, and **Plaid**.

## 📖 Overview
MoneyMap addresses the fragmentation of modern banking by unifying accounts into a single dashboard. It leverages **Plaid** for secure bank authentication and **Dwolla** for handling ACH payment transfers.

The application ensures type safety using **TypeScript** and manages secure backend processes (Database & Auth) via **Appwrite**, focusing on performance and security compliance.

---

## 📸 Dashboard Previews
| Financial Dashboard | Transaction History |
|:---:|:---:|
| <img src="https://drive.google.com/uc?export=view&id=1vvChcn4fLzxUyD6X1ma9JNCt-gDQ4S60" alt="Dashboard" width="400"/> | <img src="https://drive.google.com/uc?export=view&id=1vZHRvjQea0rGooHtshkDJ7Rln0hu-CwJ" alt="Transactions" width="400"/> |

| Connect Bank Flow | Tranfer Funds |
|:---:|:---:|
| <img src="https://drive.google.com/uc?export=view&id=1ycMc_qEx81RVMTBF39EUMH0xylFsmLdA" alt="Plaid Link" width="400"/> | <img src="https://drive.google.com/uc?export=view&id=1HPwpsyQycTAfWXm2Mb9DD5oSm-TGP7w1" alt="Mobile" width="400"/> |

---

## 🛠️ Tech Stack

### Core Architecture
* **Framework:** Next.js 14 (App Router, Server Actions)
* **Language:** TypeScript
* **Styling:** Tailwind CSS + Shadcn/UI
* **Form Handling:** React Hook Form + Zod

### Backend & Services
* **BaaS (Backend-as-a-Service):** Appwrite (Auth, Database, Functions)
* **Banking API:** Plaid (Account linking, Transaction data)
* **Payments:** Dwolla (ACH Transfers)
* **Monitoring:** Sentry (Error Tracking)

---

## 🚀 Key Features

* **🔐 Bank-Grade Security:** Integration with Plaid Link ensures banking credentials are never stored on our servers.
* **💸 Fund Transfers:** Authorized users can initiate ACH transfers between connected accounts via Dwolla.
* **📊 Real-time Insights:** Dynamic charts using `Chart.js` to visualize spending habits and income streams.
* **📱 Multi-Device Sync:** Fully responsive UI optimized for mobile banking experiences.
* **👤 Secure Auth:** SSR-compatible authentication flows powered by Appwrite.

---

## ⚡ Getting Started

### Prerequisites
* Node.js 18+
* Appwrite Cloud Account
* Plaid Sandbox Account
* Dwolla Sandbox Account

### 1. Clone & Install
```bash
git clone [https://github.com/your-username/moneymap.git](https://github.com/your-username/moneymap.git)
cd moneymap
npm install
```
### 2. Environment Setup
Create a `.env.local` file in the root directory and add your keys:
```bash
# Appwrite
NEXT_PUBLIC_APPWRITE_ENDPOINT=[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
APPWRITE_DATABASE_ID=your_db_id
APPWRITE_USER_COLLECTION_ID=your_collection_id

# Plaid
PLAID_CLIENT_ID=your_plaid_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox

# Dwolla
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret
DWOLLA_BASE_URL=[https://api-sandbox.dwolla.com](https://api-sandbox.dwolla.com)
```
### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to view the application.

---
## 📂 Project Structure
```bash
  MoneyMap/
├── app/                  # Next.js App Router Pages
├── components/           # Reusable UI Components
├── lib/                  # Utility functions (Plaid/Appwrite config)
├── public/               # Static assets
└── types/                # TypeScript Interfaces
```
---
## 🔮 Future Roadmap
* [ ] Integration with Stripe for Card Payments.

* [ ] AI-powered spending predictions.

* [ ] Dark Mode support.
---
## 👨‍💻 Author

### Ayush Agarwal Java Full Stack Developer.
[LinkedIn](https://www.linkedin.com/in/ayush-agarwal-50668927b/) | [Portfolio](https://portfolio-alpha-puce-1o6qxo19x8.vercel.app/)
