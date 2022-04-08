import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "../../styles/TransactionsInADay.module.css";
import Transaction from "./Transaction";
import dateAndTime from "../../lib/dateConverter";
import dayIncomeExpense from "../../lib/dayIncomeExpense";

export default function TransactionsInADay({ date }) {
  
  const { transactions } = useContext(GlobalContext);
  
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
          <div className={styles.income}>{dayIncomeExpense(transactions, date).income}</div>
          <div className={styles.expense}>{dayIncomeExpense(transactions, date).expense}</div>
        </div>
      </div>
      
      <div>
      {
        transactions[date].map(transaction => (
          <Transaction data={transaction} />
        ))
      }
      </div>
    </div>)
}