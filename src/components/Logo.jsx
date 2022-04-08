import styles from "../styles/Logo.module.css";

export default function Logo({fontSize = "30px", color = "#080808"}) {
  return(
    <div 
      className={styles.container}
      style={{fontSize, color}}
    >
      Expense Manager
    </div>
    )
}