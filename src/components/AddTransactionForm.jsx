import React, { useState } from "react";

const AddTransactionForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("income");

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Strong validation
        if (!name || !amount || !date || !type) {
            return alert("Please fill all the fields and select type.");
        }

        const newTransaction = {
            id: Date.now(),
            name,
            amount: parseFloat(amount),
            date: new Date(date).toISOString(),
            type,
        };

        console.log("New Transaction Added:", newTransaction); // Debug log

        onAdd(newTransaction);

        // Clear form
        setName("");
        setAmount("");
        setDate("");
        setType("income");
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <input
                type="text"
                placeholder="Transaction Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransactionForm;
