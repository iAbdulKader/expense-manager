import LoadingSpiner from "./LoadingSpiner";
import styles from "../styles/Button.module.css";

export default function Button({text, loading = false, customClass, handler, ...rest}) {
  
  const clickHandler = () => {
    if(!loading) {
      handler()
    }
  }
  
  return (
    <div 
      className={`${styles.container} center ${customClass}`}
      onClick={clickHandler}
      {...rest}
    >
    {!loading? 
       (<div>{text}</div>)
      : (
       <div className={styles.spinerContainer}>
         <LoadingSpiner 
          className={styles.spiner}
          height="25px"
          width="25px"
        />
       </div>)
    }
    </div>
  )
}