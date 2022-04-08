import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { IoIosAdd } from "react-icons/io";
import styles from "../styles/AddButton.module.css";


export default function AddButton() {
  const { toggleTransaction } = useContext(GlobalContext);
  
  
  const test = () => {
    console.log("Hey")
    toggleTransaction()
  }
  
  return(
    <>
      <div className={`${styles.container} center`}>
        <IoIosAdd 
          style={{ verticalAlign: "middle" }} 
          onClick={test}
        />
      </div>
      
    </>)
}