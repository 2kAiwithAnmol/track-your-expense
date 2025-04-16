import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import "./style.css"

const SummaryDashboard = () => {
    const { transactions,  clearTransactions } = useContext(TransactionContext);
    console.log("Transactions in SummaryDashboard:", transactions);

    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((acc, curr) => acc + Number(curr.amount), 0);

    const expense = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, curr) => acc + Number(curr.amount), 0);

    const balance = income - expense;
    const handleReset = () => {
        clearTransactions();
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow-md mt-6">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">

                <div className="summary-card income-card">
                    <p className="text-green-700 font-semibold">Total Income</p>
                    <h3 className="text-2xl font-bold">₹ {income}</h3>
                </div>


                <div className="summary-card expense-card">
                    <p className="text-red-700 font-semibold">Total Expenses</p>
                    <h3 className="text-2xl font-bold">₹ {expense}</h3>
                </div>


                <div className="summary-card balance-card">
                    <p className="text-blue-700 font-semibold">Balance</p>
                    <h3 className="text-2xl font-bold">₹ {balance}</h3>
                </div>
            </div>
            <button
                onClick={handleReset}
                className="reset-button"
            >
                Reset Data
            </button>
        </div>
    );
};

export default SummaryDashboard;
