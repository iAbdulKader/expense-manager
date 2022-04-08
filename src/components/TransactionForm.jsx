import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styles from "../styles/TransactionForm.module.css";
import Button from "./Button";
import dateAndTime from "../lib/dateConverter";

export default function TransactionForm({ add, type = "expense", toggle, data = {} }) {
  
  const { AddTransaction } = useContext(GlobalContext);
  
  const [active, setActive] = useState(type);
  const [date, setDate] = useState(data.date || dateAndTime.nowDate());
  const [time, setTime] = useState(data.time || dateAndTime.nowTime());
  const [category, setCategory] = useState(data.category || "");
  const [name, setName] = useState(data.name || "");
  const [amount, setAmount] = useState(data.amount || "");
  const [note, setNote] = useState(data.note || "");
  
  
  const onSubmit = () => {
    if(!name.trim() || !category.trim() || !amount){
      return
    }
    
    AddTransaction({
      id: Date.now(),
      type: active,
      time,
      category,
      name,
      amount,
      note
    }, date)
    
    setName("");
    setCategory("");
    setAmount("");
    setNote("");
    setActive("expense")
    
    toggle()
  }
  
  return(
    <div className={styles.container}>
      <div className={styles.top}>
          <div 
            onClick={() =>setActive("income")}
            className={`${styles.income} ${active==="income"?styles.active:null}`}
          >
            Income
          </div>
          <div 
            onClick={() => setActive("expense")}
            className={`${styles.expense} ${active==="expense"?styles.active:null}`}
          >
            Expense
          </div>
      </div>
    
      <div>
        <p>Date</p>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
        <input 
          type="time" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
     
      <div>
        <p>Category</p>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      
      <div>
        <p>Name</p>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div>
        <p>Amount</p>
        <input 
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      
      <div>
        <p>Note</p>
        <input 
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      
      {add && <Button handler={onSubmit} text="Save" />}
      {!add && (
      <>
        {!true && <Button key={1} text="Save" />}
        <Button key={2} text="Delete" />
      </>)}
    </div>)
}