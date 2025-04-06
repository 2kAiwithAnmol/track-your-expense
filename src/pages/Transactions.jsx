import React,{useState} from "react"
import TransactionCard from "../components/TransactionCard";
import AddTransactionForm from "../components/AddTransactionForm";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";

const Transactions = () => {
    const {transactions, addTransaction} = useContext(TransactionContext);

return (
    <div className="transactions-container">
        <h2>Transactions</h2>
        <AddTransactionForm onAdd={addTransaction}/>
        <ul>
           { transactions.map((transaction) => (
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
