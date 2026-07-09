import { Suspense } from "react";
import AccountBalance from "./AccountBalance";
import TransectionHistory from "./TransectionHistory";
import { promises } from "dns";
import TransectionSearch from "./TransectionSearch";


async function getAccountSummary() {
  await new Promise((r)=> setTimeout(r,300));
   return { balance: 5230.5, currency: "USD" };
}

async function getRecentTransactions() {
  await new Promise((r) => setTimeout(r, 500));
  return [{ id: 1, desc: "Grocery", amount: -45 }];
}

async function getSpendingChartData() {
  await new Promise((r) => setTimeout(r, 400));
  return [{ month: "Jan", spent: 1200 }];
}


export default async function DashboardPage() {
const [summary,transection,chartData] = await Promise.all([
  getAccountSummary(),
  getRecentTransactions(),
  getSpendingChartData()
])
return <div>
  <h2>Balance: ${summary.balance}</h2>
  <ul>
    {transection.map((t)=> (
      <li key={t.id}>{t.id}: ${t.amount}</li>
    ))}
  </ul>
  <TransectionSearch/>
</div>;
}