import React, {useRef ,createContext,useState,useEffect} from "react";
export const TransactionContext = createContext();
export const TransactionProvider = ({children}) => {
    const [transactions, setTransactions] = useState([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const saved = localStorage.getItem("transactions");
        if (saved) {
          setTransactions(JSON.parse(saved));
        }
      }, []);

      useEffect(() => {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }
        localStorage.setItem("transactions", JSON.stringify(transactions));
      }, [transactions]);
    const addTransaction = (newTransaction) => {
        setTransactions([newTransaction, ...transactions])
    }
    
    return (
        <TransactionContext.Provider value = {{transactions, addTransaction}}>{children}</TransactionContext.Provider>
    );
};