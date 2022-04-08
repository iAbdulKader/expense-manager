import { useState } from "react";
import Modal from "../Modal"
import styles from "../../styles/Transaction.module.css";

export default function Transaction({ data }) {
  const [show, setShow] = useState(false)
  
  const toggle = () => {
    setShow(prev => !prev)
  }
  
  return(
    <>
      <div 
        className={styles.container}
        onClick={toggle}
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
      
      <Modal 
        add={false} 
        data={data}
        show={show}
        toggle={toggle}
      />
    </>)
}