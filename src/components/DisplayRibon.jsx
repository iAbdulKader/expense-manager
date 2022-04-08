import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styles from "../styles/DisplayRibon.module.css";
import calculateSummery from "../lib/calculateSummery";

export default function DisplayRibon() {
  const { transactions } = useContext(GlobalContext);
  const [summery, setSummery] = useState({
    income: 0,
    expense: 0,
    balance: 0
  })
  
  useEffect(() => {
    setSummery(calculateSummery(transactions))
  }, [transactions])
  
  return(
    <div className={styles.container}>
      <div className={styles.income}>
        <h5>Income</h5>
        <h6>{summery.income}</h6>
      </div>
      
      <div className="verticalDevider"></div>
      
      <div className={styles.expense}>
        <h5>Expenses</h5>
        <h6>{summery.expense}</h6>
      </div>
      
      <div className="verticalDevider"></div>
      
      <div className={styles.balance}>
        <h5>Balance</h5>
        <h6>{summery.balance}</h6>
      </div>
    </div>)
}