import TransactionsInADay from "./TransactionsInADay";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Transactions() {
  const { transactions } = useContext(GlobalContext);
  
  return(
    <>
    {
      Object.keys(transactions).map(transaction => (
          <TransactionsInADay
            key={transaction}
            date={transaction}
          />
        ))
    }
    </>)
}