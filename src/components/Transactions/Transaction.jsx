import styles from "../../styles/Transaction.module.css";

export default function Transaction({ data }) {
  
  
  return(
    <>
      <div 
        className={styles.container}
      >
        <div className={styles.left}>
          <div className={styles.category}>
            {data.category}
          </div>
          
          <div className={styles.transactionName}>
             {data.name}
          </div>
        </div>
      
        <div className={styles.right}>
          <div className={`${styles.transaction} ${styles[data.type]}`}>
            {data.amount}
          </div>
        </div>
       
      </div>
      

    </>)
}