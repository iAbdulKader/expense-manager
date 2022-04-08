import styles from "../styles/Modal.module.css";
import TransactionForm from "./TransactionForm";

export default function Modal({ show, toggle, add, data }) {
  
  return(
    <div 
      className={styles.container}
      style={{
        height: `${show? "100vh":"0"}`, 
        marginTop: `${show? "0":" 100vh"}`
      }}
    >
    
      <div className={styles.top}>
        <div 
          className={`${styles.closeBtn} center`}
          onClick={toggle}
        >
          &times;
        </div>
      </div>
      
      <div className={styles.transactionContainer}>
        <TransactionForm 
          add={add} 
          data={data}
          toggle={toggle}
        />
      </div>
    </div>)
}