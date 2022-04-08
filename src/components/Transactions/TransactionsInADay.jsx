import styles from "../../styles/TransactionsInADay.module.css";
import Transaction from "./Transaction";
import dateAndTime from "../../lib/dateConverter";

export default function TransactionsInADay({ date, data }) {
  
  const getOnlyDate = (date) => {
    return date.split("-")[2]
  }
  
  const getDate = (date) => {
    return date.split("-").join("/")
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.date}>{getOnlyDate(date)}</div>
          <div className={styles.day}>{dateAndTime.getDay(date)}</div>
          <div className={styles.fulldate}>{getDate(date)}</div>
        </div>
        
        <div className={styles.right}>
          <div className={styles.income}>{data.income}</div>
          <div className={styles.expense}>{data.expense}</div>
        </div>
      </div>
      
      <div>
      {
        data.transactionsArr.map(transaction => (
          <Transaction 
            data={transaction}
            key={transaction.id}
          />
        ))
      }
      </div>
    </div>)
}