async function getBalance() {
  await new Promise((r) => setTimeout(r, 2000));
  return { balance: 1500 };
}

export default async function AccountBalance() {
  const { balance } = await getBalance();
  return <h2>Balance: ${balance}</h2>;
}