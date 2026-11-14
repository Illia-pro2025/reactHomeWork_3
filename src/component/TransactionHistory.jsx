import { TransactionHistoryItem } from "./TransactionHistoryItem";
export function TransactionHistory({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => {
          return (
            <TransactionHistoryItem key={transaction.id} {...transaction} />
          );
        })}
      </tbody>
    </table>
  );
}
