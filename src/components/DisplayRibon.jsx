import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styles from "../styles/DisplayRibon.module.css";

export default function DisplayRibon() {
  const { summery } = useContext(GlobalContext);
  
  
  return(
    <div className={styles.container}>
      <div className={styles.income}>
        <h5>Income</h5>
        <h6>6777</h6>
      </div>
      
      <div className="verticalDevider"></div>
      
      <div className={styles.expense}>
        <h5>Expenses</h5>
        <h6>6777</h6>
      </div>
      
      <div className="verticalDevider"></div>
      
      <div className={styles.balance}>
        <h5>Balance</h5>
        <h6>6777</h6>
      </div>
    </div>)
}