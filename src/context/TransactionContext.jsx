import React, {createContext,useState,useEffect} from "react";
export const TransactionContext = createContext();
export const TransactionProvider = ({children}) => {
    const [transactions, setTransactions] = useState([{id : 1, name : "Groceries", amount : -500, date : "2024-04-02"},{id : 2, name : "Salary", amount : 20000, date : "2024-04-02"},{id : 3, name : "Electricity Bill", amount : -1200, date : "2024-04-02"},{id : 4, name : "Clothes", amount : 2300, date : "2024-04-02"}]);
    const addTransaction = (newTransaction) => {
        setTransactions([newTransaction, ...transactions])
    }
    
    return (
        <TransactionContext.Provider value = {{transactions, addTransaction}}>{children}</TransactionContext.Provider>
    );
};