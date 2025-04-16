import React, { useState } from "react";

const AddTransactionForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("income");
    const [error, setError] = useState({ name: false, amount: false, date: false, type: false });

    const handleSubmit = (e) => {
        e.preventDefault();


        let formIsValid = true;
        let errors = { name: false, amount: false, date: false, type: false };

        if (!name) {
            errors.name = "Transaction name is required.";
            formIsValid = false;
        }
        if (!amount || isNaN(amount) || amount <= 0) {
            errors.amount = "Enter a valid amount greater than 0.";
            formIsValid = false;
        }
        if (!date) {
            errors.date = "Date is required.";
            formIsValid = false;
        }
        if (!type) {
            errors.type = "Please select a transaction type.";
            formIsValid = false;
        }

        if (!formIsValid) {
            setError(errors);
            return;
        }


        const newTransaction = {
            id: Date.now(),
            name,
            amount: parseFloat(amount),
            date: date,
            type,
        };

        console.log("New Transaction Added:", newTransaction);

        onAdd(newTransaction);


        setName("");
        setAmount("");
        setDate("");
        setType("income");
        setError({ name: false, amount: false, date: false, type: false });
    };
    const handleReset = () => {
        setName("");
        setAmount("");
        setDate("");
        setType("income");
        setError({ name: false, amount: false, date: false, type: false });
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            {error.name && <div className="text-red-500 text-center mb-2">{error.name}</div>}
            {error.amount && <div className="text-red-500 text-center mb-2">{error.amount}</div>}
            {error.date && <div className="text-red-500 text-center mb-2">{error.date}</div>}
            {error.type && <div className="text-red-500 text-center mb-2">{error.type}</div>}

            <input
                type="text"
                placeholder="Transaction Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`border-2 p-2 rounded mt-2 ${error.name ? "border-red-500" : "border-gray-300"}`}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`border-2 p-2 rounded mt-2 ${error.amount ? "border-red-500" : "border-gray-300"}`}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`border-2 p-2 rounded mt-2 ${error.date ? "border-red-500" : "border-gray-300"}`}
                required
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`border-2 p-2 rounded mt-2 ${error.type ? "border-red-500" : "border-gray-300"}`}
                required
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
                disabled={Object.values(error).includes(true)}>Add Transaction</button>

            <button
                type="button"
                onClick={handleReset}
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 mt-4 transition-all duration-200">
                Reset Form
            </button>
        </form>
    );
};

export default AddTransactionForm;
