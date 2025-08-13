import { NextResponse } from 'next/server';

export async function GET() {
  const dashboardData = {
    aum: {
      current: "12.19 Cr",
      change: "+0.77%",
      trend: "MoM"
    },
    sip: {
      current: "1.39 Lakh",
      change: "+0%",
      trend: "MoM"
    },
    transactions: {
      "3days": {
        purchases: { count: 0, amount: "0.00 INR" },
        redemptions: { count: 0, amount: "0.00 INR" },
        rejected: { count: 0, amount: "0.00 INR" },
        sipRejections: { count: 0, amount: "0.00 INR" },
        newSip: { count: 0, amount: "0.00 INR" }
      },
      "7days": {
        purchases: { count: 5, amount: "2.50 Lakh INR" },
        redemptions: { count: 3, amount: "1.20 Lakh INR" },
        rejected: { count: 1, amount: "0.50 Lakh INR" },
        sipRejections: { count: 2, amount: "0.80 Lakh INR" },
        newSip: { count: 8, amount: "3.20 Lakh INR" }
      },
      "10days": {
        purchases: { count: 12, amount: "6.80 Lakh INR" },
        redemptions: { count: 7, amount: "3.40 Lakh INR" },
        rejected: { count: 3, amount: "1.20 Lakh INR" },
        sipRejections: { count: 4, amount: "1.60 Lakh INR" },
        newSip: { count: 15, amount: "7.50 Lakh INR" }
      },
      "30days": {
        purchases: { count: 45, amount: "25.60 Lakh INR" },
        redemptions: { count: 28, amount: "15.20 Lakh INR" },
        rejected: { count: 12, amount: "6.80 Lakh INR" },
        sipRejections: { count: 18, amount: "9.60 Lakh INR" },
        newSip: { count: 52, amount: "28.40 Lakh INR" }
      }
    },
    clients: {
      total: 3824,
      active: 541,
      online: 60,
      new: 2
    },
    sipBusiness: {
      months: ['Mar', 'Apr', 'May', 'Jun'],
      bars: [1.6, 1.6, 1.6, 1.6],
      line1: [2.2, 0, 0, 0],
      line2: [0, 0, 0, 0]
    },
    monthlyMis: {
      months: ['Mar', 'Apr', 'May', 'Jun'],
      red: [0.30, 0.20, 0.15, 0.10],
      green: [0.10, 0.20, 0.40, 0.25],
      blue: [0.10, -0.10, 0.30, 0.15]
    }
  };

  return NextResponse.json(dashboardData);
}
