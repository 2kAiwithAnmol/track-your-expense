import React,{useState} from "react"

const AddTransactionForm = ({onAdd}) => {
    const [name,setName] = useState("");
    const [amount,setAmount] = useState("");
    const [date,setDate] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !amount || !date) return alert("Please fill all the field");

    const newTransaction = {
        id: Date.now(),
        name,
        amount: parseFloat(amount),
        date
    };

    onAdd(newTransaction);
    setName("");
    setAmount("");
    setDate("");
    
    }


return (
    <form onSubmit={handleSubmit} className="transaction-form">
        <input type="text" 
        placeholder="Transaction Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
         <input type="number" 
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
         <input type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
    </form>
)
};
export default AddTransactionForm;