# Wealth Elite Financial Dashboard

A modern financial dashboard built with Next.js 14, Tailwind CSS, and Chart.js.

## 📸 Dashboard Preview

![Wealth Elite Dashboard](/public/dashboard_screenshot.png)

*Wealth Elite - Investment Made Easier - A comprehensive financial dashboard with KPI cards, transaction metrics, client statistics, and interactive charts.*

## Features

- 📊 Real-time financial metrics (AUM, SIP)
- 📈 Interactive charts and visualizations
- 🎯 Transaction summary with time filters
- 👥 Client statistics bubble chart
- 📱 Responsive design for all devices
- 🚀 Fast performance with Next.js 14

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React
- **Language**: TypeScript

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Quick Start

1. **Clone and navigate to project**
   ```bash
   cd financial-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
financial-dashboard/
├── src/
│   ├── app/
│   │   ├── api/dashboard/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Dashboard.tsx
│       ├── Header.tsx
│       ├── Navigation.tsx
│       ├── KPICards.tsx
│       ├── TransactionSummary.tsx
│       ├── ClientsSection.tsx
│       ├── SIPBusinessChart.tsx
│       └── MonthlyMISChart.tsx
├── package.json
└── README.md
```

## API Endpoints

- `GET /api/dashboard` - Returns mock dashboard data

## Customization

- Modify `src/app/api/dashboard/route.ts` to change data
- Update colors in `src/app/globals.css`
- Adjust chart options in chart components

## Deployment

Build and deploy to your preferred platform:

```bash
npm run build
npm run start
```

## Support

For issues or questions, check the project structure or modify the mock API data as needed.
