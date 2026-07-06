import React from 'react'

async function getTransactions() {
  await new Promise((r)=>setTimeout(r,3000))

  return[
     { id: 1, amount: -50, type: "withdrawal" },
    { id: 2, amount: 200, type: "deposit" },
  ]
}
export default async function TransectionHistory() {
 const transactions = await getTransactions();
  return (
    <ul>
      {transactions.map((t) => (
        <li key={t.id}>
          {t.type}: ${t.amount}
        </li>
      ))}
    </ul>
  );
}
