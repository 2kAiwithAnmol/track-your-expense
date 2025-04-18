import React, { useState } from "react"
import TransactionCard from "../components/TransactionCard";
import AddTransactionForm from "../components/AddTransactionForm";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";




const Transactions = () => {
    const { transactions, addTransaction } = useContext(TransactionContext);
    const [filterType, setFilterType] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const filteredTransactions = transactions
        .filter((t) => {
            if (filterType === "amountAbove1000") return t.amount > 1000;
            if (filterType === "amountBelow1000") return t.amount < 1000;
            return true;
        })
        .sort((a, b) => {
            if (sortOrder === "amountAsc") return a.amount - b.amount;
            if (sortOrder === "amountDesc") return b.amount - a.amount;
            if (sortOrder === "dateAsc") return new Date(a.date || 0) - new Date(b.date || 0);
            if (sortOrder === "dateDesc") return new Date(b.date || 0) - new Date(a.date || 0);
            return 0;
        });

    return (
        <div className="transactions-container">
            <h2>Transactions</h2>
            <AddTransactionForm onAdd={addTransaction} />
            <div className="filter">
                <select onChange={(e) => setFilterType(e.target.value)}>
                    <option value="" >All</option>
                    <option value="amountAbove1000">Amount  &gt; 1000</option>
                    <option value="amountBelow1000">Amount &lt; 1000</option>
                </select>

                <select onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="">No sorting</option>
                    <option value="amountAsc">Amount Ascending</option>
                    <option value="amountDesc">Amount Descending</option>
                    <option value="dateAsc">Date Ascending</option>
                    <option value="dateDesc">Date Descending</option>
                </select>
            </div>
            <ul>
                {filteredTransactions.map((transaction) => (
                    <TransactionCard
                        key={transaction.id}
                        name={transaction.name}
                        amount={transaction.amount}
                        date={transaction.date}
                    />
                ))}
            </ul>
        </div>
    );
};
export default Transactions
