import React,{useState} from "react"
import TransactionCard from "../components/TransactionCard";
import AddTransactionForm from "../components/AddTransactionForm";

const Transactions = () => {
    const [transactions , setTransactions] = useState([
        { id: 1, name: "Groceries", amount: -500, date: "2024-04-02" },
        { id: 2, name: "Salary", amount: 20000, date: "2024-04-01" },
        { id: 3, name: "Electricity Bill", amount: -1200, date: "2024-03-30" },
        { id: 4, name: "Clothes", amount: 2300, date: "2024-05-30" }
    ]);
    
    const handleAddTransaction = (newTransaction) => {
        setTransactions([newTransaction, ...transactions]);
    }

return (
    <div className="transactions-container">
        <h2>Transactions</h2>
        <AddTransactionForm onAdd={handleAddTransaction}/>
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
