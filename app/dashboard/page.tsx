import { Suspense } from "react";
import AccountBalance from "./AccountBalance";
import TransectionHistory from "./TransectionHistory";

export default function Dashboard() {
return <div>
  <Suspense fallback={<div>Loading...</div>}>
  <AccountBalance/>
  </Suspense>

  <Suspense fallback={<p>Loading transaction history...</p>}>
   <TransectionHistory/>
  </Suspense>
</div>;
}