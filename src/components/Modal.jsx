import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styles from "../styles/Modal.module.css";
import TransactionForm from "./TransactionForm";

export default function Modal() {
  const { transactionModal, toggleTransaction } = useContext(GlobalContext);
  
  return(
    <div 
      className={styles.container}
      style={{
        height: `${transactionModal? "100vh":"0"}`, 
        marginTop: `${transactionModal? "0":" 100vh"}`
      }}
    >
    
      <div className={styles.top}>
        <div 
          className={`${styles.closeBtn} center`}
          onClick={toggleTransaction}
        >
          &times;
        </div>
      </div>
      
      <div className={styles.transactionContainer}>
         <TransactionForm add />
      </div>
    </div>)
}