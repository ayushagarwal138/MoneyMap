# MoneyMap

MoneyMap is a modern, full-stack financial management platform designed to help users seamlessly connect, view, and manage multiple bank accounts in one place. Built with Next.js, MoneyMap provides a secure and intuitive interface for tracking balances, viewing transaction histories, and transferring funds between accounts.

## Features

- **Multi-Bank Integration:** Securely link and manage multiple bank accounts using Plaid integration.
- **Unified Dashboard:** View all your bank balances and recent transactions in a single, easy-to-navigate dashboard.
- **Transaction History:** Access detailed transaction histories for each connected account.
- **Fund Transfers:** Transfer money between accounts with a simple, guided workflow.
- **Category Insights:** Visualize spending and income by category to better understand your financial habits.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Secure Authentication:** Robust authentication and data protection using industry-standard practices.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

You can start editing the main page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API routes, Appwrite
- **Bank Integration:** Plaid API
- **Payments:** Dwolla API
- **Charts & Visualization:** Chart.js, React Chart.js 2
- **Authentication & Security:** Appwrite, Sentry

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
