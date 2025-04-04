import React from "react"

const TransactionCard = ({name,amount,date}) => {
    return (
        <li className={amount < 0 ? "expense" : "income"}>{name} {amount} ({date})</li>
    );
};
export default TransactionCard