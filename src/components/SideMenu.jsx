import styles from "../styles/SideMenu.module.css";

export default function SideMenu({ show, handler }) {
  return(
    <>
      <div 
        className={styles.outerBox}
        style={{display: `${show?"block":"none"}`}}
        onClick={handler}
      ></div>
      <div 
        style={{ transform: `translateX(${show? "200px":"0px"})`}} 
        className={styles.container}
      >
        
        <div className={styles.wrapper}>
          Hello
        </div>
      </div>
    </>)
}